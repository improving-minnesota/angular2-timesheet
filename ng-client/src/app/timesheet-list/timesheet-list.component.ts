import { Component, OnInit } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon/icon';
import {TimesheetService, Timesheet} from '../shared';
import {IdentityService} from "../auth";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-timesheet-list',
  templateUrl: 'timesheet-list.component.html',
  styleUrls: ['timesheet-list.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  providers: [MdIconRegistry]
})
export class TimesheetListComponent implements OnInit {

  timesheets:Timesheet[];
  format:string;

  constructor(private timesheetService:TimesheetService,
              private identityService:IdentityService,
              private router:Router) {
    this.timesheets = [];
    this.format = 'MM/dd/yy';
  }


  ngOnInit() {
    this.timesheetService.getTimesheets(this.identityService.user).subscribe((timesheets) => {
      this.timesheets = timesheets;
    })
  }

  openTimesheet(timesheet) {
    this.router.navigateByUrl(`/home/timesheets/${timesheet._id}`);
  }

  add() {
    this.router.navigate(['/home/timesheets/new']);
  }

}
