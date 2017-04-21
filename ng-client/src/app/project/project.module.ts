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

import { ProjectRootComponent } from './project-root/project-root.component';
import { ProjectNewComponent } from './project-new';
import { ProjectListComponent } from './project-list';
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
    RouterModule,
  ],
  exports: [],
  providers: []
})
export class ProjectModule {
}
