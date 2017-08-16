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

  constructor(private timesheetService: TimesheetService,
              private identityService: IdentityService,
              private router: Router) {
    this.timesheets = [];
    this.format = 'MM/dd/yy';
  }

ngOnInit() {
    this.timesheetService.getTimesheets(this.identityService.user).subscribe((timesheets) => {
      this.timesheets = timesheets;
    });
  }

  openTimesheet(timesheet) {
    this.router.navigateByUrl(`/timesheets/${timesheet._id}`);
  }
}
