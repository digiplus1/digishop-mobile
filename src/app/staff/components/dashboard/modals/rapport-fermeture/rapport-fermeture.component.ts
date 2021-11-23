import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {ServiceDash} from "../../../../services/ServiceDash";
import {CaisseSession} from "../../../../models/CaisseSession";
import {CaisseDTO} from "../../../../models/CaisseDTO";

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

  cstemp : CaisseDTO;
  constructor(private modalController : ModalController, private navParam : NavParams, public serviceDash : ServiceDash) { }

  ngOnInit() {
    this.cstemp = this.navParam.get("session");
  }

  onPrint() {

  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
