import { Component, OnInit } from '@angular/core';
import {proUser, Task} from "../../../../types";
import {currentUser} from "../../../../data";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MainService } from 'src/app/share/main.service';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.scss']
})
export class MyStudentsComponent implements OnInit {

  public formGroup: FormGroup;

  public currentUser: proUser;
  public myStudents: proUser[] | undefined;
  public myTasks: Task[] | undefined;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
      this.myStudents = this.currentUser?.students;
      this.myTasks = this.currentUser?.tasks;
    })

    this.formGroup = new FormGroup({
      dropdown: new FormControl(''),
    });
  }

  isStudentAnswer(exercise: any, i: number, j: number) {
    if (exercise.status === "DONE") {
      const studentAnswers = exercise.studentAnswers;
      console.log(studentAnswers);
      console.log(j);
      if (studentAnswers[i] === j) {
        return true;
      }
    }
    return false;
  }

  onAddTask(student: any) {
    console.log(this.formGroup.get('dropdown')?.value);
    currentUser[0]?.tasks?.forEach((task) => {
      if (task.taskTitle == this.formGroup.get('dropdown')?.value) {
        let newTask = JSON.parse(JSON.stringify(task));
        newTask.status = "TO DO";
        student.tasks.push(task);
      }
    });
  }

}
