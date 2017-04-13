import { browser } from 'protractor';

export class BasePage {
  constructor() {}

  navigateTo(path: string) {
    const normalized = path.charAt(0) === '/' ? path : `/${path}`;
    return browser.get(normalized);
  }
}