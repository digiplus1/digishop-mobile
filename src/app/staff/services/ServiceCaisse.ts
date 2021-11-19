import {Injectable} from "@angular/core";
import {CaisseDTO} from "../models/CaisseDTO";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {AdresseIP} from "../../Service/AdresseIP";
import {CaisseTransactionDTOPage} from "../models/CaisseTransactionDTOPage";
import {CaisseTransactions} from "../models/CaisseTransactions";
import {Commande} from "../../Model/Commande";


@Injectable()
export class  ServiceCaisse {
  flagButton : boolean = false
  SessionActive : CaisseDTO;
  caisseDTOTemp : CaisseDTO;
  caisseDTOListTemp : CaisseDTO[];
  caisseTransactionsList : CaisseTransactions [] = [];
  directsTransactionsList : CaisseTransactions [] = [];
  ventesTransactionsList : CaisseTransactions [] = [];
  operateur:string[];

  //Test d'affichage dans le compte client
  affiche : number = 1;
  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
  }

  ManageCaisse (cDTO:CaisseDTO){
    return this.http.post<CaisseDTO>(AdresseIP.host+'managecaisse', cDTO);
  }

  UpdateAfterOffline(cDTOs : CaisseDTO[]){
    this.http.post<CaisseDTO[]>(AdresseIP.host+'offlineupdate', cDTOs).subscribe(
      data=>{
        this.caisseDTOListTemp=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllTransactionBySession(idsession:number){
    return this.http.get<CaisseTransactionDTOPage>(AdresseIP.host+"getalltransactionbysession/"+idsession)
  }

  getAllTransactionBySessionAndUser(idsession:number){
    return this.http.get<CaisseTransactions[]>(AdresseIP.host+"getalltransactionbysession/"+idsession)
  }

  getSession(username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"session/"+username);
  }

  getEtatSession(idsession: number, username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"getetatsession/"+idsession+"/"+username);
  }
  get_status_vente(referencecommande:string){
    let commande =new Commande();
    commande.referencecommande=referencecommande;
    return this.http.post<CaisseDTO>(AdresseIP.host+'session/statut/commande',commande)
  }
  getAlloperateur(){

    return this.http.get<string[]>(AdresseIP.host+'operateur/').subscribe(
      data=>{
        this.operateur=data;
      },error => {
        this.authenService.toastMessage(error.error.message)
      }
    )
  }
}
