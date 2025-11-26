import { Module } from '@nestjs/common';
import { StaffAccountController } from './staff_account.controller';
import { StaffAccountService } from './staff_account.service';
@Module({
  controllers: [StaffAccountController],
  providers: [StaffAccountService]
})
export class StaffAccountModule {}
