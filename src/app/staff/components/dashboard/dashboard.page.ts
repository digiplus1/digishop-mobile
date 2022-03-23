import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceDash} from "../../services/ServiceDash";
import {ModalController} from "@ionic/angular";
import {SessionOFilterComponent} from "./modals/session-ofilter/session-ofilter.component";
import {SessionFFilterComponent} from "./modals/session-ffilter/session-ffilter.component";
import {VenteFilterComponent} from "./modals/vente-filter/vente-filter.component";
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {BoutiqueService} from "../../../client/Service/BoutiqueService";
import {MainService} from "../../../shared/services/MainService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router : Router, public serviceDash : ServiceDash, public modalController : ModalController,
              private authenService : AuthenService,private boutiqueService: BoutiqueService, private mainService: MainService) { }

  ngOnInit() {
    this.mainService.spinner.show();
    this.boutiqueService.getboutiqueByReference(this.authenService.utilisateur.referenceboutique).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.boutiqueService.boutique = data;
        console.log(data);
      }, error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    )
    this.router.navigateByUrl("/staff/menustaff/dashboard/accueildash")
  }

  async afficheFilter() {
    if (this.serviceDash.testFilter == 0){
      this.authenService.toastMessage("Aucun filtre disponible.")
    } else if(this.serviceDash.testFilter == 1){
      const modal = await this.modalController.create({
        component: SessionOFilterComponent,
      });
      return await modal.present();
    } else if(this.serviceDash.testFilter == 2) {
      const modal = await this.modalController.create({
        component: SessionFFilterComponent,
      });
      return await modal.present();
    } else if(this.serviceDash.testFilter == 3){
      const modal = await this.modalController.create({
        component: VenteFilterComponent,
      });
      return await modal.present();
    }
  }
}
