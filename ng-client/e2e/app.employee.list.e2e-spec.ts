import {} from 'jasmine'; // to get jasmine typescript hints
import { browser, by, element } from 'protractor';

import { EmployeeListPage } from './pages/app.employee.list';
import { login } from './helpers/login';

describe('New Employee', () => {
  let page: EmployeeListPage;

  beforeEach(() => {
    page = new EmployeeListPage();
  });
});
