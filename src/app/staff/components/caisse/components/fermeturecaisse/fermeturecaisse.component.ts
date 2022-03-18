import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {Router} from "@angular/router";
import {MainService} from "../../../../../shared/services/MainService";
import {ModalController} from "@ionic/angular";
import {RapportcaisseComponent} from "./modal/rapportcaisse/rapportcaisse.component";
import {CaisseDTO} from "../../../../models/CaisseDTO";
import {SessionFermer} from "../../../dashboard/models/Session-fermer";

@Component({
  selector: 'app-fermeturecaisse',
  templateUrl: './fermeturecaisse.component.html',
  styleUrls: ['./fermeturecaisse.component.scss'],
})
export class FermeturecaisseComponent implements OnInit {
  montant : number=0;
  commentaire : string="";
  private sessionFermer: SessionFermer;

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
      this.fermeture_caisse()
    }
  }
  fermeture_caisse() {
    let caisseDto: CaisseDTO = new CaisseDTO();
    caisseDto.action = 'close';
    caisseDto.commentaire = this.commentaire;
    caisseDto.montanttransaction = this.montant;
    caisseDto.idcaissesession = this.caisseService.SessionActive.idcaissesession;
    caisseDto.referenceuser = this.authenService.utilisateur.reference;
    caisseDto.datefermeture=new Date();
    this.mainService.spinner.show();
    this.caisseService.getfermeturecaisse(caisseDto).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.sessionFermer= data;
        console.log(data);
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message);
      },
      ()=> {
        this.mainService.spinner.hide();
        this.getRapport();
      }
    );
  }

  getEtatSession() {
    this.mainService.spinner.show();
    this.caisseService.getEtatSession(this.caisseService.SessionActive.idcaissesession, this.authenService.utilisateur.reference).subscribe(
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
        'commentaire': this.commentaire,
        'sessionFermer': this.sessionFermer
      }
    });
    return await modal.present();
  }

}
