import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardLargeComponent } from './task-card-large.component';

describe('TaskCardLargeComponent', () => {
  let component: TaskCardLargeComponent;
  let fixture: ComponentFixture<TaskCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCardLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
