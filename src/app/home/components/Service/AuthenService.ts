import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Utilisateur} from "../../../Model/Utilisateur";
import {AdresseIP} from "../../../Service/AdresseIP";
import {PasswordResetRequestModel} from "../../../Model/PasswordResetRequestModel";
import {JwtHelperService} from '@auth0/angular-jwt';
import {ToastController} from "@ionic/angular";
import {BoutiquePos} from "../../../Model/BoutiquePos";

@Injectable({
  providedIn: 'root'
})

export class AuthenService {
  jwt:string;
  url_position:string;
  utilisateur:Utilisateur;
  boutique : BoutiquePos;
  user_vendeur:Utilisateur;//cette variable est pour un client lorsque le vendeur prend le compte
  constructor(private router: Router,public http:HttpClient,public toastController: ToastController){
  }

  register(user){
    console.log(user);
    return this.http.post<Utilisateur>(AdresseIP.host+"register",user)
  }


  requestPasswordReset(resert){
    return this.http.post(AdresseIP.host+"password-request",resert)
  }
  login(user){
    return this.http.post(AdresseIP.host+"login",user,{observe:'response'})
  }

  getUser(user){
    return this.http.get<Utilisateur>(AdresseIP.host+"connection/"+user)
  }

  getBoutique(){
    return this.http.get<BoutiquePos>(AdresseIP.host+"getboutiquebyname/"+this.utilisateur.nomBoutique).subscribe(
      data=>{
        console.log(data);
        this.boutique = data;
      },error => {
        this.toastMessage(error.error.message);
      }
    );
  }

  getBoutiqueByLien(){
    return this.http.get<BoutiquePos>(AdresseIP.host+"getboutiquebylien/"+this.utilisateur.nomBoutique).subscribe(
      data=>{
        console.log(data);
        this.boutique = data;
      },error => {
        this.toastMessage(error.error.message);
      }
    );
  }

  ConnectAccountInShop(username:string){
    return this.http.get<Utilisateur>(AdresseIP.host+"connection/"+username+"/"+this.boutique.nomBoutique);
  }

//cette methode permet de choisir la route de navigation apres le login
  navigationRoute(roles:Array<any>,remember:boolean){
    if (roles.length==5){
      this.utilisateur.role="admin";
      this.router.navigateByUrl("/admin");
    }else if (roles.length==4) {
      this.utilisateur.role="support";
      this.router.navigateByUrl("/monitoring");
    }else if (roles.length==3) {
      this.utilisateur.role="proprietaire";
      this.router.navigateByUrl("/staff/menustaff/accueilproprietaire");
    }else if (roles.length==2) {
      this.utilisateur.role="vendeur";
      this.router.navigateByUrl("/staff/menustaff/accueilvendeur");
    }else if (roles.length==1) {
      this.utilisateur.role="client";
      this.router.navigateByUrl("/client/menuclient/acceuil");
    }

  }



  async toastMessage(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position:'top'
    });
    toast.present();
  }



verifierLocalStorage(){
this.utilisateur= JSON.parse(localStorage.getItem('utilisateur'));
this.jwt= localStorage.getItem('token');
  if (this.utilisateur && this.jwt){
    let jwthelper=new JwtHelperService();
    this.navigationRoute(jwthelper.decodeToken( this.jwt ).roles,true)
  }else {
    this.router.navigateByUrl('/home/login')
  }
}

  confirmpassword(confir_password: PasswordResetRequestModel) {

    return this.http.post(AdresseIP.host+"confirm-password",confir_password)
  }

  deconnexion() {
    this.utilisateur=null;
    localStorage.removeItem("token");
    localStorage.removeItem("utilisateur");
    this.router.navigateByUrl('');
  }
  updateuser(user:Utilisateur) {
    return this.http.put<Utilisateur>(AdresseIP.host+"update",user,
      {headers:new HttpHeaders({'Authorization':this.jwt})});
  }
  saveToken(){
    localStorage.setItem('utilisateur',JSON.stringify(this.utilisateur));
    localStorage.setItem('token',this.jwt);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
