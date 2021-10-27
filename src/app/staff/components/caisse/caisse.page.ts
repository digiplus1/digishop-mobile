import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceCaisse} from "../../services/ServiceCaisse";
import {ServiceDash} from "../../services/ServiceDash";

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.page.html',
  styleUrls: ['./caisse.page.scss'],
})
export class CaissePage implements OnInit {

  constructor(public router : Router, public caisseService : ServiceCaisse, public dashService : ServiceDash) { }
  ngOnInit() {
    if(this.dashService.etatVendeur.nbsessionouverte != 0 || this.caisseService.SessionActive != null) {
      this.navigateRoute("/menustaff/caisse/accueil")
    } else {
      this.navigateRoute("/menustaff/caisse/ouverturecaisse")
    }
  }

  navigateRoute(s : string){
    this.router.navigateByUrl("/staff"+s);
  }

  goVenteRapide() {
    this.navigateRoute("/menustaff/caisse/ventecaisserapide")
  }
}
