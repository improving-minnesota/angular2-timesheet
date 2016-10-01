import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list.component';

import { MdButtonModule, MdListModule, MdIconModule, MdIconRegistry } from '@angular/material';

import {CommonModule} from '@angular/common';

import { ProjectService } from '../shared';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    MdButtonModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    CommonModule
  ],
  providers: [ProjectService, MdIconRegistry],
  bootstrap: [ProjectListComponent]
})
export class ProjectListModule { }
