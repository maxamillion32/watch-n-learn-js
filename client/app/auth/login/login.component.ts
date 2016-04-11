import {Component} from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AuthService} from '../auth.service';

import {EmailValidators} from '../../shared/validators/email-validator';

@Component({
    selector: 'login',
    templateUrl: './app/auth/login/login.component.html',
    styleUrls: ['./app/auth/login/login.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FORM_DIRECTIVES
    ]
})

export class LoginComponent {
    email: Control;
    password: Control;

    form: ControlGroup;

    constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {
        this.email = new Control('', Validators.compose([Validators.required, EmailValidators.validEmail]));
        this.password = new Control('', Validators.required);

        this.form = builder.group({
            email: this.email,
            password: this.password
        });
    }

    login() {
        this.authService.login(this.form.value)
                        .subscribe(
                            (res) => {
                                console.log(res);
                                // this.router.navigate(['Dashboard']);
                            },
                            (err) => console.log(err)
                        );
    }
}