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
  favorite: FavorisDTO = new FavorisDTO();
  nb_favorite: number = 0;

  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
    if (authenService.utilisateur) {
      this.calculfavorite(authenService.utilisateur.favoris);
    }
  }

  manageItemsToFavoris(favorisDTO: FavorisDTO){
    return this.http.post(AdresseIP.host+'managefavoris',favorisDTO).subscribe(
      data=>{
        this.calculfavorite(this.favorite);
      },error => {
        this.authenService.toastMessage(error.error.message)
      }
    )
  }

  getFavorisByClient() {
    if (this.authenService.utilisateur){
      return this.http.get<FavorisDTO>(AdresseIP.host + 'getfavorisbyuser/' + this.authenService.utilisateur.username).subscribe(
        data => {
          this.favorite = data;
          if (data) {
            this.calculfavorite(data);
          }

        }
      );
    }

  }

  deleteFavorite(produitDto: ProduitDto, boutique: BoutiquePos) {
    this.favorite.action = 'delete';
    this.favorite.nomclient = this.authenService.utilisateur.username;
    if (produitDto) {
      this.favorite.nomboutique = produitDto.nomboutique;
      this.favorite.nomproduit = produitDto.nomProduit;
      let index = this.favorite.produitsfavotisList.findIndex(p => p.idProduit == produitDto.idProduit);
      this.favorite.produitsfavotisList.splice(index, 1);
      this.calculfavorite(this.favorite);
    } else if (boutique) {
      this.favorite.nomboutique = boutique.nomBoutique;
      let index = this.favorite.boutiquefavorisList.findIndex(p => p.idBoutique == boutique.idBoutique);
      this.favorite.boutiquefavorisList.splice(index, 1);
      this.calculfavorite(this.favorite);
    }
    this.manageItemsToFavoris(this.favorite);
  }


  calculfavorite(favorite: FavorisDTO) {
    if (favorite) {
      this.nb_favorite = 0;
      this.nb_favorite += favorite.boutiquefavorisList.length;
      this.nb_favorite += favorite.produitsfavotisList.length;
      this.favorite = favorite;

      let user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        if (this.authenService.utilisateur.favoris) {
          this.authenService.utilisateur.favoris = favorite;
          localStorage.setItem('user', JSON.stringify(this.authenService.utilisateur));
        }

      }
    }

  }


}
