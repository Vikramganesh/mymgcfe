import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseUrl } from '../../../env/env';
@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  isPrinting = false;
  url = BaseUrl;
  Url = this.url + '/supervisor';

  constructor(private http: HttpClient, private router: Router) { }


  AddEmployee(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/saddemployee', data, options);
  }

  GetEmployeeDetails(id): Observable<any> {
    return this.http.get(this.Url + `/getsuperemployeedata/${id}`);
  }

  EditEmployee(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/seditemployee', data, options);
  }

  AddVendor(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/addvendor', data, options);

  }

  AllVendors(id): Observable<any> {
    return this.http.get(this.Url + `/allcommvendors/${id}`);
  }

  EditVendor(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/editvendor', data, options);

  }
  AllComplaints(id): Observable<any> {
    return this.http.get(this.Url + `/scomplaintsbyid/${id}`);
  }

  getAllEmployees(id): Observable<any> {
    return this.http.get(this.Url + `/getsuperemployeedata/${id}`);
  }

  getTasklist(): Observable<any> {
    return this.http.get(this.Url + '/tasklist');
  }
  AddDailyTask(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/addtaskdaily', data, options);

  }

  getAllUnits(id): Observable<any> {
    return this.http.get(this.Url + `/sallunitsbyid/${id}`);
  }

  getcommunityType(id): Observable<any> {
    return this.http.get(this.Url + `/communitytypebyid/${id}`);
  }

  RegComplaints(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/addcomplaints', data, options);

  }

  SUpdateComplaint(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/supdatecomplaint', data, options);

  }
  History(id): Observable<any> {
    return this.http.get(this.Url + `/history/${id}`);
  }
  getCommData(id): Observable<any> {
    return this.http.get(this.Url + `/getcomdata/${id}`);
  }
  attendence_in(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/attendence', data, options);

  }
  attendence_out(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/attendenceupdate', data, options);

  }
  getemployees(id): Observable<any> {
    return this.http.get(this.Url + `/getsuperemployeedata/${id}`);
  }
  employeesalarycal(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/superemployeesalarycal', data, options);
    
  }
  todayEmps(id, date): Observable<any> {
    return this.http.get(this.Url + `/gettodayemps/${id}/${date}`);

  }
  CommType(id): Observable<any> {
    return this.http.get(this.Url + `/communitytypebyid/${id}`);

  }
  getBlocks(id): Observable<any> {
    return this.http.get(this.Url + `/blocksdata/${id}`);
  }
  AddMaintenancee(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/commmaintenance', data, options);


  }
  add_dues(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/addotherdues', data, options);

  }

  maintenance(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/paymentmaintenance', data, options);
  }

  PaymentMode(): Observable<any> {
    return this.http.get(this.Url + '/paymentmode');
  }
  pay_status(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/payment', data, options);

  }
  recipt(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/recipt', data, options);

  }
  Boardmemberssearch(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/boardmemberssearch', data, options);

  }
  emp_salary(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/emp_salary', data, options);

  }
  vendor_payment(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/ven_payment', data, options);

  }


}
