import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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

  get f() { 
    return this.formGroup.controls; 
  }

  initForm(): void  {
    this.formGroup = new FormGroup({
      name: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[A-Za-z]+')])),
      surname: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]+')])),
      role: new FormControl('', Validators.required),
      birthDate: new FormControl(null, [Validators.required, this.birthdayValidation(100)]),
      login: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]))
    });
  }

  birthdayValidation = (maxAge: number): ValidatorFn => control =>
  (((new Date()).getFullYear() - (new Date(control.value)).getFullYear() > maxAge)
  || ((new Date()).getFullYear() - (new Date(control.value)).getFullYear() < 10))
    ? { younger: { maxAge } } 
    : null;


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
