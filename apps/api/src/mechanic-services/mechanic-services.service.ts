import { MechanicService } from '@dev/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class MechanicServicesService {

  mockMechanicServices: MechanicService[] = [
    { id: '1', name: 'Latoneria', description: 'This is a Mechanic Service', creationDate: new Date(2022, 1, 1) },
    { id: '2', name: 'Pintura', description: 'This is a Mechanic Service', creationDate: new Date(2022, 1, 1) },
    { id: '3', name: 'Revisión Tecnicomecánica', description: 'This is a Mechanic Service', creationDate: new Date(2022, 1, 1) },
  ];

  findAll() {
    return this.mockMechanicServices;
  }

  findOne(id: string) {
    return this.mockMechanicServices.find((mechanicService) => mechanicService.id === id);
  }

  create(mechanicService: MechanicService) {
    this.mockMechanicServices = [...this.mockMechanicServices, Object.assign({}, mechanicService, { id: uuidv4() })];
    return this.mockMechanicServices;
  }

  update(id: string, mechanicService: MechanicService) {
    this.mockMechanicServices = this.mockMechanicServices.map((w) => (w.id === id ? mechanicService : w));
    return this.mockMechanicServices;
  }

  remove(id: string) {
    this.mockMechanicServices = this.mockMechanicServices.filter((mechanicService) => mechanicService.id !== id);
    return this.mockMechanicServices;
  }
}
