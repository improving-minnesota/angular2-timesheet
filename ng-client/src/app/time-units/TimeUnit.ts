export interface TimeUnitData {
  _id?: string;
  dateWorked?: Date;
  hoursWorked?: number;
  project_id?: string;
  project?: string;
  timesheet_id?: string;
}

export class TimeUnit {
  _id: string;
  dateWorked: Date;
  hoursWorked: number;
  project_id: string;
  project: string;
  timesheet_id: string;

  constructor(data: TimeUnitData) {
    this._id = data._id;
    this.dateWorked = data.dateWorked;
    this.hoursWorked = data.hoursWorked;
    this.project_id = data.project_id;
    this.project = data.project;
    this.timesheet_id = data.timesheet_id;
  }
}
