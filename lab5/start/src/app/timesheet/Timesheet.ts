import { TimeUnit } from '../time-units/TimeUnit';

export interface TimesheetData {
  _id?: string;
  name?: string;
  beginDate?: Date;
  endDate?: Date;
  description?: string;
  user_id?: string;
}

export class Timesheet {
  _id: string;
  name: string;
  beginDate: Date;
  endDate: Date;
  description: string;
  user_id: string;
  timeUnits: TimeUnit[];

  constructor(data: TimesheetData) {
    this._id = data._id;
    this.name = data.name;
    this.beginDate = data.beginDate;
    this.endDate = data.endDate;
    this.description = data.description;
    this.user_id = data.user_id;
  }

}
