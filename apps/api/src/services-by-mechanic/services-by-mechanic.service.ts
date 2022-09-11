import { ServiceByMechanic } from '@dev/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ServicesByMechanicService {
  mockServicesByMechanic: ServiceByMechanic[] = [
    { id: '1', mechanicId: '1', serviceId: '1', creationDate: new Date(2022, 1, 1)  },
    { id: '2', mechanicId: '1', serviceId: '2', creationDate: new Date(2022, 1, 1)  },
    { id: '3', mechanicId: '2', serviceId: '1', creationDate: new Date(2022, 1, 1)  },
    { id: '4', mechanicId: '3', serviceId: '1', creationDate: new Date(2022, 1, 1)  },
    { id: '5', mechanicId: '3', serviceId: '2', creationDate: new Date(2022, 1, 1)  },
    { id: '6', mechanicId: '3', serviceId: '3', creationDate: new Date(2022, 1, 1)  },
  ];

  findAll() {
    return this.mockServicesByMechanic;
  }

  findOne(id: string) {
    return this.mockServicesByMechanic.find((serviceByMechanic) => serviceByMechanic.id === id);
  }

  create(serviceByMechanic: ServiceByMechanic) {
    this.mockServicesByMechanic = [...this.mockServicesByMechanic, Object.assign({}, serviceByMechanic, { id: uuidv4() })];
    return this.mockServicesByMechanic;
  }

  update(id: string, serviceByMechanic: ServiceByMechanic) {
    this.mockServicesByMechanic = this.mockServicesByMechanic.map((w) => (w.id === id ? serviceByMechanic : w));
    return this.mockServicesByMechanic;
  }

  remove(id: string) {
    this.mockServicesByMechanic = this.mockServicesByMechanic.filter((serviceByMechanic) => serviceByMechanic.id !== id);
    return this.mockServicesByMechanic;
  }
}
