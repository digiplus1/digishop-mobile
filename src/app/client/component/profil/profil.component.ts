import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {Camera, CameraResultType} from "@capacitor/camera";
import {stringify} from "querystring";
import Swal from "sweetalert2";
import {Utilisateur} from "../../../Model/Utilisateur";
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  constructor(public authenservice: AuthenService,public router:Router) { }

  ngOnInit() {
    console.log(this.authenservice.utilisateur);
  }

  async takePicture() {
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    }).then(i => {
      this.authenservice.utilisateur.photouser  = "data:image/png;base64," + i.base64String
    });

  };

  updateuser(user:Utilisateur) {
      this.authenservice.updateuser(user).subscribe(
        data => {
          this.authenservice.utilisateur = data
        }, error => {
          this.authenservice.toastMessage(error.error.message);
        }, () => {
          localStorage.setItem("utilisateur",JSON.stringify(this.authenservice.utilisateur));


    })
  }
}
