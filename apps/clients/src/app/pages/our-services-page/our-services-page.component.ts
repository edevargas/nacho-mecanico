import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@dev/material';
import { CommonUiModule } from '@dev/common-ui';
import { MechanicServicesFacadeService } from '@dev/core-data/facades';
import { MechanicService } from '@dev/api-interfaces';
import { MechanicServiceCardComponent } from '../../ui/layouts/mechanic-service-card/mechanic-service-card.component';
import { tap } from 'rxjs';

@Component({
  selector: 'dev-our-services-page',
  standalone: true,
  imports: [CommonModule, CommonUiModule, MaterialModule, MechanicServiceCardComponent],
  providers: [MechanicServicesFacadeService],
  templateUrl: './our-services-page.component.html',
  styleUrls: ['./our-services-page.component.scss'],
})
export class OurServicesPageComponent implements OnInit {

  mechanicServices$ = this.mechanicServicesFacade.allMechanicServices$;
  selectedService$ = this.mechanicServicesFacade.selectedService$.pipe(tap(val => console.log(val)));
  error$ = this.mechanicServicesFacade.error$;
  loading$ = this.mechanicServicesFacade.loading$;

  constructor(private mechanicServicesFacade: MechanicServicesFacadeService) {
  }

  ngOnInit(): void {
    this.mechanicServicesFacade.getAllServices();
  }

  selectService(service: MechanicService) {
    this.mechanicServicesFacade.selectService(service);
  }

}
