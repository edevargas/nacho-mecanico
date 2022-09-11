import { Module } from '@nestjs/common';
import { ServicesByMechanicService } from './services-by-mechanic.service';
import { ServicesByMechanicController } from './services-by-mechanic.controller';

@Module({
  controllers: [ServicesByMechanicController],
  providers: [ServicesByMechanicService]
})
export class ServicesByMechanicModule {}
