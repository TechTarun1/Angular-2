import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })

  url: string = "http://localhost:4000/user/login";

  //get Api call
  handleLogin = (data:any) => {
    return this.http.post<any>(this.url, data);
  }
}
