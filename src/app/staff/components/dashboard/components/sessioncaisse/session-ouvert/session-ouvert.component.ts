import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../../services/ServiceDash";
import {MainService} from "../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {SessionOuverte} from "../../../models/SessionOuverte";

@Component({
  selector: 'app-session-ouvert',
  templateUrl: './session-ouvert.component.html',
  styleUrls: ['./session-ouvert.component.scss'],
})
export class SessionOuvertComponent implements OnInit {
  private modepaiement: string;
  private nomvendeur: string;

  constructor(public serviceDash : ServiceDash, private mainservice : MainService, public authenservice : AuthenService) { }

  ngOnInit() {
    this.serviceDash.testFilter = 1;
    this.mainservice.spinner.show()

    let sessionO : SessionOuverte = new SessionOuverte();
    sessionO.referenceuser = this.authenservice.utilisateur.reference;
    sessionO.referenceboutique = this.authenservice.boutique.reference;

    console.log(sessionO);

    this.serviceDash.checkSessionOuverteInShop(sessionO).subscribe(
      data=>{
        console.log(data);
        this.serviceDash.sessionOuverteList=data;
        this.mainservice.spinner.hide();
      }, error => {
        this.mainservice.spinner.hide();
        this.authenservice.toastMessage(error.error.message)
      }, ()=>{
        this.serviceDash.sessionOuverteList.nomusers = [...new Set(this.serviceDash.sessionOuverteList.nomusers)];
        this.serviceDash.sessionOuverteList.modepaiements = [...new Set(this.serviceDash.sessionOuverteList.modepaiements)];
      }
    )
  }

}
