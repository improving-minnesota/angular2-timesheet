import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {}
