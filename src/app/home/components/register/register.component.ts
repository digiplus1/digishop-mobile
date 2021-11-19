import {Component, OnInit} from '@angular/core';
import {AppUser} from "../../models/appUser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../Model/Utilisateur";
import {AuthenService} from "../Service/AuthenService";
import {Camera, CameraResultType} from "@capacitor/camera";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submittedRegister = false;
  user: Utilisateur = new Utilisateur();
  isLoading = false;
  password: string = "";
  image: string;

  constructor(public router: Router, public formBuilder: FormBuilder, public authenservice: AuthenService) {
  }

  ngOnInit(): void {
    this.initregister();
  }


  get g() {
    return this.registerForm.controls;
  }

  initregister() {
    this.registerForm = this.formBuilder.group({
        /*    nomcomplet: ['', Validators.required],
            username: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue],
            email: ['', [Validators.required, Validators.email]],*/
        phone: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password2: ['', [Validators.required, Validators.minLength(8)]],
      }
    );
  }

  async takePicture() {
    this.image = null;
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    }).then(i => {
      this.image = "data:image/png;base64," + i.base64String
    });

  };


  onRegister() {
    this.submittedRegister = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.value.password2 == this.registerForm.value.password) {
      this.user = this.registerForm.value;
      this.user.client = true;
      this.user.client = true;
      this.isLoading = true;
      this.authenservice.register(this.user).subscribe(
        data => {
          this.isLoading = false;
          this.authenservice.toastMessage("Création reussi")
          this.router.navigateByUrl('/home/login')
        }, error => {
          this.isLoading = false;
          this.authenservice.toastMessage(error.error.message);
        }
      )
    } else {
      this.password = "Les mots de passes ne sont pas identique";
    }
  }

  goTologin() {
    this.router.navigateByUrl("/home/login")
  }
}
