import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admincommunitylist',
  templateUrl: './admincommunitylist.component.html',
  styleUrls: ['./admincommunitylist.component.scss']
})
export class AdmincommunitylistComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  unitid = this.a[0].unit_id;
  communityid = this.a[0].sis_community_id;
  ownerid = this.a[0].owner_id;
  communities;
  maintype;
  EditCommunity: FormGroup;
  mySubscription: any;
  allcomdataa;
  CommunityData;

  // tslint:disable-next-line:max-line-length
  constructor(private location: Location, private fb: FormBuilder, private router: Router, private service: AdminService, private toastr: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
    this.EditCommunity = this.fb.group({
      comid: new FormControl(),
      persononename: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      persononephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      persononeemail: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      persontwoname: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      persontwophone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ]),
      persontwoemail: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]),
      indicator: new FormControl(),
      amount: new FormControl('',  [Validators.required, Validators.pattern('^[0-9]*$')]),

    });
    this.CommunityData = this.fb.group({
      cn: new FormControl(),
      cl: new FormControl(),
      cc: new FormControl(),
      cst: new FormControl(),
      cpin: new FormControl(),
      cpcno: new FormControl(),
      cpcpo: new FormControl(),
      cpceo: new FormControl(),
      cpcnt: new FormControl(),
      cpcpt: new FormControl(),
      cpcet: new FormControl(),
      mindicator: new FormControl(),
      Amt: new FormControl(),

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
        pageLength: 10});
    }, 1000);
  }
  get form() {
    return this.EditCommunity.controls;
  }

  Data(id, p1name, p1email, p1phone, p2name, p2email, p2phone, community_maintenance_type, community_maintenance) {
    this.EditCommunity.get('comid').setValue(id);
    this.EditCommunity.get('persononename').setValue(p1name);
    this.EditCommunity.get('persononeemail').setValue(p1email);
    this.EditCommunity.get('persononephone').setValue(p1phone);
    this.EditCommunity.get('persontwoname').setValue(p2name);
    this.EditCommunity.get('persontwoemail').setValue(p2email);
    this.EditCommunity.get('persontwophone').setValue(p2phone);
    this.EditCommunity.get('indicator').setValue(community_maintenance_type);
    this.EditCommunity.get('amount').setValue(community_maintenance);
  }
  EditComData() {
    console.log(this.EditCommunity.value);
    this.service.CommunityEdit(this.EditCommunity.value).subscribe(
      res => this.toastr.success('Community Updated', 'SUCCESS'),
      err => this.toastr.error('Error at Community Update', 'ERROR'),
    );
    setTimeout(() => {
      window.location.reload();

    }, 2000);
  }
  AllComData(id) {
    console.log('commdata', id);
    this.service.GetAllComData(id).subscribe(
      data => {
        this.allcomdataa = data;
        console.log(data[0].sis_community_name);
        this.CommunityData.get('cn').setValue(data[0].sis_community_name);
        this.CommunityData.get('cl').setValue(data[0].sis_community_locality);
        this.CommunityData.get('cc').setValue(data[0].sis_community_city);
        this.CommunityData.get('cst').setValue(data[0].sis_community_state);
        this.CommunityData.get('cpin').setValue(data[0].sis_community_pin);
        this.CommunityData.get('cpcno').setValue(data[0].sis_community_spoc1_name);
        this.CommunityData.get('cpcpo').setValue(data[0].sis_community_spoc1_ph);
        this.CommunityData.get('cpceo').setValue(data[0].sis_community_spoc1_email);
        this.CommunityData.get('cpcnt').setValue(data[0].sis_community_spoc2_name);
        this.CommunityData.get('cpcpt').setValue(data[0].sis_community_spoc2_ph);
        this.CommunityData.get('cpcet').setValue(data[0].sis_community_spoc2_email);
        this.CommunityData.get('mindicator').setValue(data[0].sis_community_maintenance_type);
        this.CommunityData.get('Amt').setValue(data[0].sis_community_maintenance);
      }
    );
  }

  SendEmail(id) {
    this.service.Trigger(id).subscribe(
      res => this.toastr.success('Community onboard Triggred', 'SUCCESS'),
      err => this.toastr.error('Error at Triggering', 'ERROR'),
    );
  }

  getAllCommunities() {
    this.service.AllCommunities().subscribe(
      data => {
        this.communities = data;
      }
    );
  }

  getMainType() {
    this.service.GetMaintType().subscribe(
      data => {
        this.maintype = data;
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this.getAllCommunities();
    this.getMainType();
  }

}
