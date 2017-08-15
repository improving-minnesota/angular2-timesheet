/**
 * TODO: Add new route that maps to our employee list component.
 *
 * 1. Import employee list component.
 * 2. Add a new route that maps to the employeel ist component.
 */

import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { PageNotFoundComponent } from './core/not-found.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
// TODO: #1

const appRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  // TODO: #2
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
