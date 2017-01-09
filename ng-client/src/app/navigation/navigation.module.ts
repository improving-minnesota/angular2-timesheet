import { NgModule } from '@angular/core';

import { MdButtonModule, MdToolbarModule } from '@angular/material';

import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import {LocalStorage} from '../auth'

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers: [LocalStorage]
})
export class NavigationModule { }
