import { PragmaticMediaPage } from './app.po';

describe('pragmatic-media App', function() {
  let page: PragmaticMediaPage;

  beforeEach(() => {
    page = new PragmaticMediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
