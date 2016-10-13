import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../shared/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../auth';

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
}
