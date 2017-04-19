import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';

import { TimesheetRootComponent } from './timesheet-root/timesheet-root.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetNewComponent } from './timesheet-new/timesheet-new.component';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';

const timesheetRoutes: Routes = [
  {
    path: 'timesheets',
    component: TimesheetRootComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        children: [
          { path: '', component: TimesheetListComponent },
          { path: 'new', component: TimesheetNewComponent },
          { path: ':id', component: TimesheetComponent },
          { path: ':id/entry', component: TimesheetEntryComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(timesheetRoutes)
  ],
  declarations: [ TimesheetRootComponent ],
  exports: [
    RouterModule
  ]
})
export class TimesheetRoutingModule { }
