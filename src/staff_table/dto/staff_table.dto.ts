import { IsEmail, IsNotEmpty, IsNumber, IsString, IsEnum } from "class-validator";
import { JGs } from "../staff_table.model";

export class registerStaffDto {
        @IsNumber()
        @IsNotEmpty()
        Staff_Id: number;
        @IsString()
        @IsNotEmpty()
        F_name: string;
        @IsString()
        @IsNotEmpty()
        L_name: string;
        @IsString()
        @IsNotEmpty()
        @IsEmail()
        email: string;
        @IsString()
        @IsNotEmpty()
        @IsEnum(JGs)
        JGs: JGs;
        }

export class updateStaffDto {
        Staff_Id: number;
        F_name: string;
        L_name: string;
        email: string;
        JGs: JGs;
        }
