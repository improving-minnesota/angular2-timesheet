import { browser, element, by } from 'protractor';

export class TempPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('at-root h1')).getText();
  }
}
