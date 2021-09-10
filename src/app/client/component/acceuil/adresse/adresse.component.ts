import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../../home/components/Service/AuthenService";
import {ProduitService} from "../../../Service/ProduitService";
import {CartService} from "../../../Service/CartService";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss'],
})
export class AdresseComponent implements OnInit {

  is_loading:boolean;
  constructor(public authenService:AuthenService,public produitService:ProduitService,
              public cartService:CartService,public router:Router,public alertCtrl:AlertController) { }

  ngOnInit() {}

}
