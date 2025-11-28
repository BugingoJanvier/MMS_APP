import { Injectable } from '@nestjs/common';
import { bankAccount } from './bank_account.model';
import { AddBankAccountDto,UpdateBankAccountDto } from './dto/bank_account.dto';

@Injectable()
export class BankAccountService {
    
    private bankAccounts: bankAccount[] = [];
    
    constructor() {};

    async create(dto: AddBankAccountDto): Promise<bankAccount> {
        const {staffId, accNum, bankName} = dto;
        const newBankAccount: bankAccount = {
            staffId,
            accNum,
            bankName,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.bankAccounts.push(newBankAccount); 
        return newBankAccount;
    }

    async findOne(staffId: string): Promise<bankAccount | null> {
        return this.bankAccounts.find(acc => acc.staffId === staffId) || null;
    }


    async update(dto: UpdateBankAccountDto): Promise<bankAccount> {
        const {staffId, accNum, bankName} = dto;
        const account = await this.findOne(staffId); 
        
        if(!account){
            throw new Error(`${staffId} does not have a bank account to update.`);
        }
        account.accNum = accNum;
        account.bankName = bankName;
        account.updatedAt = new Date();
        
        return account;
    }

    async remove(staffId: string): Promise<bankAccount> {
        const account = await this.findOne(staffId);
        if(!account){
            throw new Error(`Bank account for staffId ${staffId} not found.`);
        }

        this.bankAccounts = this.bankAccounts.filter(acc => acc.staffId !== staffId);
        return account;
    }

    async findAll(): Promise<bankAccount[]> {
        return this.bankAccounts;
    }
}