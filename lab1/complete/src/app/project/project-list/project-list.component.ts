import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Project';

@Component({
  selector: 'at-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) {
    this.projects = [];
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
