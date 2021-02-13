import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BaseUrl } from '../../env/env';
@Injectable({
  providedIn: 'root'
})
export class BordingService {
  url = BaseUrl;
  Url = this.url + '/onboard';

  constructor(private http: HttpClient) { }
  mycomtype(id): Observable<any> {
    return this.http.get(this.Url + `/communitytype/${id}`);
  }

  mycomblock(id): Observable<any> {
   // console.log('SERVICEFLAT', id);
    return this.http.get(this.Url + `/communityblock/${id}`);
  }

  mycomflatnum(id): Observable<any> {
    console.log('SERVICEFLAT', id);
    return this.http.get(this.Url + `/communityblocknumber/${id}`);
  }
   /*join tables using this.ownerid service*/
   getUnitsData(id) {
    return this.http.get(this.Url + `/unitsdata/${id}`);
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
}
