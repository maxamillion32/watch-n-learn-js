import {Component, OnInit} from 'angular2/core'
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'

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
        private _authService: AuthService,
        private _router: Router
    ) {}
    
    ngOnInit() {
        let type = this._routeParams.get('type');
        this.login = type == 'login';
    }
    
    registerUser() {
        this._authService.addUser(this.user)
                        .subscribe(
                            (res) => {
                                if (res.success) {
                                   this._router.navigate(['Auth', {type: 'login'}]);
                                }
                            },
                            (error) => { console.log(error)}  
                        )
    }
}