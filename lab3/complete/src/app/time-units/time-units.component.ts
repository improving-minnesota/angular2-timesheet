import { Component, Input } from '@angular/core';

import { TimeUnit } from './TimeUnit';

@Component({
  selector: 'at-time-units',
  templateUrl: './time-units.component.html',
  styleUrls: ['./time-units.component.scss']
})
export class TimeUnitsComponent {

  @Input()
  timeUnits: TimeUnit[];

  @Input()
  timesheetId: string;

  @Input()
  dateFormat: string;

  constructor() {
  }
}
