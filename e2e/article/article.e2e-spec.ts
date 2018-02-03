import { ArticlePageObject } from './article.po';

describe('article page', () => {
  let page: ArticlePageObject;

  beforeEach( () => {
    page = new ArticlePageObject();
  });

  it('should display the article title', () => {
    page.navigateTo();
    expect(page.getArticleTitle()).toEqual('Salt of the Earth');
  });

  it('should display the article description', () => {
    expect(page.getArticleDiscription())
      .toEqual('A modest groundskeeper has the cure.');
  });

  it('should display the article location', () => {
    expect(page.getArticleLocation())
      .toEqual('Oakland Cemetery');
  });

  it('should display the article author', () => {
    expect(page.getArticleAuthor())
      .toEqual('Sally Hedgewick');
  });

  it('should display the article description', () => {
    page.navigateTo('67');
    expect(page.getArticleContent())
      .toEqual('This is the content of the article');
  });
});
