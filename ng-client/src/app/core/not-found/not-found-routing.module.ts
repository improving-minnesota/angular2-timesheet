import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '404', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotFoundRoutingModule {}
