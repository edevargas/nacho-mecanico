import { ServiceByMechanic } from '@dev/api-interfaces';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesByMechanicService } from './services-by-mechanic.service';

@Controller('services-by-mechanic')
export class ServicesByMechanicController {
  constructor(private readonly servicesByMechanicService: ServicesByMechanicService) {}

  @Post()
  create(@Body() serviceByMechanic: ServiceByMechanic) {
    return this.servicesByMechanicService.create(serviceByMechanic);
  }

  @Get()
  findAll() {
    return this.servicesByMechanicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesByMechanicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() serviceByMechanic: ServiceByMechanic) {
    return this.servicesByMechanicService.update(id, serviceByMechanic);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesByMechanicService.remove(id);
  }
}
