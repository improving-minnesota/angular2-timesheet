import {Pipe, PipeTransform} from '@angular/core';
import {Timesheet} from '../shared/Timesheet';
import * as moment from 'moment';

@Pipe({name: 'timesheetComplete'})
export class TimesheetCompletePipe implements PipeTransform {
  transform(timesheet: Timesheet, exponent: string): string {
    let current = moment(timesheet.beginDate);
    let end = moment(timesheet.endDate);

    let totalHours = 0;

    do {
      if (current.isoWeekday() !== 6 && current.isoWeekday() !== 7) {
        totalHours += 8;
      }

      current = current.add(1, 'day');

    } while (!current.isAfter(end));

    let hoursWorked = 0;

    if(totalHours > 0) {
      for (let unit of timesheet.timeUnits) {
        console.log('unit', unit);
        hoursWorked += unit.hoursWorked;
      }
    }

    let percentage = hoursWorked / totalHours * 100;

    return `${percentage}% completed`;
  }
}
