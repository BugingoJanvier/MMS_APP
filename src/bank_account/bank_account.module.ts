import { Module } from '@nestjs/common';
import { BankAccountController } from './bank_account.controller';
import { BankAccountService } from './bank_account.service';


@Module({
  controllers: [BankAccountController],
  providers: [BankAccountService]
})
export class BankAccountModule {}
