import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from "../../../../services/ServiceProduit";
import {ProduitDto} from "../../../../../Model/ProduitDto";
import {Stock} from "../../../../../Model/Stock";
import {ServiceUtilisateur} from "../../../../services/ServiceUtilisateur";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {DetailsproduitComponent} from "../produitlist/detailsproduit/detailsproduit.component";
import {MainService} from "../../../../../shared/services/MainService";
import {RemoveStockComponent} from "./remove-stock/remove-stock.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-managestock',
  templateUrl: './managestock.component.html',
  styleUrls: ['./managestock.component.scss'],
})
export class ManagestockComponent implements OnInit {
  public search: string;
  type_stock = [
    'ENTREE EN STOCK',
    'SORTIE DE STOCK',
    'RETOUR DE STOCK',
    // 'RESERVE DE STOCK'
  ]
  public quantite: number = 0;
  constructor(
    public serviceProduit: ServiceProduit,
    public authService: AuthenService,
    private modalController : ModalController,
    private mainService : MainService,
  ) { }

  ngOnInit() {}

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.serviceProduit.nomProduitFilter = this.serviceProduit.nomProduit.filter((a) => {
          return (a.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        this.serviceProduit.produitListTemp = this.serviceProduit.produitList.filter(p=>{
          return (p.nomProduit.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else {
        this.serviceProduit.nomProduitFilter = [];
      }
    } else {
      this.serviceProduit.nomProduitFilter = [];
    }
  }

  selectItem(prod: string) {
    this.serviceProduit.produitListTemp = this.serviceProduit.produitList.filter(p=>{
      return p.nomProduit == prod;
    })
    this.search = "";
    this.FilterElement(null);
  }

  addStock(c: ProduitDto) {
    if (c.quantite_tempon != 0) {
      let stock = new Stock();
      stock.idProduit = c.idProduit;
      stock.idUser = this.authService.utilisateur.iduser
      stock.quantite = c.quantite_tempon;
      stock.typeStock = this.type_stock[0];
      this.saveStock(stock);
    }
  }

  async removeStock(prod: ProduitDto) {
    this.serviceProduit.produit=prod;
    const modal = await this.modalController.create({
      component: RemoveStockComponent,
      cssClass: 'removestock'
    });
    return await modal.present();
  }

  saveStock(stock:Stock){
    this.mainService.spinner.show();
    this.serviceProduit.savestockbyShop(stock).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.serviceProduit.produit.stock = data;
        let index = this.serviceProduit.produitListTemp.findIndex(p => p.idProduit == data.produit.idProduit)
        this.serviceProduit.produitListTemp.splice(index, 1);
        this.serviceProduit.produitListTemp.reverse();
        this.serviceProduit.produitListTemp.push(data.produit);
        this.serviceProduit.produitListTemp.reverse();
      },error => {
        this.mainService.spinner.hide();
        this.authService.toastMessage("Erreur survenu lors de l'opération");
        console.log(error);
      }
    );
  }
}
