import {Component, OnInit, Input} from '@angular/core';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {Router} from '@angular/router';
import {Timesheet} from '../shared/Timesheet';

@Component({
  moduleId: module.id,
  selector: 'app-timesheet-detail',
  templateUrl: 'timesheet-detail.component.html',
  styleUrls: ['timesheet-detail.component.scss'],
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class TimesheetDetailComponent implements OnInit {

  @Input()
  timesheet: Timesheet;

  @Input()
  dateFormat: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  edit() {
    console.log('implement edit timesheet');
  }

  cancel() {
    this.router.navigateByUrl('/home/timesheets');
  }


}
