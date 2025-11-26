import { Module } from '@nestjs/common';
import { CarTableController } from './car_table.controller';
import { CarTableService } from './car_table.service';

@Module({
  controllers: [CarTableController],
  providers: [CarTableService]
})
export class CarTableModule {}
