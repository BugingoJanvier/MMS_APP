import { missionReasons } from './mission_reasons.model';
import { CreateMissionReasonsDto } from './dto/create-mission_reasons.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MissionReasonsService {
    private missionReasons: missionReasons[] = [];
    constructor() {};
    
    async create(createDto: CreateMissionReasonsDto): Promise<missionReasons> {
        const { Mission_ID, Reason_Description } = createDto;
        const newMissionReason: missionReasons = {
            Mission_ID,
            Reason_Description,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.missionReasons.push(newMissionReason);
        return newMissionReason;
    }

    async findAll(): Promise<missionReasons[]> {
        return this.missionReasons;
    }

    async findOne(id: number): Promise<missionReasons> {
        const missionReason = this.missionReasons.find(mr => mr.Mission_ID === id);
        if (!missionReason) {
            throw new Error(`MissionReason with Mission_ID ${id} not found`);
        }
        return missionReason;
    }

    async update(id: number, updateDto: CreateMissionReasonsDto): Promise<missionReasons> {
        const missionReason = this.missionReasons.find(mr => mr.Mission_ID === id);
        if (!missionReason) {
            throw new Error(`MissionReason with Mission_ID ${id} not found`);
        }
        const { Mission_ID, Reason_Description } = updateDto;
        missionReason.Mission_ID = Mission_ID;
        missionReason.Reason_Description = Reason_Description;
        missionReason.updatedAt = new Date();
        return missionReason;
    }

    async remove(id: number): Promise<missionReasons> {
        const Reson = await this.findOne(id);
        const index = this.missionReasons.findIndex(mr => mr.Mission_ID === id);
        if (index === -1) {
            throw new Error(`MissionReason with Mission_ID ${id} not found`);
        }
        this.missionReasons.splice(index, 1);
        return Reson
    }
}
