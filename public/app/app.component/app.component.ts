import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AuthComponent} from '../auth.component/auth.component';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component/app.component.html' ,
  directives: [
      ROUTER_DIRECTIVES
     ],
  providers: [
      AuthService,
      ROUTER_PROVIDERS,
      HTTP_PROVIDERS
     ]
})

@RouteConfig([
    {
        path:'/auth/:type',
        name: 'Auth',
        component: AuthComponent
    }
])

export class AppComponent{}