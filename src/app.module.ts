import { Module } from '@nestjs/common';
import { CarTableModule } from './car_table/car_table.module';
import { CredentialsLibraryModule } from './credentials_library/credentials_library.module';
import { CredentialPerStaffModule } from './credential_per_staff/credential_per_staff.module';
import { MissionAllowancePerGradeModule } from './mission_allowance_per_grade/mission_allowance_per_grade.module';
import { MissionMembersPaymentsModule } from './mission_members_payments/mission_members_payments.module';
import { MissionReasonsModule } from './mission_reasons/mission_reasons.module';
import { MissionTransactionModule } from './mission_transaction/mission_transaction.module';
import { RolesModule } from './roles/roles.module';
import { StaffAccountModule } from './staff_account/staff_account.module';
import { UserModule } from './user/user.module';


@Module({
  imports: 
  [ CarTableModule, 
    CredentialsLibraryModule, 
    CredentialPerStaffModule, 
    MissionAllowancePerGradeModule, 
    MissionMembersPaymentsModule, 
    MissionReasonsModule, 
    MissionTransactionModule, 
    RolesModule, 
    StaffAccountModule, UserModule,
    
  ],
  
})
export class AppModule {}
