import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueilcaisse',
  templateUrl: './accueilcaisse.component.html',
  styleUrls: ['./accueilcaisse.component.scss'],
})
export class AccueilcaisseComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {}

  navigateRoute(s : string){
    this.router.navigateByUrl("/staff"+s);
  }

  goVenteRapide() {
    this.navigateRoute("/menustaff/caisse/ventecaisserapide")
  }
}
