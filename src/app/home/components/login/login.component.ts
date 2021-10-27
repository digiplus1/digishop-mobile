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
  is_loading=false;
  login: string = "";
  password: string = "";
  isTypePassword:boolean=true;
  constructor(public router: Router, public formBuilder: FormBuilder, public authenservice: AuthenService) { }

  ngOnInit() {
    this.initregister();
  }
  onChange() {
    this.isTypePassword=!this.isTypePassword;
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
    this.is_loading=true;
    this.authenservice.login(this.registerForm.value).subscribe(
      data=>{
        this.authenservice.jwt = data.headers.get("Authorization");

        this.authenservice.getUser(this.registerForm.value.username).subscribe(
          use=>{
            this.is_loading=false;
            this.authenservice.utilisateur=use;
            this.authenservice.saveToken();
            this.authenservice.verifierLocalStorage();
          },error => {
            this.is_loading=false;
            this.authenservice.toastMessage(error.error.message);
          }
        );

      },error => {
        this.is_loading=false;
        this.authenservice.toastMessage(error.error.message)
      }
    )
  }

  goToRegister() {
    this.router.navigateByUrl("/home/register")
  }
}
