import { Component, OnInit } from '@angular/core';
import { currentUser } from '../../../../data';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  public showTest: boolean = false;
  public currentUser = currentUser;

  constructor() { }

  ngOnInit(): void {
  }

  openTest(): void {
    this.showTest = true;
  }

}
