import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { 
  FIREBASE_PROVIDERS,
  defaultFirebase,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig } from 'angularfire2';

import { MdIconRegistry } from '@angular2-material/icon';

import { WatchNLearnAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(WatchNLearnAppComponent, [
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  MdIconRegistry,
  defaultFirebase('https://watch-n-learn.firebaseio.com/'),
  firebaseAuthConfig({
    provider: AuthProviders.Github,
    method: AuthMethods.Redirect
  })
]);
