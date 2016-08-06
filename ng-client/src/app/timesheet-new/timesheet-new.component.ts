import {Component, OnInit} from '@angular/core';
import {FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';

import {Timesheet, TimesheetService} from '../shared';
import {IdentityService} from '../auth';

import * as moment from 'moment';

@Component({
  selector: 'app-timesheet-new',
  templateUrl: 'timesheet-new.component.html',
  styleUrls: ['timesheet-new.component.scss'],
  providers: [TimesheetService],
  directives: [
    MdCard,
    MdButton,
    MD_INPUT_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
  ]
})
export class TimesheetNewComponent implements OnInit {

  private DATE_FORMAT: string = 'MM/DD/YYYY';
  endDate: FormControl;
  beginDate: FormControl;
  name: FormControl;
  description: FormControl;
  form: FormGroup;

  constructor(private timesheetService: TimesheetService,
              private identityService: IdentityService,
              private router: Router) {
  }

  ngOnInit() {
    let validateDate = (control: FormControl) =>  {
      let m = moment(control.value, this.DATE_FORMAT, true);
      return m.isValid() ? null : {value: false};
    };

    this.beginDate = new FormControl('', validateDate);
    this.endDate = new FormControl('', validateDate);
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.form = new FormGroup({
      name: this.name,
      description: this.description,
      beginDate: this.beginDate,
      endDate: this.endDate
    });

  }

  save() {
    let data = this.form.value;

    data.beginDate = moment(data.beginDate, this.DATE_FORMAT).toDate();
    data.endDate = moment(data.endDate, this.DATE_FORMAT).toDate();
    data.user_id = this.identityService.user.id;

    let timesheet = new Timesheet(data);

    this.timesheetService.save(this.identityService.user, timesheet)
      .subscribe(() => this.router.navigate(['/home/timesheets']));
  }
}
