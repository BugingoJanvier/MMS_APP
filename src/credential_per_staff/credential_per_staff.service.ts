import { credential_per_staff } from './credential_per_staff.model';
import { AssignCredentialDto } from './dto/credential_per_staff.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class assignedCredentialService {
    private assignedCredentials : credential_per_staff[] = [];

    constructor() {}

    async create(createDto: AssignCredentialDto): Promise<credential_per_staff> {
        const { id, Staff_Id, Credential } = createDto;

        const newAssignment: credential_per_staff = {
            id, 
            Staff_Id, 
            Credential,
            created_at: new Date(),
            updated_at: new Date(),
            Activation_Status: true
        };
        this.assignedCredentials.push(newAssignment);
        return newAssignment;

    }

    async findAll(): Promise<credential_per_staff[]> {
        return this.assignedCredentials;
    }

    async findOne(id: number): Promise<credential_per_staff | null> {
        return this.assignedCredentials.find(credential => credential.id === id) || null;
    }

    async update(UpdateCredentialDto: any): Promise<credential_per_staff | null> {
        const { id, Staff_Id, Credential, Activation_Status } = UpdateCredentialDto;
        const credential = await this.findOne(id);
        if(!credential){
            throw new Error(`Credential assignment with id ${id} does not exist.`);
        }

        credential.Staff_Id = Staff_Id;
        credential.Credential = Credential;
        credential.Activation_Status = Activation_Status;
        credential.updated_at = new Date();
        return credential;

    }

    async remove(id: number): Promise<credential_per_staff | null> {
        const credential = await this.findOne(id);
        if(!credential){
            throw new Error(`Credential assignment with id ${id} does not exist.`);
        } 
        this.assignedCredentials = this.assignedCredentials.filter(c => c.id !== id);
        return credential;
    }
    
}
