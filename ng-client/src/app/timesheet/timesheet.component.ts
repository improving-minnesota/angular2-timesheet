import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle/progress-circle';
;
import {TimeUnitsComponent} from '../time-units/time-units.component';
import {TimesheetDetailComponent} from '../timesheet-detail/timesheet-detail.component';
import {IdentityService} from '../auth';
import {TimesheetService} from '../shared';
import {Timesheet} from '../shared/Timesheet';
import {TimeUnit} from '../shared/TimeUnit';

@Component({
  selector: 'app-timesheet',
  templateUrl: 'timesheet.component.html',
  styleUrls: ['timesheet.component.scss'],
  providers: [TimesheetService],
  directives: [TimeUnitsComponent, TimesheetDetailComponent, MD_PROGRESS_CIRCLE_DIRECTIVES]
})
export class TimesheetComponent implements OnInit {

  timesheet: Timesheet;
  timesheetId: string;

  // TODO: make this a timeUnit[] when that class is created
  timeUnits: TimeUnit[];
  loaded: boolean;
  dateFormat: string;

  constructor(private route: ActivatedRoute,
              private identityService: IdentityService,
              private timesheetService: TimesheetService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.dateFormat = 'MM/dd/yy';

    this.route.params.subscribe((params) => {
      this.timesheetId = params['id'];

      let timesheetObservable = this.timesheetService.getTimesheet(this.identityService.user, this.timesheetId);

      timesheetObservable.subscribe((timesheet) => {
          this.timesheet = timesheet;
        });

      this.timesheetService.getTimeUnits(this.identityService.user, this.timesheetId)
        .subscribe((timeUnits) => {
          this.timeUnits = timeUnits;
          timesheetObservable.subscribe(() => {
            this.timesheet.timeUnits = this.timeUnits;
            this.loaded = true;
          });
        });
    });
  }
}
