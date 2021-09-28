import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";

@Component({
  selector: 'app-accueildashboard',
  templateUrl: './accueildashboard.component.html',
  styleUrls: ['./accueildashboard.component.scss'],
})
export class AccueildashboardComponent implements OnInit {
  segmentModel: any;

  constructor(public serviceDash : ServiceDash) { }

  ngOnInit() {
    this.segmentModel = "alerte"
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value == "alerte" || this.segmentModel == "alerte"){
      this.serviceDash.testSegmentCaisse = false;
    } else if(ev.detail.value == "ventes" || this.segmentModel == "ventes"){
      this.serviceDash.testSegmentCaisse = false;
    } else if(ev.detail.value == "sessions" || this.segmentModel == "sessions"){
      this.serviceDash.testSegmentCaisse = true;
      this.serviceDash.segmentCaisse = "ouverte";
    }
  }
}
