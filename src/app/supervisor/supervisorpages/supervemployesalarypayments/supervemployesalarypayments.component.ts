import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervemployesalarypayments',
  templateUrl: './supervemployesalarypayments.component.html',
  styleUrls: ['./supervemployesalarypayments.component.scss']
})
export class SupervemployesalarypaymentsComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table: ElementRef;
  dataTable: any;
  attendanceReg: FormGroup;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  communityname;
  emps: any;
  todayemp: any;

  constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.attendanceReg = this.fb.group({
      com_id: new FormControl(),
      date: new FormControl(),
      vendor: this.fb.array([])
    });
  // tslint:disable-next-line:align
  setTimeout(() => {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable({
       bPaginate: true,
       bFilter: true,
       Info: true,
      lengthMenu: [[1, 4, 6, 8], [1, 4, 6, 8]],
      pageLength: 1});
  }, 5000);
   }

   getcommunity(id) {
    this.service.getCommData(id).subscribe(
      data => {
        this.communityname = data[0].sis_community_name;
        console.log('community', data[0].sis_community_name);
      }
    );
  }
  SignForm() {
     this.attendanceReg.get('com_id').setValue(this.communityid);
     console.log(this.attendanceReg.value);
    this.service.emp_salary(this.attendanceReg.value).subscribe(
      res => this.toastr.success('Successfully Attendance Saved', 'SUCCESS'),
      err => this.toastr.error('Error At Attendance', 'ERROR'),
    );
  }
  // submit() {
  //   console.log(this.attendanceReg.value);
  //   this.service.attendence_out(this.attendanceReg.value).subscribe(
  //     res => this.toastr.success('Successfully Attendance Saved-sub', 'SUCCESS'),
  //     err => this.toastr.error('Error At Attendance-sub', 'ERROR'),
  //   );
  // }

  get t() {
     return this.attendanceReg.get('vendor') as FormArray;
    }

    Attendance(e) {
      console.log('attendance', e);
      // if (this.todayemp.length === 0) {
        console.log('attendanceif', e);
        // tslint:disable-next - line:prefer - for -of
        // tslint:disable-next-line:prefer-for-of
        for ( let i = 0; i < this.emps.length; i++) {
          console.log('attendance', e);
          this.t.push(this.fb.group({
              id: [this.emps[i].emp_id],
              ven_name: [this.emps[i].emp_name, Validators.required],
              payment: ['', Validators.required],
             
          }));
        }
  
     
      }
  
    
    getemps(id) {
      this.service.getemployees(id).subscribe(
        data => {
          this.emps = data;
          console.log('EMPLOYEES', data);
        }
      );
    }
    
  
    ngOnInit(): void {
      this.getcommunity(this.communityid);
      this.getemps(this.communityid);
      //this.gettodaydata();
      setTimeout(() => {
       // this.Attendance(this.emps.length);
        console.log('empLength', this.emps.length);
        this.Attendance(this.emps.length);
      }, 2000);
    }
}
