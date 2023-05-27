import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkDetailsComponent } from './user-work-details.component';

describe('UserWorkDetailsComponent', () => {
  let component: UserWorkDetailsComponent;
  let fixture: ComponentFixture<UserWorkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
