import { NgModule } from '@angular/core';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

import { ProjectNewComponent } from './project-new';
import { ProjectListComponent } from './project-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from './project.service';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
  ],
  exports: [],
  providers: []
})
export class ProjectModule {
}
