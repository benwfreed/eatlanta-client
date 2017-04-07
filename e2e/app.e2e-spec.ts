import { EatlantaWebPage } from './app.po';

describe('eatlanta-web App', function() {
  let page: EatlantaWebPage;

  beforeEach(() => {
    page = new EatlantaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
