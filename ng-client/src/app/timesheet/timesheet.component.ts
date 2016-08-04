import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle/progress-circle';

import {TimeUnitsComponent} from '../time-units/time-units.component';
import {TimesheetDetailComponent} from '../timesheet-detail/timesheet-detail.component';
import {IdentityService} from '../auth';
import {TimesheetService} from '../shared';
import {Timesheet} from '../shared/Timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: 'timesheet.component.html',
  styleUrls: ['timesheet.component.css'],
  providers: [TimesheetService],
  directives: [TimeUnitsComponent, TimesheetDetailComponent, MD_PROGRESS_CIRCLE_DIRECTIVES]
})
export class TimesheetComponent implements OnInit {

  timesheet: Timesheet;

  // TODO: make this a timeUnit[] when that class is created
  timeUnits: any[];
  timesheetLoaded: boolean;
  timeUnitsLoaded: boolean;
  dateFormat: string;

  constructor(private route: ActivatedRoute,
              private identityService: IdentityService,
              private timesheetService: TimesheetService) {
  }

  ngOnInit() {
    this.timesheetLoaded = false;
    this.timeUnitsLoaded = false;
    this.dateFormat = 'MM/dd/yy';

    this.route.params.subscribe((params) => {
      const timesheetId = params['id'];

      this.timesheetService.getTimesheet(this.identityService.user, timesheetId)
        .subscribe((timesheet) => {
          this.timesheet = timesheet;
          this.timesheetLoaded = true;
        });

      this.timesheetService.getTimeunits(this.identityService.user, timesheetId)
        .subscribe((timeUnits) => {
          this.timeUnits = timeUnits;
          this.timeUnitsLoaded = true;
        });
    });
  }
}
