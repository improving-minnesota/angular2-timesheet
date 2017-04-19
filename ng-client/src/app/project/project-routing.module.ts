import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { ProjectRootComponent } from './project-root/project-root.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { AuthGuard } from '../core/auth-guard.service';

const employeeRoutes: Routes = [
  {
    path: '',
    component: ProjectRootComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        children: [
          { path: '', component: ProjectListComponent },
          { path: 'new', component: ProjectNewComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  declarations: [
    ProjectRootComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
