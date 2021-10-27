import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from "../../../../../services/ServiceProduit";
import {ModalController} from "@ionic/angular";
import {produitDtoPage} from "../../../../../../Model/ProduitDtoPage";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-detailsproduit',
  templateUrl: './detailsproduit.component.html',
  styleUrls: ['./detailsproduit.component.scss'],
})
export class DetailsproduitComponent implements OnInit {
  edite: boolean = false;
  isLoading: boolean;

  constructor(
    public serviceProduit:ServiceProduit,
    private modalController: ModalController,
    private authenService: AuthenService
  ) { }

  ngOnInit() {}

  takePicture() {
    if (!this.edite) {
      this.changer();
    }
  }

  closeM() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  update() {
    this.isLoading = true;
    this.serviceProduit.updateProduit(this.serviceProduit.produit).subscribe(
      data => {
        this.isLoading = false;
        let index = this.serviceProduit.produitList.findIndex(u => u.idProduit == this.serviceProduit.produit.idProduit);
        this.serviceProduit.produitList.splice(index, 1);
        this.serviceProduit.produitList.reverse();
        this.serviceProduit.produitList.push(data);
        this.serviceProduit.produitList.reverse();
        this.authenService.toastMessage('Operation effectuée avec succès');
        this.closeM();
      }, error => {
        this.isLoading = false;
        this.authenService.toastMessage(error.error.message);
      }
    )
  }

  changer() {
    this.edite = !this.edite;
  }
}
