import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dev-mechanics-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mechanics-page.component.html',
  styleUrls: ['./mechanics-page.component.scss'],
})
export class MechanicsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
