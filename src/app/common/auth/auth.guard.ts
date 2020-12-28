import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const routeRole = route.data?.role;
        if (!routeRole) {
            return this.auth.isLoggedIn$;
        } else {
            return this.auth.user$.pipe(
                map((user) => user?.roles.includes(routeRole))
            );
        }
    }
}
