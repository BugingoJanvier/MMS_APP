import { Module } from '@nestjs/common';
import { MissionAllowancePerGradeController } from './mission_allowance_per_grade.controller';
import { MissionAllowancePerGradeService } from './mission_allowance_per_grade.service';

@Module({
  controllers: [MissionAllowancePerGradeController],
  providers: [MissionAllowancePerGradeService]
})
export class MissionAllowancePerGradeModule {}
