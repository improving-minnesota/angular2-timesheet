import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

import { ProjectListComponent } from './project-list';
import { ProjectService } from './project.service';

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
  providers: [
    ProjectService
  ]
})
export class ProjectModule {
}
