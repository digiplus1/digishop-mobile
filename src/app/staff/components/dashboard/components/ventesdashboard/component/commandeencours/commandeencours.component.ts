import { Component, OnInit } from '@angular/core';
import {Commande} from "../../../../../../../Model/Commande";
import {DetailsCommandeComponent} from "../../../../../caisse/components/clientcommande/components/details-commande/details-commande.component";
import {ServiceDash} from "../../../../../../services/ServiceDash";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServiceCommande} from "../../../../../../services/ServiceCommande";
import {MainService} from "../../../../../../../shared/services/MainService";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-commandeencours',
  templateUrl: './commandeencours.component.html',
  styleUrls: ['./commandeencours.component.scss'],
})
export class CommandeencoursComponent implements OnInit {

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
}
