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
    // use the project service to retrieve a list of all known projects so the user can log time to a project
    // retrieve the timesheet id from the route parameters of this route

    /**
     * create a validateDateWorked method to validate that the value of dateWorked is exists between the timesheet
     * start and end
     */
    const validateDateWorked = (control: FormControl) => {

    };

    /**
     * create a validateHours function to validate that the number off hours is less than 24
     */
    function validateHours(control: FormControl) {

    }

    // create new form controls for each of our form fields, including validation
    // create a new form group, including our new form controls
  }

  cancel() {
    // redirect the user to the timesheet details view /timesheets/:id
  }

  logTime() {
    // create a new TimeUnit instance based on the properties of this component
    // persist the new TimeUnit using the TimeUnitService.create() method.
  }
}
