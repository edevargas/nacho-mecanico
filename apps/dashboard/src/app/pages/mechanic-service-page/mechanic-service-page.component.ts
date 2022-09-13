import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicServicesService } from '@dev/core-data/services';
import { MechanicService } from '@dev/api-interfaces';


@Component({
  selector: 'dev-mechanic-service-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mechanic-service-page.component.html',
  styleUrls: ['./mechanic-service-page.component.scss'],
})
export class MechanicServicePageComponent implements OnInit {
  constructor(private mechanicServicesService: MechanicServicesService) {}
  mechanicServices: MechanicService[] = [];

  ngOnInit(): void {
    this.mechanicServicesService.all()
      .subscribe(services => this.mechanicServices = services)
  }
}
