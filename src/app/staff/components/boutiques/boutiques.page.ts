import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.page.html',
  styleUrls: ['./boutiques.page.scss'],
})
export class BoutiquesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/staff/menustaff/boutique/accueil");
  }

}
