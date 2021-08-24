import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) {
  }

  showSuccess(message: string = 'Opération effectuée avec succès', title: string = 'DigiShop'){
    this.toastr.success(message, title)
  }

  showError(message: string = "Erreur survenue lors du traitement. Bien vouloir rééssayer.", title: string = 'DigiShop'){
    this.toastr.error(message, title)
  }

  showInfo(message, title: string = 'DigiShop'){
    this.toastr.info(message, title)
  }
}
