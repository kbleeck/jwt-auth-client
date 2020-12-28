import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const LOCAL_STORAGE_KEY = 'auth-user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public user$ = new BehaviorSubject<User>(null);
    public isLoggedIn$ = this.user$.pipe(map((user) => !!user));

    constructor(private http: HttpClient) {
        const loadedUser = this.loadUserFromLocalStorage();
        this.user$.next(loadedUser);
        this.user$.subscribe((user) => this.persistUserInLocalStorage(user));
    }

    login(username: string, password: string) {
        const url = environment.authUrl;
        return this.http
            .post<User>(url, { username, password })
            .pipe(
                tap(
                    (response) => {
                        this.user$.next(response);
                    },
                    (error) => {
                        alert('Wrong username/password');
                    }
                )
            );
    }

    logout() {
        this.user$.next(null);
    }

    persistUserInLocalStorage(user: User) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    }
    loadUserFromLocalStorage(): User {
        const user = localStorage.getItem(LOCAL_STORAGE_KEY);
        return JSON.parse(user);
    }
}

export interface User {
    id: number;
    username: string;
    roles: string[];
    token: string;
}
