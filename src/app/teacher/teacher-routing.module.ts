import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeStudentComponent} from "../student/components/home-student/home-student.component";
import {TasksStudentComponent} from "../student/components/tasks-student/tasks-student.component";
import {HomeTeacherComponent} from "./components/home-teacher/home-teacher.component";

const routes: Routes = [
  { path: 'homeTeacher', component: HomeTeacherComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
