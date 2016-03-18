System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../helpers'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, helpers_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(builder) {
                    this.builder = builder;
                    this.name = new common_1.Control('', common_1.Validators.required);
                    this.username = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(2)]));
                    this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, helpers_1.emailValidator]));
                    this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)]));
                    this.confirm = new common_1.Control('', common_1.Validators.required);
                    this.form = builder.group({
                        name: this.name,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        confirm: this.confirm
                    });
                }
                RegisterComponent.prototype.register = function () {
                    console.log(this.form);
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: './app/auth/register/register.component.html',
                        styleUrls: ['./app/auth/register/register.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            common_1.FORM_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map