import {Component, OnInit} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'


@Component({
    selector: 'auth',
    templateUrl: './app/auth.component/auth.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AuthComponent implements OnInit {
    
    login: boolean;
    
    constructor(
        private _routeParams: RouteParams
    ) {}
    
    ngOnInit() {
        let type = this._routeParams.get('type');
        this.login = type == 'login';
    }
}