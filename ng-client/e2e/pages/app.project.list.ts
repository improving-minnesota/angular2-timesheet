import { by, element } from 'protractor';

import { BasePage } from './app.base';
import { login } from '../helpers/login';

export class ProjectListPage extends BasePage {
  constructor() {
    super();

    login();
  }

  get projects() {
    return element.all(by.css('.project'));
  }
}
