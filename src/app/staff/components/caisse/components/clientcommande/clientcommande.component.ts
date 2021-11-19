import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceCommande} from "../../../../services/ServiceCommande";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {CommandeRef} from "../../../../models/CommandeRef";
import {ProduitDto} from "../../../../../Model/ProduitDto";
import {GeneriqueComponent} from "../ventecaisse/components/generique/generique.component";
import {Commande} from "../../../../../Model/Commande";
import {ModalController} from "@ionic/angular";
import {DetailsCommandeComponent} from "./components/details-commande/details-commande.component";

@Component({
  selector: 'app-clientcommande',
  templateUrl: './clientcommande.component.html',
  styleUrls: ['./clientcommande.component.scss'],
})
export class ClientcommandeComponent implements OnInit {
  search: string = "";
  cmdRef : CommandeRef []=[];
  constructor(private router : Router, public serviceCommande : ServiceCommande,
              private mainService : MainService, private authenService : AuthenService, public modalController : ModalController,) { }

  ngOnInit() {
    this.mainService.spinner.show()
    this.serviceCommande.getListRefCommande(this.authenService.boutique.nomBoutique).subscribe(
      data=>{
        console.log(data);
        this.serviceCommande.commandeRefList = data;
        this.cmdRef = data;
        if(this.cmdRef.length==0){
          this.authenService.toastMessage("Aucune commande trouvée.")
        }
        this.mainService.spinner.hide();
      },error => {
        this.authenService.toastMessage("Une erreur inattendue s'est produite.");
        this.mainService.spinner.hide();
      }
    );
  }

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.serviceCommande.commandeRefListFilter = this.serviceCommande.commandeRefList.filter((a) => {
          return (a.referencecommande.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        this.cmdRef = this.serviceCommande.commandeRefListFilter;
      } else this.serviceCommande.commandeRefListFilter = [];
    } else {
      this.serviceCommande.commandeRefListFilter = [];
    }
  }
  goBack() {
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }
  selectCmd(ref: String) {
    this.cmdRef = this.serviceCommande.commandeRefListFilter.filter(c=> c.referencecommande === ref);

    this.FilterElement(null);
    this.search=""
  }

  selectItem(cmd: CommandeRef) {
    this.mainService.spinner.show();
    this.serviceCommande.getCommandeByID(cmd.idcommande).subscribe(
      data=>{
        console.log(data)
        this.serviceCommande.commandeDTOTemp = data;
      },error => {
        this.authenService.toastMessage("Une erreur inattendue s'est produite.");
        this.mainService.spinner.hide();
      }, ()=> {
        this.mainService.spinner.hide();
        this.showDetails(this.serviceCommande.commandeDTOTemp);
      }
    )
  }

  async showDetails(cmd : Commande){
    const modal = await this.modalController.create({
      component: DetailsCommandeComponent,
    });
    return await modal.present();
  }
}

