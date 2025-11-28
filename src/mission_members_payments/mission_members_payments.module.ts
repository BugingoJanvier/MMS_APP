import { Module } from '@nestjs/common';
import { MissionMembersPaymentsController } from './mission_members_payments.controller';
import { memberService } from './mission_members_payments.service';


@Module({
  controllers: [MissionMembersPaymentsController],
  providers: [memberService]
})
export class MissionMembersPaymentsModule {}
