import { Component, OnInit } from '@angular/core';
import {ProduitDto} from "../../../../../Model/ProduitDto";
import {ServiceProduit} from "../../../../services/ServiceProduit";
import {Router} from "@angular/router";
import {ServicePanier} from "../../../../services/ServicePanier";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {CartItem} from "../../../../../Model/CartItem";
import {ModalController} from "@ionic/angular";
import {PaiementProccessComponent} from "./components/paiement-proccess/paiement-proccess.component";
import {PaniertempComponent} from "./components/paniertemp/paniertemp.component";
import {GeneriqueComponent} from "./components/generique/generique.component";
import {CaisseTransactions} from "../../../../models/CaisseTransactions";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-ventecaisse',
  templateUrl: './ventecaisse.component.html',
  styleUrls: ['./ventecaisse.component.scss'],
})
export class VentecaisseComponent implements OnInit {

  produitTemp : ProduitDto;
  cartItemTemp : CartItem;
  search: string = "";
  constructor(public serviceproduit : ServiceProduit, private router : Router, private autheService : AuthenService,private barcodeScanner: BarcodeScanner,
              public servicepanier : ServicePanier, private mainService : MainService,public authenService : AuthenService, public modalController : ModalController,) { }

  ngOnInit() {
    if(this.serviceproduit.produitList.length==0 || this.serviceproduit.nomProduit.length==0){
      this.initializeData();
    }
  }

  initializeData () {
    this.mainService.spinner.show()
    this.serviceproduit.getAllNomProduit(this.autheService.boutique.nomBoutique);
  }

  goBack() {
    this.servicepanier.clearPanierSansNotif()
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  savePanierToBrouillon() {
    if(this.servicepanier.panierCaisse.cartItems.length>0){
      this.brouillonModal();
    } else {
      if(this.servicepanier.panierTempList.length==0){
        this.autheService.toastMessage("Aucun brouillon n'existe.");
      } else {
        this.brouillonModal();
      }
    }
  }

  async brouillonModal() {
    const modal = await this.modalController.create({
      component: PaniertempComponent,
    });
    return await modal.present();
  }

  scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.mainService.spinner.show();
       this.serviceproduit.getproductByBarcode(barcodeData.text).subscribe(
         data=>{
           this.mainService.spinner.hide();
           this.addPanier(data.nomProduit);
           this.mainService.notificationService.showSuccess("Ajout avec succes")
         },error => {
           this.mainService.spinner.hide();
           this.mainService.notificationService.showError(error.error.message)
         }
       )
      }).catch(err => {
        console.log('Error', err);
      });
  }

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.serviceproduit.nomProduitFilter = this.serviceproduit.nomProduit.filter((a) => {
          return (a.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else this.serviceproduit.nomProduitFilter = [];
    } else {
      this.serviceproduit.nomProduitFilter = [];
    }
  }

  addPanier(prod: any) {
    console.log(prod)
    let produit = this.serviceproduit.searchProduitByNom(prod);
    this.FilterElement(null);
    this.search = "";
    if(produit){
      if (prod.toLowerCase().indexOf("generique")>-1) {
        console.log("Generique")
        this.generiqueModal(produit);
      } else {
        console.log("Produit")
        if(produit.quantiteEnStock > 0 || !produit.manageStock){
          this.cartItemTemp = new CartItem();
          this.cartItemTemp.produit = produit;
          this.cartItemTemp.quantite = 1;
          this.cartItemTemp.description = produit.nomProduit;
          this.cartItemTemp.prixunitaire = produit.prixProduit;
          this.cartItemTemp.montant = this.cartItemTemp.quantite * this.cartItemTemp.prixunitaire;
          this.cartItemTemp.idproduit = produit.idProduit;
          this.cartItemTemp.nomproduit = produit.nomProduit;

          this.servicepanier.addItem(this.cartItemTemp);

          this.FilterElement(null);
          this.search = "";
        } else {
          this.autheService.toastMessage("Le stock du produit est insuffisant.");
        }
      }
    } else {
      this.autheService.toastMessage("Le produit n'existe pas.");
    }
  }

  async payer() {
    if(this.servicepanier.panierCaisse.cartItems.length>0){
      const modal = await this.modalController.create({
        component: PaiementProccessComponent,
      });
      return await modal.present();
    } else {
      this.autheService.toastMessage("Aucun article ajouté.")
    }
  }

  async generiqueModal(produit : ProduitDto){
    const modal = await this.modalController.create({
      component: GeneriqueComponent,
      componentProps: {
        'generique' : produit
      }
    });
    return await modal.present();
  }

  clearPanier() {
    this.servicepanier.clearPanier();
  }

}
