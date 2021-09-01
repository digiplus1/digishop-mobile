import {Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";

@Injectable()
export class NatifService{

constructor(public toastController: ToastController,public callNumber:CallNumber,public router: Router, public authenservice: AuthenService) {
}

  callnumber(number:string){
    this.callNumber.callNumber(number, true)
      .then(res => {
        this.authenservice.toastMessage(res)
      })
      .catch(err => {
        this.authenservice.toastMessage(err)
      });
  }
}
