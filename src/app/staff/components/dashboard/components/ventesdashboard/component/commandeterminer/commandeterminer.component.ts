import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../../../services/ServiceDash";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServiceCommande} from "../../../../../../services/ServiceCommande";
import {MainService} from "../../../../../../../shared/services/MainService";
import {ModalController} from "@ionic/angular";
import {Commande} from "../../../../../../../Model/Commande";
import {DetailsCommandeComponent} from "../../../../../caisse/components/clientcommande/components/details-commande/details-commande.component";

@Component({
  selector: 'app-commandeterminer',
  templateUrl: './commandeterminer.component.html',
  styleUrls: ['./commandeterminer.component.scss'],
})
export class CommandeterminerComponent implements OnInit {
   page: number=0;
  constructor(public serviceDash: ServiceDash, private authenService: AuthenService, public serviceCommande: ServiceCommande,
              private mainService: MainService, private modalController: ModalController) {
  }

  ngOnInit() {}

  async selectItem(cmd: Commande) {
    this.serviceCommande.commandeDTOTemp = cmd;
    const modal = await this.modalController.create({
      component: DetailsCommandeComponent,
    });
    return await modal.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.serviceDash.commandePage=null;
    this.serviceDash.getCommandesByBoutiqueIsTermine(this.page);
    event.target.complete();
  }
  loadData(evt) {
    if (this.page < this.serviceDash.commandePage.totalPages) {
      ++this.page;
      this.serviceDash.getCommandesByBoutiqueIsTermine(this.page);
      evt.target.complete();
    }

    if (this.page>=this.serviceDash.commandePage.totalPages) {
      evt.target.disabled=true;
    }
  }
}
