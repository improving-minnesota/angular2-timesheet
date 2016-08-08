import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { TimeUnit } from '../shared/TimeUnit';

@Component({
  selector: 'app-time-units',
  templateUrl: 'time-units.component.html',
  styleUrls: ['time-units.component.scss'],
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES]
})
export class TimeUnitsComponent {

  @Input()
  timeUnits: TimeUnit[];

  @Input()
  timesheetId: string;

  constructor(private router: Router) {
  }

  logTime() {
    this.router.navigateByUrl(`/home/timesheets/${this.timesheetId}/entry`);
  }
}
