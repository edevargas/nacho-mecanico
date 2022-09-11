import { Module } from '@nestjs/common';
import { MechanicServicesModule } from '../mechanic-services/mechanic-services.module';
import { MechanicsModule } from '../mechanics/mechanics.module';
import { ServicesByMechanicModule } from '../services-by-mechanic/services-by-mechanic.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MechanicsModule, MechanicServicesModule, ServicesByMechanicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
