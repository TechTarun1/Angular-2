import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:4000/todo";

  //get Api call
  getTodo(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-todo`);
  }

  createTodo(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/add-todo`, data);
  }

  editTodo(data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/update-todo/${data._id}`, data);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete-todo/${id}`);
  }
}
