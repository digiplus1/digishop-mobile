import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ServicePanier} from "../../../../services/ServicePanier";
import {ServiceProduit} from "../../../../services/ServiceProduit";
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {CartItem} from "../../../../../Model/CartItem";
import {ProduitDto} from "../../../../../Model/ProduitDto";
import {GeneriqueComponent} from "../ventecaisse/components/generique/generique.component";
import {ModalController} from "@ionic/angular";
import {MainService} from "../../../../../shared/services/MainService";
import {PaiementProccessComponent} from "../ventecaisse/components/paiement-proccess/paiement-proccess.component";
import {PaiementClientComponent} from "./components/paiement-client/paiement-client.component";
import {PaniermodalComponent} from "./components/paniermodal/paniermodal.component";

@Component({
  selector: 'app-clientaccount',
  templateUrl: './clientaccount.component.html',
  styleUrls: ['./clientaccount.component.scss'],
})
export class ClientaccountComponent implements OnInit {
  search : string = "";
  private cartItemTemp: CartItem;

  constructor(private router : Router, public authenService : AuthenService,
              public panierService : ServicePanier, public serviceproduit : ServiceProduit,
              public serviceCaisse : ServiceCaisse, public modalController : ModalController,
              private mainService : MainService) { }

  ngOnInit() {
    if(this.serviceproduit.produitList.length==0 || this.serviceproduit.nomProduit.length==0){
      this.mainService.spinner.show()
      this.serviceproduit.getAllNomProduit(this.authenService.boutique.nomBoutique);
    }
  }

  goBack() {
    this.serviceCaisse.affiche = 1;
    this.authenService.user_vendeur = null;
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  scanCode() {

  }

  savePanier() {
    if(this.panierService.panierCaisse.cartItems.length !=0){
      this.mainService.spinner.show();
      this.panierService.deletePanierClient(this.panierService.panierCaisse.idcart).subscribe(
        data=>{
          console.log(data);
          if(data){
            this.panierService.savePanierClient(this.panierService.panierCaisse).subscribe(
              result => {
                console.log(result)
               this.mainService.spinner.hide()
              },error => {
                this.authenService.toastMessage(error.error.message);
                this.mainService.spinner.hide();
              }
            )
          } else {
            this.mainService.spinner.hide()
          }
        },error => {
          this.authenService.toastMessage(error.error.message);
          this.mainService.spinner.hide();
        }
      )
    } else {
     this.authenService.toastMessage("Le panier est vide.")
    }
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

          this.panierService.addItem(this.cartItemTemp);

          this.FilterElement(null);
          this.search = "";
        } else {
          this.authenService.toastMessage("Le stock du produit est insuffisant.");
        }
      }
    } else {
      this.authenService.toastMessage("Le produit n'existe pas.");
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
    this.panierService.clearPanier();
  }

  async payer() {
    if (this.panierService.panierCaisse.cartItems.length > 0) {
      const modal = await this.modalController.create({
        component: PaiementClientComponent,
      });
      return await modal.present();
    } else {
      this.authenService.toastMessage("Aucun produit ajouté.")
    }
  }

  async panier() {
    if (this.panierService.panierCaisse.cartItems.length > 0) {
      const modal = await this.modalController.create({
        component: PaniermodalComponent,
      });
      return await modal.present();
    } else {
      this.authenService.toastMessage("Aucun produit ajouté.")
    }
  }
}
