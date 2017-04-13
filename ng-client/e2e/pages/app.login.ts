import { element, by } from 'protractor';

import { BasePage } from './app.base';

export class LoginPage extends BasePage {
  constructor() {
    super();
  }

  makeValid() {
    this.userInput.sendKeys('admin');
    this.passwordInput.sendKeys('password');
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