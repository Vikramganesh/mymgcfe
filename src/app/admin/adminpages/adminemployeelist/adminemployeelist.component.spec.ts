import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminemployeelistComponent } from './adminemployeelist.component';

describe('AdminemployeelistComponent', () => {
  let component: AdminemployeelistComponent;
  let fixture: ComponentFixture<AdminemployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminemployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
