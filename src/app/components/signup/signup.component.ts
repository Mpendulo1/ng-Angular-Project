import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistrationService } from '../../service/registration.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    public signup_form!: FormGroup;
    public submitted: boolean = false;
    public user_list: any[] = [];
    public user: any;

    constructor(
        private formBuilder: FormBuilder,
        private register: RegistrationService
    ) {}

    ngOnInit(): void {
        this.signup_form = this.formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.maxLength(10)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    public get name(): any {
        return this.signup_form.get('name');
    }

    public get surname(): any {
        return this.signup_form.get('surname');
    }

    public get email(): any {
        return this.signup_form.get('email');
    }

    public get phone(): any {
        return this.signup_form.get('phone');
    }

    public get password(): any {
        return this.signup_form.get('password');
    }

    public signup() {
        this.register.signup(this.signup_form.value);
    }
}
