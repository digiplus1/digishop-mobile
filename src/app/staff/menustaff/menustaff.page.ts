import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {ServicePrinter} from "../services/ServicePrinter";
import {PrinterlistComponent} from "../components/printerlist/printerlist.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-menustaff',
  templateUrl: './menustaff.page.html',
  styleUrls: ['./menustaff.page.scss'],
})
export class MenustaffPage implements OnInit {
  menuVendeur = [
    {title:"Accueil",url:"/staff/menustaff/accueilvendeur",icon:"home-outline", status:'active'},
    {title:"Gestion Caisse",url:"/staff/menustaff/caisse",icon:"cash-outline", status:'none'},
    {title:"Tableau de Bord",url:"/staff/menustaff/dashboard",icon:"clipboard-outline", status:'none'},
    {title:"Imprimante",url:"/print/",icon:"print", status:'none'},
    {title:"A propos de nous",url:"/staff/menustaff/apropos",icon:"people-outline", status:'none'},
    // {title:"Partager",url:"/staff/menustaff/shareapp",icon:"share-outline", status:'none'},
    {title:"Déconnexion",url:"/home",icon:"exit-outline", status:'none'},
  ];
  menuProp = [
    {title:"Accueil",url:"/staff/menustaff/accueilproprietaire",icon:"home-outline", status:'active'},
    {title:"Gestion Caisse",url:"/staff/menustaff/caisse",icon:"cash-outline", status:'none'},
    {title:"Gestion Boutique",url:"/staff/menustaff/boutique",icon:"card-outline", status:'none'},
    //{title:"Gestion Vendeurs",url:"/staff/menustaff/vendeurs",icon:"person-outline", status:'none'},
    {title:"Tableau de Bord",url:"/staff/menustaff/dashboard",icon:"clipboard-outline", status:'none'},
    {title: "Rapport fermeture caisse boutique", url:"/staff/menustaff/rapport", icon:"clipboard-outline", status:'none'},
    {title:"Imprimante",url:"/print/",icon:"print", status:'none'},
    {title:"A propos de nous",url:"/staff/menustaff/apropos",icon:"people-outline", status:'none'},
    // {title:"Partager",url:"/staff/menustaff/shareapp",icon:"share-outline", status:'none'},
    {title:"Déconnexion",url:"/home",icon:"exit-outline", status:'none'},
  ];
  menus=[];

  constructor(public authenservice: AuthenService,public router:Router, private printer : ServicePrinter, private modalController : ModalController) { }

  ngOnInit() {
    if(this.authenservice.utilisateur.role=="vendeur"){
      this.menus = this.menuVendeur;
    } else {
      this.menus = this.menuProp;
    }
    this.authenservice.findByReferenceAndActiveboutiqueIsTrue();
  }

  onMenuAction(url) {
    if (url.url=="/home/login"){
      if(this.authenservice.utilisateur.role=="vendeur"){
        this.menus = this.menuVendeur;
      } else if(this.authenservice.utilisateur.role=="proprietaire") {
        this.menus = this.menuProp;
      }
      this.authenservice.deconnexion();
    } else if (url.url == "/print/"){
        this.printerModal();
    } else {
      this.menus.forEach(m=>{
        m.status='none';
        if (m==url){
          m.status='active';
        }
      })
      this.router.navigateByUrl(url.url)
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
