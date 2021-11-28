import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ShareModule } from './share/share.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TasksStudentComponent } from './student/components/tasks-student/tasks-student.component';
import { HomeStudentComponent } from './student/components/home-student/home-student.component';
import {HomeTeacherComponent} from "./teacher/components/home-teacher/home-teacher.component";
import {AvaliableStudentsComponent} from "./teacher/components/avaliable-students/avaliable-students.component";
import {MyStudentsComponent} from "./teacher/components/my-students/my-students.component";
import {TasksTeacherComponent} from "./teacher/components/tasks-teacher/tasks-teacher.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tasksStudent', component: TasksStudentComponent },
  { path: 'homeStudent', component: HomeStudentComponent },
  { path: 'homeTeacher', component: HomeTeacherComponent },
  { path: 'avaliableStudents', component: AvaliableStudentsComponent },
  { path: 'myStudents', component: MyStudentsComponent},
  {path: 'tasksTeacher', component: TasksTeacherComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    ShareModule,
    StudentModule,
    TeacherModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
