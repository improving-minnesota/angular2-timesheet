import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';

import { PageNotFoundComponent } from './core/not-found.component';

import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectNewComponent } from './project/project-new/project-new.component';

import { TimesheetListComponent } from './timesheet/timesheet-list/timesheet-list.component';
import { TimesheetNewComponent } from './timesheet/timesheet-new/timesheet-new.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetEntryComponent } from './timesheet/timesheet-entry/timesheet-entry.component';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee/employee-new/employee-new.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/new', component: ProjectNewComponent },

  { path: 'timesheets', component: TimesheetListComponent },
  { path: 'timesheets/new', component: TimesheetNewComponent },
  { path: 'timesheets/:id', component: TimesheetComponent },

  // add a new route for time sheet entries that includes a timesheet id parameter

  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/new', component: EmployeeNewComponent },

  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ PageNotFoundComponent ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
