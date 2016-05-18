export class WatchNLearnPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('watch-n-learn-app h1')).getText();
  }
}
