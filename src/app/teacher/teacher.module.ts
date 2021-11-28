import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTeacherComponent } from './components/home-teacher/home-teacher.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AvaliableStudentsComponent } from './components/avaliable-students/avaliable-students.component';
import { MyStudentsComponent } from './components/my-students/my-students.component';
import { TasksTeacherComponent } from './components/tasks-teacher/tasks-teacher.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HomeTeacherComponent,
    NavBarComponent,
    AvaliableStudentsComponent,
    MyStudentsComponent,
    TasksTeacherComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class TeacherModule { }
