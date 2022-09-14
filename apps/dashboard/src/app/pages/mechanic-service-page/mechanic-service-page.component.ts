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
  originalName: string | undefined;

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.mechanicServicesService.all()
      .subscribe(services => this.mechanicServices = services)
  }

  selectService(service: MechanicService) {
    this.originalName = service.name;
    this.selectedService = {...service};
  }

  deleteService(service: MechanicService) {
    this.mechanicServicesService.delete(service)
    .subscribe(() => {
      alert(`Servicio ${service.name} eliminado`)
      this.getAllServices();
    });
  }

  save(service?: MechanicService) {
    if(!service) return;
    if(service.id)
      this.mechanicServicesService.update(service)
        .subscribe(() => {
          alert(`Servicio ${service.name} actualizado`)
          this.getAllServices();
        });
    else
      this.mechanicServicesService.create(service)
        .subscribe(() => {
          alert(`Servicio ${service.name} creado`)
          this.getAllServices();
        });
  }

  cancel() {
    this.selectedService = {};
  }
}
