import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dev-mechanic-service-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mechanic-service-page.component.html',
  styleUrls: ['./mechanic-service-page.component.scss'],
})
export class MechanicServicePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
