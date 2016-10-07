import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation';
import { ProjectListComponent } from './project-list';
import { EmployeeListComponent } from './employee-list';
import { ProjectNewComponent } from './project-new/project-new.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { TimesheetNewComponent } from './timesheet-new/timesheet-new.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';


//TODO: should each component define it's own route?
const appRoutes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      { path: 'projects/new', component: ProjectNewComponent, pathMatch: 'full'},
      { path: 'employees', component: EmployeeListComponent, pathMatch: 'full'},
      { path: 'employees/new', component: EmployeeNewComponent },
      { path: 'timesheets', component: TimesheetListComponent, pathMatch: 'full' },
      { path: 'timesheets/new', component: TimesheetNewComponent },
      { path: 'timesheets/:id', component: TimesheetComponent },
      { path: 'timesheets/:id/entry', component: TimesheetEntryComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
