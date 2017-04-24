import { browser, by, element, ElementFinder } from 'protractor';

import { BasePage } from './app.base';
import { login } from '../helpers/login';

export class EmployeeNewPage extends BasePage {
  public inputs: ElementFinder[];
  constructor() {
    super();

    login();
    this.navigateTo('home/employees/new');

    this.inputs = [
      'firstName',
      'lastName',
      'email',
      'username',
      'password'
    ]
      .map((input: string) => element(by.css(`input[name="${input}"]`)));
  }

  get submitButton() {
    return element(by.css('button[type="submit"]'));
  }

  get title() {
    return element(by.css('.title'));
  }

  public fill() {
    this.inputs
      .forEach((input: ElementFinder) => {
        input.sendKeys('1234FakeValue');
      });
  }

  public clear() {
    this.inputs
      .forEach((input: ElementFinder) => {
        input.clear();
      });
  }
}
