import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervsalarypaymentsComponent } from './supervsalarypayments.component';

describe('SupervsalarypaymentsComponent', () => {
  let component: SupervsalarypaymentsComponent;
  let fixture: ComponentFixture<SupervsalarypaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervsalarypaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervsalarypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
