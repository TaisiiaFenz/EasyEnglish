import { Component, OnInit } from '@angular/core';
import {proUser} from "../../../../types";
import { MainService } from 'src/app/share/main.service';

@Component({
  selector: 'app-avaliable-students',
  templateUrl: './avaliable-students.component.html',
  styleUrls: ['./avaliable-students.component.scss']
})
export class AvaliableStudentsComponent implements OnInit {

  public currentUser: proUser;
  public users: proUser[] = [];
  public avaliableStudents: proUser[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
    })

    this.mainService.getUsersList()
    .subscribe(users => {
      this.users = users;
      this.updateAvaliableStudents();
    });
  }

  updateAvaliableStudents() {
    this.avaliableStudents = [];
    this.users.forEach((user) => {
      if ((user.levelOfEnglish)&&(!user.teacher)) {
        this.avaliableStudents.push(user);
      }
    });
  }

  addStudent(student: proUser): void {
    student.teacher = JSON.parse(JSON.stringify(this.currentUser));

    this.users?.forEach(user => {
      if (user?.user?.login == this.currentUser?.user?.login) {
        if (user && !user?.students) {
          user.students = [];
        }
        user?.students?.push(student);
      }
    });

    this.mainService.updateUsersOfUserList(this.users);

    if (this.currentUser && !this.currentUser?.students) {
      this.currentUser.students = [];
    }
    this.currentUser?.students?.push(student);

    this.mainService.updateCurrentUser(this.currentUser)
    .subscribe(res => {
      this.updateAvaliableStudents();
    })
  }

}
