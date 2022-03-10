import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {ModalController, NavParams} from "@ionic/angular";
import {CaisseDTO} from "../../../../../../models/CaisseDTO";
import {Router} from "@angular/router";
import {MainService} from "../../../../../../../shared/services/MainService";

@Component({
  selector: 'app-rapportcaisse',
  templateUrl: './rapportcaisse.component.html',
  styleUrls: ['./rapportcaisse.component.scss'],
})
export class RapportcaisseComponent implements OnInit {
  datetime : Date;
  montant: number = 0;
  commentaire: string = "";

  constructor(public authenService : AuthenService, public caisseService : ServiceCaisse,
              public _navParamsService : NavParams, private mainService : MainService,
              public _modalController: ModalController, private router : Router) { }

  ngOnInit() {
    this.datetime = new Date();
    this.montant = this._navParamsService.get('montant');
    this.commentaire = this._navParamsService.get('commentaire');
  }

  dismiss() {
    this._modalController.dismiss();
  }

  fermetureCaisse() {
    let cDTO : CaisseDTO = new CaisseDTO();
    cDTO.action="close";
    cDTO.referenceuser = this.authenService.utilisateur.reference;
    cDTO.idcaissesession = this.caisseService.SessionActive.idcaissesession;
    cDTO.montanttransaction = this.montant;
    cDTO.commentaire = this.commentaire;

    this.mainService.spinner.show()
    this.caisseService.ManageCaisse(cDTO).subscribe(
      data=>{
        console.log(data)
        this.caisseService.caisseDTOTemp=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
        this.mainService.spinner.hide()
      },
      ()=> {
        this.mainService.spinner.hide()
        this.caisseService.SessionActive=null;
        this.caisseService.caisseTransactionsList = []
        this.caisseService.directsTransactionsList = []
        this.caisseService.ventesTransactionsList = []
        this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
        this.authenService.toastMessage("Opération réussie!");
        this.dismiss();
        this.router.navigateByUrl("/staff/menustaff/caisse/ouverturecaisse")
      }
    );
  }

  print() {

  }
}
