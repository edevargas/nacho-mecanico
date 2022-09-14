import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicServicesDetailComponent } from './mechanic-services-detail.component';

describe('MechanicServicesDetailComponent', () => {
  let component: MechanicServicesDetailComponent;
  let fixture: ComponentFixture<MechanicServicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicServicesDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
