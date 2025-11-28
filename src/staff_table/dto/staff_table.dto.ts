import { JGs } from "../staff_table.model";

export class registerStaffDto {
        Staff_Id: number;
        F_name: string;
        L_name: string;
        email: string;
        JGs: JGs;
        }

export class updateStaffDto {
        Staff_Id: number;
        F_name: string;
        L_name: string;
        email: string;
        JGs: JGs;
        }
