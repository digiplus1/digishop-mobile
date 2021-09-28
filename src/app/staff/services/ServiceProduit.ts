import {Injectable} from "@angular/core";
import {ProduitDto} from "../../Model/ProduitDto";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {AdresseIP} from "../../Service/AdresseIP";
import {MainService} from "../../shared/services/MainService";

@Injectable()
export class  ServiceProduit {

  produitList : ProduitDto [] = [];
  produitPopulaire : ProduitDto [] = [];
  produitNonPopulaire : ProduitDto [] = [];
  nomProduit : string [] = [];
  nomProduitFilter : string [] = [];

  constructor(public http:HttpClient,public authenService:AuthenService, private mainService : MainService) {
  }

  getAllNomProduit (nomboutique : string) {
    this.http.get<string[]>(AdresseIP.host + "getallnomproduitbyshop/" + nomboutique).subscribe(
      data=> {
        console.log(data);
        this.nomProduit = data;
      }, error => {
        this.authenService.toastMessage(error.error.message);
        this.mainService.spinner.hide();
      },
      ()=>{
        this.getAllProduit(nomboutique).subscribe(
          data=>{
            console.log(data);
            this.produitList = data;
            this.mainService.spinner.hide();
          }, error => {
            this.authenService.toastMessage(error.error.message);
            this.mainService.spinner.hide();
          },
        )
      }
    );
  }

  getProduitByNomAndBoutique(nomproduit : string, nomboutique : string) {
    return this.http.get<ProduitDto>(AdresseIP.host + "getproduitbynomproduitandboutique/" + nomproduit + "/" + nomboutique)
  }

  getAllProduit (nomboutique : string) {
    return this.http.get<ProduitDto[]>(AdresseIP.host + "produit_shop/" + nomboutique);
  }

  getAllProduitPopulaire (nomboutique : string) {
    return this.http.get<ProduitDto[]>(AdresseIP.host + "getProduitPopulaire/" + nomboutique);
  }

  getAllProduitNonPopulaire (nomboutique : string) {
    return this.http.get<ProduitDto[]>(AdresseIP.host + "getProduitNotPopulaire/" + nomboutique);
  }

  searchProduitByNom(nomproduit : string){
    return this.produitList.find(p=>{return p.nomProduit == nomproduit});
  }
}
