import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-menuclient',
  templateUrl: './menuclient.page.html',
  styleUrls: ['./menuclient.page.scss'],
})
export class MenuclientPage implements OnInit {


  menu = [
    {title:"Acceuil",url:"tabclient/menuclient/acceuil",icon:"home-outline",status:'active'},
    {title:"Favoris",url:"tabclient/menuclient/favorite",icon:"heart-outline",status:'none'},
    {title:"Commandes en cours",url:"tabclient/menuclient/commande",icon:"layers-outline",status:'none'},
    {title:"Historique",url:"tabclient/menuclient/historique",icon:"archive-outline",status:'none'},
    {title:"Partager",url:"socialshare",icon:"share-social-outline",status:'none'},
    {title:"Coupon",url:"tabclient/menuclient/coupon",icon:"ear-outline",status:'none'},
    {title:"Profil",url:"tabclient/menuclient/profil",icon:"people-outline",status:'none'},
    {title:"A propos",url:"tabclient/menuclient/apropos",icon:"information-outline",status:'none'},
    {title:"Déconnexion",url:"/home/login",icon:"exit-outline"},
  ]
  constructor(public authenservice: AuthenService,public router:Router) { }
  ngOnInit() {
  }
  onMenuAction(url) {
    if (url.url=="/home/login"){
     this.authenservice.deconnexion();
    }else if (url.url=="socialshare"){
      this.partager();
    } else {
      this.menu.forEach(m=>{
        m.status='none';
        if (m==url){
          m.status='active';
        }
      })
      this.router.navigateByUrl(url.url)
    }

  }

   async partager(){
     await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'https://play.google.com/store/apps/details?id=com.digishop.ftg',
      dialogTitle: 'Share with buddies',
    });
  }
}
