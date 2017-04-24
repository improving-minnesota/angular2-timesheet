// implement the TimesheetStatusPipe here
// we will want to return active/complete or pending depending on the timesheet.beginDate and timesheet.endDate
// A timesheet is active if beginDate < current && current < endDate
// A timesheet is complete if endDate <= current
// A timesheet is pending if neither case is true
// Note: moment is helpful here, i.e. isBefore, isAfter
