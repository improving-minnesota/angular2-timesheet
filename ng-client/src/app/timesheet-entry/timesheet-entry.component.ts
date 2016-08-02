import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm, FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';

import * as moment from 'moment';

import {IdentityService} from '../auth';
import {Project, ProjectService, TimeUnit, TimeUnitService} from '../shared';

@Component({
  moduleId: module.id,
  templateUrl: 'timesheet-entry.component.html',
  styleUrls: ['timesheet-entry.component.css'],
  directives: [
    MD_INPUT_DIRECTIVES,
    MdButton,
    MdCard,
    NgForm,
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    ProjectService,
    TimeUnitService
  ]
})
export class TimesheetEntryComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  timeUnit: TimeUnit;
  dateWorked: FormControl;

  constructor(private identityService: IdentityService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private timeUnitService: TimeUnitService) {
    this.timeUnit = new TimeUnit({});
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });

    this.route.params.subscribe((params) => {
      this.timeUnit.timesheet_id = params['id'];
    });

    function validateDateWorked(control: FormControl) {
      let m = moment(control.value, 'MM/DD/YYYY', true);

      // TODO: Ensure that date is in range.
      return m.isValid() ? null : {value: false};
    }

    this.dateWorked = new FormControl('', validateDateWorked);
  }

  logTime() {
    this.timeUnit.project_id = this.selectedProject._id;
    this.timeUnit.project = this.selectedProject.name;

    this.timeUnitService.create(this.identityService.user, this.timeUnit).subscribe((result) => {
      this.router.navigateByUrl(`/home/timesheets/${this.timeUnit.timesheet_id}`);
    });
  }
}
