import {AppRole} from "./appRole";

export class AppUser {
  id_user : number;
  username : string;
  email : string;
  phone : string;
  password : string;
  nomcomplet : string;
  cni : string;
  ativeuser : string;
  photouser : string;
  date : Date;
  client : boolean;
  staff : boolean;
  Roles : AppRole [];

  //DTO
  isProprietaire : boolean;
  isVendeur : boolean;

  //vendeur
  activevendeur : boolean;
}
