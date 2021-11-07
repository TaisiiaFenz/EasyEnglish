import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private router: Router) { }

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
    console.log(this.formGroup);
  }

  register(): void {
    this.router.navigate(['register']);
  }

}
