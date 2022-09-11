import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MechanicServicesService } from './mechanic-services.service';
import { CreateMechanicServiceDto } from './dto/create-mechanic-service.dto';
import { UpdateMechanicServiceDto } from './dto/update-mechanic-service.dto';

@Controller('mechanic-services')
export class MechanicServicesController {
  constructor(private readonly mechanicServicesService: MechanicServicesService) {}

  @Post()
  create(@Body() createMechanicServiceDto: CreateMechanicServiceDto) {
    return this.mechanicServicesService.create(createMechanicServiceDto);
  }

  @Get()
  findAll() {
    return this.mechanicServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechanicServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMechanicServiceDto: UpdateMechanicServiceDto) {
    return this.mechanicServicesService.update(+id, updateMechanicServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanicServicesService.remove(+id);
  }
}
