import { Component, OnInit } from '@angular/core';
import {proUser} from "../../../../types";
import {currentUser, users} from "../../../../data";

@Component({
  selector: 'app-avaliable-students',
  templateUrl: './avaliable-students.component.html',
  styleUrls: ['./avaliable-students.component.scss']
})
export class AvaliableStudentsComponent implements OnInit {

  public avaliableStudents: proUser[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateAvaliableStudents();
  }

  updateAvaliableStudents() {
    this.avaliableStudents = [];
    users.forEach((user) => {
      if ((user.levelOfEnglish)&&(!user.teacher)) {
        this.avaliableStudents.push(user);
      }
    });
  }

  addStudent(student: proUser): void {
    student.teacher = currentUser[0];
    if (!currentUser[0].students) {
      currentUser[0].students = [];
    }
    currentUser[0].students.push(student);
    console.log(users);
    console.log(currentUser);
    this.updateAvaliableStudents();
  }

}
