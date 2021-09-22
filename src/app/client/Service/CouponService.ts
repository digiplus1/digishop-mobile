import {Injectable} from "@angular/core";
import {CouponDTO} from "../../Model/CouponDTO";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {AdresseIP} from "../../Service/AdresseIP";
import {CouponPage} from "../../Model/CouponPage";
import {ProduitDTOCoupon} from "../../Model/ProduitDTOCoupon";
import {CodeCoupon} from "../../Model/CodeCoupon";


@Injectable()
export class CouponService {


  couponPage:CouponPage;
  coupons:CouponDTO[];
  coupon:CouponDTO;
  codecoupon:CodeCoupon;
  constructor(public http: HttpClient,public authenservice:AuthenService) {}

  getAllNomProduitWithID(nomboutique:string){
    return this.http.get<ProduitDTOCoupon[]>(AdresseIP.host+'getallnomproduitandidbyshop/'+nomboutique);
  }


  create_Coupon(coupon){
    return this.http.post<CouponDTO>(AdresseIP.host+'managecoupon',coupon);

  }


  checkCodeCoupon(code:String){
    return this.http.get<CodeCoupon>(AdresseIP.host+'checkcode/'+code).subscribe(
      data=>{
        this.codecoupon=data;
        console.log(data);
      },error => {
        this.authenservice.toastMessage(error.error.message);
      }
    )
  }
  getAllCoupons(page:number){
    return this.http.get<CouponPage>(AdresseIP.host+'getallcouopns?size=10&page='+page).subscribe(
      data=>{
        this.coupons=data.content;
        this.couponPage=data;
      },error => {
        this.authenservice.toastMessage(error.error.message);
      }
    )
  }

  getAllCouponsAutheur(boutique:string,page:number){
    return this.http.get<CouponPage>(AdresseIP.host+'getcouopnsbyauteur/'+boutique+'?size=10&page='+page).subscribe(
      data=>{
        this.coupons=data.content;
        this.couponPage=data;
      },error => {
        this.authenservice.toastMessage(error.error.message);
      }
    )
  }
}
