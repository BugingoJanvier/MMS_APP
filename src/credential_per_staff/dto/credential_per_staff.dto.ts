export class AssignCredentialDto {
    id: number;
    Staff_Id: number;
    Credential: string;
    }

export class UpdateCredentialDto {
        id: number;
        Staff_Id: number;
        Credential: string;
        Activation_Status: boolean;
        }
