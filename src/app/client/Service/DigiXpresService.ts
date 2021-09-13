import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {AdresseIP} from "../../Service/AdresseIP";
import {Pays} from "../../Model/Pays";
import {CotationDto} from "../../Model/CotationDto";

@Injectable()
export class DigiXpresService {
  pays: Pays;

  constructor(public http: HttpClient, public authenService: AuthenService, public router: Router) {

  }

  getlistePays() {

    return this.http.get<Pays>(AdresseIP.host + "digixpress/getlocation");
  }

  get_frais_livraison(cotation:CotationDto) {
    return  this.http.post<number>(AdresseIP.host+"getfraislivraison",cotation);
  }
}
