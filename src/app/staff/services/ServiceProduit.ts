import {Injectable} from "@angular/core";
import {ProduitDto} from "../../Model/ProduitDto";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {AdresseIP} from "../../Service/AdresseIP";
import {MainService} from "../../shared/services/MainService";
import { CategorieProduitDTO } from "src/app/Model/CategorieProduitDTO";

@Injectable()
export class  ServiceProduit {

  produit:ProduitDto = new ProduitDto();
  produitList : ProduitDto [] = [];
  produitListTemp : ProduitDto [] = [];
  produitPopulaire : ProduitDto [] = [];
  produitNonPopulaire : ProduitDto [] = [];
  nomProduit : string [] = [];
  nomProduitFilter : string [] = [];
  categorieList : CategorieProduitDTO [] = [];
  categorieListTemp : CategorieProduitDTO [] = [];
  categorieNomList: string[] = [];
  categorieFilter: string[] = [];

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
            this.produitListTemp = data;
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

  getAllCategorie() {
    return this.http.get<CategorieProduitDTO[]>(AdresseIP.host + "all/categorie/");
  }

  saveProduit(produitDto: ProduitDto) {
    return this.http.post<ProduitDto>(AdresseIP.host+'saveproduit/',produitDto)
  }
  updateProduit(produitDto: ProduitDto) {
    return this.http.put<ProduitDto>(AdresseIP.host+'updateproduit/',produitDto)
  }
}
