import {Component, Input, OnInit} from '@angular/core';
import {proUser, Test} from "../../../../types";
import { MainService } from '../../main.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  @Input() taskNumber: string;

  public currentUser: proUser;
  public usersList: proUser[] = [];


  public isOpenedTest: boolean = false;
  public isDone: boolean = false;

  private answers: number[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
    });

    this.mainService.getUsersList()
    .subscribe(users => {
      this.usersList = users;
    });

    this.answers.length = this.task.tests.length;
    this.answers.fill(-1);
  }

  openTest(): void {
    this.isOpenedTest = !this.isOpenedTest;
  }

  onAnswer(i: number, j: number) {
    if (j === this.answers[i]) {
      this.answers[i] = -1;
    } else {
      this.answers[i] = j;
    }
    console.log(this.answers);
  }

  emptyAnswersCheck(): void {
    const isEmptyAnswer = this.answers.find(item => item === -1);
    if (isEmptyAnswer) {
      this.isDone = confirm("You don`t answer on all questions. Do you want to save all answers?") ? true : false;
    }
  }
  
  saveTaskAnswers(): void {
    this.task.status = 'DONE';
    const tasksList = this.currentUser.tasks;
    const newTask = tasksList?.find(taskItem => taskItem.id === this.task.id);
    if (newTask) {
      newTask.studentAnswers = this.answers;
      newTask.status = this.task.status;
    }

    this.currentUser.tasks = tasksList;
    this.mainService.updateCurrentUser(this.currentUser).subscribe(res => {});

    const updateTeacherInUsersList = this.usersList?.find((user) => this.currentUser.teacher?.user.login === user.user.login);
    const updateStudentOfTeacher = updateTeacherInUsersList?.students?.find(user => user.user.login === this.currentUser.user.login);
    if (updateStudentOfTeacher) {
      updateStudentOfTeacher.tasks = tasksList;
    }
    
    const newUsersList = this.usersList.filter((user) => user.user.login !== this.currentUser.user.login);
    newUsersList.push(this.currentUser);
    this.mainService.updateUsersOfUserList(newUsersList);
  }

  saveCard(): void {
    console.log(this.answers);
    this.isDone = true;

    this.emptyAnswersCheck();

    if (this.isDone) {
      this.saveTaskAnswers();
    }
  }

}
