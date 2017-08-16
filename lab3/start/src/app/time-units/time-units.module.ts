/**
 * TODO: Add routing for the newly added components.
 *
 * 1. Import new dependencies.
 * 2. Add new components to declarations so that they are available for use.
 * 3. Export components that will be used in other modules.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdCardModule,
  MdListModule,
  MdButtonModule,
} from '@angular/material';

import { TimeUnitService } from './timeunit.service';

// TODO #1

@NgModule({
  declarations: [
    // TODO #2
  ],
  exports: [
    // TODO #3
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
