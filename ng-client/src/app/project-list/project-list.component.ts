import { Component, OnInit } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {ProjectService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.css'],
  directives: [MD_LIST_DIRECTIVES],
  providers: []
})
export class ProjectListComponent implements OnInit {

  projects:any[];

  constructor(private projectService:ProjectService) {
    this.projects = [];
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

}
