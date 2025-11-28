export interface missionTransaction {
    MissionId: string;
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
    PercentageOfPymnt: number;
    PercentageReasons: string;
    TransportAssistant: string;
    Vehicle: string;
    PymtNumber: string;
    CarAppointedBy: Date;
    CarAppointmentTime: Date;
    CarAppointmentStatus: missionApprovalStatus;
    DepartureTime: Date;
    ReturnTime: Date;
    FirstApprovalId: number;
    FirstApprovalTime: Date;
    FirstApprovalStatus: missionApprovalStatus;
    SecondApprovalId: number;
    SecondApprovalTime: Date;
    SecondApprovalStatus: missionApprovalStatus;
    PymtInitiatorId: number;
    PymtInitiationTime: Date;
    PymtInitiationStatus: missionApprovalStatus;
    FinanceApprovalID: number;
    FinanceApprovalTime: Date;
    FinanceApprovalStatus: missionApprovalStatus;
    PymtDoneBy: number;
    PymtDoneTime: Date;
    PymtDoneStatus: missionApprovalStatus;
    StartCoumpteur: number;
    ReturnCoumpteur: number;
    FinalDecision: missionApprovalStatus;
    createdAt: Date;
    updatedAt: Date;
}

enum missionApprovalStatus {
    EMPTY = '',
    PENDING = 'PENDING',
    PROGRESS = 'PROGRESS',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}