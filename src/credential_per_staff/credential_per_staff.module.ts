import { Module } from '@nestjs/common';
import { CredentialPerStaffController } from './credential_per_staff.controller';
import { assignedCredentialService } from './credential_per_staff.service';

@Module({
  controllers: [CredentialPerStaffController],
  providers: [assignedCredentialService]
})
export class CredentialPerStaffModule {}
