/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TimesheetEntryComponent } from './timesheet-entry.component';

// class ProjectService {
//   getProducts():Observable<Project[]> {
//     return [];
//   }
// }
//
// class TimeUnitService {
//   create(user:User, timeUnit: TimeUnit):Observable<any> {
//     return new TimeUnit({});
//   }
// }

// describe.only('Component: TimesheetEntry', () => {
//   let tcb;
//
//   beforeEachProviders(() => [
//     provide(ProjectService, { useClass: ProjectServiceMock }),
//     provide(TimeUnitService, { useClass: TimeUnitService }),
//     TimeSheetEntryComponent
//   ]);
//
//   beforeEach(inject([TestComponentBuilder], _tcb => {
//     tcb = _tcb
//   }));
//
//   it('should create an instance', () => {
//     tcb.createAsync(TimeSheetEntryComponent))
//       .then((fixture) => {
//         let timesheetEntry = fixture.componentInstance;
//         let element = fixture.nativeElement;
//
//
//       });
//   });
// });
