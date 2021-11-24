import {Component, OnInit } from '@angular/core';
import {currentUser} from "../../../../data";

@Component({
  selector: 'app-freshman-test',
  templateUrl: './freshman-test.component.html',
  styleUrls: ['./freshman-test.component.scss']
})
export class FreshmanTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveAnswers() {
    currentUser.levelOfEnglish = 'B2';
  }
}
