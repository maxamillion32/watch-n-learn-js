import {Injectable} from 'angular2/core';
import {Headers, Http, Response, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../shared/models/user';

@Injectable()
export class UserService {
    private loggedIn = false;
    private user: User;

    constructor(private _http: Http) {
      this.loggedIn = !!localStorage.getItem('auth_token');
    }

    AuthUser() {
        if (localStorage.getItem('wnljwt')) {
            return localStorage.getItem('wnluser');
        } else {
            return false;
        }
    }

    createUser(user) {
        let body = JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http
            .post('/api/users', body, options)
            .map(res => res.json())
            .do(res => console.log(res)) // comment out in production
            .catch(this.handleError);
    }

    login(user) {
        let body = JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http
                .post('/login', body, options)
                .map(res => {
                  console.log('resss', res.json());
                    if (res.json().token) {
                        console.log('here');
                        localStorage.setItem('auth_token', JSON.stringify(res.json()));
                        this.loggedIn = true;
                    }
                    return res.json();
                })
                .do(res => console.log('login response', res)) // comment out in production
                .catch(this.handleError);
    }

    logout() {
      localStorage.removeItem('auth_token');
      this.loggedIn = false;
    }

    isLoggedIn() {
      return this.isLoggedIn;
    }

    getUser() {
      if (this.isLoggedIn) {
        let auth_token = localStorage.getItem('auth_token');
        let user = JSON.parse(auth_token).user;

        return user;
      } else {
        return null;
      }
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}