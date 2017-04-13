/* tslint:disable:no-unused-variable */
import { Component} from '@angular/core';

import { By } from '@angular/platform-browser';

import {
  async, inject,
  fakeAsync
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';

import { IdentityService, User, Name } from '../core';
import { TimesheetService } from './timesheet.service';
import { TimeUnit } from '../time-units';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';
import { TimeUnitsComponent } from '../time-units/time-units.component';

describe('Component: Timesheet', () => {

});
