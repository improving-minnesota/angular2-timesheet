import { by, element } from 'protractor';

import { BasePage } from './app.base';

export class LoginPage extends BasePage {
  constructor() {
    super();
    this.navigateTo('login');
  }

  public login(fail: boolean = false) {
    if ( fail ) {
      this.userInput.sendKeys('NOT_A_REAL_USER');
      this.passwordInput.sendKeys('HUNTER2');
    } else {
      this.userInput.sendKeys('admin');
      this.passwordInput.sendKeys('password');
    }

    return this.submitButton.click();
  }

  get alert() {
    return element(by.css('.alert'));
  }

  get error() {
    return element(by.css('.alert-content'));
  }

  get form() {
    return element(by.css('form'));
  }

  get submitButton() {
    return element(by.css('button'));
  }

  get toolbar() {
    return element(by.css('md-toolbar'));
  }

  get userInput() {
    return element(by.css('input[name="username"]'));
  }

  get passwordInput() {
    return element(by.css('input[name="password"]'));
  }
}