import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public submitted: boolean = false;
    public sub_values: any;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit(): void {}

    public login_form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    public get email(): any {
        return this.login_form.get('email');
    }

    public get password(): any {
        return this.login_form.get('password');
    }

    public login() {
        this.authService.login(this.login_form.value);
        const token = this.login_form.value;
        localStorage.setItem('token', JSON.stringify(token.password));
    }
}
