import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSearchbar, IonSlides, ModalController, NavParams} from "@ionic/angular";
import {ServiceDash} from "../../../../services/ServiceDash";
import {CaisseSession} from "../../../../models/CaisseSession";
import {CaisseDTO} from "../../../../models/CaisseDTO";
import {BoutiqueService} from "../../../../../client/Service/BoutiqueService";

@Component({
  selector: 'app-rapport-fermeture',
  templateUrl: './rapport-fermeture.component.html',
  styleUrls: ['./rapport-fermeture.component.scss'],
})
export class RapportFermetureComponent implements OnInit {


  @ViewChild('search', {static: false}) search: IonSearchbar;
  @ViewChild('slider', {static: false}) slider: IonSlides;
  segment: number = 0;
  cstemp : CaisseDTO;
  constructor(private modalController : ModalController, private navParam : NavParams, public serviceDash : ServiceDash,public boutiqueService:BoutiqueService) { }

  ngOnInit() {
    this.cstemp = this.navParam.get("session");
  }

  onPrint() {

  }
  segmentChanged(ev) {

    this.slider.slideTo(ev.target.value);
  }


  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
    });
  }
  onDismiss() {
    this.modalController.dismiss();
  }
}
