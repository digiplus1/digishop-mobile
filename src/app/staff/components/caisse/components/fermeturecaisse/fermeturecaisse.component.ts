import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {Router} from "@angular/router";
import {MainService} from "../../../../../shared/services/MainService";
import {ModalController} from "@ionic/angular";
import {RapportcaisseComponent} from "./modal/rapportcaisse/rapportcaisse.component";

@Component({
  selector: 'app-fermeturecaisse',
  templateUrl: './fermeturecaisse.component.html',
  styleUrls: ['./fermeturecaisse.component.scss'],
})
export class FermeturecaisseComponent implements OnInit {
  montant : number=0;
  commentaire : string="";

  constructor(public authenService : AuthenService, public caisseService : ServiceCaisse, private router : Router,
              private mainService : MainService, public modalController : ModalController) { }

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  onAction() {
    if(this.montant<0 || this.montant==null || this.commentaire == ""){
      this.authenService.toastMessage("Tous les champs doivent être correctement remplis.")
    } else {
      this.getEtatSession();
    }
  }

  getEtatSession() {
    this.mainService.spinner.show();
    this.caisseService.getEtatSession(this.caisseService.SessionActive.idcaissesession, this.authenService.utilisateur.username).subscribe(
      data=>{
        console.log(data);
        this.caisseService.caisseDTOTemp = data;
      },error => {
        this.authenService.toastMessage(error.error.message);
        this.mainService.spinner.hide();
      },
      ()=> {
        this.mainService.spinner.hide();
        this.getRapport();
      }
    )
  }

  async getRapport() {
    const modal = await this.modalController.create({
      component: RapportcaisseComponent,
      componentProps: {
        'montant' : this.montant,
        'commentaire': this.commentaire
      }
    });
    return await modal.present();
  }

}
