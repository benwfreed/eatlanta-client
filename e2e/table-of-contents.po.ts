import { browser, element, by } from 'protractor';

export class TableOfContentsPageObject {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('h2')).getText();
  }

  getArticleCount() {
    return element.all(by.css('.article')).count();
  }

  getArticleTitles() {
    return element.all(by.css('.article-title'));
  }
}
