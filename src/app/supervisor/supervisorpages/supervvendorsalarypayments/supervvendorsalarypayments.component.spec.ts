import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervvendorsalarypaymentsComponent } from './supervvendorsalarypayments.component';

describe('SupervvendorsalarypaymentsComponent', () => {
  let component: SupervvendorsalarypaymentsComponent;
  let fixture: ComponentFixture<SupervvendorsalarypaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervvendorsalarypaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervvendorsalarypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
