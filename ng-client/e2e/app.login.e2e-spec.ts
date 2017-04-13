import {} from 'jasmine'; // to get jasmine typescript hints
import { browser, by, element } from 'protractor';

import { LoginPage } from './pages/app.login';

describe('Login', function() {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should contain a header containing "Login"', () => {
    expect(page.toolbar.getText()).toEqual('Login');
  });

  // note: these credentials will not work, which is desired
  it('does not display username hint if form is valid', () => {
    page.login(true);

    expect(page.alert.getAttribute('hidden')).toBeTruthy();
  });

  it('shows an incorrect warning if credentials are not accepted', () => {
    page.login(true);

    expect(page.error).toBeDefined();
    expect(page.error.getText()).toContain('incorrect');
  });
});
