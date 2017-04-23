import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ProjectService } from '../project.service';
import { Project } from '../Project';

@Component({
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService, private router: Router) {
    this.project = new Project({name: '', description: ''});
  }

  ngOnInit() {}

  save() {
    this.projectService.save(this.project).subscribe(() => this.router.navigate(['/projects']));
  }

}
