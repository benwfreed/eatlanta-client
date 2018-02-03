import { browser, element, by } from 'protractor';
import { AuthPageObject } from './auth.po';
import { UtilE2E } from './e2e-util';

describe('register and login', () => {

  let page: AuthPageObject;

  beforeEach(() => {
    page = new AuthPageObject();
  });

  it('should successfully register a new user', () => {
    page.navigateTo('register');
    page.enterUsername('Galileo');
    page.enterPassword('Password123');
    let confirmpassword = true;
    page.enterPassword('Password123', confirmpassword);
    page.submit();
    page.logout();
  });

  it('should successfully login', () => {
    page.navigateTo('login');
    page.enterUsername('Galileo');
    page.enterPassword('Password123');
    page.submit();
    page.logout();
    // remove the user so that it can
    // be registered in repeated test
    let util = new UtilE2E();
    util.removeUser('Galileo');
  });

});
