import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";

@Component({
  selector: 'app-sessioncaisse',
  templateUrl: './sessioncaisse.component.html',
  styleUrls: ['./sessioncaisse.component.scss'],
})
export class SessioncaisseComponent implements OnInit {

  constructor(public serviceDash : ServiceDash) { }

  ngOnInit() {
    this.serviceDash.testSegmentCaisse = true;
  }


}
