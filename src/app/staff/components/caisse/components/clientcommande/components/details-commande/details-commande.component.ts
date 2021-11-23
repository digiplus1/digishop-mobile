import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {Commande} from "../../../../../../../Model/Commande";
import {MainService} from "../../../../../../../shared/services/MainService";
import {PaiementCommandeComponent} from "../paiement-commande/paiement-commande.component";
import {ServiceCommande} from "../../../../../../services/ServiceCommande";
import {ClotureCommande} from "../../../../../../models/ClotureCommande";
import {ClotureCommandeDTO} from "../../../../../dashboard/models/ClotureCommandeDTO";
import {ServiceDash} from "../../../../../../services/ServiceDash";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss'],
})
export class DetailsCommandeComponent implements OnInit {
  codeCloture : string = "";
  is_cloture : boolean = false;
  code_cloture: string;
  constructor(public modalController : ModalController, private authenService : AuthenService,public serviceDash : ServiceDash,
              public serviceCommande : ServiceCommande, private mainService : MainService,public caisseService:ServiceCaisse) { }

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


  cloturer_commande(reference: string) {
    if (this.code_cloture){
      let cloture:ClotureCommandeDTO=new ClotureCommandeDTO();
      cloture.user=this.authenService.utilisateur.username;
      cloture.codecloture=this.code_cloture;
      cloture.referencecommande=reference;
      cloture.idsession=this.caisseService.SessionActive.idcaissesession;
      this.mainService.spinner.show();
      this.serviceDash.ClotureCommande(cloture).subscribe(
        data=>{
          this.cancel()
          this.code_cloture=null;
          if (data){
            this.retirer_commande_cloture(reference);
          }

          this.mainService.spinner.hide();
        },error => {
          this.mainService.spinner.hide();
          this.mainService.notificationService.showError(error.error.message);
        }
      )
    }else {
      this.mainService.notificationService.showInfo("Entrer le code de cloture du client","")
    }

  }

  retirer_commande_cloture(reference:string){
    let index=this.serviceDash.commandeDTOListFilter.findIndex(i=>i.referencecommande==reference);
    this.serviceDash.commandeDTOListFilter.splice(index,1);
    this.recalculsolde();
  }

  recalculsolde(){
    this.serviceDash.montantVentes=0;
    this.serviceDash.commandeDTOListFilter.filter(c=>{
      this.serviceDash.montantVentes+=c.montantcommande;
    })
  }
  valider() {
    if(this.codeCloture==""){
      this.authenService.toastMessage("Vous devez remplir une valeur.")
    } else {
      this.mainService.spinner.show();
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
