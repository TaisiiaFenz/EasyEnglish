import { Component, OnInit } from '@angular/core';
import {proUser, Task} from "../../../../types";
import {currentUser, users} from "../../../../data";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MainService } from 'src/app/share/main.service';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.scss']
})
export class MyStudentsComponent implements OnInit {

  public formGroup: FormGroup;

  public currentUser: proUser;
  public myStudents: proUser[] | undefined;
  public myTasks: Task[] | undefined;
  public usersList: proUser[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCurrentUser()
    .subscribe(user => {
      this.currentUser = user;
      this.myStudents = this.currentUser?.students;
      this.myTasks = this.currentUser?.tasks;
    });

    this.mainService.getUsersList()
    .subscribe(users => {
      this.usersList = users;
    });

    this.formGroup = new FormGroup({
      dropdown: new FormControl(''),
    });
  }

  isStudentAnswer(exercise: any, i: number, j: number) {
    if (exercise.status === "DONE") {
      const studentAnswers = exercise.studentAnswers;
      console.log(studentAnswers);
      console.log(j);
      if (studentAnswers[i] === j) {
        return true;
      }
    }
    return false;
  }

  onAddTask(student: any) {
    console.log(this.formGroup.get('dropdown')?.value);
    this.currentUser?.tasks?.forEach((task) => {
      if (task.taskTitle == this.formGroup.get('dropdown')?.value) {
        let newTask = JSON.parse(JSON.stringify(task));
        newTask.status = "TO DO";

        console.log(student);
        const updateStudent = this.currentUser.students?.find((user) => student.user.login === user.user.login);
        
        if (updateStudent && !updateStudent.tasks) {
          updateStudent.tasks = [];
        }
        updateStudent?.tasks?.push(newTask);
        console.log(this.currentUser);
        this.mainService.updateCurrentUser(this.currentUser).subscribe(res => {});

        const updateStudentInUsersList = this.usersList?.find((user) => student.user.login === user.user.login);
        if (updateStudentInUsersList && !updateStudentInUsersList.tasks) {
          updateStudentInUsersList.tasks = [];
        }
        updateStudentInUsersList?.tasks?.push(newTask);
        console.log(this.usersList);

        const newUsersList = this.usersList.filter((user) => user.user.login !== this.currentUser.user.login);
        newUsersList.push(this.currentUser);
        console.log(newUsersList);
        this.mainService.updateUsersOfUserList(newUsersList);
      }
    });
  }

}
