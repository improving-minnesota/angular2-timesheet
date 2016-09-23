import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Timesheet} from '../shared/Timesheet';

@Component({
  selector: 'app-timesheet-detail',
  templateUrl: 'timesheet-detail.component.html',
  styleUrls: ['timesheet-detail.component.scss']
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
