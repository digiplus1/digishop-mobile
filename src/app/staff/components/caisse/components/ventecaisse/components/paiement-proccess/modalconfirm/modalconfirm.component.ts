import { Component, OnInit } from '@angular/core';
import {ServiceCaisse} from '../../../../../../../services/ServiceCaisse';
import {ModalController, NavParams} from '@ionic/angular';
import {CaisseDTO} from '../../../../../../../models/CaisseDTO';
import {Commande} from '../../../../../../../../Model/Commande';
import {ServicePrinter} from '../../../../../../../services/ServicePrinter';

@Component({
  selector: 'app-modalconfirm',
  templateUrl: './modalconfirm.component.html',
  styleUrls: ['./modalconfirm.component.scss'],
})
export class ModalconfirmComponent implements OnInit {

  commande: Commande;
  isClicked = false;
  constructor( public serviceCaisse: ServiceCaisse,private navParam: NavParams,public servicePrinter: ServicePrinter,
               private modalController: ModalController, private printer: ServicePrinter) { }

  ngOnInit() {
    this.commande = this.navParam.get('payment');
    this.isClicked=false;
  }

  getstatus(commande: Commande) {
    if (commande.payement.modepayement=='ORANGE MONEY' && !this.isClicked){
      this.isClicked=true;
      window.open(commande.payement.url_to_connect, '_blank');
      this.commande.message='Merci de cliquer sur le button pour continuer l\'opération de paiment sur '+commande.modepayement;
    }else {
      this.serviceCaisse.get_status_vente(commande.referencecommande).subscribe(
        data=>{
          if (data.commande.modepayement=='MTN MOBILE MONEY'){
            if (data.commande.payement.statut=='FAILED'){
              this.commande.message='Votre solde est insufisant';
            }else if (data.commande.payement.statut=='PENDING'){
              this.commande.message='Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer';
            }else if (data.commande.payement.statut=='SUCCESSFUL'){
              this.servicePrinter.initializeTicketVenteBefore(data);
              this.modalController.dismiss();
              this.commande.message='Merci d\'avoir confirmé le paiement nous vous remercions pour cela';
              this.serviceCaisse.SessionActive.soldesession=data.soldesession;
            }
          } else if (data.commande.modepayement=='ORANGE MONEY'){
            if (data.commande.payement.statut=='FAILED'){
              this.commande.message='Votre solde est insufisant';
            }else if (data.commande.payement.statut=='PENDING'){
              window.open(commande.payement.url_to_connect, '_blank');
              this.commande.message='Merci de cliquer sur le button pour continuer l\'opération de paiment sur '+commande.modepayement;
            }else if (data.commande.payement.statut=='SUCCESSFUL'){
              this.servicePrinter.initializeTicketVenteBefore(data);
              this.modalController.dismiss();
              this.commande.message='Merci d\'avoir confirmé le paiement nous vous remercions pour cela';
              this.serviceCaisse.SessionActive.soldesession=data.soldesession;
            }
          }
        },error => {
          this.commande.message=error.error.message;
        }, ()=> {
          this.printer.sendToBluetoothPrinter(this.printer.selectedPrinter, this.printer.printVente);
        }
      );
    }
  }

  closepaiement() {
    this.modalController.dismiss();
  }
}
