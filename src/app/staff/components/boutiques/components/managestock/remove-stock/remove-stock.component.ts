import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from "../../../../../services/ServiceProduit";
import {ModalController} from "@ionic/angular";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {ProduitDto} from "../../../../../../Model/ProduitDto";
import {Stock} from "../../../../../../Model/Stock";

@Component({
  selector: 'app-remove-stock',
  templateUrl: './remove-stock.component.html',
  styleUrls: ['./remove-stock.component.scss'],
})
export class RemoveStockComponent implements OnInit {
  type_stock = [
    'ENTREE EN STOCK',
    'SORTIE DE STOCK',
    'RETOUR DE STOCK',
    // 'RESERVE DE STOCK'
  ];
  isLoading: boolean;

  constructor(
    public serviceProduit:ServiceProduit,
    private modalController: ModalController,
    private authService: AuthenService
  ) { }

  ngOnInit() {
    this.serviceProduit.produit.description = "";
  }

  closeM() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  removeStock(c: ProduitDto) {
    if (c.quantite_tempon != 0) {
      this.isLoading = true;
      let stock = new Stock();
      stock.idProduit = c.idProduit;
      stock.idUser = this.authService.utilisateur.iduser
      stock.quantite = c.quantite_tempon;
      stock.commentaire = c.description;
      stock.typeStock = this.type_stock[1];
      this.saveStock(stock);
    }
  }

  saveStock(stock:Stock){
    this.serviceProduit.savestockbyShop(stock).subscribe(
      data => {
        this.serviceProduit.produit.stock = data;
        let index = this.serviceProduit.produitListTemp.findIndex(p => p.idProduit == data.produit.idProduit)
        this.serviceProduit.produitListTemp.splice(index, 1);
        this.serviceProduit.produitListTemp.reverse();
        this.serviceProduit.produitListTemp.push(data.produit);
        this.serviceProduit.produitListTemp.reverse();
        this.isLoading = false;
        this.closeM();
      },error => {
        this.isLoading = false;
        this.authService.toastMessage("Erreur survenu lors de l'opération");
        console.log(error);
      }
    );
  }

}
