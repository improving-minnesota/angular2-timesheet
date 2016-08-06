import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormGroup} from '@angular/forms';

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';

import * as moment from 'moment';

import {IdentityService} from '../auth';
import {Project, ProjectService, TimeUnit, TimeUnitService} from '../shared';

@Component({
  templateUrl: 'timesheet-entry.component.html',
  styleUrls: ['timesheet-entry.component.scss'],
  directives: [
    MD_INPUT_DIRECTIVES,
    MdButton,
    MdCard,
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    ProjectService,
    TimeUnitService
  ]
})
export class TimesheetEntryComponent implements OnInit {
  timesheetId: string;
  projects: Project[];
  form: FormGroup;
  selectedProject: FormControl;
  dateWorked: FormControl;
  hoursWorked: FormControl;

  constructor(private identityService: IdentityService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private timeUnitService: TimeUnitService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });

    this.route.params.subscribe((params) => {
      this.timesheetId = params['id'];
    });

    function validateDateWorked(control: FormControl) {
      let m = moment(control.value, 'MM/DD/YYYY', true);

      // TODO: Ensure that date is in range.
      return m.isValid() ? null : {value: false};
    }

    function validateHours(control: FormControl) {
      return (control.value > 0 && control.value <= 24) ? null : {value: false};
    }

    this.dateWorked = new FormControl('', validateDateWorked);
    this.hoursWorked = new FormControl('', [Validators.required, validateHours]);
    this.selectedProject = new FormControl('', Validators.required);
    this.form = new FormGroup({
      selectedProject: this.selectedProject,
      hoursWorked: this.hoursWorked,
      dateWorked: this.dateWorked
    });
  }

  cancel(): boolean {
    this.router.navigateByUrl(`/home/timesheets/${this.timesheetId}`);
    return false;
  }

  logTime() {
    const timeUnit = new TimeUnit({
      dateWorked: this.dateWorked.value,
      hoursWorked: this.hoursWorked.value,
      timesheet_id: this.timesheetId,
      project_id: this.selectedProject.value._id
    });

    this.timeUnitService.create(this.identityService.user, timeUnit).subscribe((result) => {
      this.router.navigateByUrl(`/home/timesheets/${this.timesheetId}`);
    });
  }
}
