import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicServicePageComponent } from './mechanic-service-page.component';

describe('MechanicServicePageComponent', () => {
  let component: MechanicServicePageComponent;
  let fixture: ComponentFixture<MechanicServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicServicePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
