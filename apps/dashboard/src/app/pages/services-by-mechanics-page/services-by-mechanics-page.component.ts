import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dev-services-by-mechanics-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-by-mechanics-page.component.html',
  styleUrls: ['./services-by-mechanics-page.component.scss'],
})
export class ServicesByMechanicsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
