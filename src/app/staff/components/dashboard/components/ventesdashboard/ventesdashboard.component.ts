import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {MainService} from "../../../../../shared/services/MainService";
import {Commande} from "../../../../../Model/Commande";
import {IonSearchbar, IonSlides, ModalController} from "@ionic/angular";
import {DetailsCommandeComponent} from "../../../caisse/components/clientcommande/components/details-commande/details-commande.component";
import {ServiceCommande} from "../../../../services/ServiceCommande";

@Component({
  selector: 'app-ventesdashboard',
  templateUrl: './ventesdashboard.component.html',
  styleUrls: ['./ventesdashboard.component.scss'],
})
export class VentesdashboardComponent implements OnInit {
  @ViewChild('search', {static: false}) search: IonSearchbar;
  @ViewChild('slider', {static: false}) slider: IonSlides;
  segment: number = 0;

  constructor(public serviceDash: ServiceDash, private authenService: AuthenService, public serviceCommande: ServiceCommande,
              private mainService: MainService, private modalController: ModalController) {
  }

  ngOnInit() {
    this.getAllVenteEnCours();
  }

  getAllVenteTerminer() {

    this.serviceDash.getCommandesByBoutiqueIsTermine(0);
  }


  getAllVenteEnCours() {
    this.mainService.spinner.show();
    this.serviceDash.commandeDTOList=[];
    this.serviceDash.getCommandesByBoutiqueIsEncours().subscribe(
      data => {
        //this.serviceDash.commandePage=data;
        this.serviceDash.commandeDTOList = data;
        this.serviceDash.commandeDTOListFilter = data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
      }, () => {
        this.serviceDash.montantVentes = 0;
        console.log(this.serviceDash.commandeDTOList.length);
        this.serviceDash.commandeDTOList.forEach(c => {
          console.log('test');
          this.serviceDash.nomvendeurVList.push(c.nomvendeur);
          this.serviceDash.modepaiementVList.push(c.modepayement);
          this.serviceDash.modecommandeVList.push(c.modecommande);

          this.serviceDash.montantVentes += (c.montantcommande + c.fraislivraison);
        })

        this.serviceDash.nomvendeurVList = [...new Set(this.serviceDash.nomvendeurVList)];
        this.serviceDash.modepaiementVList = [...new Set(this.serviceDash.modepaiementVList)];
        this.serviceDash.modecommandeVList = [...new Set(this.serviceDash.modecommandeVList)];
      }
    )
  }

  segmentChanged(ev) {

    this.slider.slideTo(ev.target.value);
    if (ev.target.value == 0) {
      this.getAllVenteEnCours();
    } else if (ev.target.value == 1) {
      this.getAllVenteTerminer();
    }
  }


  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
      if (this.segment == 0) {
        this.getAllVenteEnCours();
      } else if (this.segment == 1) {
        this.getAllVenteTerminer();
      }
    });
  }

  ionViewDidEnter() {
    this.serviceDash.testFilter = 3;
    this.serviceDash.testSegmentCaisse = true;
  }


}
