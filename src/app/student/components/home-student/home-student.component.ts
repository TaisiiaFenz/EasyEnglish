import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/share/main.service';
import { proUser } from 'src/types';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  public showTest: boolean = false;
  public currentUser: proUser;

  constructor(
    private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
    })
  }

  openTest(): void {
    this.showTest = true;
  }

}
