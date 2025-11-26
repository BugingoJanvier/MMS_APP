export interface StaffTable {
Staff_Id: number;
F_name: string;
L_name: string;
email: string;
JGs: JGs;
created_at: Date;
updated_at: Date;
}

export enum JGs {
    JG1 = 'JG1',
    JG2 = 'JG2',
    JG3 = 'JG3',
    JG4 = 'JG4',
    JG5 = 'JG5',
    JG6 = 'JG6',
    JG7 = 'JG7',
}