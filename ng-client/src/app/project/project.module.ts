import { NgModule } from '@angular/core';
import { ProjectNewComponent } from './project-new';
import { ProjectListComponent } from './project-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ProjectService } from './project.service';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [
    ProjectNewComponent, ProjectListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    ProjectRoutingModule,
  ],
  exports: [],
  providers: [ ProjectService ]
})
export class ProjectModule {
}
