import { Allowance } from './mission_allowance_per_grade.model';
import { addMissionAllowancePerGradeDto, updateMissionAllowancePerGradeDto } from './dto/mission_allowance_per_grade-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MissionAllowancePerGradeService {
    private Allallowances : Allowance[] = [];

    async create(createDto: addMissionAllowancePerGradeDto): Promise<Allowance> {
        const {  id, Policy_Number, Policy_Date, Currency, Grade, Region, Amount} = createDto;
            
        const newAllowance: Allowance = {
            id,
            Policy_Number,
            Policy_Date,
            Currency,
            Grade,
            Region,
            Amount,
            created_at: new Date(),
            updated_at: new Date()
        };
        
        this.Allallowances.push(newAllowance);

        return newAllowance;
    }

    async findAll(): Promise<Allowance[] | null> {
        return this.Allallowances;
    }

    async findOne(id: number): Promise<Allowance  | null> {
        const allowance = this.Allallowances.find(allowance => allowance.id === id);
        if (!allowance) {
            throw new Error(`Allowance with id ${id} not found`);
        }
        return allowance;
    }

    async update(id: number, updateDto: updateMissionAllowancePerGradeDto): Promise<Allowance | null> {
        const allowance = await this.findOne(id);
        const { Policy_Number, Policy_Date, Currency, Grade, Region, Amount} = updateDto;
        
        if (!allowance) {
            throw new Error(`Allowance with id ${id} not found`);
        }

        allowance.Policy_Number = Policy_Number;
        allowance.Policy_Date = Policy_Date;
        allowance.Currency = Currency;
        allowance.Grade = Grade;
        allowance.Region = Region;
        allowance.Amount = Amount;
        allowance.updated_at = new Date();

        return allowance;
    }

    async remove(id: number): Promise<Allowance | null> {
        
        const index = this.Allallowances.findIndex(a => a.id === id);

        if (index === -1) {
            throw new Error(`Allowance with id ${id} does not exist.`);
        }
        const removedAllowance = this.Allallowances.splice(index, 1)[0];
        return removedAllowance;

    }
}
