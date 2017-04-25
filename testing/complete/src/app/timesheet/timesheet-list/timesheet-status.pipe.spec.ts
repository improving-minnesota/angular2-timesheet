import {} from 'jasmine'; // describe/beforeEach/etc.
import { TimesheetStatusPipe } from './timesheet-status.pipe';
import { Timesheet } from '../Timesheet';

import * as moment from 'moment';

describe('Timesheet status pipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new TimesheetStatusPipe();
  });

  it('returns pending if timesheet is empty object', () => {
    expect(pipe.transform(new Timesheet({}))).toBe('pending');
  });

  it('returns active if now is between start and end date', () => {
    const now = moment();
    const beginDate = now.clone().subtract(1, 'days').toDate();
    const endDate = now.clone().add(1, 'days').toDate();
    expect(pipe.transform(new Timesheet({ beginDate, endDate }))).toBe('active');
  });

  it('returns completed if now is after endDate', () => {
    const now = moment();
    const beginDate = now.clone().subtract(5, 'days').toDate();
    const endDate = now.clone().subtract(1, 'days').toDate();
    expect(pipe.transform(new Timesheet({ beginDate, endDate }))).toBe('complete');
  });
});
