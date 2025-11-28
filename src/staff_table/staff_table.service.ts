import{ registerStaffDto,updateStaffDto } from './dto/staff_table.dto';
import { Staff } from './staff_table.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffTableService {

    private staffs: Staff[] = [];
    constructor() {}

    async create(createDto: registerStaffDto): Promise<Staff> {
    
        const { Staff_Id, F_name, L_name, email, JGs } = createDto;
        const newStaff: Staff = {
            Staff_Id,
            F_name,
            L_name,
            email,
            JGs,
            created_at: new Date(),
            updated_at: new Date(),
        };
        this.staffs.push(newStaff);
        return newStaff;
    }

    async findAll(): Promise<Staff[]> {
        return this.staffs;
    }
    async findOne(id: number): Promise<Staff> {
        const staff = this.staffs.find(staff => staff.Staff_Id === id);
        if (!staff) {
            throw new Error(`Staff with id ${id} not found`);
        }
        return staff;
    }

    async update(id: number, updateDto: updateStaffDto): Promise<Staff> {
        const { Staff_Id, F_name, L_name, email, JGs } = updateDto;
        const staff = await this.findOne(Staff_Id);
        staff.F_name = F_name;
        staff.L_name = L_name;
        staff.email = email;
        staff.JGs = JGs;
        staff.updated_at = new Date();
        return staff;
    }
    async remove(id: number): Promise<void> {
        const index = this.staffs.findIndex(staff => staff.Staff_Id === id);
        if (index === -1) {
            throw new Error(`Staff with id ${id} not found`);
        }
        this.staffs.splice(index, 1);
    }
}