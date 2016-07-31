import { provideRouter, RouterConfig } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation'
import { ProjectListComponent } from './project-list'
import { EmployeeListComponent } from './employee-list'
import {TimesheetDetailComponent} from "./timesheet-detail";
import {ProjectNewComponent} from "./project-new/project-new.component";

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      { path: 'projects/new', component: ProjectNewComponent, pathMatch: 'full'},
      { path: 'employees', component: EmployeeListComponent, pathMatch: 'full'},
      { path: 'employees/new', component: EmployeeListComponent },
      { path: 'timesheets', component: TimesheetListComponent, pathMatch: 'full' },
      { path: 'timesheets/:id', component: TimesheetDetailComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
