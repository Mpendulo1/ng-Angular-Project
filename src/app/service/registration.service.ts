import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    public registered_users = new BehaviorSubject<any[]>([]);

    public users_list: any = [];

    constructor(private router: Router) {}

    private save() {
        localStorage.setItem('user_details', JSON.stringify(this.users_list));
    }

    public signup(user: any) {
        const nam = this.users_list.find((username: any) => {
            return username.email === user.email;
        });
        console.log(nam);

        if (nam) {
            return alert('The username already exists!!');
        } else {
            this.users_list.push(user);
            localStorage.setItem(
                'user_details',
                JSON.stringify(this.users_list)
            );
            this.registered_users.next(this.users_list);
            alert('Sign up successful !!');
            this.router.navigate(['/login']);
        }
    }

    public login(username: any) {
        let recieved_data: any = [];
        recieved_data = JSON.parse(
            localStorage.getItem('user_details') ?? '[]'
        );
        recieved_data.find((user: any) => {
            if (
                user.email === username.email &&
                user.password === username.password
            ) {
                alert('Login Successful');
            } else {
                alert('Incorrect Credentials !!');
            }
        });
    }
}
