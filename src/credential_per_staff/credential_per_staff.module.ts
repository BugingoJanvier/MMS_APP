import { Module } from '@nestjs/common';
import { CredentialPerStaffController } from './credential_per_staff.controller';
import { CredentialPerStaffService } from './credential_per_staff.service';

@Module({
  controllers: [CredentialPerStaffController],
  providers: [CredentialPerStaffService]
})
export class CredentialPerStaffModule {}
