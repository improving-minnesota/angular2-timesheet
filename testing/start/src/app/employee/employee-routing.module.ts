import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';

import { EmployeeRootComponent } from './employee-root/employee-root.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';

const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeRootComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        children: [
          { path: '', component: EmployeeListComponent },
          { path: 'new', component: EmployeeNewComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  declarations: [ EmployeeRootComponent ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }
