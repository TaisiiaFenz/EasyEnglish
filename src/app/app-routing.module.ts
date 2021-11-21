import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ShareModule } from './share/share.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
