import { Component, OnInit } from '@angular/core';
import {ServicePaiement} from '../../../../../../services/ServicePaiement';
import {ModalController} from '@ionic/angular';
import {ServicePanier} from '../../../../../../services/ServicePanier';
import {ServiceCaisse} from '../../../../../../services/ServiceCaisse';
import {AuthenService} from '../../../../../../../home/components/Service/AuthenService';
import {ServicePrinter} from '../../../../../../services/ServicePrinter';
import {Commande} from '../../../../../../../Model/Commande';
import {ServiceCommande} from '../../../../../../services/ServiceCommande';
import {AdresseCommande} from '../../../../../../../Model/AdresseCommande';
import {CaisseDTO} from '../../../../../../models/CaisseDTO';
import {ModalconfirmComponent} from '../../../ventecaisse/components/paiement-proccess/modalconfirm/modalconfirm.component';

@Component({
  selector: 'app-paiement-client',
  templateUrl: './paiement-client.component.html',
  styleUrls: ['./paiement-client.component.scss'],
})
export class PaiementClientComponent implements OnInit {
  is_loading:boolean = false;

  constructor(public paiementService: ServicePaiement, private modalController: ModalController,
              public panierService: ServicePanier, public serviceCaisse: ServiceCaisse,
              public authenService: AuthenService, public servicePrinter: ServicePrinter,
              private serviceCommande: ServiceCommande) { }

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  select(s: string) {
    console.log(s);
    this.paiementService.affiche = s;
  }
  async openpaiement(cT: Commande) {
    const modal = await this.modalController.create({
      component: ModalconfirmComponent,
      cssClass:'modalpaymentconfirm',
      componentProps: {
        payment : cT
      }
    });
    return await modal.present();
  }
  onAction() {
    this.is_loading = true;
    if(this.paiementService.affiche===''){
      this.authenService.toastMessage('Bien vouloir choisir un mode de paiement.');
    } else {
      this.panierService.deletePanierClient(this.panierService.panierCaisse.idcart).subscribe(
        data=>{
          console.log(data);
          if(data){
            this.panierService.savePanierClient(this.panierService.panierCaisse).subscribe(
              result => {
                console.log(result);
              },error => {
                this.authenService.toastMessage(error.error.message);
                this.is_loading = false;
              },
              ()=>{
                const adresse: AdresseCommande = new AdresseCommande();
                adresse.pays = this.authenService.boutique.pays;
                adresse.city_address = this.authenService.boutique.ville;
                adresse.quartier_address = this.authenService.boutique.quartier;
                adresse.repere_address = this.authenService.boutique.adressBoutique;
                adresse.phone_livraison = this.authenService.boutique.telephoneBoutique;
                adresse.secteurBloc_address = this.authenService.boutique.secteur;
                adresse.typeAdress = 'MAGASIN';

                const cmdDTO: Commande = new Commande();
                cmdDTO.phone = this.authenService.user_vendeur.phone;
                cmdDTO.modecommande = 'boutique';
                cmdDTO.nomvendeur = this.authenService.utilisateur.username;
                cmdDTO.modepayement = this.paiementService.affiche;
                cmdDTO.fraislivraison = 0;
                cmdDTO.idcaissesession = this.serviceCaisse.SessionActive.idcaissesession;
                cmdDTO.nomclient = this.authenService.user_vendeur.username;
                cmdDTO.adresse = adresse;

                this.serviceCommande.createCommande(cmdDTO).subscribe(
                  donnee=>{
                    this.serviceCommande.commandeDTOTemp=donnee;
                    if (this.serviceCommande.commandeDTOTemp.modepayement==='MTN MOBILE MONEY'){
                      if (this.serviceCommande.commandeDTOTemp.payement.statut==='FAILED'){
                        this.serviceCommande.commandeDTOTemp.message='Votre solde est insufisant';
                      }else if (this.serviceCommande.commandeDTOTemp.payement.statut==='PENDING'){
                        this.serviceCommande.commandeDTOTemp.message='Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer';
                      }else if (this.serviceCommande.commandeDTOTemp.payement.statut==='SUCCESSFUL'){
                        this.servicePrinter.initializeTicketVenteBefore(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
                        this.serviceCommande.commandeDTOTemp.message='Merci d\'avoir confirmé le paiement nous vous remercions pour cela';
                      }
                    }else if (this.serviceCommande.commandeDTOTemp.modepayement==='ORANGE MONEY'){
                      if (this.serviceCommande.commandeDTOTemp.payement.url_to_connect){
                        this.serviceCommande.commandeDTOTemp.message='Merci de cliquer sur le button pour continuer l\'opération de paiment sur '+this.serviceCaisse.caisseDTOTemp.commande.modepayement;
                      }
                    }
                    if (this.serviceCommande.commandeDTOTemp.modepayement!=='CASH'){
                      this.openpaiement(this.serviceCommande.commandeDTOTemp);
                    }else {
                      this.servicePrinter.initializeTicketClient(this.serviceCommande.commandeDTOTemp);
                    }


                    console.log(donnee);
                    this.serviceCommande.commandeDTOTemp = donnee;
                  },error => {
                    if(error.error.message!==''){
                      this.authenService.toastMessage(error.error.message);
                    } else {
                      this.authenService.toastMessage('Une erreure est survenue.');
                    }
                    this.is_loading = false;
                  },
                  ()=>{
                    this.serviceCaisse.SessionActive.soldesession = this.serviceCommande.commandeDTOTemp.montantcommande;
                    this.is_loading = false;
                    this.authenService.toastMessage('Opération effectuée avec succès.');
                    this.panierService.clearPanierSansNotif();
                    this.paiementService.affiche='';
                    this.paiementService.om='';
                    this.paiementService.momo='';
                    this.paiementService.codeOrange='';
                    this.cancel();

                    this.servicePrinter.sendToBluetoothPrinter(this.servicePrinter.selectedPrinter, this.servicePrinter.printVente);

                  }
                );
              }
            );
          } else {
            this.is_loading = false;
            this.authenService.toastMessage('Une incohérence trouvé. Bien vouloir contacter l\'administrateur.');
          }
        },error => {
          this.authenService.toastMessage(error.error.message);
          this.is_loading = false;
        }
      );
    }
  }

}
