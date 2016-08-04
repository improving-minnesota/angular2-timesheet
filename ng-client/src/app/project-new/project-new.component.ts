import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';

import {ProjectService, Project} from '../shared';


@Component({
  selector: 'app-project-new',
  templateUrl: 'project-new.component.html',
  styleUrls: ['project-new.component.css'],
  directives: [
    MdCard,
    MdButton,
    MD_INPUT_DIRECTIVES,
    NgForm
  ],
  providers: [ProjectService]
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
