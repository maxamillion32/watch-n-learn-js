import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'register',
    templateUrl: './app/auth/register/register.component.html',
    styleUrls:['./app/auth/register/register.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class RegisterComponent {
    user = {
        name: 'Ganga Christopher',
        username: 'gangachris',
        email: 'ganga.chris@gmail.com',
        password: 'dayocode',
        password_confirmation: 'dayocode',
    }
    
    register() {
        console.log(this.user);
    }
}