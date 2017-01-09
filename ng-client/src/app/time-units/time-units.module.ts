import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MdCardModule, MdListModule } from '@angular/material';

import {TimeUnitsComponent} from './time-units.component';

@NgModule({
  declarations: [
    TimeUnitsComponent
  ],
  exports: [TimeUnitsComponent],
  imports: [
    CommonModule, MdListModule, MdCardModule
  ]
})
export class TimeUnitsModule { }
