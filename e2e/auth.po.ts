import { browser, element, by } from 'protractor';

export class AuthPageObject {
  navigateTo(page = 'register') {
    let path = `/${page}`;
    browser.get(path);
  }

  enterUsername(username) {
    return element(by.id('username')).sendKeys(username);
  }

  enterPassword(password, confirm = false) {
    let id = confirm ? 'confirmpassword' : 'password';
    return element(by.id(id)).sendKeys(password);
  }

  submit() {
    return element(by.buttonText('Submit')).click();
  }

  logout() {
    return element(by.linkText('Logout'));
  }
}
