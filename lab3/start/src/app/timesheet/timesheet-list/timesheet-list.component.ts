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

  // add depending for router navigation
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

  // add function to assign as click handler to navigate to timesheet
}
