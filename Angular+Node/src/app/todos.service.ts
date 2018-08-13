import { Injectable } from '@angular/core';
import { todo } from './todo-demo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _urlGet:string = 'http://127.0.0.1:4000/rest/api/get';
  private _urlPost:string = 'http://127.0.0.1:4000/rest/api/post';

  constructor(public http:HttpClient) { }

  getTodos():Observable<todo[]>{
    return this.http.get<todo[]>(this._urlGet);
  }

  postTodos():Observable<todo[]>{
    return this.http.post<todo[]>(this._urlGet,{});
  }

}
