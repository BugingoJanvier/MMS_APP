import { credentials_library } from './credentials_library.model';
import { createCredentialsLibraryDto, UpdateCredentialsLibraryDto } from './dto/credentials_library.dto';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CredentialsLibraryService {

    private credentialsLibraries: credentials_library[] = [];
    constructor() {};

    async create(createDto: createCredentialsLibraryDto): Promise<credentials_library> {
        const { Cred_Id, Cred_Name, Description } = createDto;

        const newCredential: credentials_library = {
            Cred_Id,
            Cred_Name,
            Description,
            created_at: new Date(),
            updated_at: new Date()
        };
        this.credentialsLibraries.push(newCredential);
        return newCredential;
    }

    async findAll(): Promise<credentials_library[]> {
        return this.credentialsLibraries;
    }

    async findOne(id: number): Promise<credentials_library | null> {
        return this.credentialsLibraries.find(credential => credential.Cred_Id === id) || null;
    }

    async update(id: number, updateDto: UpdateCredentialsLibraryDto): Promise<credentials_library> {
        const { Cred_Id, Cred_Name, Description } = updateDto;
        const credential = await this.findOne(id);
        if(!credential){
            throw new Error(`Credential with id ${id} does not exist.`);
        }
        credential.Cred_Id = Cred_Id;
        credential.Cred_Name = Cred_Name;
        credential.Description = Description;
        credential.updated_at = new Date();
        return credential;
    }

    async remove(id: number): Promise<credentials_library | null> {
        const index = this.credentialsLibraries.findIndex(c => c.Cred_Id === id);
        if (index === -1) {
            throw new Error(`Credential with id ${id} does not exist.`);
        }
        const removedCredential = this.credentialsLibraries.splice(index, 1)[0];
        return removedCredential;
    }
}
