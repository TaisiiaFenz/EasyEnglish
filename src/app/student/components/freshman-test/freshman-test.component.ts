import {Component, OnInit } from '@angular/core';
import {currentUser} from "../../../../data";
import {test} from "./freshmanTestMock";

@Component({
  selector: 'app-freshman-test',
  templateUrl: './freshman-test.component.html',
  styleUrls: ['./freshman-test.component.scss']
})
export class FreshmanTestComponent implements OnInit {

  public freshmanTest = test;
  private answers: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.answers.length = this.freshmanTest.length;
    this.answers.fill(false);
  }

  onAnswer(i: number, isCorrect: boolean) {
    this.answers[i] = isCorrect;
    console.log(this.answers);
}

  saveAnswers() {
    console.log(this.answers);
    let result = this.answers.reduce((sum, current) => sum + +current, 0);
    console.log(result);
    let percentResult = result * 100 / this.answers.length;
    if (percentResult === 100) {
      currentUser[0].levelOfEnglish = 'C1';
    } else if ((percentResult >= 80)&&(percentResult < 100)) {
      currentUser[0].levelOfEnglish = 'B2';
    } else if ((percentResult >= 60)&&(percentResult < 80)) {
      currentUser[0].levelOfEnglish = 'B1.2';
    } else if ((percentResult >= 40)&&(percentResult < 60)) {
      currentUser[0].levelOfEnglish = 'B1.1';
    } else if ((percentResult >= 20)&&(percentResult < 40)) {
      currentUser[0].levelOfEnglish = 'A2';
    } else {
      currentUser[0].levelOfEnglish = 'A1';
    }
  }
}
