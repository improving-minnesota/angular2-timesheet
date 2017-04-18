import {Pipe, PipeTransform} from '@angular/core';
import {Timesheet} from '../Timesheet';
import * as moment from 'moment';

@Pipe({name: 'timesheetComplete'})
export class TimesheetCompletePipe implements PipeTransform {
  transform(timesheet: Timesheet): string {
    let current = moment(timesheet.beginDate);
    const end = moment(timesheet.endDate);

    let totalHours = 0;

    do {
      if (current.isoWeekday() !== 6 && current.isoWeekday() !== 7) {
        totalHours += 8;
      }

      current = current.add(1, 'day');

    } while (!current.isAfter(end));

    let hoursWorked = 0;

    if (totalHours > 0) {
      for (const unit of timesheet.timeUnits) {
        hoursWorked += unit.hoursWorked;
      }
    }

    const percentage = hoursWorked / totalHours * 100;

    const rounded = isNaN(percentage) ? 0 : Math.round(percentage * 100) / 100;

    return `${rounded}% completed`;
  }
}
