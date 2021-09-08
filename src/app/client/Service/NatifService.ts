import {Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import { Share } from '@capacitor/share';
import {AdresseIP} from "../../Service/AdresseIP";
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

  async share(image:string,url:string){

    await Share.share({
      text: AdresseIP.host+url,
      url: image,
      dialogTitle: 'Digishop',
    }).then(result=>{
      this.authenservice.toastMessage(result.activityType)
    }) .catch(err => {
      this.authenservice.toastMessage(err)
    });
  }
}
