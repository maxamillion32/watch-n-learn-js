import {Component} from 'angular2/core';

import {RegisterComponent} from '../auth/register/register.component'

@Component({
  selector: 'app',
  templateUrl: './app/app.component/app.component.html',
  directives:[
      RegisterComponent
  ]
})

export class AppComponent {}