import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicServiceGridCardsComponent } from './mechanic-service-grid-cards.component';

describe('MechanicServiceGridCardsComponent', () => {
  let component: MechanicServiceGridCardsComponent;
  let fixture: ComponentFixture<MechanicServiceGridCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicServiceGridCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicServiceGridCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
