import { FidentityPage } from './app.po';

describe('fidentity App', function() {
  let page: FidentityPage;

  beforeEach(() => {
    page = new FidentityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
