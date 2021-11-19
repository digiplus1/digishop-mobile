import { Component, OnInit } from '@angular/core';
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ServiceProduit} from "../../../../services/ServiceProduit";
import {ProduitDto} from "../../../../../Model/ProduitDto";
import {CartItem} from "../../../../../Model/CartItem";
import {ServicePanier} from "../../../../services/ServicePanier";
import {Cart} from "../../../../../Model/Cart";
import {PaiementProccessComponent} from "../ventecaisse/components/paiement-proccess/paiement-proccess.component";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {ServicePrinter} from "../../../../services/ServicePrinter";
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import {CaisseTransactions} from "../../../../models/CaisseTransactions";
@Component({
  selector: 'app-venterapidecaisse',
  templateUrl: './venterapidecaisse.component.html',
  styleUrls: ['./venterapidecaisse.component.scss'],
})
export class VenterapidecaisseComponent implements OnInit {

  testMore : boolean = true;
  cartTemp : Cart = new Cart();
  prodList : ProduitDto [] = [];
  slideopts = {
    initialSilde: 0,
    spaceBetween: 0,
    slidesPerView: 2.8,
    slidesOffsetBefore: 5
  };
  constructor(public caisseService : ServiceCaisse, public mainService : MainService, public authenService : AuthenService,
              public serviceProduit : ServiceProduit, public servicepanier : ServicePanier, private modalController : ModalController,
              private router : Router,public printService:ServicePrinter,) { }

  ngOnInit() {
    this.testMore = true;

    if(this.serviceProduit.produitList.length==0){
      this.mainService.spinner.show();
      this.serviceProduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(
        data=>{
          console.log(data);
          this.serviceProduit.produitPopulaire = data.filter(p=> p.nomProduit!="Generique");
          this.prodList = this.serviceProduit.produitPopulaire;
          this.mainService.spinner.hide();
        }, error => {
          this.mainService.spinner.hide();
          this.authenService.toastMessage(error.error.message);
        }
      );
    } else {
      this.serviceProduit.produitPopulaire = this.serviceProduit.produitList.filter(p=> p.populaire && p.nomProduit!="Generique");
      this.serviceProduit.produitNonPopulaire = this.serviceProduit.produitList.filter(p=> !p.populaire && p.nomProduit!="Generique");
    }
  }

  addPanier(prod: ProduitDto) {
    let cartItem : CartItem = new CartItem();

    if(prod.manageStock){
      if(prod.quantiteEnStock>=1){
        cartItem.produit = prod;
        cartItem.description = prod.nomProduit;
        cartItem.montant = prod.prixProduit;
        cartItem.quantite = 1;
        cartItem.prixunitaire = prod.prixProduit;
        cartItem.idproduit = prod.idProduit;
        cartItem.nomproduit = prod.nomProduit;

        this.addItem(cartItem);
      } else {
        this.authenService.toastMessage("Le stock du produit est insuffisant.")
      }
    } else {
      cartItem.produit = prod;
      cartItem.description = prod.nomProduit;
      cartItem.montant = prod.prixProduit;
      cartItem.quantite = 1;
      cartItem.prixunitaire = prod.prixProduit;
      cartItem.idproduit = prod.idProduit;
      cartItem.nomproduit = prod.nomProduit;

      this.addItem(cartItem);
    }
  }

  addItem(cI : CartItem) {
    if(cI.produit.quantiteEnStock<1 && cI.produit.manageStock && !(cI.produit.nomProduit.toLowerCase().indexOf("generique")>-1)){
      this.authenService.toastMessage("La quantité en stock est insuffisante.")
    } else {
      let test = this.cartTemp.cartItems.find(c=>{return c.description == cI.description && c.produit == cI.produit});
      if(test){
        //Mise à jour de l'élément
        this.cartTemp.cartItems.forEach(c=>{
          if(c.description == cI.description){
            c.quantite += 1;
            c.montant = c.prixunitaire * c.quantite;
            this.refreshPanier();
          }
        })
      } else {
        //Ajout de l'élément
        this.cartTemp.cartItems.push(cI);
        this.refreshPanier()
      }
    }
    console.log(this.cartTemp);
  }

