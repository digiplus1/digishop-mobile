import { Component, OnInit } from '@angular/core';
import {ServiceCaisse} from "../../../../../../../services/ServiceCaisse";
import {ModalController, NavParams} from "@ionic/angular";
import {CaisseDTO} from "../../../../../../../models/CaisseDTO";
import {Commande} from "../../../../../../../../Model/Commande";
import {ServicePrinter} from "../../../../../../../services/ServicePrinter";

@Component({
  selector: 'app-modalconfirm',
  templateUrl: './modalconfirm.component.html',
  styleUrls: ['./modalconfirm.component.scss'],
})
export class ModalconfirmComponent implements OnInit {

  caissedto:CaisseDTO;
  constructor( public serviceCaisse : ServiceCaisse,private navParam : NavParams,public servicePrinter : ServicePrinter,
               private modalController : ModalController) { }

  ngOnInit() {
    this.caissedto = this.navParam.get("payment");
  }

  getstatus(commande: Commande) {
    if (commande.payement.modepayement=="ORANGE MONEY"){
      window.open(commande.payement.url_to_connect, "_blank");
      this.caissedto.commande.message="Merci de cliquer sur le button pour continuer l'opération de paiment sur "+commande.modepayement;
    }else {
      this.serviceCaisse.get_status_vente(commande.referencecommande).subscribe(
        data=>{
          if (data.commande.modepayement=="MTN MOBILE MONEY"){
            if (data.commande.payement.statut=="FAILED"){
              this.caissedto.commande.message="Votre solde est insufisant";
            }else if (data.commande.payement.statut=="PENDING"){
              this.caissedto.commande.message="Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer";
            }else if (data.commande.payement.statut=="SUCCESSFUL"){
              this.servicePrinter.initializeTicketVenteAfter(data.caisseTransaction)
              this.modalController.dismiss();
              this.caissedto.commande.message="Merci d'avoir confirmé le paiement nous vous remercions pour cela";
            }
          }
        },error => {
          this.caissedto.commande.message=error.error.message;
        }
      )
    }
  }

  closepaiement() {
    this.modalController.dismiss();
  }
}
