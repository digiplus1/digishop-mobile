import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {CategorieProduitDTO} from "../../Model/CategorieProduitDTO";
import {AdresseIP} from "../../Service/AdresseIP";
import {BoutiquePos} from "../../Model/BoutiquePos";

@Injectable()
export class BoutiqueService{

  boutique:BoutiquePos;
  boutiques:BoutiquePos[];

  constructor(public http:HttpClient,public authenService:AuthenService) {
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
}
