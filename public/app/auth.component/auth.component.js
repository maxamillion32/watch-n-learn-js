System.register(['angular2/core', 'angular2/router', '../services/auth.service', '../models/user'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, user_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent(_routeParams, _authService, _router) {
                    this._routeParams = _routeParams;
                    this._authService = _authService;
                    this._router = _router;
                    this.user = new user_1.User();
                }
                AuthComponent.prototype.ngOnInit = function () {
                    var type = this._routeParams.get('type');
                    this.login = type == 'login';
                };
                AuthComponent.prototype.loginUser = function (email, password) {
                    var _this = this;
                    this._authService.login(email, password)
                        .subscribe(function (res) {
                        if (res.success) {
                            _this._router.navigate(['Dashboard']);
                        }
                        else {
                            _this.error = res.message;
                            console.log(_this.error);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                };
                AuthComponent.prototype.registerUser = function () {
                    var _this = this;
                    this._authService.addUser(this.user)
                        .subscribe(function (res) {
                        if (res.success) {
                            _this._router.navigate(['Auth', { type: 'login' }]);
                        }
                    }, function (error) { console.log(error); });
                };
                AuthComponent = __decorate([
                    core_1.Component({
                        selector: 'auth',
                        templateUrl: './app/auth.component/auth.component.html',
                        styleUrls: ['./app/auth.component/auth.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, auth_service_1.AuthService, router_1.Router])
                ], AuthComponent);
                return AuthComponent;
            }());
            exports_1("AuthComponent", AuthComponent);
        }
    }
});
//# sourceMappingURL=auth.component.js.map