import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {MainService} from "../../../../../shared/services/MainService";
import {Commande} from "../../../../../Model/Commande";
import {ModalController} from "@ionic/angular";
import {DetailsCommandeComponent} from "../../../caisse/components/clientcommande/components/details-commande/details-commande.component";
import {ServiceCommande} from "../../../../services/ServiceCommande";

@Component({
  selector: 'app-ventesdashboard',
  templateUrl: './ventesdashboard.component.html',
  styleUrls: ['./ventesdashboard.component.scss'],
})
export class VentesdashboardComponent implements OnInit {

  constructor(public serviceDash : ServiceDash, private authenService : AuthenService, public serviceCommande : ServiceCommande,
              private mainService : MainService, private modalController : ModalController) { }

  ngOnInit() {
    this.mainService.spinner.show();

    this.serviceDash.getlistCommande(this.authenService.utilisateur.nomBoutique,this.authenService.utilisateur.username).subscribe(
      data=>{
        console.log(data);
        this.serviceDash.commandeDTOList = data;
        this.serviceDash.commandeDTOListFilter = data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
      }, ()=>{
        this.serviceDash.montantVentes = 0;
        this.serviceDash.commandeDTOList.forEach(c=>{
          this.serviceDash.nomvendeurVList.push(c.nomvendeur);
          this.serviceDash.modepaiementVList.push(c.modepayement);
          this.serviceDash.modecommandeVList.push(c.modecommande);

          this.serviceDash.montantVentes += (c.montantcommande + c.fraislivraison);
        })

        this.serviceDash.nomvendeurVList = [...new Set(this.serviceDash.nomvendeurVList)];
        this.serviceDash.modepaiementVList = [...new Set(this.serviceDash.modepaiementVList)];
        this.serviceDash.modecommandeVList = [...new Set(this.serviceDash.modecommandeVList)];
      }
    )
  }

  ionViewDidEnter(){
    this.serviceDash.testFilter = 3;
    this.serviceDash.testSegmentCaisse = true;
  }

  async selectItem(cmd: Commande) {
    this.serviceCommande.commandeDTOTemp = cmd;
    const modal = await this.modalController.create({
      component: DetailsCommandeComponent,
    });
    return await modal.present();
  }
}
