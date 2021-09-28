import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {AppUser} from "../../home/models/appUser";
import {AdresseIP} from "../../Service/AdresseIP";
import {Utilisateur} from "../../Model/Utilisateur";
import {ActiveVendeurDTO} from "../../Model/ActiveVendeurDTO";


@Injectable()
export class  ServiceUtilisateur {

  vendeursList : Utilisateur []= [];
  vendeursListFilter : Utilisateur []= [];

  constructor(public http:HttpClient,public authenService:AuthenService) {
  }

  getAllVendeurs(nomboutique : string){
    return this.http.get<Utilisateur[]>(AdresseIP.host + "getallvendeursisactivebyshop/" + nomboutique);
  }

  activeOrDesactiveVendeur(AvD : ActiveVendeurDTO){
    return this.http.post<Utilisateur>(AdresseIP.host+"active_desactive_vendeur",AvD)
  }
}
