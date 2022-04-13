import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../services/ServiceCaisse";
import {Router} from "@angular/router";
import {MainService} from "../../../shared/services/MainService";
import {ServiceDash} from "../../services/ServiceDash";
import {ServiceBoutique} from "../../services/ServiceBoutique";
import {ModalController} from "@ionic/angular";
import {PrinterlistComponent} from "../printerlist/printerlist.component";
import {ServicePrinter} from "../../services/ServicePrinter";
import {EtatBord} from "../../models/EtatBord";

@Component({
  selector: 'app-accueilproprietaire',
  templateUrl: './accueilproprietaire.component.html',
  styleUrls: ['./accueilproprietaire.component.scss'],
})
export class AccueilproprietaireComponent implements OnInit {
  color : string="danger";
  text : string="Aucune Session Active";
  etabord:EtatBord=new EtatBord();
  constructor(private authentificationService : AuthenService,
              public caisseService : ServiceCaisse,
              private router : Router,
              public boutiqueService:ServiceBoutique,
              private mainService : MainService, private printer : ServicePrinter,
              public DashService : ServiceDash, public modalController : ModalController) { }

  ngOnInit() {
    this.getEtatBord();
    this.getSession();
    this.getBoutique(this.authentificationService.utilisateur.referenceboutique);
  }
  ionViewDidEnter() {
    this.getEtatBord();
   // this.getSession();
    this.getBoutique(this.authentificationService.utilisateur.referenceboutique);

  }

  getSession(){
    this.mainService.spinner.show()
    this.caisseService.getSession(this.authentificationService.utilisateur.reference).subscribe(
      data=> {
        this.caisseService.SessionActive = data;
        if(data==null){
          this.color = "danger";
          this.text = "Aucune Session Active"
        } else {
          this.color = "success";
          this.text = "Session de caisse active"
        }
      },
      error => {this.mainService.spinner.hide()},
      ()=>{
        this.mainService.spinner.hide()
        //Récupération de l'imprimante
        this.printer.createStorage();
         this.printer.storage.get("printer").then(printer=>{
          if (printer){
            this.printer.selectedPrinter=printer;
          }
        });
        if(this.printer.selectedPrinter == null) {
          this.mainService.notificationService.showInfo("Aucune imprimante présente. Bien vouloir définir une.")
          this.printerModal();
        }
      }
    );
  }
  getEtatBord(){
    this.DashService.getEtatBordBoutique().subscribe(
      data=>{
        this.etabord=data;
      }
    )
  }

  getBoutique(referenceboutique:string){
    this.mainService.spinner.show();
    this.boutiqueService.getBoutiqueByreferenceboutique(referenceboutique).subscribe(
      data=> {
        this.boutiqueService.boutique=data;
        this.mainService.spinner.hide();
      },
      error => {console.log(error);this.mainService.spinner.hide()},
      ()=>{
      }
    );
  }

  navigateRoute(r: string, page: string = '') {
    if(r == "/staff/menustaff/caisse/accueil" || r == "/staff/menustaff/caisse/transactionscaisse"){
      if(this.DashService.etatVendeur.nbsessionouverte == 0){
        this.authentificationService.toastMessage("Aucune session ouverte.")
      } else {
        this.router.navigateByUrl(r);
      }
    } else if (page == 'ouverte' || page == 'fermee') {
      this.DashService.menu_1 = 'sessions';
      this.DashService.segmentCaisse = page;
      this.DashService.testSegmentCaisse = true;
      this.router.navigateByUrl(r);
    } else if (page == 'ventes') {
      this.DashService.menu_1 = page;
      this.DashService.testSegmentCaisse = false;
      this.router.navigateByUrl(r);
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
