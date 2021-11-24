import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {CaisseTransactionDTOPage} from "../models/CaisseTransactionDTOPage";
import {AdresseIP} from "../../Service/AdresseIP";
import {BoutiquePos} from "../../Model/BoutiquePos";
import {EtatBord} from "../models/EtatBord";

@Injectable()
export class  ServiceBoutique {

  segmentBoutique : string;
  boutique:BoutiquePos;
  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
  }

  getEtatBord() {
    return this.http.get<EtatBord>(AdresseIP.host+"etatbord/")
  }
  getBoutiqueByLien(lienBoutique:string){
    return this.http.get<BoutiquePos>(AdresseIP.host+"getboutiquebylien/"+lienBoutique)
  }
}
