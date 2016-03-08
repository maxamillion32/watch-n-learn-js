import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user';

@Injectable()
export class AuthService {
    private _baseUrl = '/api/users/';
    
    constructor(private _http: Http){}
    
    getUsers() {
        return this._http
            .get(this._baseUrl)
            .map(res => <User[]> res.json())
            .catch(this.handleError);                          
    }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}