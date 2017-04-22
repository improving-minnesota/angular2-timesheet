import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

import { ProjectListComponent } from './project-list/project-list.component';
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
    RouterModule,
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
