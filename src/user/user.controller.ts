import { Controller, Post, Body, NotFoundException, Get } from '@nestjs/common';
import type { LoginDto } from './dto';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';

@Controller('api/user')
export class UserController {
    constructor(private readonly userauth: UserService) {}

    @Post('login')
    /*@Body() loginDto: LoginDto): Promise<{ token: string; expiresAt: string; generatedAt: string  */
    async login(@Body() loginDto: LoginDto): Promise<{ token: string;}> {

        const token = await this.userauth.validateUser(loginDto);
        if(!token){
            throw new NotFoundException('Username or Password is incorrect');
            // return { token: 'Username or Password Missing' };
        }
    
        const userDetails = jwt.decode(token);
        //.log(JSON.stringify({ userDetails }, null, 2));
        console.log('User authenticated successfully', userDetails);

        return userDetails ? { token: token } : { token: 'Authentication Failed' };
       };

       @Get('all')
       testEndpoint(): string {
           return 'User controller is working!';
       }
    }


