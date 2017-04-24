import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../core/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../core';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

  // add a new service method to persist time units using the endpoint included below.
  // /users/${userId}/timesheets/${timesheetId}/timeunits
}
