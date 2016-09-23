import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ProjectService, Project} from '../shared';


@Component({
  selector: 'app-project-new',
  templateUrl: 'project-new.component.html',
  styleUrls: ['project-new.component.scss'],
  providers: []
})
export class ProjectNewComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService, private router: Router) {
    this.project = new Project({name: '', description: ''});
  }

  ngOnInit() {
  }

  save() {
    this.projectService.save(this.project).subscribe(() => this.router.navigate(['/home/projects']));
  }

}
