import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../../../Model/Utilisateur";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ModalController, NavParams} from "@ionic/angular";
import {ServiceUtilisateur} from "../../../../services/ServiceUtilisateur";
import {Camera, CameraResultType} from "@capacitor/camera";

@Component({
  selector: 'app-addvendeur',
  templateUrl: './addvendeur.component.html',
  styleUrls: ['./addvendeur.component.scss'],
})
export class AddvendeurComponent implements OnInit {
  isLoading: boolean;
  vendeur : Utilisateur = new Utilisateur();
  constructor(public authenservice: AuthenService, private modalController : ModalController,
              public serviceUser : ServiceUtilisateur) { }

  ngOnInit() {}

  async takePicture() {
      await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      }).then(i => {
        this.vendeur.photouser  = "data:image/png;base64," + i.base64String
      });
    }

  closeM() {
    this.modalController.dismiss()
  }

  createUser() {
    if(this.vendeur.username=="" || this.vendeur.nomcomplet=="" || this.vendeur.email=="" || this.vendeur.cni == "" || this.vendeur.phone == ""){
      this.authenservice.toastMessage("Vérifier vos informations avant de poursuivre. Tous les champs doivent être remplis.")
    } else {
      this.isLoading = true;
      this.vendeur.isVendeur = true;
      this.vendeur.vendeur = true;
      this.vendeur.nomBoutique = this.authenservice.boutique.nomBoutique;
      this.vendeur.role = "vendeur";

      this.authenservice.register(this.vendeur).subscribe(
        data=>{
          console.log(data);
          this.serviceUser.vendeursList.push(data);
          this.isLoading = false;
          this.authenservice.toastMessage("Opération réussie.")
          this.closeM()
        }, error => {
          this.isLoading=false;
          this.authenservice.toastMessage(error.error.message)
        }
      )
    }
  }
}
