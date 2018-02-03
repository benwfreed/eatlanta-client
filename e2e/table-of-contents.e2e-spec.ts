import { TableOfContentsPageObject } from './table-of-contents.po';

describe('table of contents', function() {
  let page: TableOfContentsPageObject;

  beforeEach(() => {
    page = new TableOfContentsPageObject();
  });

  it('should display eatlanta title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('eatlanta');
  });

  it('should display three articles', () => {
    expect(page.getArticleCount()).toEqual(3);
  });

  it('should display article titles', () => {
    const titles = [
      'East Meets South',
      'Salt of the Earth',
      'Kindling'
    ];
    page.getArticleTitles()
      .each( (article, id) => {
        expect(article.getText()).toEqual(titles[id]);
      });
  });
});
