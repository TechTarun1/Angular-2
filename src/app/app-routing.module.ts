import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { authGuard } from './gaurds/auth.guard';
import { NofoundComponent } from './components/nofound/nofound.component';
import { CandeactivateComponent } from './components/candeactivate/candeactivate.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TempleteFormsComponent } from './components/templete-forms/templete-forms.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent, canActivate: [authGuard] },
  { path: 'forgot', component: ForgotPasswordComponent, canMatch: [authGuard] },
  { path: 'reactive-form', component: ReactiveFormsComponent },
  { path: 'template-form', component: TempleteFormsComponent },
  { path: 'notfound', component: NofoundComponent },
  { path: 'deactivatex', component: CandeactivateComponent, canDeactivate: [authGuard] },
  { path: 'user', loadChildren: () => import('./user/user-routing.module').then((m) => m.UserRoutingModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule) },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }