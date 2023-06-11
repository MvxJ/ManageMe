import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanbanTaskComponent } from './khanban-task.component';

describe('KhanbanTaskComponent', () => {
  let component: KhanbanTaskComponent;
  let fixture: ComponentFixture<KhanbanTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhanbanTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhanbanTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
