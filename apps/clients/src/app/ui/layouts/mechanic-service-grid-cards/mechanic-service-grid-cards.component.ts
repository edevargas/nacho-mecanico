import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MechanicService } from '@dev/api-interfaces';
import { MaterialModule } from '@dev/material';
import { MechanicServiceCardComponent } from '../mechanic-service-card/mechanic-service-card.component';

@Component({
  selector: 'dev-mechanic-service-grid-cards',
  standalone: true,
  imports: [CommonModule, MaterialModule, MechanicServiceCardComponent],
  templateUrl: './mechanic-service-grid-cards.component.html',
  styleUrls: ['./mechanic-service-grid-cards.component.scss'],
})
export class MechanicServiceGridCardsComponent {
  @Input() services: MechanicService[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter<MechanicService>();
  @Output() deleted = new EventEmitter<MechanicService>();
}
