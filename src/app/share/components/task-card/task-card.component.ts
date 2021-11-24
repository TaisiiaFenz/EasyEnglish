import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  public isOpenedTest: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openTest(): void {
    this.isOpenedTest = !this.isOpenedTest;
  }

  saveCard(): void {
    this.isOpenedTest = !this.isOpenedTest;
  }

}
