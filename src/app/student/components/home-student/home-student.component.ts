import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  public showTest: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openTest(): void {
    this.showTest = true;
  }

}
