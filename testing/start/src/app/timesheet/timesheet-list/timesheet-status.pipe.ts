import {Pipe, PipeTransform} from '@angular/core';
import {Timesheet} from '../Timesheet';
import * as moment from 'moment';

@Pipe({name: 'timesheetStatus'})
export class TimesheetStatusPipe implements PipeTransform {
  transform(timesheet: Timesheet): string {
    const start = moment(timesheet.beginDate);
    const end = moment(timesheet.endDate);
    const now = moment();

    if (start.isBefore(now) && end.isAfter(now)) {
      return 'active';
    } else if (now.isAfter(end)) {
      return 'complete';
    }

    return 'pending';
  }
}
