/**
 * TODO: Add a method that retrieves a Timesheet instance.
 *
 * 1. Add a getTimesheet method that receives a user and a timesheetId argument and returns an observable that emits a
 *    Timesheet instance. The target API endpoint is /users/${userId}/timesheets/${timesheetId}.
 */

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

  // TODO #1
}
