/* tslint:disable:no-unused-variable */
import { Component} from '@angular/core';

import { By } from '@angular/platform-browser';

import {
  beforeEach, addProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  fakeAsync
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import {
  TestComponentBuilder,
  ComponentFixture
} from '@angular/compiler/testing';

import {ActivatedRoute} from '@angular/router';

import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle/progress-circle';

import { IdentityService, User, Name } from '../auth';
import { TimesheetService, TimeUnit } from '../shared';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetDetailComponent } from '../timesheet-detail/timesheet-detail.component';
import { TimeUnitsComponent } from '../time-units/time-units.component';

describe('Component: Timesheet', () => {

});
