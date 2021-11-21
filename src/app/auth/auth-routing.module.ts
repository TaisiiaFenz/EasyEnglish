import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { HomeStudentComponent } from '../student/components/home-student/home-student.component';
import { StudentModule } from '../student/student.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homeStudent', component: HomeStudentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StudentModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
