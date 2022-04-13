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
  commandes : Commande []=[];
  search: string = '';

  constructor(public serviceDash: ServiceDash, private authenService: AuthenService, public serviceCommande: ServiceCommande,
              private mainService: MainService, private modalController: ModalController) {
  }

  ngOnInit() {
   this.getAllVenteEnCours();
  }


  getAllVenteEnCours() {
    this.mainService.spinner.show();
    this.serviceDash.getCommandesByBoutiqueIsEncours().subscribe(
      data => {
        //this.serviceDash.commandePage=data;
        this.serviceDash.commandeEncours = data;
        this.commandes = data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
      }, () => {
        this.serviceDash.montantVentes = 0;
        console.log(this.serviceDash.commandeDTOList.length);
        this.serviceDash.commandeDTOList.forEach(c => {
          console.log('test');
          this.serviceDash.nomvendeurVList.push(c.nomvendeur);
          this.serviceDash.modepaiementVList.push(c.modepayement);
          this.serviceDash.modecommandeVList.push(c.modecommande);

          this.serviceDash.montantVentes += (c.montantcommande + c.fraislivraison);
        })
      }
    )
  }

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.commandes = this.serviceDash.commandeEncours.filter((a) => {
          return (a.referencecommande.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else this.commandes=this.serviceDash.commandeEncours;
    } else {
      this.serviceDash.commandeEncours = [];
    }
  }
  selectCmd(ref: String) {
    this.commandes = this.serviceDash.commandeEncours.filter(c=> c.referencecommande === ref);

    this.FilterElement(null);
    this.search=""
  }

  async selectItem(cmd: Commande) {
    this.serviceCommande.commandeDTOTemp = cmd;
    const modal = await this.modalController.create({
      component: DetailsCommandeComponent,
    });
    return await modal.present();
  }
}
