import { Injectable } from '@nestjs/common';
import { CreateMechanicServiceDto } from './dto/create-mechanic-service.dto';
import { UpdateMechanicServiceDto } from './dto/update-mechanic-service.dto';

@Injectable()
export class MechanicServicesService {

  create(createMechanicServiceDto: CreateMechanicServiceDto) {
    return 'This action adds a new mechanicService';
  }

  findAll() {
    return `This action returns all mechanicServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mechanicService`;
  }

  update(id: number, updateMechanicServiceDto: UpdateMechanicServiceDto) {
    return `This action updates a #${id} mechanicService`;
  }

  remove(id: number) {
    return `This action removes a #${id} mechanicService`;
  }
}
