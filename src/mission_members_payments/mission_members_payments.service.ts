import { member } from './mission_members_payments.model';
import { v4 as uuidv4 } from 'uuid';
import { creatememberDto, updatememberDto } from './dto/mission_members_payments.dto'
import { Injectable } from '@nestjs/common';

@Injectable()
export class memberService {

    private missionMembersPayments: member[] = [];

    async create(createDto: creatememberDto): Promise<member> {
        const { Mission_ID, Staff_Id, Done_On, Beneficially_Bank, Account, Amount, Done_By, autholized_by, Mission_Periode_Days, Percentage_of_Payment } = createDto;
        const newMember: member = {
            Mission_ID,
            Staff_Id,
            Done_On,
            Beneficially_Bank,
            Account,
            Amount,
            Done_By,
            autholized_by,
            Mission_Periode_Days,
            Percentage_of_Payment,
            created_at: new Date(),
            updated_at: new Date()
        };
        this.missionMembersPayments.push(newMember);
        return newMember;
    }

    async findAll(): Promise<member[]> {
        return this.missionMembersPayments;
    }

    async findOne(id: number): Promise<member> {
        const member = this.missionMembersPayments.find(member => member.Staff_Id === id);
        if (!member) {
            throw new Error(`Member with Staff_Id ${id} not found`);
        }
        return member;
    }

    async update(id: number, updateDto: updatememberDto): Promise<member> {
        const member = this.missionMembersPayments.find(member => member.Staff_Id === id);
        if (!member) {
            throw new Error(`Member with Staff_Id ${id} not found`);
        }
        
        const { Mission_ID, Staff_Id, Done_On, Beneficially_Bank, Account, Amount, Done_By, autholized_by, Mission_Periode_Days, Percentage_of_Payment } = updateDto;
        member.Mission_ID = Mission_ID;
        member.Staff_Id = Staff_Id;
        member.Done_On = Done_On;       
        member.Beneficially_Bank = Beneficially_Bank;
        member.Account = Account;
        member.Amount = Amount;
        member.Done_By = Done_By;
        member.autholized_by = autholized_by;
        member.Mission_Periode_Days = Mission_Periode_Days;
        member.Percentage_of_Payment = Percentage_of_Payment;
        member.updated_at = new Date();
        return member;
    }

    async remove(id: number): Promise<void> {
        const index = this.missionMembersPayments.findIndex(member => member.Staff_Id === id);
        if (index === -1) {
            throw new Error(`Member with Staff_Id ${id} not found`);
        }
        this.missionMembersPayments.splice(index, 1);

        
    }
}
