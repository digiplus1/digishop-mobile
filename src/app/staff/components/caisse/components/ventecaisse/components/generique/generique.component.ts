import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {ProduitDto} from "../../../../../../../Model/ProduitDto";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {CartItem} from "../../../../../../../Model/CartItem";
import {ServicePanier} from "../../../../../../services/ServicePanier";

@Component({
  selector: 'app-generique',
  templateUrl: './generique.component.html',
  styleUrls: ['./generique.component.scss'],
})
export class GeneriqueComponent implements OnInit {

  placeholder: string = "";
  indication : string = "";
  prix: number;
  qte: number;
  produit : ProduitDto;

  constructor(public panierService : ServicePanier, public modalController : ModalController,
              public _navParamsService : NavParams, private authenService : AuthenService) { }

  ngOnInit() {
    this.produit = this._navParamsService.get('generique');
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addPanier() {
    if(this.indication=="" || this.prix<=0 || this.qte <=0){
      this.authenService.toastMessage("Bien vouloir contrôler les données entrées.")
    } else {
      let cartItemTemp : CartItem = new CartItem();
      cartItemTemp.produit = this.produit;
      cartItemTemp.quantite = this.qte;
      cartItemTemp.description = this.indication;
      let mnt = Number(this.prix / this.qte).toFixed(0);
      cartItemTemp.prixunitaire = Number(mnt);
      cartItemTemp.montant = this.qte * this.prix;
      cartItemTemp.idproduit = this.produit.idProduit;
      cartItemTemp.nomproduit = this.produit.nomProduit;

      this.panierService.addItem(cartItemTemp);
      this.dismiss();
    }
  }
}
