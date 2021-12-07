import { Component, OnInit } from '@angular/core';
import {proUser} from "../../../../types";
import {currentUser} from "../../../../data";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.scss']
})
export class MyStudentsComponent implements OnInit {

  public formGroup: FormGroup;

  public myStudents = currentUser[0].students;
  public myTasks = currentUser[0].tasks;

  constructor() { }

  ngOnInit(): void {
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
