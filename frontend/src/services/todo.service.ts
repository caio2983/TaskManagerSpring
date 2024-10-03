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
}