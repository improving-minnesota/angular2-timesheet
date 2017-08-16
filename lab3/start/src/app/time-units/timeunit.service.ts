/**
 * TODO: Add the ability to lookup all timesheet entries (timeunits) for a provided user and timesheetId.
 *
 * 1. Add a method named getTimeUnits that accepts user and timesheetId arguments and returns an observable that emits a list of timeunits. The API endpoint for this is '/users/${userId}/timesheets/${timesheetId}'.
 */


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../core/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../core';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

  create(user: User, timeUnit: TimeUnit): Observable<any> {
    return Observable.create((observer) => {
      this.http.post(`/users/${user.id}/timesheets/${timeUnit.timesheet_id}/timeunits`, timeUnit).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  // TODO #1
}
