import { browser, by, element } from 'protractor';

import { LoginPage } from '../pages/app.login';

export function login() {
  const login: LoginPage = new LoginPage();

  return login.login();
}
