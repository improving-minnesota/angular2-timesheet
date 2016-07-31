import { Component, OnInit } from '@angular/core';
import {NgForm, FORM_DIRECTIVES, FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Router} from "@angular/router";

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';

import {Timesheet, TimesheetService} from "../shared";
import {IdentityService} from "../auth";

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-timesheet-new',
  templateUrl: 'timesheet-new.component.html',
  styleUrls: ['timesheet-new.component.css'],
  providers: [],
  directives: [
    MdCard,
    MdButton,
    MD_INPUT_DIRECTIVES,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    NgForm
  ]
})
export class TimesheetNewComponent implements OnInit {

  timesheet:Timesheet;
  endDate:FormControl;
  beginDate:FormControl;

  constructor(private timesheetService:TimesheetService,
              private identityService:IdentityService,
              private router:Router) {
    this.timesheet = new Timesheet({user_id: identityService.user.id});

  }

  ngOnInit() {
    function validateDate(control:FormControl){
      let m = moment(control.value, 'MM/DD/YYYY', true);
      return m.isValid() ? null : {value: false};
    }

    this.endDate = new FormControl('', validateDate);
    this.beginDate = new FormControl('', validateDate);
  }

  save(data:NgForm) {
    this.timesheetService.save(this.identityService.user, this.timesheet)
      .subscribe(() => this.router.navigate(['/home/timesheets']));
  }
}
