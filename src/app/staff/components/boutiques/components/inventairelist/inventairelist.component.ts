import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSearchbar, IonSlides} from "@ionic/angular";
import {ServiceStock} from "../../../../services/ServiceStock";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {Inventaire} from "./Model/Inventaire";

@Component({
  selector: 'app-inventairelist',
  templateUrl: './inventairelist.component.html',
  styleUrls: ['./inventairelist.component.scss'],
})
export class InventairelistComponent implements OnInit {
  @ViewChild('search', {static: false}) search: IonSearchbar;
  @ViewChild('slider', {static: false}) slider: IonSlides;
  segment = 0;
  inventaire_to_valider: Inventaire[];

  constructor(public stockService: ServiceStock, private mainService: MainService, public authService: AuthenService,) {
  }

  ngOnInit() {
    this.stockService.getAllProduitStockInventaire(this.authService.boutique.nomBoutique);
  }

  segmentChanged(ev) {

    this.slider.slideTo(ev.target.value);
    if (ev.target.value == 0) {
      this.stockService.getAllProduitStockInventaire(this.authService.boutique.nomBoutique);
    } else if (ev.target.value == 1) {
      this.stockService.getInventaireByboutiqueInValidePage(this.authService.boutique.idBoutique, 0);
    } else if (ev.target.value == 2) {
      this.getAllinventaireNonValide()
    } else if (ev.target.value == 3) {
      this.stockService.getInventaireByboutiqueValidePage(this.authService.boutique.idBoutique);
    }
  }

  getAllinventaireNonValide() {
    this.stockService.findByBoutiqueidAndStepAndValiderinventaireIsFalse(this.authService.boutique.idBoutique).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.inventaire_to_valider = data;
      }, error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message)
      }
    );
  }

  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
      if (this.segment == 0) {
        this.stockService.getAllProduitStockInventaire(this.authService.boutique.nomBoutique);
      } else if (this.segment == 1) {
        this.stockService.getInventaireByboutiqueInValidePage(this.authService.boutique.idBoutique, 0);
      } else if (this.segment == 2) {
        this.getAllinventaireNonValide()
      } else if (this.segment == 3) {
        this.stockService.getInventaireByboutiqueValidePage(this.authService.boutique.idBoutique);
      }
    });
  }
}
