import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MechanicService } from '@dev/api-interfaces';
import { MaterialModule } from '@dev/material';

@Component({
  selector: 'dev-mechanic-service-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './mechanic-service-card.component.html',
  styleUrls: ['./mechanic-service-card.component.scss'],
})
export class MechanicServiceCardComponent {
  @Input() service: MechanicService = {};
  @Output() selected = new EventEmitter<MechanicService>();
  isSelected = false;
}
