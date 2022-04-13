import { Component, OnInit } from '@angular/core';
import {ProduitDto} from "../../../../../../../Model/ProduitDto";
import {CartItem} from "../../../../../../../Model/CartItem";
import {ServiceProduit} from "../../../../../../services/ServiceProduit";
import {Router} from "@angular/router";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {MainService} from "../../../../../../../shared/services/MainService";
import {ModalController} from "@ionic/angular";
import {PaniertempComponent} from "../../../ventecaisse/components/paniertemp/paniertemp.component";
import {PaiementProccessComponent} from "../../../ventecaisse/components/paiement-proccess/paiement-proccess.component";
import {GeneriqueComponent} from "../../../ventecaisse/components/generique/generique.component";
import {CartService} from "../../../../../../../client/Service/CartService";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {ModalpanierComponent} from "../modalpanier/modalpanier.component";

@Component({
  selector: 'app-bodycart',
  templateUrl: './bodycart.component.html',
  styleUrls: ['./bodycart.component.scss'],
})
export class BodycartComponent implements OnInit {

  produits: ProduitDto[];
  produitsFilter: ProduitDto[];
  constructor(public serviceproduit : ServiceProduit, private router : Router,private barcodeScanner: BarcodeScanner,public cartService:CartService,
              public caisseService : ServiceCaisse, private mainService : MainService,public authenService : AuthenService, public modalController : ModalController,) { }

  ngOnInit() {

      this.initializeData();
    this.findProdByShop();
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
    this.serviceproduit.findAllByProduitPopulaire(this.authenService.boutique.reference).subscribe(
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


  scanCode() {
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
      } else this.serviceproduit.nomProduitFilter = [];
    } else {
      this.serviceproduit.nomProduitFilter = [];
    }
  }

  addPanier(prod: ProduitDto) {
    this.FilterElement(null);      if (prod.nomProduit.toLowerCase().indexOf("generique")>-1) {

        this.generiqueModal(prod);
      } else {
       this.caisseService.ajouter_panierClient(prod,1,"add")
      }
  }

  async panier() {
    if(this.authenService.user_vendeur.cart.cartItems.length>0){
      const modal = await this.modalController.create({
        component: ModalpanierComponent,
        cssClass:"paniermodal",
        componentProps: {
          'panier' : this.authenService.user_vendeur.cart
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
