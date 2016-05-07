import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WatchNLearnAppComponent } from '../app/watch-n-learn.component';

beforeEachProviders(() => [WatchNLearnAppComponent]);

describe('App: WatchNLearn', () => {
  it('should create the app',
      inject([WatchNLearnAppComponent], (app: WatchNLearnAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'watch-n-learn works!\'',
      inject([WatchNLearnAppComponent], (app: WatchNLearnAppComponent) => {
    expect(app.title).toEqual('watch-n-learn works!');
  }));
});
