import { Component, OnInit } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {TimesheetService} from '../shared';
import {IdentityService} from "../auth";

@Component({
  moduleId: module.id,
  selector: 'app-timesheet-list',
  templateUrl: 'timesheet-list.component.html',
  styleUrls: ['timesheet-list.component.css'],
  directives: [MD_LIST_DIRECTIVES],
  providers: []
})
export class TimesheetListComponent implements OnInit {

  timesheets:any[];
  format:string;

  constructor(private timesheetService:TimesheetService, private identityService:IdentityService) {
    this.timesheets = [];
    this.format = 'MM/dd/yy';
  }


  ngOnInit() {
    this.timesheetService.getTimesheets(this.identityService.user).subscribe((timesheets) => {
      this.timesheets = timesheets;
    })
  }

  openTimesheet(timesheet) {
    console.log('open', timesheet);
  }

}
