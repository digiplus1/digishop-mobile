import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ModalController} from "@ionic/angular";
import {SessionOuverte} from "../../models/SessionOuverte";

@Component({
  selector: 'app-session-ofilter',
  templateUrl: './session-ofilter.component.html',
  styleUrls: ['./session-ofilter.component.scss'],
})
export class SessionOFilterComponent implements OnInit {
  is_loading: boolean = false;

  constructor(public serviceDash : ServiceDash,
              public authenservice : AuthenService, private modalController : ModalController) { }

  ngOnInit() {}

  updateVendeur(ev : any){
    this.serviceDash.nomvendeurO = ev.target.value;
  }

  updatePaiement(ev : any){
    let val=ev.target.value;
    if (val=="tout"){
      this.serviceDash.modepaiementO=null;
    }else {
      this.serviceDash.modepaiementO = val;
    }
  }

  onFilter() {
    this.is_loading = true;

    let sessionO : SessionOuverte = new SessionOuverte();
    if(this.serviceDash.nomvendeurO=="" || this.serviceDash.nomvendeurO == null){
      this.serviceDash.nomvendeurO = this.authenservice.utilisateur.username;
      sessionO.nomuser = this.authenservice.utilisateur.username;
    } else {
      sessionO.nomuser = this.serviceDash.nomvendeurO;
    }
    sessionO.nomboutique = this.authenservice.utilisateur.nomBoutique;
    sessionO.modepaiement = this.serviceDash.modepaiementO ;

    this.serviceDash.checkSessionOuverteInShop(sessionO).subscribe(
      data=>{
        console.log(data);
        this.serviceDash.sessionOuverteList=data;
        this.is_loading = false;
        this.onDismiss()
      }, error => {
        this.is_loading = false;
        this.authenservice.toastMessage(error.error.message);
        this.onDismiss();
      }
    )
  }

  onDismiss() {
    this.modalController.dismiss()
  }
}
