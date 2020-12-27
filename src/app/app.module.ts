import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { AdminPage } from './pages/admin/admin.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [
        AppComponent,
        HomePage,
        LoginPage,
        AdminPage,
        NavigationComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
