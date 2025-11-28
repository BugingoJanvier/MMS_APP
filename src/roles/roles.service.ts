import { createRolesDto, updateRolesDto } from './dto/roles.dto';
import { roles } from './roles.model'
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
    private roles:roles[] = [];

    constructor() {}

    async create(createDto: createRolesDto): Promise<roles> {
        const { roleId, roleName, roleDescription } = createDto;
        const newRole: roles = {
                    roleId,
                    roleName,
                    roleDescription,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };

        this.roles.push(newRole);
        return newRole;
        
    }

    async findAll(): Promise<roles[]> {
        return this.roles;
    }

    async findOne(id: number): Promise<roles> {
        const role = this.roles.find(role => role.roleId === id);
        if (!role) {
            throw new Error(`Role with id ${id} not found`);
        }
        return role;
    }

    async update(id: number, updateDto: updateRolesDto): Promise<roles> {
        const { 
            roleId, 
            roleName, 
            roleDescription 
            } = updateDto;
        const role = await this.findOne(roleId);
        role.roleName = roleName;
        role.roleDescription = roleDescription;
        role.updatedAt = new Date();
        return role;
    }

    async remove(id: number): Promise<void> {
        const index = this.roles.findIndex(role => role.roleId === id);
        if (index === -1) {
            throw new Error(`Role with id ${id} not found`);
        }
        this.roles.splice(index, 1);
    }
}
