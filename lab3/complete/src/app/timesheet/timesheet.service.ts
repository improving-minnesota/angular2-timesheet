import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  ExtHttp,
  User
 } from '../core';
import { Timesheet } from './Timesheet';
import { TimeUnit } from '../time-units/TimeUnit';

@Injectable()
export class TimesheetService {

  constructor(private http: ExtHttp) {
  }

  getTimesheets(user: User): Observable<Timesheet[]> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  getTimesheet(user: User, timesheetId: string): Observable<Timesheet> {
    return this.http.get(`/users/${user.id}/timesheets/${timesheetId}`)
      .map((response) => response.json() as Timesheet);
  }
}
