import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../../env/env';
@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {
  url = BaseUrl;
  Url = this.url + '/owner';

  constructor(private http: HttpClient) { }
  getOwnerData(id) {
    return this.http.get(this.Url + `/owdata/${id}`);
  }
  getownerbyid(id) {
    return this.http.get(this.Url + `/getownerbyid/${id}`);
  }
  getCommunityName(id) {
    return this.http.get(this.Url + `/getcomdata/${id}`);
  }
  getTotalUnitName(id) {
    return this.http.get(this.Url + `/unitname/${id}`);
  }

  getUnitDetails(id) {
    return this.http.get(this.Url + `/ounitdetails/${id}`);
  }
  getTenantDetails(id) {
    return this.http.get(this.Url + `/ttenantbyid/${id}`);
  }

  fixturedata(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>(this.Url + '/fixturedata', data, options);
  }

  ownermember(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>(this.Url + '/ownermember', data, options);
  }
  getOwnerMember(cid, uid, oid) {
    return this.http.get(this.Url + `/omember/${cid}/${uid}/${oid}`);
  }
  owneraddTenant(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/oaddtenant', data, options);

  }
  alltenants(id) {
    return this.http.get(this.Url + `/alltenants/${id}`);
  }

  EditTenant(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/editttenants', data, options);

  }

  getAllBoardmembers(id) {
    return this.http.get(this.Url + `/allboardmemberss/${id}`);
  }

  OwnerComplaint(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/ownercomplaint', data, options);

  }

  AllOwnerComplaints(comid, ownerid, unitid) {
    return this.http.get(this.Url + `/ownerallcomplaints/${comid}/${ownerid}/${unitid}`);
  }

  UpdateOwnerComplaints(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + `/updateownercomplaint`, data, options);
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

  getMaintenanceapproval(id): Observable<any> {
    return this.http.get(this.Url + `/getMaintenanceapproval/${id}`);
  }
  getPaymentsapproval(id): Observable<any> {
    return this.http.get(this.Url + `/getPaymentsapproval/${id}`);
  }
}
