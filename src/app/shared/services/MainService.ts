import {Injectable} from "@angular/core";
import {NotificationService} from "./NotificationService";
import {NgxSpinnerService} from "ngx-spinner";
import Swal from "sweetalert2";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlConfig} from "../../configuration/apiUrl/urlConfig";
import {AppUser} from "../../home/models/appUser";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class MainService {

  //Define the observable
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private currentTokenSubject: BehaviorSubject<any>;
  public currentToken: Observable<any>;
  //Globals variables
  public userConnected : AppUser;
  public token : string;

  constructor(public notificationService : NotificationService, public spinner : NgxSpinnerService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userConnect')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentTokenSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  get(url : string, token : string){
    return this.http.get(UrlConfig.apiUrl + url, {headers: new HttpHeaders({'Authorization': token})})
  }

  postSimple(url : string, body : any){
    return this.http.post(UrlConfig.apiUrl + url, body)
  }

  post(url : string, body : any, token : string){
    return this.http.post(UrlConfig.apiUrl + url, body, {headers: new HttpHeaders({'Authorization': token})})
  }

  put(url : string, body : any, token : string){
    return this.http.put(UrlConfig.apiUrl + url, body, {headers: new HttpHeaders({'Authorization': token})})
  }

  delete(url : string, token : string){
    return this.http.delete(UrlConfig.apiUrl + url, {headers: new HttpHeaders({'Authorization': token})})
  }

  ToastNotification(icon : any, msg : any) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
    })

    Toast.fire({
      icon: icon,
      title: msg,
    })
  }
}
