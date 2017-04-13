import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule
} from '@angular/material';

import { LoginComponent } from './login.component';
import {
  IdentityService,
  LoginService
} from '../core';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    FormsModule
  ],
  providers: [LoginService, IdentityService]
})
export class LoginModule { }
