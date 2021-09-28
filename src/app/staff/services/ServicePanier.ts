import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Cart} from "../../Model/Cart";
import {CartItem} from "../../Model/CartItem";
import {ProduitDto} from "../../Model/ProduitDto";
import {PanierTemp} from "../models/panierTemp";
import {AdresseIP} from "../../Service/AdresseIP";


@Injectable()
export class  ServicePanier {

  panierCaisse : Cart = new Cart();
  cartItem : CartItem = new CartItem();
  panierTempList : PanierTemp [] = [];
  index: number = 0;

  constructor(public http:HttpClient,public authenService:AuthenService) {
  }

  deletePanierClient(idcart : number){
    return this.http.delete<Cart>(AdresseIP.host + "clearcart/" + idcart);
  }

  savePanierClient(cart : Cart){
    return this.http.post<Cart>(AdresseIP.host + "saveallcartbyclient", cart);
  }

  addItem(cI : CartItem) {
    if(cI.produit.quantiteEnStock<1 && cI.produit.manageStock && !(cI.produit.nomProduit.toLowerCase().indexOf("generique")>-1)){
      this.authenService.toastMessage("La quantité en stock est insuffisante.")
    } else {
      let test = this.panierCaisse.cartItems.find(c=>{return c.description == cI.description && c.produit == cI.produit});
      if(test){
        //Mise à jour de l'élément
        this.panierCaisse.cartItems.forEach(c=>{
          if(c.description == cI.description){
            c.quantite += 1;
            c.montant = c.prixunitaire * c.quantite;
            this.refreshPanier();
          }
        })
      } else {
        //Ajout de l'élément
        this.panierCaisse.cartItems.push(cI);
        this.refreshPanier()
      }
    }
    console.log(this.panierCaisse);
  }

  refreshPanier() {
    let prix : number = 0;
    this.panierCaisse.cartItems.forEach(c=>{
      c.montant = c.prixunitaire * c.quantite;
      prix += c.montant;
    })
    this.panierCaisse.montanttotal = prix;
  }

  updateQuantite(prod : ProduitDto, quantite : number) {
    let cI = this.panierCaisse.cartItems.find(c=>{
      return c.produit == prod && c.description == prod.nomProduit;
    })
    if(cI){
      if(quantite==1){
        this.panierCaisse.cartItems.forEach(c=>{
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
        this.panierCaisse.cartItems.forEach(c=>{
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
    let test = this.panierCaisse.cartItems.findIndex(c=> {
      return c.description == cI.description && c.produit == cI.produit
    });
    if(test!=-1){
      this.panierCaisse.cartItems.splice(test, 1);
      this.refreshPanier();
    } else {
      this.authenService.toastMessage("Le produit n'existe pas dans le panier.");
    }
  }

  clearPanier() {
    if(this.panierCaisse.cartItems.length>0){
      this.panierCaisse.cartItems = [];
      this.refreshPanier();
      this.authenService.toastMessage("Suppression réussie");
    } else {
      this.authenService.toastMessage("Le panier est vide.");
    }
  }

  clearPanierSansNotif() {
    this.panierCaisse.cartItems = [];
    this.refreshPanier();
  }

}
