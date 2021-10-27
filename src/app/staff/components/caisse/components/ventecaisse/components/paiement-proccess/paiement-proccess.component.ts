import { Component, OnInit } from '@angular/core';
import {ServicePaiement} from "../../../../../../services/ServicePaiement";
import {ModalController} from "@ionic/angular";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {CaisseDTO} from "../../../../../../models/CaisseDTO";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServicePrinter} from "../../../../../../services/ServicePrinter";

@Component({
  selector: 'app-paiement-proccess',
  templateUrl: './paiement-proccess.component.html',
  styleUrls: ['./paiement-proccess.component.scss'],
})
export class PaiementProccessComponent implements OnInit {
  is_loading: boolean = false;
  public operateurNom: string = '';
  public commentaire: string = '';

  constructor(public paiementService : ServicePaiement, private modalController : ModalController,
              public panierService : ServicePanier, public serviceCaisse : ServiceCaisse,
              public authenService : AuthenService, public servicePrinter : ServicePrinter) { }

  ngOnInit() {
    this.serviceCaisse.getAlloperateur();
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
    let cDTO : CaisseDTO = new CaisseDTO();
    cDTO.action = "vente";
    cDTO.idcaissesession = this.serviceCaisse.SessionActive.idcaissesession;
    cDTO.nomuser = this.authenService.utilisateur.username;
    cDTO.cartItems = this.panierService.panierCaisse.cartItems;
    cDTO.typepaiement = this.paiementService.affiche;
    cDTO.operateurnom = this.operateurNom;
    cDTO.commentaire = this.commentaire;
    if(this.paiementService.affiche=="ORANGE MONEY"){
      cDTO.om = Number(this.paiementService.om);
    } else if (this.paiementService.affiche=="MTN MOBILE MONEY"){
      cDTO.momo = Number(this.paiementService.momo);
    }

    this.serviceCaisse.ManageCaisse(cDTO).subscribe(
      data=>{
        console.log(data);
        this.serviceCaisse.caisseDTOTemp = data;
      },error => {
        this.authenService.toastMessage(error.error.message);
        this.is_loading = false;
      },
      ()=>{
        this.is_loading = false;
        this.serviceCaisse.SessionActive.soldesession = this.serviceCaisse.caisseDTOTemp.soldesession;
        this.serviceCaisse.caisseTransactionsList.push(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
        this.serviceCaisse.ventesTransactionsList.push(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
        this.authenService.toastMessage("Vente effectuée avec succès.")
        this.panierService.clearPanierSansNotif()
        this.paiementService.affiche="";
        this.paiementService.om="";
        this.paiementService.momo="";
        this.paiementService.codeOrange="";
        this.cancel();
      }
    )
  }
}
