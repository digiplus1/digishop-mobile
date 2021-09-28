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

    this.serviceUser.getAllVendeurs(this.authenService.utilisateur.nomBoutique).subscribe(
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

    let aVD : ActiveVendeurDTO = new ActiveVendeurDTO();
    aVD.nomBoutique = this.vendeurTemp.nomBoutique;
    aVD.idVendeur = this.vendeurTemp.id_user;
    aVD.active_desactive = !this.vendeurTemp.activevendeur;

    this.serviceUser.activeOrDesactiveVendeur(aVD).subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          this.serviceUser.vendeursList.forEach(v=>{ if(v.id_user == data.id_user){ v = data; } })
          this.vendeurs.forEach(v=>{ if(v.id_user == data.id_user){ v = data; } })
        } else {
          this.authenService.toastMessage("Un problème rencontré. Rééssayer.")
        }
        this.annuler();
        this.mainService.spinner.hide();
      }, error => {
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
