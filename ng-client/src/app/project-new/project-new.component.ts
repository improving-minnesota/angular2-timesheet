import { Component, OnInit } from '@angular/core';
import {Project} from "../shared";
import { NgForm } from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {ProjectService} from "../shared";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-project-new',
  templateUrl: 'project-new.component.html',
  styleUrls: ['project-new.component.css'],
  directives: [
    MdCard,
    MdButton,
    MdToolbar,
    MD_INPUT_DIRECTIVES,
    NgForm
  ]
})
export class ProjectNewComponent implements OnInit {

  project:Project;

  constructor(private projectService:ProjectService, private router:Router) {
    this.project = new Project({name: '', description: ''});
  }

  ngOnInit() {
  }

  save() {
    this.projectService.save(this.project).subscribe(() => this.router.navigate(['/home/projects']));
  }

}
