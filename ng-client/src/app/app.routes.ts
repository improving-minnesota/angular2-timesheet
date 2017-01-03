import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation';
import { EmployeeListComponent, EmployeeNewComponent } from './employee';
import { ProjectNewComponent, ProjectListComponent } from './project';
import { TimesheetComponent, TimesheetNewComponent, TimesheetListComponent, TimesheetEntryComponent } from './timesheet';

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
