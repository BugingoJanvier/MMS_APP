import { staffAccount} from './staff_account.model';
import { RecordBankAccountDto, UpdateBankAccountDto } from './dto/staff-account.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffAccountService {
    private staffAccounts: staffAccount[] = [];
    constructor() {}

    async create(createDto: RecordBankAccountDto): Promise<staffAccount> {
        
const { Staff_Id, Account_Number, Bank } = createDto;
        const newAccount: staffAccount = {
            Staff_Id,
            Account_Number,
            Bank,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.staffAccounts.push(newAccount);
        return newAccount;
    }

    async findAll(): Promise<staffAccount[]> {
        return this.staffAccounts;
    }

    async findOne(id: number): Promise<staffAccount> {
        const account = this.staffAccounts.find(account => account.Staff_Id === id);
        if (!account) {
            throw new Error(`Staff account with id ${id} not found`);
        }
        return account;
    }

    async update(id: number, updateDto: UpdateBankAccountDto): Promise<staffAccount> {
        const { Staff_Id, Account_Number, Bank } = updateDto;
        const account = await this.findOne(Staff_Id);
        account.Account_Number = Account_Number;
        account.Bank = Bank;
        account.updatedAt = new Date();
        return account;
    }

    async remove(id: number): Promise<void> {
        const index = this.staffAccounts.findIndex(account => account.Staff_Id === id);
        if (index === -1) {
            throw new Error(`Staff account with id ${id} not found`);
        }
        this.staffAccounts.splice(index, 1);
    }
}
