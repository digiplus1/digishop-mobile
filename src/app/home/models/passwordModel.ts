import {AppUser} from "./appUser";

export class PasswordModel {
  id : number;
  password : string;
  token : string;
  email : string;
  userdetails : AppUser;
}
