import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdCardModule,
  MdListModule,
  MdButtonModule,
} from '@angular/material';

import { TimeUnitService } from './timeunit.service';

@NgModule({
  declarations: [
    // declare your new components
  ],
  exports: [
    // export any new components that other modules might need
  ],
  imports: [
    CommonModule,
    MdListModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [ TimeUnitService ]
})
export class TimeUnitsModule { }
