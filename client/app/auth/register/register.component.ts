import {Component} from 'angular2/core'
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router'


import {emailValidator} from '../../helpers';

@Component({
    selector: 'register',
    templateUrl: './app/auth/register/register.component.html',
    styleUrls:['./app/auth/register/register.component.css'],
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
    
    constructor(private builder: FormBuilder) {
        this.name = new Control('', Validators.required);
        this.username = new Control('', Validators.compose([Validators.required, Validators.minLength(2)]));
        this.email = new Control('', Validators.compose([Validators.required, emailValidator]));
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
        this.confirm = new Control('', Validators.required);
        
        this.form = builder.group({
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confirm: this.confirm
        });
    }
    
    register() {
        console.log(this.form);
    }
}