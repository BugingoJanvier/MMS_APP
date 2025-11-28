export class CreateMissionDto {
    StaffId: number;
    Amount: number;
    TransactionDate: Date;
    ApplicationDate: Date;
    AppliedBy: string;
    Member: string;
    Client: string;
    District: string;
    MissionPurpose: string;
    DateDeparture: Date;
    DateReturn: Date;
    SubmittedById: number;
    
}

export class UpdateMissionDto {
    
    MissionId: number;
    StaffId: number;
    Amount: number;
    TransactionDate: Date;
    ApplicationDate: Date;
    AppliedBy: string;
    Member: string;
    Client: string;
    District: string;
    MissionPurpose: string;
    DateDeparture: Date;
    DateReturn: Date;
    SubmittedById: number;
   
}

export class approveMissionDto {

}

export class addTransportDto {

}

export class addPaymentDto {

}
