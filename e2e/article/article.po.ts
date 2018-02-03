import { browser, element, by } from 'protractor';

export class ArticlePageObject {
  navigateTo(id = '1') {
    let path = `/article/${id}`;
    return browser.get(path);
  }

  getArticleTitle() {
    return element(by.css('.article-title')).getText();
  }

  getArticleDiscription() {
    return element(by.css('.description')).getText();
  }

  getArticleLocation() {
    return element(by.css('.location')).getText();
  }

  getArticleAuthor() {
    return element(by.css('.author')).getText();
  }

  getArticleContent() {
    return element(by.css('.main-text')).getText();
  }
}
