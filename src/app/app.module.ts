import { AuthModule } from './common/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { AdminPage } from './pages/admin/admin.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { HasRoleDirective } from './common/auth/has-role.directive';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AuthModule,

        MatTableModule,
    ],
    declarations: [
        AppComponent,
        HomePage,
        LoginPage,
        AdminPage,
        NavigationComponent,
        HighlightDirective,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
