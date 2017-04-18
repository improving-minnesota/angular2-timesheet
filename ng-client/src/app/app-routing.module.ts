import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
