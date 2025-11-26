import { Module } from '@nestjs/common';
import { MissionReasonsController } from './mission_reasons.controller';
import { MissionReasonsService } from './mission_reasons.service';


@Module({
  controllers: [MissionReasonsController],
  providers: [MissionReasonsService]
})
export class MissionReasonsModule {}
