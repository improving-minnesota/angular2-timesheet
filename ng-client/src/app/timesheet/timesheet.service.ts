import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  ExtHttp,
  User
 } from '../core';
import { Timesheet } from './Timesheet';
import { TimeUnit } from '../time-units';

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
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}`).subscribe((response) => {
        observer.next(new Timesheet(response.json()));
      });
    });
  }

  getTimeUnits(user: User, timesheetId: string): Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}/timeunits`).subscribe((response) => {
        const units = response.json().map((data) => {
          const unit = new TimeUnit(data);
          return unit;
        });
        observer.next(units);
      });
    });
  }

  save(user: User, timesheet: Timesheet) {
    return Observable.create((observer) => {
      this.http.post(`/users/${user.id}/timesheets`, timesheet).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }
}
