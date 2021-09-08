import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";
import {ProduitService} from "../../../Service/ProduitService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitDto} from "../../../../Model/ProduitDto";
import {BoutiquePos} from "../../../../Model/BoutiquePos";
import {AuthenService} from "../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-produitboutique',
  templateUrl: './produitboutique.component.html',
  styleUrls: ['./produitboutique.component.scss'],
})
export class ProduitboutiqueComponent implements OnInit {

  produits:ProduitDto[]=[];
  boutiques:BoutiquePos[]=[];


  @ViewChild('slider', { static: false }) slider: IonSlides;
  segment = 0;

  constructor(public produitService:ProduitService,private activateroute:ActivatedRoute,public boutiqueService:BoutiqueService,
              public authenService:AuthenService,public router:Router) { }

  ngOnInit() {
    this.activateroute.params.subscribe(data=> {
        this.produitService.getAllProduitOrshop(data.mot).subscribe(
          data=>{
            this.produits=data.produits;
            this.boutiques=data.boutiques;
          },error => {
            this.authenService.toastMessage(error.error.message);
          }
        );
      }
    )
  }

  goToDetailProduit(p: ProduitDto) {
    this.produitService.produit=p;
    this.router.navigateByUrl("client/detailproduits")
  }

  goToShop(b: BoutiquePos) {
    this.boutiqueService.boutique=b;
    this.router.navigateByUrl("client/boutique")
  }

  segmentChanged(ev) {
    console.log('segment change', ev.target.value)
    this.slider.slideTo(ev.target.value)
  }
  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
    });

  }
}
