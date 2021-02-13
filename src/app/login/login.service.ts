import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../env/env';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url = BaseUrl;

  constructor(private http: HttpClient) { }
  login(data): Observable<any> {
    // console.log('data at service', data);
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(this.Url + '/login', data, options);
  }
}
