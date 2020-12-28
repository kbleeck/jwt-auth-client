import { AuthInterceptor } from './auth.interceptor';
import { HasRoleDirective } from './has-role.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [CommonModule],
    exports: [HasRoleDirective],
    declarations: [HasRoleDirective],
    providers: [
        { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor },
    ],
})
export class AuthModule {}
