import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {ServiceDash} from "../../../../services/ServiceDash";
import {CaisseSession} from "../../../../models/CaisseSession";

@Component({
  selector: 'app-rapport-fermeture',
  templateUrl: './rapport-fermeture.component.html',
  styleUrls: ['./rapport-fermeture.component.scss'],
})
export class RapportFermetureComponent implements OnInit {

  public allsortir: number = 0;
  public allentre: number = 0;
  public allvente: number = 0;
  public allOM: number = 0;
  public allMOMO: number = 0;
  public allCASH: number = 0;

  cstemp : CaisseSession;
  constructor(private modalController : ModalController, private navParam : NavParams, public serviceDash : ServiceDash) { }

  ngOnInit() {

    this.cstemp = this.navParam.get("session");

    this.cstemp.caisseTransactions.forEach(ct=>{
        if(ct.typetransaction == "Entree en caisse"){
          this.allentre += ct.montanttransaction;
        } else if(ct.typetransaction == "Sortie de caiss") {
          this.allsortir += ct.montanttransaction;
        } else if(ct.typetransaction == "Vente en caisse"){
          this.allvente += ct.montanttransaction;
          if(ct.typepaiement == "CASH"){
            this.allCASH += ct.montanttransaction;
          } else if(ct.typepaiement == "MTN MOBILE MONEY"){
            this.allMOMO += ct.montanttransaction;
          } else if(ct.typepaiement == "ORANGE MONEY") {
            this.allOM += ct.montanttransaction;
          }
        }
    })
  }

  onPrint() {

  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
