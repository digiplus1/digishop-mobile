import { Component, OnInit } from '@angular/core';
import {ServiceBoutique} from "../../../../services/ServiceBoutique";

@Component({
  selector: 'app-accueilboutiques',
  templateUrl: './accueilboutiques.component.html',
  styleUrls: ['./accueilboutiques.component.scss'],
})
export class AccueilboutiquesComponent implements OnInit {
  segmentModel: any;

  constructor(public serviceBoutique : ServiceBoutique) { }

  ngOnInit() {
    this.segmentModel = "produit";
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    if(ev.detail.value == "produit" || this.segmentModel == "produit"){
      this.serviceBoutique.segmentBoutique = "produit";
    } else if(ev.detail.value == "stock" || this.segmentModel == "stock"){
      this.serviceBoutique.segmentBoutique = "stock";
    } else if(ev.detail.value == "inventaire" || this.segmentModel == "inventaire"){
      this.serviceBoutique.segmentBoutique = "inventaire";
    }
  }
}
