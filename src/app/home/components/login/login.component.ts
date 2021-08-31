import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenService} from "../Service/AuthenService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submittedRegister = false;
  login: string = "";
  password: string = "";

  constructor(public router: Router, public formBuilder: FormBuilder, public authenservice: AuthenService) { }

  ngOnInit() {
    this.initregister();
  }


  get g() {
    return this.registerForm.controls;
  }

  initregister() {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
      }
    );
  }

  onRegister() {
    this.submittedRegister = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  goToRegister() {
    this.router.navigateByUrl("/home/register")
  }
}
