import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {Commande} from "../../../../../../../Model/Commande";
import {MainService} from "../../../../../../../shared/services/MainService";
import {PaiementCommandeComponent} from "../paiement-commande/paiement-commande.component";
import {ServiceCommande} from "../../../../../../services/ServiceCommande";
import {ClotureCommande} from "../../../../../../models/ClotureCommande";

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss'],
})
export class DetailsCommandeComponent implements OnInit {
  codeCloture : string = "";
  is_cloture : boolean = false;
  constructor(public modalController : ModalController, private authenService : AuthenService,
              public serviceCommande : ServiceCommande, private mainService : MainService) { }

  ngOnInit() {

  }

  async payer() {
    const modal = await this.modalController.create({
      component: PaiementCommandeComponent,
    });
    return await modal.present();
  }

  cancel() {
    this.modalController.dismiss();
  }

  cloturer() {
    this.codeCloture = "";
    this.is_cloture = true;
  }

  valider() {
    if(this.codeCloture==""){
      this.authenService.toastMessage("Vous devez remplir une valeur.")
    } else {
      this.mainService.spinner.show()
      let cc : ClotureCommande = new ClotureCommande();
      cc.referencecommande = this.serviceCommande.commandeDTOTemp.referencecommande;
      cc.user = this.authenService.utilisateur.username;
      cc.codecloture = this.codeCloture;

      this.serviceCommande.clotureCommande(cc).subscribe(
        data=>{
            if(data){
              this.serviceCommande.commandeDTOTemp.statut="TERMINEE";
            }
          this.mainService.spinner.hide()
          this.Annuler();
        },error => {
          this.authenService.toastMessage(error.error.message);
          this.Annuler();
          this.mainService.spinner.hide()
        }
      )
    }
  }

  Annuler() {
    this.codeCloture = "";
    this.is_cloture = false;  }
}
