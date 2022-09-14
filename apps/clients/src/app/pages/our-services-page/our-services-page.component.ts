import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@dev/material';
import { CommonUiModule } from '@dev/common-ui';

@Component({
  selector: 'dev-our-services-page',
  standalone: true,
  imports: [CommonModule, CommonUiModule, MaterialModule],
  templateUrl: './our-services-page.component.html',
  styleUrls: ['./our-services-page.component.scss'],
})
export class OurServicesPageComponent {

}
