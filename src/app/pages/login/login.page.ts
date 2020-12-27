import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username: string;
    password: string;

    constructor() {}

    ngOnInit(): void {}

    onSubmit(event) {
        event.preventDefault();
        const credentials = {
            username: this.username,
            password: this.password,
        };
        console.log('Attempt login with', credentials);
    }
}
