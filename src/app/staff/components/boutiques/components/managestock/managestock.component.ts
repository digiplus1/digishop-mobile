import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from "../../../../services/ServiceProduit";
import {ProduitDto} from "../../../../../Model/ProduitDto";

@Component({
  selector: 'app-managestock',
  templateUrl: './managestock.component.html',
  styleUrls: ['./managestock.component.scss'],
})
export class ManagestockComponent implements OnInit {
  public search: string;

  constructor(
    public serviceProduit: ServiceProduit
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

  showDetails(c: ProduitDto) {

  }

  deleteProd(c: ProduitDto) {

  }
}
