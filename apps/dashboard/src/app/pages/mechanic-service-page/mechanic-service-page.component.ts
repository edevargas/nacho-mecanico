import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MechanicService } from '@dev/api-interfaces';
import { MechanicServicesFacadeService } from '@dev/core-data/facades';
import { MaterialModule } from '@dev/material';
import { MechanicServicesDetailComponent } from '../../shared/mechanic-services/mechanic-services-detail/mechanic-services-detail.component';
import { MechanicServicesListComponent } from '../../shared/mechanic-services/mechanic-services-list/mechanic-services-list.component';


@Component({
  selector: 'dev-mechanic-service-page',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MechanicServicesListComponent,
    MechanicServicesDetailComponent],
    providers: [MechanicServicesFacadeService],
  templateUrl: './mechanic-service-page.component.html',
  styleUrls: ['./mechanic-service-page.component.scss'],
})
export class MechanicServicePageComponent implements OnInit {

  mechanicServices$ = this.mechanicServicesFacade.allMechanicServices$;
  selectedService$ = this.mechanicServicesFacade.selectedService$;
  error$ = this.mechanicServicesFacade.error$;
  loading$ = this.mechanicServicesFacade.loading$;

  constructor(private mechanicServicesFacade: MechanicServicesFacadeService) {
      this.mechanicServicesFacade.mutations$
        .subscribe(() => this.mechanicServicesFacade.getAllServices());
    }

  ngOnInit(): void {
    this.mechanicServicesFacade.getAllServices();
  }

  selectService(service: MechanicService) {
    this.mechanicServicesFacade.selectService(service);
  }

  deleteService(service: MechanicService) {
    this.mechanicServicesFacade.deleteService(service);
  }

  save(service?: MechanicService) {
    if(!service) return;
    this.mechanicServicesFacade.save(service);
  }

  cancel() {
    this.mechanicServicesFacade.resetSelectedService();
  }
}
