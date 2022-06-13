import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/share/main.service';
import { proUser } from 'src/types';


@Component({
  selector: 'app-tasks-student',
  templateUrl: './tasks-student.component.html',
  styleUrls: ['./tasks-student.component.scss']
})
export class TasksStudentComponent implements OnInit {

  public tasks: any; 

  public currentUser: proUser | undefined;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
      this.tasks = this.currentUser?.tasks;
      console.log(this.currentUser);
    })
  }

  createTaskNumber(i: number): string {
    return `Task ${i}`;
  }

}
