import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';

import * as moment from 'moment';

import {IdentityService} from '../../auth';
import {Project, ProjectService} from '../../project';
import {TimeUnit, TimeUnitService} from '../../time-units';

@Component({
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss']
})
export class TimesheetEntryComponent implements OnInit {

  private DATE_FORMAT: string = 'MM/DD/YYYY';
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

    let validateDateWorked = (control: FormControl) => {
      let m = moment(control.value, this.DATE_FORMAT, true);

      // TODO: Ensure that date is in range.
      return m.isValid() ? null : {value: false};
    };

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
      dateWorked:  moment(this.dateWorked.value, this.DATE_FORMAT).toDate(),
      hoursWorked: this.hoursWorked.value,
      timesheet_id: this.timesheetId,
      project_id: this.selectedProject.value._id
    });

    this.timeUnitService.create(this.identityService.user, timeUnit).subscribe((result) => {
      this.router.navigateByUrl(`/home/timesheets/${this.timesheetId}`);
    });
  }
}
