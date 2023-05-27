import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesDashboardComponent } from './functionalities-dashboard.component';

describe('FunctionalitiesDashboardComponent', () => {
  let component: FunctionalitiesDashboardComponent;
  let fixture: ComponentFixture<FunctionalitiesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalitiesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
