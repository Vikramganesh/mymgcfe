import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervsalarypayments',
  templateUrl: './supervsalarypayments.component.html',
  styleUrls: ['./supervsalarypayments.component.scss']
})
export class SupervsalarypaymentsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table: ElementRef;
  dataTable: any;
  getsalary: FormGroup;
  salary: FormGroup;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  communityname;
  emps: any;
  constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) { 
    this.getsalary = this.fb.group({
      com_id:[this.communityid] ,
      date: new FormControl(),
      vendor: this.fb.array([])
    });
  }
  ssalary()
  {

  }
  gsalary()
  {
    this.service.employeesalarycal(this.getsalary.value).subscribe(
      data => {
        this.emps = data;
        console.log('EMPLOYEES', data);
        console.log('empLength', this.emps.length);
        this.Salary(this.emps.length);
      }
    );
  }
  getcommunity(id) {
    this.service.getCommData(id).subscribe(
      data => {
        this.communityname = data[0].sis_community_name;
        console.log('community', data[0].sis_community_name);
      }
    );
  }
  get t() {
    return this.getsalary.get('vendor') as FormArray;
   }

   Salary(e) {
     console.log('attendance', e);
     // if (this.todayemp.length === 0) {
       console.log('attendanceif', e);
       // tslint:disable-next - line:prefer - for -of
       // tslint:disable-next-line:prefer-for-of
       for ( let i = 0; i < this.emps.length; i++) {
         console.log('attendance', e);
         this.t.push(this.fb.group({
             id: [this.emps[i].emp_id],
             emp_name: [this.emps[i].emp_name, Validators.required],
             ven_name: [this.emps[i].vendor_id, Validators.required],
             working_days: [this.emps[i].num_working_days, Validators.required],
             leave: [this.emps[i].leaves, Validators.required],
             salary: [this.emps[i].employee_salary, Validators.required],
             payment: [this.emps[i].payment_amt, Validators.required],
            
         }));
       }
 
    
     }
  ngOnInit(): void {
    this.getcommunity(this.communityid);
    console.log('empLength', this.emps.length);
    setTimeout(() => {
      // this.Attendance(this.emps.length);
       console.log('empLength', this.emps.length);
       this.Salary(this.emps.length);
     }, 5000);
   
  }

}
