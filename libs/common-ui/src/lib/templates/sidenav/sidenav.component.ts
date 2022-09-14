import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@dev/material';

@Component({
  selector: 'dev-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() title = "";
  @Input() navigation: any[] = [];

  @ViewChild("sidenav", { static: false }) sidenav?: MatSidenav;

  public toggle() {
    this.sidenav?.toggle();
  }
}
