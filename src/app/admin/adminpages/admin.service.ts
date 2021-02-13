import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from '../../../env/env';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = BaseUrl;
  Url = this.url + '/admin';

  constructor(private http: HttpClient) { }

  // get blocks data
  Blocks(id): Observable<any> {
    return this.http.get(this.Url + `/blocks/${id}`);
  }
  Briks(id): Observable<any> {
    return this.http.get(this.Url + `/briks/${id}`);
  }


   // get flats data
   Flats(id): Observable<any> {
    return this.http.get(this.Url + `/flats/${id}`);
  }

  // community data by id
  GetAllComData(id): Observable<any> {
    return this.http.get(this.Url + `/comunitydaatabyit/${id}`);
  }

  // owner tenant roles
  OwnerTenantRoles(): Observable<any> {
    return this.http.get(this.Url + '/ownertenantroles');
  }
  // total communities
  getCommunityData(): Observable<any> {
    return this.http.get(this.Url + '/communitydata');
  }

  // community type villa or appartment
  CommunityType(): Observable<any> {
    return this.http.get(this.Url + '/type');
  }

    // community type By ID villa or appartment
    CommunityTypeById(id): Observable<any> {
      return this.http.get(this.Url + `/communitytypebyid/${id}`);
    }


  // get community names
  CommunityData(): Observable<any> {
    return this.http.get(this.Url + '/communitydata');
  }
  // get community roles
  getCommunityRoles(): Observable<any> {
    return this.http.get(this.Url + '/communityroles');
  }

  // community type
  commTypeById(id): Observable<any> {
    return this.http.get(this.Url + `/communitytype/${id}`);
  }
  comtype(id): Observable<any> {
    return this.http.get(this.Url + `/communitytype/${id}`);
  }
  owners(id): Observable<any> {
    return this.http.get(this.Url + `/ownerdata/${id}`);
  }
  registerCommunity(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>(this.Url + '/reg', data, options);
  }


  owneronboardingrecords(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    console.log('service-id', data);
    return this.http.post<any>(this.Url + `/allonboarding`, data, options);

  }

  regonboard(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>(this.Url + '/regonboard', data, options);
  }
  EmpSupRoles(): Observable<any> {
    return this.http.get(this.Url + '/empsuproles');
  }
  AddEmpSupFromAdmin(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/addemployeesupervisor', data, options);

  }
  approveowner(id): Observable<any> {
    console.log('service-id', id);
    return this.http.get<any>(this.Url + `/aprovedata/${id}`);
  }
  Boardmembers(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/addboardmembers', data, options);
  }

  AddResident(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/adminadresedent', data, options);
  }

  SendMailToAll(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/sendmailtoresidents', data, options);
  }
  searchowner(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/adminownerreports', data, options);

  }

  searchtenant(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/admintenantreports', data, options);

  }

  searchresident(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/adminresidentreports', data, options);
  }

  AllCommunities() {
    return this.http.get<any>(this.Url + '/allcommunities');
  }



  GetMaintType() {
    return this.http.get<any>(this.Url + `/maintenancetype`);
  }
  CommunityEdit(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/communityedit', data, options);
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

  AdminEditEmployee(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/admineditemployee', data, options);
  }

  AdminEditEmployeeById(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/admineditemployeebyid', data, options);
  }

  Trigger(id): Observable<any> {
    return this.http.get<any>(this.Url + `/triggercommunity/${id}`);
  }



}
