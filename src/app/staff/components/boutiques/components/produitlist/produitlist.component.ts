import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from "../../../../services/ServiceProduit";
import {ProduitDto} from "../../../../../Model/ProduitDto";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ServiceBoutique} from "../../../../services/ServiceBoutique";
import {ModalController} from "@ionic/angular";
import {DetailsproduitComponent} from "./detailsproduit/detailsproduit.component";
import {AddproduitComponent} from "./addproduit/addproduit.component";
import {ServiceCatalogueCategorie} from "../../../../services/ServiceCatalogueCategorie";

@Component({
  selector: 'app-produitlist',
  templateUrl: './produitlist.component.html',
  styleUrls: ['./produitlist.component.scss'],
})
export class ProduitlistComponent implements OnInit {
  search: string = "";
  produitListTemp: ProduitDto [] = [];

    constructor(public serviceProduit : ServiceProduit, private mainService : MainService, private modalController : ModalController,
              public authenService : AuthenService, public serviceBoutique : ServiceBoutique, private serviceCatalogueCategorie: ServiceCatalogueCategorie) { }

  ngOnInit() {
    this.mainService.spinner.show();
    this.serviceProduit.getAllNomProduit(this.authenService.boutique.reference);
    this.serviceCatalogueCategorie.findallnomcatalogue();
  }

  ionViewDidEnter(){
    this.produitListTemp = this.serviceProduit.produitList;
  }

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

  async showDetails(prod: ProduitDto) {
    this.serviceProduit.produit=prod;
    const modal = await this.modalController.create({
      component: DetailsproduitComponent,
    });
    return await modal.present();
  }

  async openAddProductForm() {
    const modal = await this.modalController.create({
      component: AddproduitComponent,
    });
    return await modal.present();
  }

  deleteProd(prod: ProduitDto) {

  }
}
