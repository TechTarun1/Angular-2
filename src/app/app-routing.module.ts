import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { authGuard } from './gaurds/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent,canActivate:[authGuard] },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'user', loadChildren: () => import('./user/user-routing.module').then((m) => m.UserRoutingModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
