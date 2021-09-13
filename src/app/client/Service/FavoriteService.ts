import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {FavorisDTO} from "../../Model/FavorisDTO";
import {AdresseIP} from "../../Service/AdresseIP";

@Injectable()
export class FavoriteService {

  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {}

  manageItemsToFavoris(favorisDTO: FavorisDTO){
    return this.http.post(AdresseIP.host+'managefavoris',favorisDTO).subscribe(
      data=>{

      },error => {
        this.authenService.toastMessage(error.error.message)
      }
    )
  }
}
