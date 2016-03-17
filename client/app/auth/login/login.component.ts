import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'login',
    templateUrl: './app/auth/login/login.component.html',
    styleUrls:['./app/auth/login/login.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class LoginComponent {}