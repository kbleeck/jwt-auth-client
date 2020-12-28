import { AuthGuard } from './common/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './pages/admin/admin.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: HomePage },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        data: { role: 'admin' },
        children: [{ path: '', component: AdminPage }],
    },
    { path: 'login', component: LoginPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
