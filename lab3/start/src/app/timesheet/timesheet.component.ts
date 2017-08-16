/**
 * TODO: Lookup timesheet details and timesheet units for the current timesheet so that they can be provided as inputs
 * to child components.
 *
 * 1. TODO: Retrieve the timesheet details and timesheet units using values provided by the router as well as the
 *    currently authenticated user provided by the identityService.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IdentityService } from '../core';
import { TimesheetService } from './timesheet.service';
import { Timesheet } from './Timesheet';
import { TimeUnit } from '../time-units/TimeUnit';
import { TimeUnitService } from '../time-units/timeunit.service';

@Component({
  selector: 'at-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  providers: [TimesheetService]
})
export class TimesheetComponent implements OnInit {

  timesheet: Timesheet;
  timesheetId: string;

  timeUnits: TimeUnit[];
  loaded: boolean;
  dateFormat: string;

  constructor(private route: ActivatedRoute,
              private identityService: IdentityService,
              private timesheetService: TimesheetService,
              private timeUnitService: TimeUnitService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.dateFormat = 'MM/dd/yy';

    // TODO #1
  }
}
