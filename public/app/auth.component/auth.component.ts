import {Component, OnInit} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'

import {AuthService} from '../services/auth.service';

import {User} from '../models/user';



@Component({
    selector: 'auth',
    templateUrl: './app/auth.component/auth.component.html',
    styleUrls:['./app/auth.component/auth.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AuthComponent implements OnInit {
    
    login: boolean;
    user: User = new User();
    
    constructor(
        private _routeParams: RouteParams,
        private _authService: AuthService
    ) {}
    
    ngOnInit() {
        let type = this._routeParams.get('type');
        this.login = type == 'login';
        this._authService.getUsers()
                            .subscribe(
                                users => console.log('success', users),
                                error => console.log('error', error)
                            )
    }
}