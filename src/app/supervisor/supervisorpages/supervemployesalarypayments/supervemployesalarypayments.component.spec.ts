import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervemployesalarypaymentsComponent } from './supervemployesalarypayments.component';

describe('SupervemployesalarypaymentsComponent', () => {
  let component: SupervemployesalarypaymentsComponent;
  let fixture: ComponentFixture<SupervemployesalarypaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervemployesalarypaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervemployesalarypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
