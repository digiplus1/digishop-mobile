import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {ProduitDto} from "../../Model/ProduitDto";
import {CartItem} from "../../Model/CartItem";
import {AdresseIP} from "../../Service/AdresseIP";
import {Cart} from "../../Model/Cart";

@Injectable()
export class CartService {
  count_cart: number=0;
  private cartitem: CartItem;
  is_loarding_delect: boolean;

  constructor(public http: HttpClient, public authenService: AuthenService, public router: Router) {
  }

  ajouter_panier(produit: ProduitDto, qty: number, action: string) {
    if ((produit.quantiteEnStock > 0 && produit.manageStock) || (produit.quantiteEnStock <= 0 && !produit.manageStock)) {
      this.cartitem = new CartItem();
      this.cartitem.quantite = qty;
      this.cartitem.prixunitaire = produit.prixProduit;
      this.cartitem.description = produit.nomProduit;
      this.cartitem.typeaction = action;
      this.cartitem.idproduit = produit.idProduit;
      this.cartitem.produit = produit;
      let existe_shop: boolean;
      if (this.authenService.utilisateur.cart.cartItems) {
        this.authenService.utilisateur.cart.cartItems.forEach(p => {
          if (p.produit.nomboutique != produit.nomboutique) {
            existe_shop = true;
          }
        });

      }

      if (!existe_shop) {
        this.managecartAction(this.cartitem);
        let index = this.authenService.utilisateur.cart.cartItems.findIndex(p => p.produit.idProduit == produit.idProduit);
        let item = this.authenService.utilisateur.cart.cartItems.find(p => p.produit.idProduit == produit.idProduit);
        if (item) {
          if (action == 'add') {
            this.authenService.utilisateur.cart.cartItems[index].quantite += qty;
          } else if (action == 'remove') {
            this.authenService.utilisateur.cart.cartItems[index].quantite -= qty;
            if (this.authenService.utilisateur.cart.cartItems[index].quantite == 0) {
              this.authenService.utilisateur.cart.cartItems.splice(index, 1);
            }
          } else if (action == 'delete') {
            this.authenService.utilisateur.cart.cartItems.splice(index, 1);
          }

        } else {
          this.authenService.utilisateur.cart.cartItems.push(this.cartitem);
        }
        this.calcul_price();
      } else {
        this.authenService.toastMessage("Votre panier contient deja les produits de " + this.authenService.utilisateur.cart.cartItems[0].produit.nomboutique)
      }
    } else {
      this.authenService.toastMessage("Le produit " + produit.nomProduit + " n'existe plus en stock")
    }
  }


   calcul_price() {
    let icount: number = 0;
    let total: number = 0;
    if (this.authenService.utilisateur && this.authenService.utilisateur.cart.cartItems){
      this.authenService.utilisateur.cart.cartItems.forEach(c => {
        c.montant = c.prixunitaire * c.quantite;
        total += c.montant;
        icount += 1;
      });
      this.count_cart = icount;
      this.authenService.utilisateur.cart.montanttotal = total;
    }

  }

  managecartAction(cartItemDTO: CartItem) {
    if (this.authenService.utilisateur) {
      if (this.authenService.utilisateur.roles.length == 1) {
        cartItemDTO.idcart = this.authenService.utilisateur.cart.idcart;
      } else {
        cartItemDTO.idcart = this.authenService.user_vendeur.cart.idcart;
      }
      return this.http.post<boolean>(AdresseIP.host + 'cartaction', cartItemDTO).subscribe(
        data => {
          this.authenService.toastMessage("Action effectuée avec succes")
          localStorage.removeItem('utilisateur');
          localStorage.setItem('utilisateur', JSON.stringify(this.authenService.utilisateur));
        }, error => {
          this.authenService.toastMessage(error.error.message);
        }
      );
    }

  }

  getPanier(idPanier: number) {
    return this.http.get<Cart>(AdresseIP.host + 'cart/' + idPanier);
  }

  delete_cart() {
    if (this.authenService.utilisateur) {
      this.is_loarding_delect = true;
      this.deleteAllItemOnCart().subscribe(
        data => {
          this.is_loarding_delect = false;

          this.authenService.utilisateur.cart =data;
          this.calcul_price();
          this.router.navigateByUrl("client/menuclient/acceuil")
          this.authenService.saveToken();
        }, error => {
          this.authenService.toastMessage(error.error.message);
          this.is_loarding_delect = false;
        }
      );
    }

  }

  deleteAllItemOnCart() {
    if (this.authenService.utilisateur) {
      return this.http.delete<Cart>(AdresseIP.host + 'clearcart/' + this.authenService.utilisateur.cart.idcart);
    }
  }

  getcartById() {
    if (this.authenService.utilisateur) {
      return this.http.get<Cart>(AdresseIP.host + 'cart/' + this.authenService.utilisateur.cart.idcart).subscribe(
        data=>{
          this.authenService.utilisateur.cart=data;
          this.calcul_price();
          this.authenService.saveToken();
        }
      )
    }
  }
}
