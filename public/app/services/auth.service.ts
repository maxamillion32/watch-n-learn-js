import {Injectable} from 'angular2/core';
import {Headers, Http, Response, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user';

@Injectable()
export class AuthService {
    private _baseUrl = '/api/users/';
    
    constructor(private _http: Http){}
    
    addUser(user: User) {
        let body = JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this._http
            .post(this._baseUrl, body, options)
            .map(res => res.json())
            .do(res => console.log(res))
            .catch(this.handleError);                    
    }
    
    getUsers() {
        return this._http
            .get(this._baseUrl)
            .map(res => <User[]> res.json())
            .do(res => console.log(res)) //comment out in production
            .catch(this.handleError);                          
    }
    
    loginUser(username: string, password: string) {
        
    }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}