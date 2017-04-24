import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
  ],
  exports: [
    ProjectListComponent
  ],
  providers: []
})
export class ProjectModule {
}
