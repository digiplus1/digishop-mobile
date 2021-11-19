import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../services/ServiceCaisse";
import {Router} from "@angular/router";
import {MainService} from "../../../shared/services/MainService";
import {ServiceDash} from "../../services/ServiceDash";
import {BoutiqueService} from "../../../client/Service/BoutiqueService";
import {ServiceBoutique} from "../../services/ServiceBoutique";

@Component({
  selector: 'app-accueilproprietaire',
  templateUrl: './accueilproprietaire.component.html',
  styleUrls: ['./accueilproprietaire.component.scss'],
})
export class AccueilproprietaireComponent implements OnInit {
  color : string="danger";
  text : string="Aucune Session Active";
  constructor(private authentificationService : AuthenService,
              public caisseService : ServiceCaisse,
              private router : Router,
              public boutiqueService:ServiceBoutique,
              private mainService : MainService,
              public DashService : ServiceDash) { }

  ngOnInit() {
    console.log(this.authentificationService.utilisateur)
    this.mainService.spinner.show()

    this.caisseService.getSession(this.authentificationService.utilisateur.username).subscribe(
      data=> {
        console.log(data)
        if(data==null){
          this.color = "danger";
          this.text = "Aucune Session Active"
        } else {
          this.color = "success";
          this.text = "Session de caisse active"
          this.caisseService.SessionActive = data;
        }
      },
      error => {console.log(error);this.mainService.spinner.hide()},
      ()=>{
        this.mainService.spinner.hide()
       /* this.DashService.getEtatDashVendeur().subscribe(
          data=>{
            this.mainService.spinner.hide()
            console.log(data);
            this.DashService.etatVendeur = data;
          }, error => {
            console.log(error)
            this.mainService.spinner.hide();
          }
        )*/
      }
    );
  }

  getBoutique(lienboutique:string){
    this.mainService.spinner.show();
    this.boutiqueService.getBoutiqueByLien(lienboutique).subscribe(
      data=> {
        this.boutiqueService.boutique=data;
        this.mainService.spinner.hide();
      },
      error => {console.log(error);this.mainService.spinner.hide()},
      ()=>{
      }
    );
  }

  navigateRoute(r: string) {
    if(r == "/staff/menustaff/caisse/accueil" || r == "/staff/menustaff/caisse/transactionscaisse"){
      if(this.DashService.etatVendeur.nbsessionouverte == 0){
        this.authentificationService.toastMessage("Aucune session ouverte.")
      } else {
        this.router.navigateByUrl(r);
      }
    } else {
      this.router.navigateByUrl(r);
    }
  }

}
