import {} from 'jasmine'; // to get jasmine typescript hints
import { element, browser, by, Key } from 'protractor';

import { LoginPage } from './pages/app.login';

describe('Login', function() {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo('login');
  });

  it('should contain a header containing "Login"', () => {
    expect(page.toolbar.getText()).toEqual('Login');
  });

  it('does not display username hint if form is valid', () => {
    page.makeValid();

    page.submitButton.click();

    expect(page.alert.getAttribute('hidden')).toBeTruthy();
  });
});
