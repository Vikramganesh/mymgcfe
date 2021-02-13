import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { SupervisorService } from '../supervisor.service';
import * as $ from 'jquery';
import 'datatables.net';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervboardmembers',
  templateUrl: './supervboardmembers.component.html',
  styleUrls: ['./supervboardmembers.component.scss']
})
export class SupervboardmembersComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  name = this.a[0].owner_name;
  communityid = this.a[0].sis_community_id;
  BmForm: FormGroup;
  bmdata;

  constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
    this.BmForm = this.fb.group({
      commid: new FormControl(this.communityid),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    });
  }

  BmReg() {
     console.log(this.BmForm.value);
     this.service.Boardmemberssearch(this.BmForm.value).subscribe(
      data => {
        this.bmdata = data;
        console.log(data);

      }
    );
   }

   ngOnInit(): void {
    console.log('SUPERVISOR SESSION DATA', this.a);
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
        pageLength: 10});
    }, 3000);

  }

}
