/**
 * TODO: Add routing functionality that allows a user to click on a Timesheet instance and route the user to a timesheet
 * detail view.
 *
 * 1. Add the Angular router as a component dependency.
 * 2. Add a click handler to route the user to details view for the selected Timesheet instance.
 */

import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../timesheet.service';
import { IdentityService } from '../../core';
import { Router } from '@angular/router';
import { Timesheet } from '../Timesheet';

@Component({
  selector: 'at-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.scss']
})
export class TimesheetListComponent implements OnInit {

  timesheets: Timesheet[];
  format: string;

  // TODO #1
  constructor(private timesheetService: TimesheetService,
              private identityService: IdentityService) {
    this.timesheets = [];
    this.format = 'MM/dd/yy';
  }

  ngOnInit() {
    this.timesheetService.getTimesheets(this.identityService.user).subscribe((timesheets) => {
      this.timesheets = timesheets;
    });
  }

  // TODO #2
}
