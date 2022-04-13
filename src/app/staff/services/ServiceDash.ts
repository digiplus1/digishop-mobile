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
import {CommandePage} from "../../Model/CommandePage";
import {ClotureCommandeDTO} from "../components/dashboard/models/ClotureCommandeDTO";
import {MainService} from "../../shared/services/MainService";
import {EtatBord} from "../models/EtatBord";

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
  commandePage:CommandePage;
  nomvendeurO : string = "";
  modepaiementO : string = "";

  nomvendeurF : string = "";
  datedebutF : Date;
  datedebutFTemp : string;
  datefinF : Date;
  datefinFTemp : string;
  commandeEncours : Commande [] = [];
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

  menu_1: string = '';
  menu_2: string = '';

  constructor(public http:HttpClient,private mainService: MainService,public authenService:AuthenService,public router:Router) {
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
    return this.http.get<Commande[]>(AdresseIP.host + "getcommandebyboutiqueisencours/" + nomboutique);
  }

  getCommandesByBoutiqueIsEncours(){
    return this.http.get<Commande[]>(AdresseIP.host+'getcommandebyboutiqueisencours/'+this.authenService.boutique.reference)
  }

  getEtatBordBoutique() {
    return this.http.get<EtatBord>(AdresseIP.host+"etatbord/boutique/"+this.authenService.utilisateur.iduser)
  }
  getCommandesByBoutiqueIsTermine(page:number){
    this.commandeDTOList=[];
    this.mainService.spinner.show();
    return this.http.get<Commande[]>(AdresseIP.host+'getcommandebyboutiqueistermine/'+this.authenService.boutique.reference).subscribe(
      data => {
        //this.commandePage=data;
        this.commandeDTOList = data;
        this.commandeDTOListFilter = data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
      }, () => {
        this.montantVentes = 0;
        this.commandeDTOList.forEach(c => {
          this.nomvendeurVList.push(c.nomvendeur);
          this.modepaiementVList.push(c.modepayement);
          this.modecommandeVList.push(c.modecommande);

          this.montantVentes += (c.montantcommande + c.fraislivraison);
        })

        this.nomvendeurVList = [...new Set(this.nomvendeurVList)];
        this.modepaiementVList = [...new Set(this.modepaiementVList)];
        this.modecommandeVList = [...new Set(this.modecommandeVList)];
      }
    )
  }

  ClotureCommande(cloture:ClotureCommandeDTO){
    return this.http.post<boolean>(AdresseIP.host+'cloturecommande',cloture)
  }
}
