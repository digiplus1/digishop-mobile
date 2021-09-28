import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {AdresseIP} from "../../Service/AdresseIP";
import {EtatVendeur} from "../models/EtatVendeur";
import {StockAlert} from "../components/dashboard/models/StockAlert";
import {SessionOuverte} from "../components/dashboard/models/SessionOuverte";
import {SessionFermee} from "../components/dashboard/models/SessionFermee";
import {CountObjectValue} from "../components/dashboard/models/CountObjectValue";
import {Commande} from "../../Model/Commande";

@Injectable()
export class ServiceDash {

  testFilter : number = 0;

  segmentCaisse : string = "";
  testSegmentCaisse : boolean = false;

  etatVendeur : EtatVendeur = new EtatVendeur();
  stockAlertList : StockAlert [] = [];
  sessionOuverteList : SessionOuverte = new SessionOuverte();
  sessionFermeeList : SessionFermee = new SessionFermee();
  CountO : CountObjectValue = new CountObjectValue();

  nomvendeurO : string = "";
  modepaiementO : string = "";

  nomvendeurF : string = "";
  datedebutF : Date;
  datedebutFTemp : string;
  datefinF : Date;
  datefinFTemp : string;

  commandeDTOList : Commande [] = [];
  commandeDTOListFilter : Commande [] = [];
  montantVentes : number = 0;

  nomvendeurV : string = "";
  nomvendeurVList : string [] = [];
  modepaiementV : string = "";
  modepaiementVList : string [] = [];
  modecommandeV : string = "";
  modecommandeVList : string [] = ["boutique", "ligne"];
  datedebutV : Date;
  datedebutVTemp : string;
  datefinV : Date;
  datefinVTemp : string;

  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
  }

  getEtatDashVendeur(){
    return this.http.get<EtatVendeur>(AdresseIP.host + "getetatdashvendeur/" + this.authenService.utilisateur.username);
  }

  checkAlertStockInShop(sA : StockAlert){
    return this.http.post<StockAlert[]>(AdresseIP.host + "checkstockalert", sA);
  }

  checkSessionOuverteInShop(sO : SessionOuverte){
    return this.http.post<SessionOuverte>(AdresseIP.host + "checksessionouverte", sO);
  }

  checkSessionFermeeInShop(sF : SessionFermee) {
    return this.http.post<SessionFermee>(AdresseIP.host + "checksessionfermee", sF);
  }

  getNbreofObjectValue(nomuser : string){
    return this.http.get<CountObjectValue>(AdresseIP.host + "checknbreofobject/" + this.authenService.utilisateur.username);
  }

  getlistCommande (nomboutique : string, nomuser : string){
    return this.http.get<Commande[]>(AdresseIP.host + "getallcommandesbyshop/" + nomboutique + "/" + nomuser);
  }
}
