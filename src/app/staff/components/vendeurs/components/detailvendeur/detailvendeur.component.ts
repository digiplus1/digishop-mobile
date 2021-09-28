import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType} from "@capacitor/camera";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../../../Model/Utilisateur";
import {ModalController, NavParams} from "@ionic/angular";
import {ServiceUtilisateur} from "../../../../services/ServiceUtilisateur";

@Component({
  selector: 'app-detailvendeur',
  templateUrl: './detailvendeur.component.html',
  styleUrls: ['./detailvendeur.component.scss'],
})
export class DetailvendeurComponent implements OnInit {
  edite:boolean = false;
  isLoading: boolean;
  vendeur : Utilisateur = new Utilisateur();
  constructor(public authenservice: AuthenService, private modalController : ModalController,
              private navParam : NavParams, public serviceUser : ServiceUtilisateur) { }

  ngOnInit() {
    this.vendeur = this.navParam.get("user");
  }

  async takePicture() {
    if (this.edite){
      await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      }).then(i => {
        this.vendeur.photouser  = "data:image/png;base64," + i.base64String
      });
    }else {
      this.changer();
    }
  };

  changer() {
    console.log(this.edite);
    this.edite=!this.edite
  }

  update() {
    this.isLoading=true;
    if(this.vendeur.roles.length==2){
      this.vendeur.isVendeur = true;
      this.vendeur.vendeur = true;
    } else {
      this.vendeur.isProprietaire = true;
      this.vendeur.proprietaire = true;
    }

    console.log(this.vendeur)
    this.authenservice.updateuser(this.vendeur).subscribe(
      data=>{
        console.log(data)
        this.isLoading=false;
        if(data == null){
          this.closeM()
          this.authenservice.toastMessage("Un problème a été rencontré.")
        } else {
          this.vendeur=data;
          this.serviceUser.vendeursList.forEach(v=>{if(v.username == this.vendeur.username){v = data;}})
          this.serviceUser.vendeursListFilter.forEach(v=>{if(v.username == this.vendeur.username){v = data;}})
          this.changer();
        }
      },
      error => {
        this.isLoading=false;
        this.authenservice.toastMessage(error.error.message)
      }
    )
  }

  closeM() {
    this.modalController.dismiss()
  }
}
