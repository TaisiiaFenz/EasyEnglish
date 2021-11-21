import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStudentComponent } from './components/home-student/home-student.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FreshmanTestComponent } from './components/freshman-test/freshman-test.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeStudentComponent,
    NavBarComponent,
    FreshmanTestComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class StudentModule { }
