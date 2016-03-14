System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                }
                AuthService.prototype.AuthUser = function () {
                    if (localStorage.getItem('wnljwt')) {
                        return localStorage.getItem('wnluser');
                    }
                    else {
                        return false;
                    }
                };
                AuthService.prototype.addUser = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http
                        .post('/api/users', body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (res) { return console.log(res); })
                        .catch(this.handleError);
                };
                AuthService.prototype.getUsers = function () {
                    return this._http
                        .get('/api/users/')
                        .map(function (res) { return res.json(); })
                        .do(function (res) { return console.log(res); }) //comment out in production
                        .catch(this.handleError);
                };
                AuthService.prototype.login = function (email, password) {
                    var body = JSON.stringify({ email: email, password: password });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http
                        .post('/api/auth', body, options)
                        .map(function (res) {
                        if (res.json().token) {
                            localStorage.setItem('wnljwt', res.json().token);
                        }
                        return res.json();
                    })
                        .do(function (res) { return console.log(res); }) //comment out in production
                        .catch(this.handleError);
                };
                AuthService.prototype.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map