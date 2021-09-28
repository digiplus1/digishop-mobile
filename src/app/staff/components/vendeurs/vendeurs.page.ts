import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {AddvendeurComponent} from "./components/addvendeur/addvendeur.component";

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.page.html',
  styleUrls: ['./vendeurs.page.scss'],
})
export class VendeursPage implements OnInit {

  constructor(private router : Router, private modalController : ModalController) { }

  ngOnInit() {
    this.router.navigateByUrl("/staff/menustaff/vendeurs/list-vendeurs");
  }

  async addUser() {
    const modal = await this.modalController.create({
      component: AddvendeurComponent,
    });
    return await modal.present();
  }
}
