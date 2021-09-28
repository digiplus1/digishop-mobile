import { Component, OnInit } from '@angular/core';
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {CartItem} from "../../../../../../../Model/CartItem";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-paniercaisse',
  templateUrl: './paniercaisse.component.html',
  styleUrls: ['./paniercaisse.component.scss'],
})
export class PaniercaisseComponent implements OnInit {

  constructor(public panierService : ServicePanier, private authenService : AuthenService) { }

  ngOnInit() {}

  changePrix(pr: CartItem) {
    this.panierService.panierCaisse.cartItems.forEach(c=>{
      if(c.description == pr.description && c.produit == pr.produit){
        c.prixunitaire = pr.prixunitaire;
        this.panierService.refreshPanier();
      }
    })
  }

  addQuantite(pr: CartItem) {
    if(pr.produit.nomProduit.toLowerCase().indexOf("generique")>-1){
      this.authenService.toastMessage("Impossible d'ajouter la quantité")
    } else {
      this.panierService.updateQuantite(pr.produit, 1)
    }
  }

  RemoveQuantie(pr: CartItem) {
    if(pr.produit.nomProduit.toLowerCase().indexOf("generique")>-1){
      this.authenService.toastMessage("Impossible de réduire la quantité")
    } else {
      this.panierService.updateQuantite(pr.produit, -1)
    }
  }

  DeleteItem(pr: CartItem) {
    this.panierService.deleteItem(pr);
  }
}
