import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';


import {UserService} from '../auth/user.service';

import {HomeComponent} from '../home/home.component';
import {RegisterComponent} from '../auth/register/register.component';
import {LoginComponent} from '../auth/login/login.component';


@Component({
  selector: 'app',
  templateUrl: './app/app.component/app.component.html',
  styleUrls: ['./app/app.component/app.component.css'],
  directives: [
      ROUTER_DIRECTIVES
  ],
  providers: [
      ROUTER_PROVIDERS,
      HTTP_PROVIDERS,
      UserService
  ]
})

@RouteConfig([
    {
      path: '/',
      name: 'Home',
      useAsDefault: true,
      component: HomeComponent
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
])

export class AppComponent {}