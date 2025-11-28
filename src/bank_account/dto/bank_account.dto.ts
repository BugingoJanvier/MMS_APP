import e from "express";

export class AddBankAccountDto {
    staffId: string;
    accNum: string;
    bankName: string;
}

export class UpdateBankAccountDto {
    staffId: string;
    accNum: string;
    bankName: string;
}  
