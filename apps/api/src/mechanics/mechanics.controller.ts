import { Mechanic } from '@dev/api-interfaces';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MechanicsService } from './mechanics.service';

@Controller('mechanics')
export class MechanicsController {
  constructor(private readonly mechanicsService: MechanicsService) {}

  @Post()
  create(@Body() mechanic: Mechanic) {
    return this.mechanicsService.create(mechanic);
  }

  @Get()
  findAll() {
    return this.mechanicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechanicsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() mechanic: Mechanic) {
    return this.mechanicsService.update(id, mechanic);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanicsService.remove(id);
  }
}
