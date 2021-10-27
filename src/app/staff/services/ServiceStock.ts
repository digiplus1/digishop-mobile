import {Injectable} from "@angular/core";
import {Stock} from "../../Model/Stock";
import {AdresseIP} from "../../Service/AdresseIP";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class  ServiceStock {

  constructor(
    private http: HttpClient
  ) {
  }

  savestockbyShop(stock:Stock) {
    return this.http.post<Stock>(AdresseIP.host + 'manageStock',stock)
  }

}
