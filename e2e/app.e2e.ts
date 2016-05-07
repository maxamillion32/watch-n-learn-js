import { WatchNLearnPage } from './app.po';

describe('watch-n-learn App', function() {
  let page: WatchNLearnPage;

  beforeEach(() => {
    page = new WatchNLearnPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('watch-n-learn works!');
  });
});
