import { UserService } from './../../common/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    users$: Observable<User[]>;

    constructor(public userService: UserService) {}

    ngOnInit(): void {
        this.users$ = this.userService.getAll();
    }
}
