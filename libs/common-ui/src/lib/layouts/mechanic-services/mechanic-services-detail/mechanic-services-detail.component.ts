import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MechanicService } from '@dev/api-interfaces';
import { MaterialModule } from '@dev/material';

@Component({
  selector: 'dev-mechanic-services-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './mechanic-services-detail.component.html',
  styleUrls: ['./mechanic-services-detail.component.scss'],
})
export class MechanicServicesDetailComponent {
  @Input() set service(value: MechanicService) {
    this._originalName = value.name;
    this._service = { ...value };
  }
  @Output() saved = new EventEmitter<MechanicService>();
  @Output() cancelled = new EventEmitter();

  _service: MechanicService = {};
  _originalName: string | undefined;
}
