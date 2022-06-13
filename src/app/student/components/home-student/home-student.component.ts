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
  public donePause = false;

  constructor(
    private mainService: MainService) {
     }

  ngOnInit(): void {
    setTimeout(() => {
      this.donePause = true;
    }, 1000);
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }

  openTest(): void {
    this.showTest = true;
  }
}
