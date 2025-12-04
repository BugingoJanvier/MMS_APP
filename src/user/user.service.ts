import { User } from './user.model'
import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'ldapts';
import ADconfig from '../database/config/config';
import { LoginDto } from './dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
    private client: Client;
    private adUrl: string;
    private adBaseDn: string;
    private adDomain: string;
    private adReadonlyUser: string;
    private adReadonlyPassword: string;

    constructor() {
        this.adUrl = ADconfig.url || '';
        this.adBaseDn = ADconfig.baseDn || '';
        this.adDomain = ADconfig.domain || '';
        this.adReadonlyUser = ADconfig.readonlyUser || '';
        this.adReadonlyPassword = ADconfig.readonlyPassword || '';
        
        this.client = new Client({ url: this.adUrl });
    }

    async validateUser(loginDto: LoginDto): Promise<string | null> {
        let userDN : string;
        
        if (!loginDto.username.includes('@')) {
            userDN = `${loginDto.username}@${this.adDomain}`; 
        } else {
            throw new NotFoundException('Username should not contain domain part');
        }

        try {
            await this.client.bind(userDN, loginDto.password);
            const { searchEntries } = await this.client.search(this.adBaseDn, {
                scope: 'sub',
                filter: `(sAMAccountName=${loginDto.username})`,
            });

            if (!searchEntries.length) return null;

            const entry = searchEntries[0];
            const extractCN = (dn: string): string => {
                const match = dn.match(/CN=([^,]+)/);
                return match ? match[1] : '';
            };

            const user: User = {
                username: String(entry.sAMAccountName),
                displayName: String(entry.displayName),
                email: entry.mail ? String(entry.mail) : undefined,
                department: entry.department ? String(entry.department) : undefined,
                title: entry.title ? String(entry.title) : undefined,
                manager: entry.manager ? extractCN(String(entry.manager)) : undefined,
                groups: Array.isArray(entry.memberOf) 
                    ? entry.memberOf
                        .map(g => extractCN(String(g)))
                        .filter(cn => cn === 'IT & Digital Innovation')
                    : [],
            };

            const payload = {user:user};
            const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '4min' });

            return token;

        } catch (err) {
            if (err instanceof Error) {
                if (err.message.includes('ECONNREFUSED') || err.message.includes('ETIMEDOUT')) {
                    console.error('AD connection error:', err.message);
                } else if (err.message.includes('Invalid credentials') || err.message.includes('80090308')) {
                    console.error('AD authentication failed - invalid credentials:', err.message);
                } else if (err.message.includes('user account locked') || err.message.includes('773')) {
                    console.error('AD account locked:', err.message);
                } else {
                    console.error('AD authentication failed:', err.message);
                }
            } else {
                console.error('AD authentication failed:', err);
            }
            return null;
        } finally {
            await this.client.unbind();
        }
    }
}
