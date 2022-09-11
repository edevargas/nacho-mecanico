export interface Identifiable {
  id: string;
}

export interface HistoricalTraceability {
  creationDate: Date;
  modificationDate?: Date;
  modifiedBy?: number;
}
export interface Message {
  message: string;
}

export interface Mechanic extends Identifiable, HistoricalTraceability {
  name: string;
  lastName: string;
  email: string;
}

export interface MechanicService extends Identifiable, HistoricalTraceability {
  name: string;
  description: string;
}

export interface ServiceByMechanic extends Identifiable, HistoricalTraceability {
  mechanicId: string;
  serviceId: string;
  availabilityDates?: Date[];
}
