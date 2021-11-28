import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {currentUser} from "../../../../data";
import {Answer, Task, Test} from "../../../../types";

@Component({
  selector: 'app-tasks-teacher',
  templateUrl: './tasks-teacher.component.html',
  styleUrls: ['./tasks-teacher.component.scss']
})
export class TasksTeacherComponent implements OnInit {

  public formGroup: FormGroup;

  public isTaskConstructorOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void  {
    this.formGroup = new FormGroup({
      taskTitle: new FormControl('', Validators.required),
      taskInfo: new FormControl('', Validators.required),
      question_1: new FormControl(''),
      answerCorrect_1_1: new FormControl(''),
      answerOption_1_1: new FormControl(''),
      answerCorrect_1_2: new FormControl(''),
      answerOption_1_2: new FormControl(''),
      answerCorrect_1_3: new FormControl(''),
      answerOption_1_3: new FormControl(''),
      question_2: new FormControl(''),
      answerCorrect_2_1: new FormControl(''),
      answerOption_2_1: new FormControl(''),
      answerCorrect_2_2: new FormControl(''),
      answerOption_2_2: new FormControl(''),
      answerCorrect_2_3: new FormControl(''),
      answerOption_2_3: new FormControl(''),
      question_3: new FormControl(''),
      answerCorrect_3_1: new FormControl(''),
      answerOption_3_1: new FormControl(''),
      answerCorrect_3_2: new FormControl(''),
      answerOption_3_2: new FormControl(''),
      answerCorrect_3_3: new FormControl(''),
      answerOption_3_3: new FormControl(''),
    });
  }

  saveTask() {
    const tests: Test[] = [];
    for(let i = 1; i < 4; i++) {
      let test: Test = {
        question: this.formGroup.get(`question_${i}`)?.value,
        answers: []
      };
      for(let j = 1; j < 4; j++) {
        let correct: boolean = (this.formGroup.get(`answerCorrect_${i}_${j}`)?.value !== '');
        test.answers.push({
          option: this.formGroup.get(`answerOption_${i}_${j}`)?.value,
          correct: correct
        });
      }
      tests.push(test);
    };
    const task: Task = {
      taskTitle: this.formGroup.get('taskTitle')?.value,
      taskInfo: this.formGroup.get('taskInfo')?.value,
      tests: tests
    };
    console.log(task);
    if (!currentUser[0].tasks) {
      currentUser[0].tasks = [];
    }
    currentUser[0].tasks.push(task);
  }

  closeTaskConstructor(): void {
    this.isTaskConstructorOpen = false;
    this.formGroup.reset();
  }
}
