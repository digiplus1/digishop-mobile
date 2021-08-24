import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from "../../../Model/Utilisateur";
import {AdresseIP} from "../../../Service/AdresseIP";
import {PasswordResetRequestModel} from "../../../Model/PasswordResetRequestModel";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenService {
  jwt:string;
  url_position:string;
  userlogin:Utilisateur;
  user_vendeur:Utilisateur;//cette variable est pour un client lorsque le vendeur prend le compte
  constructor(private router: Router,public http:HttpClient){
  }

  register(user){
    console.log(user);
    return this.http.post<Utilisateur>(AdresseIP.host+"register",user)
  }


  requestPasswordReset(resert){
    return this.http.post(AdresseIP.host+"password-request",resert)
  }
  login(user){
    console.log(user);
    return this.http.post(AdresseIP.host+"login",user,{observe:'response'})
  }

  getUser(user){
    return this.http.get<Utilisateur>(AdresseIP.host+"connection/"+user)
  }


  ConnectAccountInShop(username:string){
    return this.http.get<Utilisateur>(AdresseIP.host+"connection/"+username+"/"+this.userlogin.nomBoutique);
  }

//cette methode permet de choisir la route de navigation apres le login
  navigationRoute(roles:Array<any>,remember:boolean){
    if (roles.length==5){
      this.userlogin.role="admin";
      this.router.navigateByUrl("/admin");
    }else if (roles.length==4) {
      this.userlogin.role="support";
      this.router.navigateByUrl("/monitoring");
    }else if (roles.length==3) {
      this.userlogin.role="proprietaire";
      this.router.navigateByUrl("/admin/boutique/"+this.userlogin.nomBoutique);
    }else if (roles.length==2) {
      this.userlogin.role="vendeur";
      this.router.navigateByUrl("/admin");
    }else if (roles.length==1) {
      this.userlogin.role="client";

    }

    if (remember){
      localStorage.setItem('token',this.jwt);
      localStorage.setItem('user',JSON.stringify(this.userlogin));
    }
  }






verifierLocalStorage(){
this.userlogin= JSON.parse(localStorage.getItem('user'));
this.jwt= localStorage.getItem('token');
  if (this.userlogin && this.jwt){
    let jwthelper=new JwtHelperService();
    this.navigationRoute(jwthelper.decodeToken( this.jwt ).roles,true)
  }
}

  confirmpassword(confir_password: PasswordResetRequestModel) {

    return this.http.post(AdresseIP.host+"confirm-password",confir_password)
  }

  deconnexion() {
    this.userlogin=null;
    localStorage.clear();
  }
}
