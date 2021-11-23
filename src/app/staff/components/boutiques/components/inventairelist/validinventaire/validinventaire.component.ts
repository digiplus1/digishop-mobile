import {Component, Input, OnInit} from '@angular/core';
import {ServiceStock} from "../../../../../services/ServiceStock";
import {MainService} from "../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {Inventaire} from "../Model/Inventaire";

@Component({
  selector: 'app-validinventaire',
  templateUrl: './validinventaire.component.html',
  styleUrls: ['./validinventaire.component.scss'],
})
export class ValidinventaireComponent implements OnInit {
  @Input() inventaire_to_valider: Inventaire[];
  val: number;

  constructor(public stockService:ServiceStock, private mainService : MainService,public authService: AuthenService,) { }

  ngOnInit() {
  }


  appliquer(i: Inventaire) {
    this.mainService.spinner.show();
    this.stockService.validerInventaire(this.authService.utilisateur.iduser,i.idinventaire).subscribe(
      data=>{
        let index=this.inventaire_to_valider.indexOf(i);
        this.inventaire_to_valider.splice(index,1);
        this.mainService.spinner.hide();
      },error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    )
  }
}
