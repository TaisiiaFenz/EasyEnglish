import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private router: Router) { }

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
    this.router.navigate(['login']);
  }

}
