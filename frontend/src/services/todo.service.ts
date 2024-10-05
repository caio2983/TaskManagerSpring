import { Injectable } from "@angular/core";
import { HttpClient, HttpResponseBase,HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from "../environments/environment";


@Injectable({
    providedIn: 'root' 
  })

export class Todo {

private url = environment.api;    

constructor(private httpClient: HttpClient){}

getTasks(): Observable<any> {
    return this.httpClient.get(`${this.url}/get`);
  }

AddTask(task: any): Observable<any> {
    return this.httpClient.post(`${this.url}`, task, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

EditTask(task: any): Observable<any> {
    return this.httpClient.put(`${this.url}`, task, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

DeleteTask(task: any): Observable<any> {
    return this.httpClient.put(`${this.url}/delete`, task,{
      headers: { 'Content-Type': 'application/json' }
    });
  }




  
}