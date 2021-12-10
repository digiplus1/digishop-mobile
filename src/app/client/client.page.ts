import { Component, OnInit } from '@angular/core';
import {CartService} from "./Service/CartService";

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  constructor(public cartService:CartService) { }

  ngOnInit() {
    this.cartService.getcartById();
  }

}