  changePrix(pr: CartItem) {
    this.cartTemp.cartItems.forEach(c=>{
      if(c.description == pr.description && c.produit == pr.produit){
        c.prixunitaire = pr.prixunitaire;
        this.refreshPanier();
      }
    })
  }

  addQuantite(pr: CartItem) {
    if(pr.produit.nomProduit.toLowerCase().indexOf("generique")>-1){
      this.authenService.toastMessage("Impossible d'ajouter la quantité")
    } else {
      this.updateQuantite(pr.produit, 1)
    }
  }

  RemoveQuantie(pr: CartItem) {
    if(pr.produit.nomProduit.toLowerCase().indexOf("generique")>-1){
      this.authenService.toastMessage("Impossible de réduire la quantité")
    } else {
      this.updateQuantite(pr.produit, -1)
    }
  }

  DeleteItem(pr: CartItem) {
    this.deleteItem(pr);
  }

  refreshPanier() {
    let prix : number = 0;
    this.cartTemp.cartItems.forEach(c=>{
      c.montant = c.prixunitaire * c.quantite;
      prix += c.montant;
    })
    this.cartTemp.montanttotal = prix;
  }

  updateQuantite(prod : ProduitDto, quantite : number) {
    let cI = this.cartTemp.cartItems.find(c=>{
      return c.produit == prod && c.description == prod.nomProduit;
    })
    if(cI){
      if(quantite==1){
        this.cartTemp.cartItems.forEach(c=>{
          if(c.description == cI.description){
            if(prod.quantiteEnStock<=c.quantite){
              this.authenService.toastMessage("Le stock de ce produit est insuffisant.")
            } else {
              c.quantite += 1;
              c.montant = c.quantite * c.prixunitaire;
              this.refreshPanier();
            }
          }
        })
      } else if (quantite==-1){
        this.cartTemp.cartItems.forEach(c=>{
          if(c.description == prod.nomProduit){
            if(c.quantite==0){
              this.authenService.toastMessage("Impossible d'avoir une quantité négative")
            } else if(c.quantite == 1){
              this.deleteItem(c);
            } else if(c.quantite>1){
              c.quantite -= 1;
              c.montant = c.quantite * c.prixunitaire;
              this.refreshPanier();
            }
          }
        })
      }
    }
  }

  deleteItem(cI: CartItem) {
    let test = this.cartTemp.cartItems.findIndex(c=> {
      return c.description == cI.description && c.produit == cI.produit
    });
    if(test!=-1){
      this.cartTemp.cartItems.splice(test, 1);
      this.refreshPanier();
    } else {
      this.authenService.toastMessage("Le produit n'existe pas dans le panier.");
    }
  }

  clearPanier() {
      this.cartTemp.cartItems = [];
      this.refreshPanier();
      this.authenService.toastMessage("Suppression réussie");
  }

  async payer() {
    this.servicepanier.panierCaisse = this.cartTemp;
    if(this.servicepanier.panierCaisse.cartItems.length>0){
      const modal = await this.modalController.create({
        component: PaiementProccessComponent,
      });
      return await modal.present();
    } else {
      this.authenService.toastMessage("Aucun produit ajouté.")
    }
  }

  goBack() {
    this.servicepanier.clearPanierSansNotif();
    this.cartTemp.cartItems = [];
    this.refreshPanier();
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  getMore() {
    if(this.serviceProduit.produitList.length<1){
      if(this.serviceProduit.produitNonPopulaire.length<1){
        this.mainService.spinner.show();
        this.serviceProduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(
          data=>{
            console.log(data);
            this.serviceProduit.produitNonPopulaire = data.filter(p=> p.nomProduit!="Generique");
            this.serviceProduit.produitNonPopulaire.forEach(p=>{
              this.prodList.push(p);
            })
            this.mainService.spinner.hide();
            this.testMore = false;
          }, error => {
            this.mainService.spinner.hide();
            this.authenService.toastMessage(error.error.message);
          }
        );
      } else {
        this.testMore = false;
      }
    } else {
      this.serviceProduit.produitNonPopulaire.forEach(p=>{
        this.prodList.push(p);
      })
      this.testMore = false;
    }
  }

}
