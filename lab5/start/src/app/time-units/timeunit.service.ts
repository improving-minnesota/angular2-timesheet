/*
 * Goal to add a service that persists a time unit
 * Note: This service will be used by ../timesheet/timesheet-entry/timesheet-entry.component.ts
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../core/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../core';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

  // TODO 1: Add a new service method to persist time units using the endpoint included below.
  // /users/${userId}/timesheets/
}
