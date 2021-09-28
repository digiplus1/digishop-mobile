import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {AppUser} from "../../home/models/appUser";
import {AdresseIP} from "../../Service/AdresseIP";


@Injectable()
export class  ServiceUtilisateur {

  vendeursList : AppUser []= [];
  vendeursListFilter : AppUser []= [];

  constructor(public http:HttpClient,public authenService:AuthenService) {
  }

  getAllVendeurs(nomboutique : string){
    return this.http.get<AppUser[]>(AdresseIP.host + "getallvendeursisactivebyshop/" + nomboutique);
  }
}
