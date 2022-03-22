import { Component, OnInit } from '@angular/core';
import {BoutiqueService} from "../client/Service/BoutiqueService";
import {AuthenService} from "../home/components/Service/AuthenService";
import {MainService} from "../shared/services/MainService";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
