import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../../service/registration.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public submitted: boolean = false;
    public sub_values: any;

    constructor(private formBuilder: FormBuilder, private loginService:RegistrationService) {}

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
        this.loginService.login(this.login_form.value)
    }
}
