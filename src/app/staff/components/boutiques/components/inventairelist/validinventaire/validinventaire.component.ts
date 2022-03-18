import {Component, Input, OnInit} from '@angular/core';
import {ServiceStock} from "../../../../../services/ServiceStock";
import {MainService} from "../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {Inventaire} from "../Model/Inventaire";
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-validinventaire',
  templateUrl: './validinventaire.component.html',
  styleUrls: ['./validinventaire.component.scss'],
})
export class ValidinventaireComponent implements OnInit {
  @Input() inventaire_to_valider: Inventaire[];
  @Input() slider: IonSlides;
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
        this.slider.slideNext();
      },error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    )
  }

  findByInventaireid(idInventaire: number, index: number) {
    if (!this.inventaire_to_valider[index].is_unroll) {
      this.mainService.spinner.show();
      this.stockService.findByInventaireid(idInventaire).subscribe(
        data=>{
          this.mainService.spinner.hide();
          this.inventaire_to_valider[index].inventaireItemList=data;
          this.inventaire_to_valider[index].is_unroll = true;
          console.log(this.inventaire_to_valider[index]);
        },error => {
          this.mainService.spinner.hide();
        }
      )
    } else {
      this.inventaire_to_valider[index].is_unroll = false;
    }
  }
}
