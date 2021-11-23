import { Component, OnInit } from '@angular/core';
import {ServiceStock} from "../../../../../services/ServiceStock";
import {MainService} from "../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {Inventaire} from "../Model/Inventaire";
import {DefineInventaireDTO} from "../Model/DefineInventaireDTO";
import {InventaireForm} from "../Model/InventaireForm";

@Component({
  selector: 'app-nonvalidinventaire',
  templateUrl: './nonvalidinventaire.component.html',
  styleUrls: ['./nonvalidinventaire.component.scss'],
})
export class NonvalidinventaireComponent implements OnInit {
  val: number;

  constructor(public stockService:ServiceStock, private mainService : MainService,public authService: AuthenService,) { }


  ngOnInit() {
  }


  deleteInventaire(i: Inventaire) {
    this.mainService.spinner.show();
    this.stockService.deleteInventaire(this.authService.utilisateur.iduser,i.idinventaire).subscribe(
      data=>{
        this.mainService.spinner.hide();
      },error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    )
  }


  soumettre(u: Inventaire) {
    let definInventaire:DefineInventaireDTO=new DefineInventaireDTO();

    definInventaire.idinventaire=u.idinventaire;
    definInventaire.iduser=this.authService.utilisateur.iduser;
    definInventaire.inventaireForms=[];
    u.inventaireItemList.forEach(i=>{
      let inventaireFoem:InventaireForm=new InventaireForm();
      inventaireFoem.idproduit=i.produit.idProduit;
      inventaireFoem.quantitephysique=i.quantitephysique;
      definInventaire.inventaireForms.push(inventaireFoem);
    });
    this.mainService.spinner.show();
    this.stockService.defineInventaire(definInventaire).subscribe(
      data=>{
        this.mainService.spinner.hide();
        let index=this.stockService.inventaireNonValidePage.content.indexOf(u);
        this.stockService.inventaireNonValidePage.content.splice(index,1);
      },error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    )
  }
}
