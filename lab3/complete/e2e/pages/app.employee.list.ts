import { browser, by, element } from 'protractor';

import { BasePage } from './app.base';
import { login } from '../helpers/login';

export class EmployeeListPage extends BasePage {
  constructor() {
    super();

    login();

    this.navigateTo('home/employees');
  }
}
