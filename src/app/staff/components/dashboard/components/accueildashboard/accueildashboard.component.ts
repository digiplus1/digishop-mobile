import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-accueildashboard',
  templateUrl: './accueildashboard.component.html',
  styleUrls: ['./accueildashboard.component.scss'],
})
export class AccueildashboardComponent implements OnInit {
  segmentModel: any;

  constructor(public serviceDash : ServiceDash, public authenticateService: AuthenService) { }

  ngOnInit() {
    console.log(this.serviceDash.menu_1);
    console.log(this.serviceDash.menu_2);
    this.segmentModel = this.serviceDash.menu_1;
    console.log(this.segmentModel);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value == "alerte" || this.segmentModel == "alerte"){
      this.serviceDash.testSegmentCaisse = false;
    } else if(ev.detail.value == "ventes" || this.segmentModel == "ventes"){
      this.serviceDash.testSegmentCaisse = false;
    } else if(ev.detail.value == "sessions" || this.segmentModel == "sessions"){
      this.serviceDash.testSegmentCaisse = true;
      if (this.authenticateService.utilisateur.role === 'vendeur'){
        this.serviceDash.segmentCaisse = "fermee";
      } else {
        this.serviceDash.segmentCaisse = "ouverte";
      }
    }
  }
}
