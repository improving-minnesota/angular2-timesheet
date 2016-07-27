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

}
