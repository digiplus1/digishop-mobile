import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenService} from "../Service/AuthenService";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  registerForm: FormGroup;
  submittedRegister = false;

  constructor(public router: Router, public formBuilder: FormBuilder, public authenservice: AuthenService) {
  }

  ngOnInit() {
    this.initregister();
  }


  get g() {
    return this.registerForm.controls;
  }

  initregister() {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  onRegister() {
    this.submittedRegister = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.authenservice.requestPasswordReset(this.registerForm.value).subscribe(
      data=>{

      },error => {
        this.authenservice.toastMessage(error.error.message);
      }
    )
  }

  requestPassword() {

  }
}
