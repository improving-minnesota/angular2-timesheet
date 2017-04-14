import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetNewComponent } from './timesheet-new/timesheet-new.component';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';

const employeeRoutes: Routes = [
  { path: 'timesheets', component: TimesheetListComponent},
  { path: 'timesheets/new', component: TimesheetNewComponent },
  { path: 'timesheets/:id', component: TimesheetComponent },
  { path: 'timesheets/:id/entry', component: TimesheetEntryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TimesheetRoutingModule { }
