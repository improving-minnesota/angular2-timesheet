import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { PageNotFoundComponent } from './core/not-found.component';
import { ProjectListComponent } from './project/project-list/project-list.component';

const appRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  // add employee routing
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
