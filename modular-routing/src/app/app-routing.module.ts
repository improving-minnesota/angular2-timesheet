import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { PageNotFoundComponent } from './core/not-found.component';

const appRoutes: Routes = [
  {
    path: 'employees',
    loadChildren: './employee/employee.module#EmployeeModule',
  },
  {
    path: 'projects',
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: 'timesheets',
    loadChildren: './timesheet/timesheet.module#TimesheetModule',
  },
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
