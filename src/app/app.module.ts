import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { CandeactivateComponent } from './components/candeactivate/candeactivate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TempleteFormsComponent } from './components/templete-forms/templete-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    NofoundComponent,
    CandeactivateComponent,
    ReactiveFormsComponent,
    TempleteFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
