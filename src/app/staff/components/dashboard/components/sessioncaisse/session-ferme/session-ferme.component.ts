import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../../services/ServiceDash";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {MainService} from "../../../../../../shared/services/MainService";
import {SessionOuverte} from "../../../models/SessionOuverte";
import {SessionFermee} from "../../../models/SessionFermee";
import {ModalController} from "@ionic/angular";
import {SessionOFilterComponent} from "../../../modals/session-ofilter/session-ofilter.component";
import {RapportFermetureComponent} from "../../../modals/rapport-fermeture/rapport-fermeture.component";
import {CaisseSession} from "../../../../../models/CaisseSession";
import {ServiceCaisse} from "../../../../../services/ServiceCaisse";
import {CaisseDTO} from "../../../../../models/CaisseDTO";

@Component({
  selector: 'app-session-ferme',
  templateUrl: './session-ferme.component.html',
  styleUrls: ['./session-ferme.component.scss'],
})
export class SessionFermeComponent implements OnInit {

  constructor(public serviceDash : ServiceDash, public authenService : AuthenService,public caisseService:ServiceCaisse,
              public mainService : MainService, public modalController : ModalController) { }

  ngOnInit() {
    this.serviceDash.testFilter = 2;
    this.mainService.spinner.show()

    let sessionF : SessionFermee = new SessionFermee();
    sessionF.nomuser = this.authenService.utilisateur.username;
    sessionF.nomboutique = this.authenService.boutique.nomBoutique;

    this.serviceDash.checkSessionFermeeInShop(sessionF).subscribe(
      data=>{
        console.log(data);
        this.serviceDash.sessionFermeeList=data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
      },()=>{
        this.serviceDash.sessionFermeeList.nomvendeurs = [...new Set(this.serviceDash.sessionFermeeList.nomvendeurs)];
      }
    )
  }
  finByidcaissesession(idsession:number){
    this.mainService.spinner.show();
    this.caisseService.finByidcaissesession(idsession).subscribe(
      data=>{
        this.mainService.spinner.hide();
        this.openRapport(data)
      },error => {
        this.mainService.notificationService.showError(error.error.message)
        this.mainService.spinner.hide();
      }
    )
  }
  async openRapport(cT : CaisseDTO) {

    const modal = await this.modalController.create({
      component: RapportFermetureComponent,
      componentProps: {
        'session' : cT
      }
    });
    return await modal.present();
  }
}
