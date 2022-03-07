import { Component, OnInit } from '@angular/core';
import {ServiceUtilisateur} from "../../../../services/ServiceUtilisateur";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ModalController} from "@ionic/angular";
import {DetailvendeurComponent} from "../detailvendeur/detailvendeur.component";
import {Utilisateur} from "../../../../../Model/Utilisateur";
import {ActiveVendeurDTO} from "../../../../../Model/ActiveVendeurDTO";

@Component({
  selector: 'app-listvendeur',
  templateUrl: './listvendeur.component.html',
  styleUrls: ['./listvendeur.component.scss'],
})
export class ListvendeurComponent implements OnInit {
  search: string="";
  vendeurs : Utilisateur []= [];
  active : boolean = false;
  vendeurTemp : Utilisateur = new Utilisateur();

  constructor(public serviceUser : ServiceUtilisateur, private mainService : MainService,
              private authenService : AuthenService, private modalController : ModalController) { }

  ngOnInit() {
    this.mainService.spinner.show();

    this.serviceUser.getAllVendeurs(this.authenService.boutique.reference).subscribe(
      data=>{
        console.log(data)
        this.serviceUser.vendeursList = data;
        this.vendeurs = data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide()
        this.authenService.toastMessage(error.error.message)
      }
    )
  }

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.serviceUser.vendeursListFilter = this.serviceUser.vendeursList.filter((a) => {
          return (a.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        this.vendeurs = this.serviceUser.vendeursListFilter;
      } else this.serviceUser.vendeursListFilter = [];
    } else {
      this.serviceUser.vendeursListFilter = [];
    }
  }

  selectUser(user: Utilisateur) {
    this.vendeurs = this.serviceUser.vendeursListFilter.filter(u=> {return u.username == user.username});
    this.search = "";
    this.FilterElement(null);
  }

  async showDetails(user: Utilisateur) {
    const modal = await this.modalController.create({
      component: DetailvendeurComponent,
      componentProps:{
        'user' : user,
      }
    });
    return await modal.present();
  }

  desactiveUser(user: Utilisateur) {
    this.vendeurTemp = user;
    this.active = true;
  }

  valider() {
    this.mainService.spinner.show();
    console.log(this.vendeurTemp);
    this.serviceUser.activeOrDesactiveVendeur(this.vendeurTemp.iduser).subscribe(
      data=>{
        console.log(data);
        if(data!=null){
         let index= this.serviceUser.vendeursList.findIndex(v=>v.iduser==this.vendeurTemp.iduser);
          this.vendeurs[index].ativeuser=!this.vendeurs[index].ativeuser;
        } else {
          this.authenService.toastMessage("Un problème rencontré. Rééssayer.")
        }
        this.annuler();
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
        this.annuler();
        this.mainService.spinner.hide();
      }
    )
  }

  annuler() {
    this.vendeurTemp = new Utilisateur();
    this.active = false;
  }
}
