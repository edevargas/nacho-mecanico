import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicServicesListComponent } from './mechanic-services-list.component';

describe('MechanicServicesListComponent', () => {
  let component: MechanicServicesListComponent;
  let fixture: ComponentFixture<MechanicServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicServicesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
