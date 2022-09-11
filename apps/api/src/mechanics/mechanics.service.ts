import { Mechanic } from '@dev/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MechanicsService {
  mockMechanic: Mechanic[] = [
    { id: '1', name: 'Juan', lastName: 'Lara', email: "mechanic01@nachomecanico.com", creationDate: new Date(2022, 1, 1) },
    { id: '2', name: 'Manuel', lastName: 'Hernández', email: "mechanic02@nachomecanico.com", creationDate: new Date(2022, 1, 1) },
    { id: '3', name: 'Camila', lastName: 'Durán', email: "mechanic03@nachomecanico.com", creationDate: new Date(2022, 1, 1) },
  ];

  findAll() {
    return this.mockMechanic;
  }

  findOne(id: string) {
    return this.mockMechanic.find((mechanic) => mechanic.id === id);
  }

  create(mechanic: Mechanic) {
    this.mockMechanic = [...this.mockMechanic, Object.assign({}, mechanic, { id: uuidv4() })];
    return this.mockMechanic;
  }

  update(id: string, mechanic: Mechanic) {
    this.mockMechanic = this.mockMechanic.map((w) => (w.id === id ? mechanic : w));
    return this.mockMechanic;
  }

  remove(id: string) {
    this.mockMechanic = this.mockMechanic.filter((mechanic) => mechanic.id !== id);
    return this.mockMechanic;
  }
}
