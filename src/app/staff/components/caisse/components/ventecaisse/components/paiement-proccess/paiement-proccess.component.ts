import { Component, OnInit } from '@angular/core';
import {ServicePaiement} from "../../../../../../services/ServicePaiement";
import {ModalController, NavParams} from "@ionic/angular";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {CaisseDTO} from "../../../../../../models/CaisseDTO";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServicePrinter} from "../../../../../../services/ServicePrinter";
import {ModalconfirmComponent} from "./modalconfirm/modalconfirm.component";
import {Commande} from "../../../../../../../Model/Commande";
import {Cart} from "../../../../../../../Model/Cart";

@Component({
  selector: 'app-paiement-proccess',
  templateUrl: './paiement-proccess.component.html',
  styleUrls: ['./paiement-proccess.component.scss'],
})
export class PaiementProccessComponent implements OnInit {
  is_loading: boolean = false;
  public operateurNom: string = '';
  public commentaire: string = '';
  cart:Cart;
  constructor(public paiementService : ServicePaiement, private modalController : ModalController,
              public panierService : ServicePanier, public serviceCaisse : ServiceCaisse,private navParam : NavParams,
              public authenService : AuthenService, public servicePrinter : ServicePrinter) { }

  ngOnInit() {
    this.cart=this.panierService.panierCaisse;
    this.serviceCaisse.getAlloperateur();
    setInterval(()=>{
      this.serviceCaisse.testConnexion();
    },2000)
  }

  cancel() {
    this.modalController.dismiss()
  }

  select(s: string) {
    console.log(s);
    this.paiementService.affiche = s;
  }

  async openpaiement(cT : Commande) {
    const modal = await this.modalController.create({
      component: ModalconfirmComponent,
      cssClass:"modalpaymentconfirm",
      componentProps: {
        'payment' : cT
      }
    });
    return await modal.present();
  }

  onAction() {
    this.is_loading = true;
    let cDTO : CaisseDTO = new CaisseDTO();
    let cDTOs: CaisseDTO[] = [];
    cDTO.action = "vente";
    cDTO.idcaissesession = this.serviceCaisse.SessionActive.idcaissesession;
    cDTO.referenceuser = this.authenService.utilisateur.reference;
    cDTO.cartItems = this.cart.cartItems;
    cDTO.typepaiement = this.paiementService.affiche;
    cDTO.operateurnom = this.operateurNom;
    cDTO.commentaire = this.commentaire;
    cDTO.phone= this.paiementService.momo;
    console.log('Avant la vente: ', cDTO);
    if(this.serviceCaisse.online) {
      this.serviceCaisse.ManageCaisse(cDTO).subscribe(
        data=>{
          console.log("Après la vente: ",data);
          this.serviceCaisse.caisseDTOTemp = data;
        },error => {
          this.authenService.toastMessage(error.error.message);
          this.is_loading = false;
        },
        ()=>{
          this.is_loading = false;
          if (this.serviceCaisse.caisseDTOTemp.commande.modepayement=="MTN MOBILE MONEY"){
            if (this.serviceCaisse.caisseDTOTemp.commande.payement.statut=="FAILED"){
              this.serviceCaisse.caisseDTOTemp.commande.message="Votre solde est insufisant";
            }else if (this.serviceCaisse.caisseDTOTemp.commande.payement.statut=="PENDING"){
              this.serviceCaisse.caisseDTOTemp.commande.message="Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer";
            }else if (this.serviceCaisse.caisseDTOTemp.commande.payement.statut=="SUCCESSFUL"){
              this.servicePrinter.initializeTicketVenteBefore(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
              this.serviceCaisse.caisseDTOTemp.commande.message="Merci d'avoir confirmé le paiement nous vous remercions pour cela";
            }
          }else if (this.serviceCaisse.caisseDTOTemp.commande.modepayement=="ORANGE MONEY"){
            if (this.serviceCaisse.caisseDTOTemp.commande.payement.url_to_connect){
              this.serviceCaisse.caisseDTOTemp.commande.message="Merci de cliquer sur le button pour continuer l'opération de paiment sur "+this.serviceCaisse.caisseDTOTemp.commande.modepayement;
            }
          }
          if (this.serviceCaisse.caisseDTOTemp.commande.modepayement!="CASH"){
            this.openpaiement(this.serviceCaisse.caisseDTOTemp.commande);
          }else {
            this.servicePrinter.initializeTicketVenteBefore(this.serviceCaisse.caisseDTOTemp.caisseTransaction)
          }

          this.serviceCaisse.SessionActive.soldesession = this.serviceCaisse.caisseDTOTemp.soldesession;
          this.serviceCaisse.caisseTransactionsList.push(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
          this.serviceCaisse.ventesTransactionsList.push(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
          this.authenService.toastMessage("Vente effectuée avec succès.");
          this.panierService.clearPanierSansNotif();
          this.paiementService.affiche="";
          this.paiementService.om="";
          this.paiementService.momo="";
          this.paiementService.codeOrange="";
          this.cancel();
        }
      )
    } else {
      cDTOs = JSON.parse(localStorage.getItem('ventes'));
      if (cDTOs) {
        cDTOs.push(cDTO);
      } else {
        cDTOs = [];
      }
      this.servicePrinter.initializeTicketVenteBefore(cDTO.caisseTransaction);
      localStorage.setItem('ventes', JSON.stringify(cDTOs));
      this.panierService.clearPanierSansNotif();
      this.paiementService.affiche="";
      this.paiementService.om="";
      this.paiementService.momo="";
      this.paiementService.codeOrange="";
      this.authenService.toastMessage("Vente effectuée avec succès.");
      this.serviceCaisse.SessionActive.soldesession += this.panierService.panierCaisse.montanttotal;
      this.cancel();
    }
  }
}
