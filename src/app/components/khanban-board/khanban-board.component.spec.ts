import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanbanBoardComponent } from './khanban-board.component';

describe('KhanbanBoardComponent', () => {
  let component: KhanbanBoardComponent;
  let fixture: ComponentFixture<KhanbanBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhanbanBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
