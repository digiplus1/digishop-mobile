import { Component, OnInit } from '@angular/core';
import {ServicePaiement} from "../../../../../../services/ServicePaiement";
import {ModalController, NavParams} from "@ionic/angular";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServicePrinter} from "../../../../../../services/ServicePrinter";
import {Commande} from "../../../../../../../Model/Commande";
import {ServiceCommande} from "../../../../../../services/ServiceCommande";

@Component({
  selector: 'app-paiement-commande',
  templateUrl: './paiement-commande.component.html',
  styleUrls: ['./paiement-commande.component.scss'],
})
export class PaiementCommandeComponent implements OnInit {
  is_loading: boolean = false;

  constructor(public paiementService : ServicePaiement, private modalController : ModalController,
              public serviceCommande : ServiceCommande,
              public authenService : AuthenService, public servicePrinter : ServicePrinter) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss()
  }

  select(s: string) {
    console.log(s);
    this.paiementService.affiche = s;
  }

  onAction() {
    this.is_loading = true;
    this.serviceCommande.commandeDTOTemp.modecommande = "boutique";
    this.serviceCommande.commandeDTOTemp.modepayement = this.paiementService.affiche;

    this.serviceCommande.createCommande(this.serviceCommande.commandeDTOTemp).subscribe(
      data=>{
        console.log(data);
        this.serviceCommande.commandeDTOTemp = data;
        this.is_loading = false;
        this.cancel();
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    )
  }
}
