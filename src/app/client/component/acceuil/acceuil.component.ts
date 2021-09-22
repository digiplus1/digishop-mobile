import {Component, OnInit, ViewChild} from '@angular/core';
import {CategorieBoutique} from "./Model/CategorieBoutique";
import {ProduitService} from "../../Service/ProduitService";
import {BoutiqueService} from "../../Service/BoutiqueService";
import {Router} from "@angular/router";
import {CategorieProduitDTO} from "../../../Model/CategorieProduitDTO";
import {IonSearchbar} from "@ionic/angular";
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {NatifService} from "../../Service/NatifService";
import {FavoriteService} from "../../Service/FavoriteService";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {

  @ViewChild('search',{static:false}) search:IonSearchbar;
  searcheItem:string[];

  categories: CategorieBoutique[] = [
    new CategorieBoutique("Mode", "assets/img/mode.jpg"),
    new CategorieBoutique("Quincaillerie", "assets/img/quincaillerie.jpg"),
    new CategorieBoutique("Coiffure", "assets/img/coifure.jpg"),
  ]

  slideopts = {
    initialSilde: 0,
    spaceBetween: 0,
    slidesPerView: 2.8,
    slidesOffsetBefore: 6
  };

  constructor(public produitService:ProduitService,public boutiqueService:BoutiqueService,public router:Router,
              public authenService:AuthenService,public natifService:NatifService,public favoriteService:FavoriteService) {}

  ngOnInit() {
    this.produitService.getAllproduit();
    this.produitService.getAllCategorie();
    this.boutiqueService.getAllboutique()
  }

/*  ionViewDidEnter(){
    setTimeout(()=>{
      this.search.setFocus();
    })
  }*/


  goToListeBoutique(c: CategorieBoutique) {
   this.boutiqueService.getAllBoutiquesByCategorie(c.name);
  }

  goToListeProduit(c: CategorieProduitDTO) {
    this.produitService.getAllproduitBycategorie(c.nomCategorie);
  }

  _ionChange(even: any) {
    const val=even.target.value;
    this.searcheItem=this.produitService.listnom;
    if (val && val.trim()!=''){
      this.searcheItem=this.searcheItem.filter(item=>{
        return (item.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }else {
      this.searcheItem=null;
    }
  }

  getValuer(n: string) {
    this.router.navigateByUrl("/client/resultat/"+n)
  }

  scanBoutique(){
    this.natifService.scannerQrcode("boutique");
  }
}
