import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MechanicService } from '@dev/api-interfaces';
import { MaterialModule } from '@dev/material';

@Component({
  selector: 'dev-mechanic-services-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './mechanic-services-list.component.html',
  styleUrls: ['./mechanic-services-list.component.scss'],
})
export class MechanicServicesListComponent {
  @Input() services: MechanicService[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter<MechanicService>();
  @Output() deleted = new EventEmitter<MechanicService>();
}
