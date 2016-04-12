import {Injectable} from 'angular2/core';
import {Headers, Http, Response, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    private loggedIn = false;

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
                    if (res.json().token) {
                        localStorage.setItem('auth_token', res.json().token);
                        this.loggedIn = true;
                    }

                    return res.json();
                })
                .do(res => console.log(res)) // comment out in production
                .catch(this.handleError);
    }

    logout() {
      localStorage.removeItem('auth_token');
      this.loggedIn = false;
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}