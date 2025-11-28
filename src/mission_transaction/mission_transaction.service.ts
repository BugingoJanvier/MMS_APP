import { missionTransaction } from './mission_transaction.model';


import { 
    CreateMissionDto,
    approveMissionDto,
    addTransportDto,
    addPaymentDto,
    UpdateMissionDto
      } from './dto/mission_transaction.dto';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MissionTransactionService {

    private Transactions: Partial<missionTransaction>[] = [];
    constructor() {};

    async create(createDto: CreateMissionDto): Promise<Partial<missionTransaction>> {
        
        const newID = new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14);
        const {   
            StaffId,
            Amount,
            TransactionDate,
            ApplicationDate,
            AppliedBy,
            Member,
            Client,
            District,
            MissionPurpose,
            DateDeparture,
            DateReturn } = createDto;
        
            const newTransaction: Partial<missionTransaction> = {
            MissionId: newID,
            StaffId,
            Amount,
            TransactionDate,
            ApplicationDate,
            AppliedBy,
            Member,
            Client,
            District,
            MissionPurpose,
            DateDeparture,
            DateReturn,
            SubmittedById: StaffId,
            createdAt: new Date(),
            updatedAt: new Date(),
            };

        this.Transactions.push(newTransaction);
        return newTransaction;

    }

    async findAll(): Promise<missionTransaction[]> {
        return this.Transactions as missionTransaction[];
    }

    async findOne(id: number): Promise<missionTransaction> {
        const transaction = this.Transactions.find(tx => tx.StaffId === id);
        if (!transaction) {
            throw new Error(`Transaction with StaffId ${id} not found`);
        }
        return transaction as missionTransaction;
    }

    async update(updateDto: UpdateMissionDto): Promise<missionTransaction> {
        const { MissionId,
            StaffId,
            Amount,
            TransactionDate,
            ApplicationDate,
            AppliedBy,Member,
            Client,
            District,
            MissionPurpose,
            DateDeparture,
            DateReturn 
        } = updateDto;
     
        const transaction = await this.findOne(updateDto.MissionId);
        if (!transaction) {
            throw new Error(`Transaction with Mission Id ${updateDto.MissionId} not found`);
        }
        transaction.StaffId = StaffId;
        transaction.Amount = Amount;
        transaction.TransactionDate = TransactionDate;
        transaction.ApplicationDate = ApplicationDate;
        transaction.AppliedBy = AppliedBy;
        transaction.Member = Member;
        transaction.Client = Client;
        transaction.District = District;
        transaction.MissionPurpose = MissionPurpose;
        transaction.DateDeparture = DateDeparture;
        transaction.DateReturn = DateReturn;
        transaction.updatedAt = new Date();
        return transaction as missionTransaction;
    }

    async remove(id: number): Promise<void> {
        // TODO: Implement remove logic
        throw new Error('Method not implemented');
    }
}
