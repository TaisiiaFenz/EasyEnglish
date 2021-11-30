import {Component, Input, OnInit} from '@angular/core';
import {Test} from "../../../../types";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  @Input() taskNumber: string;

  public isOpenedTest: boolean = false;
  public isDone: boolean = false;

  private answers: number[] = [];

  constructor() { }

  ngOnInit(): void {
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

  saveCard(): void {
    console.log(this.answers);
    this.task.studentAnswers = this.answers;
    console.log(this.task);
    this.isDone = true;
  }

}
