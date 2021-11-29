import { Component, OnInit } from '@angular/core';
import {currentUser} from "../../../../data";

@Component({
  selector: 'app-tasks-student',
  templateUrl: './tasks-student.component.html',
  styleUrls: ['./tasks-student.component.scss']
})
export class TasksStudentComponent implements OnInit {

  public tasks = currentUser[0].tasks;

  constructor() { }

  ngOnInit(): void {
  }

  createTaskNumber(i: number): string {
    return `Task ${i}`;
  }

}
