import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {CategorieProduitDTO} from "../../Model/CategorieProduitDTO";
import {AdresseIP} from "../../Service/AdresseIP";
import {BoutiquePos} from "../../Model/BoutiquePos";
import {Router} from "@angular/router";

@Injectable()
export class BoutiqueService{

  boutique:BoutiquePos;
  boutiques:BoutiquePos[];

  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
  }

  getAllboutique(){
    return this.http.get<BoutiquePos[]>(AdresseIP.host+'boutiques/active').subscribe(
      data=>{
        this.boutiques=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllBoutiquesByCategorie(categorie:string){
    return this.http.get<BoutiquePos[]>(AdresseIP.host+'boutiques/categorie/'+categorie).subscribe(
      data=>{
        this.boutiques=data;
        this.router.navigateByUrl("client/boutiques")
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }
  getBoutiqueByName(boutique:string){
    return this.http.get<BoutiquePos>(AdresseIP.host+'getboutiquebyname/'+boutique)
  }

  getBoutiqueByqrcode(qrcode:string){
    return this.http.get<BoutiquePos>(AdresseIP.host+'boutiques/qrcode/'+qrcode).subscribe(
      data=>{
        if (data){
          this.boutique=data;
          this.router.navigateByUrl("client/boutiques");
        }
      }
    )
  }

  getboutiqueByReference(referenceboutique:string){
    return this.http.get<BoutiquePos>(AdresseIP.host+"findbyreference/"+referenceboutique);
  }
}
