import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../types';
import { MainService } from "../../../share/main.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor (
    private router: Router,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void  {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      login: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required)
    });
  }

  submit(): void {
    const newUser: User = {
      name: this.formGroup.get('name')?.value,
      surname: this.formGroup.get('surname')?.value,
      role: this.formGroup.get('role')?.value,
      login: this.formGroup.get('login')?.value,
      password: this.formGroup.get('password')?.value
    };

    this.mainService.addUser({user: newUser})
      .subscribe(user => {
        console.log(user);
      }, err => console.error(err));
    this.router.navigate(['login']);
  }

}
