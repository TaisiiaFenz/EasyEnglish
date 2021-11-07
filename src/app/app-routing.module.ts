import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import {RegisterComponent} from "./auth/components/register/register.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
