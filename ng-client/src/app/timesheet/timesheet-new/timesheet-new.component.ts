import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Timesheet} from '../Timesheet';

import * as moment from 'moment';
import {TimesheetService} from '../timesheet.service';
import {IdentityService} from '../../auth';

@Component({
  selector: 'at-timesheet-new',
  templateUrl: './timesheet-new.component.html',
  styleUrls: ['./timesheet-new.component.scss'],
  providers: [TimesheetService]
})
export class TimesheetNewComponent implements OnInit {

  private DATE_FORMAT = 'MM/DD/YYYY';
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
    const validateDate = (control: FormControl) =>  {
      const m = moment(control.value, this.DATE_FORMAT, true);
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
    const data = this.form.value;

    data.beginDate = moment(data.beginDate, this.DATE_FORMAT).toDate();
    data.endDate = moment(data.endDate, this.DATE_FORMAT).toDate();
    data.user_id = this.identityService.user.id;

    const timesheet = new Timesheet(data);

    this.timesheetService.save(this.identityService.user, timesheet)
      .subscribe(() => this.router.navigate(['/home/timesheets']));
  }
}
