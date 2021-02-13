import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class TenantserviceService {
  url = BaseUrl;
  Url = this.url + '/tenant';

  constructor(private http: HttpClient) { }

  getUnitDetails(id) {
    return this.http.get(this.Url + `/ounitdetails/${id}`);
  }
  getAllBoardmembers(id) {
    return this.http.get(this.Url + `/allboardmemberss/${id}`);
  }

  tentComplaint(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/tentcomplaint', data, options);

  }

  AlltentComplaints(comid, tentid, ownerid, unitid) {
    return this.http.get(this.Url + `/tentallcomplaints/${comid}/${tentid}/${ownerid}/${unitid}`);
  }

  UpdatetentComplaints(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + `/updatownercomplaint`, data, options);
  }
  CancelComplaints(id) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + `/cancelownercomplaint/${id}`, options);
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

  getTenantData(id) {
    return this.http.get(this.Url + `/datatent/${id}`);
  }

  getCommunityName(id) {
    return this.http.get(this.Url + `/getcomdata/${id}`);
  }
  getMaintenancedata(id) {
    return this.http.get(this.Url + `/getMaintenancedata/${id}`);
  }
  getPaymentsdata(id) {
    return this.http.get(this.Url + `/getPaymentsdata/${id}`);
  }
  getMaintenancebydate(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/getMaintenancebydate', data, options);

  }
  getPaymentsdatabysearch(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/getPaymentsdatabysearch', data, options);
  }
}
