import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesByMechanicsPageComponent } from './services-by-mechanics-page.component';

describe('ServicesByMechanicsPageComponent', () => {
  let component: ServicesByMechanicsPageComponent;
  let fixture: ComponentFixture<ServicesByMechanicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesByMechanicsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesByMechanicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
