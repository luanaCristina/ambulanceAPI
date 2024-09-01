import { Module } from '@nestjs/common';
import { AmbulanceController } from './ambulance.controller';
import { AmbulanceService } from './ambulance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ambulance } from './ambulance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ambulance]),
  ],
  controllers: [AmbulanceController],
  providers: [AmbulanceService]
})
export class AmbulanceModule {}
