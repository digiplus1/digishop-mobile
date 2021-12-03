import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../../../Model/Commande";
import {ServiceCaisse} from "../../../../../staff/services/ServiceCaisse";
import {ModalController, NavParams} from "@ionic/angular";
import {ServicePrinter} from "../../../../../staff/services/ServicePrinter";
import {CommandeClientService} from "../../../../Service/CommandeClientService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modalpayementclient',
  templateUrl: './modalpayementclient.component.html',
  styleUrls: ['./modalpayementclient.component.scss'],
})
export class ModalpayementclientComponent implements OnInit {
  is_loading: boolean;
  commande:Commande;
  constructor( private navParam : NavParams,public commandeService:CommandeClientService,
               private modalController : ModalController,public router:Router) { }

  ngOnInit() {
    this.commande = this.navParam.get("payment");
  }

  getstatus(commande: Commande) {
    if (commande.payement.modepayement=="ORANGE MONEY"){
      window.open(commande.payement.url_to_connect, "_blank");
      this.commande.message="Merci de cliquer sur le button pour continuer l'opération de paiment sur "+commande.modepayement;
    }else {
      this.commandeService.tchekCommande(commande).subscribe(
        data=>{
          if (data.modepayement=="MTN MOBILE MONEY"){
            if (data.payement.statut=="FAILED"){
              this.commande.message="Votre solde est insufisant";
            }else if (data.payement.statut=="PENDING"){
              this.commande.message="Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer";
            }else if (data.payement.statut=="SUCCESSFUL"){
              //this.printer.initializeTicketVenteBefore(data.caisseTransaction)
              this.modalController.dismiss();
              this.commande.message="Merci d'avoir confirmé le paiement nous vous remercions pour cela";
            }
          }
        },error => {
          this.commande.message=error.error.message;
        }, ()=> {
         // this.printer.sendToBluetoothPrinter(this.printer.selectedPrinter, this.printer.printVente);
        }
      )
    }
  }

  closepaiement() {
    this.modalController.dismiss();
  }

  terminer() {
    this.modalController.dismiss();
    this.router.navigateByUrl("client/menuclient/commande")
  }
}
