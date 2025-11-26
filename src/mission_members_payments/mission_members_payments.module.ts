import { Module } from '@nestjs/common';
import { MissionMembersPaymentsController } from './mission_members_payments.controller';
import { MissionMembersPaymentsService } from './mission_members_payments.service';


@Module({
  controllers: [MissionMembersPaymentsController],
  providers: [MissionMembersPaymentsService]
})
export class MissionMembersPaymentsModule {}
