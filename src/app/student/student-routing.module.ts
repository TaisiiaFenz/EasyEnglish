import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentComponent } from './components/home-student/home-student.component';

const routes: Routes = [
   { path: 'homeStudent', component: HomeStudentComponent }
  // { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
