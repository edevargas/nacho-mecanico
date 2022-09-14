import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from '@dev/common-ui';
import { MaterialModule } from '@dev/material';

@Component({
  selector: 'dev-contact-page',
  standalone: true,
  imports: [CommonModule, CommonUiModule, MaterialModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent{

}
