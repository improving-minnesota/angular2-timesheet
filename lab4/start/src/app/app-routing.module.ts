import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
// import your new components

import { TimesheetListComponent } from './timesheet/timesheet-list/timesheet-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';


import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectNewComponent } from './project/project-new/project-new.component';

import { PageNotFoundComponent } from './core/not-found.component';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  // add a route for adding employees

  { path: 'timesheets', component: TimesheetListComponent },
  { path: 'timesheets/:id', component: TimesheetComponent },

  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/new', component: ProjectNewComponent },
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
