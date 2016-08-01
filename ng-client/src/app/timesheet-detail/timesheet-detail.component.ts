import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdentityService} from '../auth';
import {TimesheetService} from '../shared';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'app-timesheet-detail',
  templateUrl: 'timesheet-detail.component.html',
  styleUrls: ['timesheet-detail.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES]
})
export class TimesheetDetailComponent implements OnInit {
  timesheet: any;
  timeUnits: any[];
  timesheetLoaded: boolean;
  timeUnitsLoaded: boolean;
  dateFormat: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private identityService: IdentityService,
              private timesheetService: TimesheetService) {
    this.timesheetLoaded = false;
    this.timeUnitsLoaded = false;
    this.dateFormat = 'MM/dd/yy';
  }

  ngOnInit() {
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

  logTime() {
    console.log('implement logging time');
  }

  edit() {
    console.log('implement edit timesheet');
  }

  cancel() {
    this.router.navigateByUrl('/home/timesheets');
  }


}
