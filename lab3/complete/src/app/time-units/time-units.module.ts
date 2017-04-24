import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdCardModule,
  MdListModule,
  MdButtonModule,
} from '@angular/material';

import { TimeUnitsComponent } from './time-units.component';
import { TimeUnitService } from './timeunit.service';

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
  ],
  providers:[ TimeUnitService ]
})
export class TimeUnitsModule { }
