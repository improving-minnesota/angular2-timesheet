import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ExtHttp} from './extHttp.service';
import {User} from '../auth';
import {TimeUnit} from './TimeUnit';

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

  get(user: User, timesheetId: string, timeUnitId: string): Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}/timeunits/${timeUnitId}`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  save(user: User, timeUnit: TimeUnit): Observable<any> {
    return Observable.create((observer) => {
      this.http.put(`/users/${user.id}/timesheets/${timeUnit.timesheet_id}/timeunits/${timeUnit._id}`, timeUnit).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  delete(user: User, timeUnit: TimeUnit): Observable<any> {
    return Observable.create((observer) => {
      this.http.delete(`/users/${user.id}/timesheets/${timeUnit.timesheet_id}/timeunits/${timeUnit._id}`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }
}
