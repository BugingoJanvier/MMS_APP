import { Module } from '@nestjs/common';
import { MissionTransactionController } from './mission_transaction.controller';
import { MissionTransactionService } from './mission_transaction.service';


@Module({
  controllers: [MissionTransactionController],
  providers: [MissionTransactionService]
})
export class MissionTransactionModule {}
