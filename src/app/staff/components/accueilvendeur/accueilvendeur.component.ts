import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../services/ServiceCaisse";
import {MainService} from "../../../shared/services/MainService";
import {ServiceDash} from "../../services/ServiceDash";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {PrinterlistComponent} from "../printerlist/printerlist.component";
import {ServicePrinter} from "../../services/ServicePrinter";

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
              private router : Router, private printer : ServicePrinter,
              private mainService : MainService, public modalController : ModalController,
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

        //Récupération de l'imprimante
        let print = localStorage.getItem("printer");
        if(print == null) {
          this.mainService.notificationService.showInfo("Aucune imprimante présente. Bien vouloir définir une.")
          this.printerModal();
        } else {
          this.printer.selectedPrinter = print;
        }

        /*this.DashService.getEtatDashVendeur().subscribe(
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

  async printerModal() {
    const modal = await this.modalController.create({
      component: PrinterlistComponent,
      cssClass: 'my-custom-css'
    });
    return await modal.present();
  }
}
