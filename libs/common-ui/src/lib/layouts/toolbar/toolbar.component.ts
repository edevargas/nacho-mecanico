import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '@dev/material';

@Component({
  selector: 'dev-toolbar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggle = new EventEmitter<boolean>();
}
