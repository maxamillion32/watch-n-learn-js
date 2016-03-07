import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {AuthComponent} from '../auth.component/auth.component'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component/app.component.html' ,
  directives: [
      ROUTER_DIRECTIVES
     ],
  providers: [
      ROUTER_PROVIDERS
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