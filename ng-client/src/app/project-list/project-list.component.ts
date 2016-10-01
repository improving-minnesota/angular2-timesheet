import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../shared';
import { ProjectService } from '../shared';

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = [];
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  add() {
    this.router.navigateByUrl('/home/projects/new');
  }

}
