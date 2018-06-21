import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {User} from './Shared/userform';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';




@Injectable({
  providedIn: 'root'
})
export class SendformService {
   private url ='../assets/register.json';
  constructor( private http:Http) { }
  
  public addUser(user: User) {
    return this.http.post(this.url, user).catch(this.handleError);
}

private handleError(error: any, cought: Observable<any>): any {
  let message = '';

  if (error instanceof Response) {
      const errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
  } else {
      message = error.message ? error.message : error.toString();
  }
  
}
}
