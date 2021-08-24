import {Injectable} from "@angular/core";
import {MainService} from "../../shared/services/MainService";

@Injectable()
export class ConnexionService {

  constructor(private mainService : MainService) {
  }

}
