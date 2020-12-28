import { AuthService } from './../../common/auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
    username: string;
    password: string;

    authSub: Subscription;

    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.authSub = this.auth.user$.subscribe((user) => {
            console.log('subscription', user);
        });
    }

    ngOnDestroy() {
        this.authSub && this.authSub.unsubscribe();
    }

    onSubmit(event) {
        event.preventDefault();
        const credentials = {
            username: this.username,
            password: this.password,
        };
        console.log('Attempt login with', credentials);
        // start login process
        this.auth
            .login(this.username, this.password)
            .subscribe(() => this.router.navigateByUrl('/'));
    }
}
