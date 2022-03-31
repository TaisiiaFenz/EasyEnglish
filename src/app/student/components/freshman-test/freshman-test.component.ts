import {Component, Input, OnInit } from '@angular/core';
import { FreshmanTestService } from 'src/app/share/freshman-test.service';
import { MainService } from 'src/app/share/main.service';
import { proUser, Test } from 'src/types';
import {currentUser} from "../../../../data";
import {test} from "./freshmanTestMock";

@Component({
  selector: 'app-freshman-test',
  templateUrl: './freshman-test.component.html',
  styleUrls: ['./freshman-test.component.scss']
})
export class FreshmanTestComponent implements OnInit {

  @Input() currentUser: proUser;

  public freshmanTest: Test[] = [];
  public levelOfEnglishOfCurrentUser: string = '';
  private answers: boolean[] = [];

  constructor(
    private mainService: MainService,
    private freshmanTestService: FreshmanTestService
  ) { }

  ngOnInit(): void {
    this.freshmanTestService.getFreshmanTest()
    .subscribe(freshmanTest => {
      this.freshmanTest = freshmanTest;

      this.answers.length = this.freshmanTest.length;
      this.answers.fill(false);
    })
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
      this.levelOfEnglishOfCurrentUser = 'C1';
    } else if ((percentResult >= 80)&&(percentResult < 100)) {
      this.levelOfEnglishOfCurrentUser = 'B2';
    } else if ((percentResult >= 60)&&(percentResult < 80)) {
      this.levelOfEnglishOfCurrentUser = 'B1.2';
    } else if ((percentResult >= 40)&&(percentResult < 60)) {
      this.levelOfEnglishOfCurrentUser = 'B1.1';
    } else if ((percentResult >= 20)&&(percentResult < 40)) {
      this.levelOfEnglishOfCurrentUser = 'A2';
    } else {
      this.levelOfEnglishOfCurrentUser = 'A1';
    }

    this.currentUser.levelOfEnglish = this.levelOfEnglishOfCurrentUser;

    this.mainService.updateCurrentUser(this.currentUser)
    .subscribe(res => {
      console.log(res);
    })


    this.mainService.getUsersList()
    .subscribe(users => {
      users.forEach(user => {
        if (user.user.login === this.currentUser.user.login) {
          user.levelOfEnglish = this.levelOfEnglishOfCurrentUser;
        }
      })
      this.mainService.updateUsersOfUserList(users);
    });

  }
}
