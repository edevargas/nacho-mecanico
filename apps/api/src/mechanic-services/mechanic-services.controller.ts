import { MechanicService } from '@dev/api-interfaces';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MechanicServicesService } from './mechanic-services.service';

@Controller('mechanic-services')
export class MechanicServicesController {
  constructor(private readonly mechanicServicesService: MechanicServicesService) {}

  @Post()
  create(@Body() mechanicService: MechanicService) {
    return this.mechanicServicesService.create(mechanicService);
  }

  @Get()
  findAll() {
    return this.mechanicServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechanicServicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() mechanicService: MechanicService) {
    return this.mechanicServicesService.update(id, mechanicService);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanicServicesService.remove(id);
  }
}
