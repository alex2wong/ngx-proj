import { Ng2ProjPage } from './app.po';

describe('ng2-proj App', function() {
  let page: Ng2ProjPage;

  beforeEach(() => {
    page = new Ng2ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
