import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdCardModule,
  MdListModule,
  MdButtonModule,
} from '@angular/material';

import { TimeUnitsComponent } from './time-units.component';

@NgModule({
  declarations: [
    TimeUnitsComponent
  ],
  exports: [ TimeUnitsComponent ],
  imports: [
    CommonModule,
    MdListModule,
    MdCardModule,
    MdButtonModule
  ]
})
export class TimeUnitsModule { }
