import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MainService } from 'src/app/share/main.service';
import {currentUser} from "../../../../data";
import {Answer, proUser, Task, Test} from "../../../../types";

@Component({
  selector: 'app-tasks-teacher',
  templateUrl: './tasks-teacher.component.html',
  styleUrls: ['./tasks-teacher.component.scss']
})
export class TasksTeacherComponent implements OnInit {

  public formGroup: FormGroup;

  public isTaskConstructorOpen: boolean = false;

  public currentUser: proUser;
  public tasksTeacher: Task[] | undefined;
  public users: proUser[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
      this.tasksTeacher = this.currentUser.tasks;
    })

    this.mainService.getUsersList()
    .subscribe(users => {
      this.users = users;
    });

    this.initForm();
  }

  initForm(): void  {
    this.formGroup = new FormGroup({
      taskTitle: new FormControl('', Validators.required),
      taskInfo: new FormControl('', Validators.required),
      question_1: new FormControl('', Validators.required),
      answerCorrect_1_1: new FormControl('', Validators.required),
      answerOption_1_1: new FormControl('', Validators.required),
      answerCorrect_1_2: new FormControl('', Validators.required),
      answerOption_1_2: new FormControl('', Validators.required),
      answerCorrect_1_3: new FormControl('', Validators.required),
      answerOption_1_3: new FormControl('', Validators.required),
      question_2: new FormControl('', Validators.required),
      answerCorrect_2_1: new FormControl('', Validators.required),
      answerOption_2_1: new FormControl('', Validators.required),
      answerCorrect_2_2: new FormControl('', Validators.required),
      answerOption_2_2: new FormControl('', Validators.required),
      answerCorrect_2_3: new FormControl('', Validators.required),
      answerOption_2_3: new FormControl('', Validators.required),
      question_3: new FormControl('', Validators.required),
      answerCorrect_3_1: new FormControl('', Validators.required),
      answerOption_3_1: new FormControl('', Validators.required),
      answerCorrect_3_2: new FormControl('', Validators.required),
      answerOption_3_2: new FormControl('', Validators.required),
      answerCorrect_3_3: new FormControl('', Validators.required),
      answerOption_3_3: new FormControl('', Validators.required),
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

    this.users?.forEach(user => {
      if (user?.user?.login == this.currentUser?.user?.login) {
        if (user && !user?.tasks) {
          user.tasks = [];
        }
        user?.tasks?.push(task);
      }
    });

    this.mainService.updateUsersOfUserList(this.users);
    
    if (this.currentUser && !this.currentUser?.tasks) {
      this.currentUser.tasks = [];
    }
    this.currentUser?.tasks?.push(task);

    this.mainService.updateCurrentUser(this.currentUser)
    .subscribe(res => {
      this.isTaskConstructorOpen = false;
      this.tasksTeacher = this.currentUser.tasks;
    })
  }

  closeTaskConstructor(): void {
    this.isTaskConstructorOpen = false;
    this.formGroup.reset();
  }
}
