import {AuthenService} from './AuthenService';
import {CartService} from '../../acceuilpos/Service/CartService';
import {CartDTO} from '../../Model/CartDTO';
import {Injectable} from '@angular/core';
import {FavoriteService} from '../../acceuilpos/Service/FavoriteService';
import {FavorisDTO} from '../../Model/FavorisDTO';
@Injectable()
export class DeconnexionService {

  constructor(public authenService:AuthenService,public cariclientService:CartService,public favoriteService:FavoriteService){

  }

  deconnection(){
    this.cariclientService.cart=new CartDTO();
    this.cariclientService.count_cart=0;
    this.authenService.userlogin=null;
    this.favoriteService.nb_favorite=0;
    this.favoriteService.favorite=new FavorisDTO();
    this.authenService.jwt="";
    localStorage.clear();
  }
}
