import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WatchNLearnAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(WatchNLearnAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://watch-n-learn.firebaseio.com/')
]);
