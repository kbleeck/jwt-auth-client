import { AuthService } from './../../common/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    constructor(public auth: AuthService) {}

    ngOnInit(): void {}
}
