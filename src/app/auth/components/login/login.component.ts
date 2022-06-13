import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { proUser } from 'src/types';
import {currentUser } from "../../../../data";
import {MainService} from "../../../share/main.service";
import firebase = require('firebase/compat');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup!: FormGroup;
  public users: proUser[] = [];

  constructor(
    private router: Router,
    private mainService: MainService
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void  {
    this.formGroup = new FormGroup({
      login: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required)
    });
  }

  loginSubmit(): void {
    this.mainService.getUsersList()
      .subscribe(res => {
        console.log(res);
        this.users = res;
    })
    this.users.forEach((user) => {
      if ((user.user.login === this.formGroup.get('login')?.value)&&
        (user.user.password === this.formGroup.get('password')?.value)) {
        this.mainService.updateCurrentUser(user)
        .subscribe(res => {
          console.log(res);
          if (user.user.role === 'Student') {
            this.router.navigate(['homeStudent']);
          } else {
            this.router.navigate(['homeTeacher']);
          }
        });
        return;
      }
    });
  }

  register(): void {
    this.router.navigate(['register']);
  }
}
