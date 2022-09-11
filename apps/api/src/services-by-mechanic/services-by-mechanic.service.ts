import { Injectable } from '@nestjs/common';
import { CreateServicesByMechanicDto } from './dto/create-services-by-mechanic.dto';
import { UpdateServicesByMechanicDto } from './dto/update-services-by-mechanic.dto';

@Injectable()
export class ServicesByMechanicService {
  create(createServicesByMechanicDto: CreateServicesByMechanicDto) {
    return 'This action adds a new servicesByMechanic';
  }

  findAll() {
    return `This action returns all servicesByMechanic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicesByMechanic`;
  }

  update(id: number, updateServicesByMechanicDto: UpdateServicesByMechanicDto) {
    return `This action updates a #${id} servicesByMechanic`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicesByMechanic`;
  }
}
