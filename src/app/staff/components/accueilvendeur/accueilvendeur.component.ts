import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../services/ServiceCaisse";
import {MainService} from "../../../shared/services/MainService";
import {ServiceDash} from "../../services/ServiceDash";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueilvendeur',
  templateUrl: './accueilvendeur.component.html',
  styleUrls: ['./accueilvendeur.component.scss'],
})
export class AccueilvendeurComponent implements OnInit {
  color : string="danger";
  text : string="Aucune Session Active";
  constructor(private authentificationService : AuthenService,
              public caisseService : ServiceCaisse,
              private router : Router,
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
        this.DashService.getEtatDashVendeur().subscribe(
          data=>{
            this.mainService.spinner.hide()
            console.log(data);
            this.DashService.etatVendeur = data;
          }, error => {
            console.log(error)
            this.mainService.spinner.hide();
          }
        )
      }
    );
  }

  navigateRoute(r: string) {
    if(r == "/staff/menustaff/caisse/accueil"){
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
