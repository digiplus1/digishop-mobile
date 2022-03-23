import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";

@Component({
  selector: 'app-check-rapport',
  templateUrl: './check-rapport.component.html',
  styleUrls: ['./check-rapport.component.scss'],
})
export class CheckRapportComponent implements OnInit {

  public checkRetour: string[] = [];

  constructor(private modalController : ModalController, private navParam : NavParams) { }

  ngOnInit() {
    this.checkRetour = this.navParam.get("checkRetour");
  }
  onDismiss() {
    this.modalController.dismiss();
  }

}
