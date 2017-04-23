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
    return this.http.get(`/users/${user.id}/timesheets`)
      .map((response) => response.json() as Timesheet[]);
  }

  getTimesheet(user: User, timesheetId: string): Observable<Timesheet> {
    return this.http.get(`/users/${user.id}/timesheets/${timesheetId}`)
      .map((response) => response.json() as Timesheet);
  }

  getTimeUnits(user: User, timesheetId: string): Observable<TimeUnit[]> {
    return this.http.get(`/users/${user.id}/timesheets/${timesheetId}/timeunits`)
      .map((response) => response.json() as TimeUnit[]);
  }

  save(user: User, timesheet: Timesheet) {
    return this.http.post(`/users/${user.id}/timesheets`, timesheet)
      .map((response) => response.json() as Timesheet);
  }
}
