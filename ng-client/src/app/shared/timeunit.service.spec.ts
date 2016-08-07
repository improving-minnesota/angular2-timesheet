import { provide } from '@angular/core';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ExtHttp } from './extHttp.service';
import { TimeUnit } from './TimeUnit';
import { TimeUnitService } from './timeunit.service';
import { Name, User } from '../auth';

describe('TimesheetService Service', () => {
  // let service: TimeUnitService;
  //
  // beforeEachProviders(() => [
  //   ExtHttp,
  //   TimeUnitService
  // ]);
  //
  // beforeEach(inject([TimeUnitService], (_service) => {
  //   service = _service;
  // }));
  //
  // it('should should create a persist new TimeUnit', () => {
  //     spyOn(ExtHttp, 'post').and.stub();
  //
  //   let user: User = new User({
  //     name: new Name('mickey', 'mouse'),
  //     token: 'token',
  //     id: '1',
  //     authenticated: true
  //   });
  //   let timeUnit: TimeUnit = new TimeUnit({
  //     dateWorked: new Date(),
  //     hoursWorked: 8,
  //     project_id: '1',
  //     project: 'The Project',
  //     timesheet_id: '1'
  //   });
  //
  //   service.create(user, timeUnit)
  //     .subscribe((response) => {
  //       expect(response.id).toBe(1);
  //     });
  // });
});
