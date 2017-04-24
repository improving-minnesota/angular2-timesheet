import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'at-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor() {
    this.projects = [];
  }

  ngOnInit() {
    this.projects = [
      new Project({
        name: 'Great Project',
        description: 'A great project!'
      }),
      new Project({
        name: 'Good Project',
        description: 'A pretty good project.'
      }),
      new Project({
        name: 'The Worst Project',
        description: 'Nobody wants to work on this.'
      })
    ];
  }
}
