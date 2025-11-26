import { Module } from '@nestjs/common';
import { StaffTableController } from './staff_table.controller';
import { StaffTableService } from './staff_table.service';


@Module({
  controllers: [StaffTableController],
  providers: [StaffTableService]
})
export class StaffTableModule {}
