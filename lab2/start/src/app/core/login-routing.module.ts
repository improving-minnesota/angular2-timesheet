import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

import {
  MdCardModule,
  MdInputModule
} from '@angular/material';

import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginRoutingModule {}
