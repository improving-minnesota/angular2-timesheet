import { Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import * as moment from 'moment';

import { IdentityService } from '../../core';
import { Project } from '../../project/Project';
import { ProjectService } from '../../project/project.service';
import { TimeUnitService } from '../../time-units/timeunit.service';
import { TimeUnit } from '../../time-units/TimeUnit';

@Component({
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss']
})
export class TimesheetEntryComponent implements OnInit {

  private DATE_FORMAT = 'MM/DD/YYYY';
  timesheetId: string;
  projects: Project[];
  // add class properties for the form controls and the form group that they belong to

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

    // retrieve the timesheet id from the route params

    // add a date validator to ensure the date worked is valid (between timesheet start and end)

    // add an hours validator to ensure that no one is working more than 24 hours a day

    // add form controls for dateWorked, hoursWorked, and selectedProject

    // lastly create a new form group and include the new form controls
  }

  cancel() {
    // redirect the user to timesheet details on cancel
  }

  logTime() {
    // lookup field values, format the dates correctly and persist with the timeunit service
  }
}
