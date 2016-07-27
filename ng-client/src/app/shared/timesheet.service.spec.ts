/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TimesheetService } from './timesheet.service';

describe('TimesheetService Service', () => {
  beforeEachProviders(() => [TimesheetService]);

  it('should ...',
      inject([TimesheetService], (service: TimesheetService) => {
    expect(service).toBeTruthy();
  }));
});
