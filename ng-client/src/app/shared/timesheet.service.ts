import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ExtHttp} from './extHttp.service';
import {User} from '../auth'

@Injectable()
export class TimesheetService {

  constructor(private http:ExtHttp) {}

  getTimesheets(user:User):Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  getTimesheet(user:User, timesheetId:string):Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  getTimeunits(user:User, timesheetId:string):Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}/timeunits`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }
}
