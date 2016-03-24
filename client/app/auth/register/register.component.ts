import {Component} from 'angular2/core'
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'

import {AuthService} from '../auth.service'

import {EmailValidators} from '../../helpers/validators/email-validator'

@Component({
    selector: 'register',
    templateUrl: './app/auth/register/register.component.html',
    styleUrls: ['./app/auth/register/register.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FORM_DIRECTIVES
    ]
})

export class RegisterComponent {
    name: Control;
    username: Control;
    email: Control;
    password: Control;
    confirm: Control;


    form: ControlGroup;

    constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {
        this.name = new Control('', Validators.required);
        this.username = new Control('', Validators.compose([Validators.required, Validators.minLength(2)]));
        this.email = new Control('', Validators.compose([Validators.required, EmailValidators.validEmail]));
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
        this.confirm = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));

        this.form = builder.group({
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confirm: this.confirm
        });
    }

    register() {
        delete this.form.value.confirm;
        this.authService
            .createUser(this.form.value)
            .subscribe(
                (res) => {
                    this.router.navigate(['Login']);
                },
                (err) => console.log('Error', err)
            );
    }
}