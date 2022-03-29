import { Component, OnInit } from '@angular/core';
import {ProduitDto} from "../../../../../../../Model/ProduitDto";
import {ServiceProduit} from "../../../../../../services/ServiceProduit";
import {Router} from "@angular/router";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {CartService} from "../../../../../../../client/Service/CartService";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {MainService} from "../../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ModalController} from "@ionic/angular";
import {ModalpanierComponent} from "../../../compteclient/components/modalpanier/modalpanier.component";
import {GeneriqueComponent} from "../../../ventecaisse/components/generique/generique.component";
import {CartItem} from "../../../../../../../Model/CartItem";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {ModalpaymentventeComponent} from "../modalpaymentvente/modalpaymentvente.component";
import {ModalpanierventeComponent} from "../modalpaniervente/modalpaniervente.component";

@Component({
  selector: 'app-bodyventes',
  templateUrl: './bodyventes.component.html',
  styleUrls: ['./bodyventes.component.scss'],
})
export class BodyventesComponent implements OnInit {
  produits: ProduitDto[];
  produitsFilter: ProduitDto[];
  cartItem: CartItem;
  constructor(public serviceproduit : ServiceProduit, private router : Router,private barcodeScanner: BarcodeScanner,public cartService:CartService,
              public servicepanier : ServicePanier,   public caisseService : ServiceCaisse, private mainService : MainService,public authenService : AuthenService, public modalController : ModalController,) { }

  ngOnInit() {

    this.initializeData();
    this.findProdByShop();
    this.caisseService.testConnexion();
    setInterval(()=>{
      this.caisseService.testConnexion();
    },2000)
  }

  initializeData () {
    this.mainService.spinner.show()
    this.serviceproduit.getAllNomProduit(this.authenService.boutique.nomBoutique);
  }

  goBack() {
    this.authenService.user_vendeur=null;
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  findProdByShop() {
    this.mainService.spinner.show();
    this.serviceproduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.produits = data;
        this.produitsFilter=data;
      }, error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    );
  }

  scanCodeOffline() {
    console.log("I am offline");
    this.barcodeScanner.scan().then(barcodeData => {
      this.mainService.spinner.show();
      this.produits.forEach(elt => {
        if (elt.qcode === barcodeData.text) {
          this.mainService.spinner.hide();
          this.addPanier(elt);
          this.mainService.notificationService.showSuccess("Ajout avec succes");
        }
      })
    }).catch(err => {
      console.log('Error', err);
    });
  }

  scanCode() {
    console.log("I am online");
    this.barcodeScanner.scan().then(barcodeData => {
      this.mainService.spinner.show();
      this.serviceproduit.getproductByBarcode(barcodeData.text).subscribe(
        data=>{
          this.mainService.spinner.hide();
          this.addPanier(data);
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
        this.produits = this.produitsFilter.filter((a) => {
          return (a.nomProduit.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else this.produits = this.produitsFilter;
    } else {
      this.produits = this.produitsFilter;
    }
  }


  addPanier(produit: ProduitDto) {
    this.FilterElement(null);
    if (produit.nomProduit.toLowerCase().indexOf("generique")>-1) {
      this.generiqueModal(produit);
    } else {
      if(produit.quantiteEnStock > 0 || !produit.manageStock){
        this.cartItem = new CartItem();
        this.cartItem.produit = produit;
        this.cartItem.quantite = 1;
        this.cartItem.description = produit.nomProduit;
        this.cartItem.prixunitaire = produit.prixProduit;
        this.cartItem.montant = this.cartItem.quantite * this.cartItem.prixunitaire;
        this.cartItem.idproduit = produit.idProduit;
        this.cartItem.nomproduit = produit.nomProduit;

        this.servicepanier.addItem(this.cartItem);

        this.FilterElement(null);
      } else {
        this.mainService.notificationService.showInfo("Le stock du produit est insuffisant.");
      }
    }
  }

  async panier() {
    if(this.servicepanier.panierCaisse.cartItems.length>0){
      const modal = await this.modalController.create({
        component: ModalpanierventeComponent,
        cssClass:"paniermodal",
        componentProps: {
          'panier' : this.servicepanier.panierCaisse
        }
      });
      return await modal.present();
    } else {
      this.authenService.toastMessage("Aucun article ajouté.")
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

}
