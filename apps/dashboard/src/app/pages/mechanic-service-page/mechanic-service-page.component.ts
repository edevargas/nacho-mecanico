import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MechanicService } from '@dev/api-interfaces';
import { MechanicServicesService } from '@dev/core-data/services';
import { MaterialModule } from '@dev/material';


@Component({
  selector: 'dev-mechanic-service-page',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './mechanic-service-page.component.html',
  styleUrls: ['./mechanic-service-page.component.scss'],
})
export class MechanicServicePageComponent implements OnInit {
  constructor(private mechanicServicesService: MechanicServicesService) {}
  mechanicServices: MechanicService[] = [];
  readonly = false;

  selectedService: MechanicService = {};

  ngOnInit(): void {
    this.mechanicServicesService.all()
      .subscribe(services => this.mechanicServices = services)
  }

  selectService(service: MechanicService) {
    this.selectedService = service;
    alert(`El Servicio: ${service.name} fue seleccionado`)
  }

  deleteService(service: MechanicService) {
    alert(`El Servicio: ${service.name} fue eliminado`)
  }

  save(service?: MechanicService) {
    if(!service) return;
    alert(`El Servicio: ${service.name} fue guardado`)
  }

  cancel() {
    alert('Cancelado')
  }
}
