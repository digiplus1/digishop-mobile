import {Injectable} from "@angular/core";
import {Stock} from "../../Model/Stock";
import {AdresseIP} from "../../Service/AdresseIP";
import {HttpClient} from "@angular/common/http";
import {ProduitDto} from "../../Model/ProduitDto";
import {produitDtoPage} from "../../Model/ProduitDtoPage";
import {MainService} from "../../shared/services/MainService";
import {InitiateInventaireDTO} from "../components/boutiques/components/inventairelist/Model/InitiateInventaireDTO";
import {InventaireDTO} from "../components/boutiques/components/inventairelist/Model/InventaireDTO";
import {InventairePage} from "../components/boutiques/components/inventairelist/Model/InventairePage";
import {Inventaire} from "../components/boutiques/components/inventairelist/Model/Inventaire";
import {DefineInventaireDTO} from "../components/boutiques/components/inventairelist/Model/DefineInventaireDTO";


@Injectable()
export class  ServiceStock {
  public produitInventaires: ProduitDto[];
  inventaireNonValidePage:InventairePage;
  inventaireValidePage:InventairePage;


  constructor( private mainService : MainService,
    private http: HttpClient
  ) {
  }

  getInventaireByboutiqueValidePage(id_boutique:number) {

    return this.http.get<InventairePage>(AdresseIP.host + 'inventaire_valider/'+id_boutique).subscribe(
      data=>{

        this.inventaireValidePage=data;
      },error => {
        this.mainService.notificationService.showError(error.error.message)
      }
    )
  }

  validerInventaire(id_user:number,id_inventaire:number) {
    return this.http.get<boolean>(AdresseIP.host + 'validerinventaire/'+id_user+"/"+id_inventaire)
  }
  savestockbyShop(stock:Stock) {
    return this.http.post<Stock>(AdresseIP.host + 'manageStock',stock)
  }

  initiateinventaire(initInventaire:InitiateInventaireDTO) {
    return this.http.post<InventaireDTO>(AdresseIP.host + 'initiateinventaire',initInventaire)
  }

  findByBoutiqueidAndStepAndValiderinventaireIsFalse(id_boutique:number) {
    this.mainService.spinner.show();
    return this.http.get<Inventaire[]>(AdresseIP.host + 'get_inventaire_to_valider/'+id_boutique)

  }

  getInventaireByboutiqueInValidePage(id_boutique:number,page:number) {
    this.mainService.spinner.show();
    return this.http.get<InventairePage>(AdresseIP.host + 'inventaire_invalid/'+id_boutique).
    subscribe(
      data=>{
        this.mainService.spinner.hide();
        this.inventaireNonValidePage=data;
      },error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message)
      }
    )
  }

  defineInventaire(initInventaire:DefineInventaireDTO) {
    return this.http.post<Inventaire>(AdresseIP.host + 'appliqueinventaire',initInventaire)
  }
  deleteInventaire(id_user,id_inventaire) {
    return this.http.delete<boolean>(AdresseIP.host + 'deleteinventaire/'+id_user+'/'+id_inventaire)
  }
  getAllProduitStockInventaire(boutique:string) {
    this.mainService.spinner.show();
    return this.http.get<produitDtoPage>(AdresseIP.host + 'getproduitmanageinstock/'+boutique).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.produitInventaires = data.content;
        console.table( this.produitInventaires);
      },error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    );
  }
}
