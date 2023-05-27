import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityCardComponent } from './functionality-card.component';

describe('FunctionalityCardComponent', () => {
  let component: FunctionalityCardComponent;
  let fixture: ComponentFixture<FunctionalityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
