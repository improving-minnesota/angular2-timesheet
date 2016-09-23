import { NgModule } from '@angular/core';
import { ProjectNewComponent } from './project-new.component';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';

import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';
import { ProjectService } from '../shared';

@NgModule({
  declarations: [
    ProjectNewComponent
  ],
  imports: [
    MdButtonModule,
    MdButtonModule,
    MdCardModule,
    CommonModule,
    MdInputModule,
    FormsModule
  ],
  providers: [ProjectService],
  bootstrap: [ProjectNewComponent]
})
export class ProjectNewModule { }
