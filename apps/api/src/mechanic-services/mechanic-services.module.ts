import { Module } from '@nestjs/common';
import { MechanicServicesService } from './mechanic-services.service';
import { MechanicServicesController } from './mechanic-services.controller';

@Module({
  controllers: [MechanicServicesController],
  providers: [MechanicServicesService]
})
export class MechanicServicesModule {}
