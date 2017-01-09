import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MdButtonModule, MdInputModule, MdToolbarModule, MdCardModule } from '@angular/material';

import {LoginComponent} from './login.component'
import { LoginService } from '../shared';
import {IdentityService} from '../auth';

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
