import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStudentComponent } from './components/home-student/home-student.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FreshmanTestComponent } from './components/freshman-test/freshman-test.component';
import {RouterModule} from "@angular/router";
import { TasksStudentComponent } from './components/tasks-student/tasks-student.component';
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    HomeStudentComponent,
    NavBarComponent,
    FreshmanTestComponent,
    TasksStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule
  ]
})
export class StudentModule { }
