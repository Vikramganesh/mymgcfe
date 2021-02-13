import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { UsernameValidator } from '../validations/validator';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
@Component({
  selector: 'app-adminemployeelist',
  templateUrl: './adminemployeelist.component.html',
  styleUrls: ['./adminemployeelist.component.scss']
})
export class AdminemployeelistComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  EmpSearch: FormGroup;
  EmpEdit: FormGroup;
  communities;
  roledata;
  emprole;
  empdata;

  constructor(private fb: FormBuilder, private adminservice: AdminService, private toastr: ToastrService) {
    this.EmpSearch = this.fb.group({
      commid: new FormControl(),
      roleid: new FormControl(),
    });

    this.EmpEdit = this.fb.group({
      eid: new FormControl(),
      ename: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      ephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      eemail: new FormControl('', [
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),

    });
    setTimeout(() => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.dataTable({
         columnDefs: [
          {
              targets: 0,
              checkboxes: {
                selectRow: true
             }
          }
       ],
        lengthMenu: [[5, 10, 15], [5, 10, 15]],
        pageLength: 3});
    }, 4000);

  }

  get form() {
    return this.EmpEdit.controls;
  }

  Data(id, name, phone, email) {
    this.EmpEdit.get('eid').setValue(id);
    this.EmpEdit.get('ename').setValue(name);
    this.EmpEdit.get('ephone').setValue(phone);
    this.EmpEdit.get('eemail').setValue(email);

  }
  EditEmpData() {
    const a = this.EmpEdit.value;
    this.adminservice.AdminEditEmployeeById(a).subscribe(
      res => this.toastr.success('Community Updated', 'SUCCESS'),
      err => this.toastr.error('Error at Community Update', 'ERROR'),
    );
    setTimeout(() => {
      window.location.reload();

    }, 2000);
  }
  SearchEmployee() {
     const a = this.EmpSearch.value;
     this.adminservice.AdminEditEmployee(a).subscribe(
       data => {
         this.empdata = data;
       }
     );

  }
  getcommunitydata() {
    this.adminservice.CommunityData().subscribe(
      data => {
        this.communities = data;
      }
    );
  }
  getRoles() {
    this.adminservice.EmpSupRoles().subscribe(
      data => {
        this.roledata = data;
      }
    );
  }
  type(e) {
    const id =  e.target.value;
    this.emprole = id;
    console.log(id);

   }

  ngOnInit(): void {
    this.getcommunitydata();
    this.getRoles();
  }

}
