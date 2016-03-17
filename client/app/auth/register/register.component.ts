import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'register',
    templateUrl: './app/auth/register/register.component.html',
    styleUrls:['./app/auth/register/register.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class RegisterComponent {}