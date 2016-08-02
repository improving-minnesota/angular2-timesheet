import {Component, OnInit, Input} from '@angular/core';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';

@Component({
  moduleId: module.id,
  selector: 'app-time-units',
  templateUrl: 'time-units.component.html',
  styleUrls: ['time-units.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES]
})
export class TimeUnitsComponent implements OnInit {

  @Input()
  // TODO: make this a timeUnit[] when that class is created
  timeUnits: any[];

  ngOnInit() {

  }

  logTime() {
    console.log('implement logging time');
  }

}
