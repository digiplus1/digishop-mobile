import {Injectable} from "@angular/core";
import {CaisseDTO} from "../models/CaisseDTO";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {AdresseIP} from "../../Service/AdresseIP";
import {CaisseTransactionDTOPage} from "../models/CaisseTransactionDTOPage";
import {CaisseTransactions} from "../models/CaisseTransactions";


@Injectable()
export class  ServiceCaisse {
  flagButton : boolean = false
  SessionActive : CaisseDTO;
  caisseDTOTemp : CaisseDTO;
  caisseDTOListTemp : CaisseDTO[];
  caisseTransactionsList : CaisseTransactions [] = [];
  directsTransactionsList : CaisseTransactions [] = [];
  ventesTransactionsList : CaisseTransactions [] = [];

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

  getAllTransactionBySessionAndUser(idsession:number, username : string){
    return this.http.get<CaisseTransactions[]>(AdresseIP.host+"getallsessiontransaction/"+idsession+"/"+username)
  }

  getSession(username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"session/"+username);
  }

  getEtatSession(idsession: number, username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"getetatsession/"+idsession+"/"+username);
  }
}
