import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {FavorisDTO} from "../../Model/FavorisDTO";
import {AdresseIP} from "../../Service/AdresseIP";
import {BoutiquePos} from "../../Model/BoutiquePos";
import {ProduitDto} from "../../Model/ProduitDto";

@Injectable()
export class FavoriteService {
  nb_favorite: number = 0;

  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
    if (authenService.utilisateur) {
      this.calculfavorite(authenService.utilisateur.favoris);
    }
  }

  manageItemsToFavoris(favorisDTO: FavorisDTO){
    return this.http.post(AdresseIP.host+'managefavoris',favorisDTO).subscribe(
      data=>{
        this.getFavorisByClient();
      },error => {
        this.authenService.toastMessage(error.error.message)
      }
    )
  }

  getFavorisByClient() {
    if (this.authenService.utilisateur){
      return this.http.get<FavorisDTO>(AdresseIP.host + 'getfavorisbyuser/' + this.authenService.utilisateur.username).subscribe(
        data => {
          this.authenService.utilisateur.favoris = data;
          if (data) {
            this.calculfavorite(data);
          }

        }
      );
    }

  }

  deleteFavorite(produitDto: ProduitDto, boutique: BoutiquePos) {
    this.authenService.utilisateur.favoris.action = 'delete';
    this.authenService.utilisateur.favoris.nomclient = this.authenService.utilisateur.username;
    if (produitDto) {
      this.authenService.utilisateur.favoris.nomboutique = produitDto.nomboutique;
      this.authenService.utilisateur.favoris.nomproduit = produitDto.nomProduit;
      let index = this.authenService.utilisateur.favoris.produitsfavotisList.findIndex(p => p.idProduit == produitDto.idProduit);
      this.authenService.utilisateur.favoris.produitsfavotisList.splice(index, 1);
      this.calculfavorite(this.authenService.utilisateur.favoris);
    } else if (boutique) {
      this.authenService.utilisateur.favoris.nomboutique = boutique.nomBoutique;
      let index = this.authenService.utilisateur.favoris.boutiquefavorisList.findIndex(p => p.idBoutique == boutique.idBoutique);
      this.authenService.utilisateur.favoris.boutiquefavorisList.splice(index, 1);
      this.calculfavorite(this.authenService.utilisateur.favoris);
    }
    this.manageItemsToFavoris(this.authenService.utilisateur.favoris);
  }


  calculfavorite(favorite: FavorisDTO) {
    if (this.authenService.utilisateur.favoris) {
      this.nb_favorite = 0;
      this.nb_favorite += this.authenService.utilisateur.favoris.boutiquefavorisList.length;
      this.nb_favorite += this.authenService.utilisateur.favoris.produitsfavotisList.length;

      let user = JSON.parse(localStorage.getItem('utilisateur'));
      if (user) {
        if (this.authenService.utilisateur.favoris) {
          this.authenService.utilisateur.favoris = favorite;
          localStorage.setItem('utilisateur', JSON.stringify(this.authenService.utilisateur));
        }

      }
    }

  }


}
