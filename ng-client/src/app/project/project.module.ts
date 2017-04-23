import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
    RouterModule,
  ],
  exports: [ ],
  providers: []
})
export class ProjectModule {
}
