import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesByMechanicService } from './services-by-mechanic.service';
import { CreateServicesByMechanicDto } from './dto/create-services-by-mechanic.dto';
import { UpdateServicesByMechanicDto } from './dto/update-services-by-mechanic.dto';

@Controller('services-by-mechanic')
export class ServicesByMechanicController {
  constructor(private readonly servicesByMechanicService: ServicesByMechanicService) {}

  @Post()
  create(@Body() createServicesByMechanicDto: CreateServicesByMechanicDto) {
    return this.servicesByMechanicService.create(createServicesByMechanicDto);
  }

  @Get()
  findAll() {
    return this.servicesByMechanicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesByMechanicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicesByMechanicDto: UpdateServicesByMechanicDto) {
    return this.servicesByMechanicService.update(+id, updateServicesByMechanicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesByMechanicService.remove(+id);
  }
}
