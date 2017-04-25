import {} from 'jasmine'; // to get jasmine typescript hints
import { browser, by, element, Key } from 'protractor';

import { EmployeeNewPage } from './pages/app.employee.new';
import { login } from './helpers/login';

describe('New Employee', function() {
  let page: EmployeeNewPage;

  beforeEach(() => {
    page = new EmployeeNewPage();
  });

  it('should contain a header containing "New Employee"', () => {
    expect(page.title.getText()).toEqual('New Employee');
  });

  it('removes [disabled] state on button when all fields are filled', () => {
    page.fill();

    expect(page.submitButton.getAttribute('disabled')).toBeNull();

    page.clear();
  });

  it('shows an alert if field is not filled out (after entering characters)', () => {
    const firstName = page.inputs[0];

    firstName.sendKeys('D');
    firstName.sendKeys(Key.BACK_SPACE);

    const alert = element.all(by.css('.alert')).first();
    expect(alert.getAttribute('hidden')).toBeNull();
  });
});
