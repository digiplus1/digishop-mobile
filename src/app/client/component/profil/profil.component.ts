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

  edite:boolean;
  isLoading: boolean;
  constructor(public authenservice: AuthenService,public router:Router) { }

  ngOnInit() {
  }

  async takePicture() {
    if (this.edite){
      await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      }).then(i => {
        this.authenservice.utilisateur.photouser  = "data:image/png;base64," + i.base64String
      });
    }else {
      this.changer();
    }

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

  changer() {
    this.edite=!this.edite
  }

  update() {
    this.isLoading=true;
    this.authenservice.updateuser(this.authenservice.utilisateur).subscribe(
      data=>{
        this.isLoading=false;
        this.authenservice.utilisateur=data;
        this.authenservice.saveToken();
        this.changer();
      },
      error => {
        this.isLoading=false;
        this.authenservice.toastMessage(error.error.message)
      }
    )
  }
}
