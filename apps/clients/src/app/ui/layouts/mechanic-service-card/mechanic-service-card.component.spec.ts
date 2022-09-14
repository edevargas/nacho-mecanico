import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicServiceCardComponent } from './mechanic-service-card.component';

describe('MechanicServiceCardComponent', () => {
  let component: MechanicServiceCardComponent;
  let fixture: ComponentFixture<MechanicServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MechanicServiceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
