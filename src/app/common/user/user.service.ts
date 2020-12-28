import { User } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    public getAll() {
        const url = 'http://localhost:4000/users';
        return this.http.get<User[]>(url);
    }
}
