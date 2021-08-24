import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utilisateur} from "../../../Model/Utilisateur";
import {Router} from "@angular/router";
import {Camera, CameraResultType} from "@capacitor/camera";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  image: string;
  form: FormGroup;

  constructor(public router:Router,) {
  }

  ngOnInit() {
    this.initForm();
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

  initForm() {
    this.form = new FormGroup({
      nomcomplet: new FormControl('', {validators: [Validators.required]}),
      username: new FormControl('', {validators: [Validators.required]}),
      phone: new FormControl('', {validators: [Validators.required]}),
      acceptTerms: new FormControl(false, {validators: [Validators.requiredTrue]}),
      email:new FormControl('',{validators:[Validators.required,Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
      password2: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
    })
  }

  onSubmit() {
    if (!this.form.valid) return;

    let utilisateur:Utilisateur;
    utilisateur=this.form.value;
    utilisateur.photouser=this.image;

  }
}
