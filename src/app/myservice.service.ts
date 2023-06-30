import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })

  url: string = "http://localhost:4000/user";

  //get Api call
  handleLogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, data);
  }

  handleRegister(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, data);
  }
}
