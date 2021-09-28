import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.page.html',
  styleUrls: ['./vendeurs.page.scss'],
})
export class VendeursPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/staff/menustaff/vendeurs/list-vendeurs");
  }

  addUser() {

  }
}
