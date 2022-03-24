(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_client_detailproduits_detailproduits_module_ts"],{

/***/ 48922:
/*!************************************************************************!*\
  !*** ./src/app/client/detailproduits/detailproduits-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailproduitsPageRoutingModule": () => (/* binding */ DetailproduitsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _detailproduits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailproduits.page */ 27843);




const routes = [
    {
        path: '',
        component: _detailproduits_page__WEBPACK_IMPORTED_MODULE_0__.DetailproduitsPage
    }
];
let DetailproduitsPageRoutingModule = class DetailproduitsPageRoutingModule {
};
DetailproduitsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailproduitsPageRoutingModule);



/***/ }),

/***/ 43647:
/*!****************************************************************!*\
  !*** ./src/app/client/detailproduits/detailproduits.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailproduitsPageModule": () => (/* binding */ DetailproduitsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _detailproduits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailproduits-routing.module */ 48922);
/* harmony import */ var _detailproduits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailproduits.page */ 27843);







let DetailproduitsPageModule = class DetailproduitsPageModule {
};
DetailproduitsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detailproduits_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailproduitsPageRoutingModule
        ],
        declarations: [_detailproduits_page__WEBPACK_IMPORTED_MODULE_1__.DetailproduitsPage]
    })
], DetailproduitsPageModule);



/***/ }),

/***/ 27843:
/*!**************************************************************!*\
  !*** ./src/app/client/detailproduits/detailproduits.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailproduitsPage": () => (/* binding */ DetailproduitsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_detailproduits_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detailproduits.page.html */ 8826);
/* harmony import */ var _detailproduits_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailproduits.page.scss */ 60334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _Service_ProduitService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/ProduitService */ 56072);
/* harmony import */ var _Service_CartService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Service/CartService */ 51714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Service_FavoriteService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/FavoriteService */ 72573);
/* harmony import */ var _Model_FavorisDTO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Model/FavorisDTO */ 7094);
/* harmony import */ var _Service_NatifService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/NatifService */ 51085);











let DetailproduitsPage = class DetailproduitsPage {
    constructor(authenService, produitService, favoriteService, cartService, router, natifService) {
        this.authenService = authenService;
        this.produitService = produitService;
        this.favoriteService = favoriteService;
        this.cartService = cartService;
        this.router = router;
        this.natifService = natifService;
        this.slideopts = {
            initialSilde: 0,
            spaceBetween: 0,
            slidesPerView: 2.8,
            slidesOffsetBefore: 6
        };
    }
    ngOnInit() {
    }
    addToCart(produit) {
        this.cartService.ajouter_panier(produit, 1, "add");
    }
    addfavoriteProduit(produit) {
        let favorite = new _Model_FavorisDTO__WEBPACK_IMPORTED_MODULE_6__.FavorisDTO();
        favorite.nomboutique = produit.nomboutique;
        favorite.nomproduit = produit.nomProduit;
        favorite.action = "add";
        favorite.nomclient = this.authenService.utilisateur.username;
        this.favoriteService.manageItemsToFavoris(favorite);
    }
};
DetailproduitsPage.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _Service_ProduitService__WEBPACK_IMPORTED_MODULE_3__.ProduitService },
    { type: _Service_FavoriteService__WEBPACK_IMPORTED_MODULE_5__.FavoriteService },
    { type: _Service_CartService__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _Service_NatifService__WEBPACK_IMPORTED_MODULE_7__.NatifService }
];
DetailproduitsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-detailproduits',
        template: _raw_loader_detailproduits_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detailproduits_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailproduitsPage);



/***/ }),

/***/ 60334:
/*!****************************************************************!*\
  !*** ./src/app/client/detailproduits/detailproduits.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n  position: relative;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .image ion-img {\n  width: 90%;\n  height: 90%;\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\nion-content .card .card-title p {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: 0.5rem;\n}\nion-content .card .rates {\n  /* display: flex;\n   align-items: center;\n   margin-bottom: 3rem;*/\n}\nion-content .card .rates .badge {\n  /*margin-right: 1rem;\n  background: #6b45bc;\n  color: #fff;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 1rem;*/\n}\nion-content .card .rates .badge ion-icon {\n  margin-right: 0.3rem;\n  font-size: 1.8rem;\n  font-weight: bold;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHByb2R1aXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFBTjtBQUNNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFDUjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBTjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQVE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBRVY7QUFFSTtFQUNDOzt3QkFBQTtBQUVMO0FBQ007RUFDRTs7Ozs7Ozt1QkFBQTtBQVFSO0FBQ1E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDVjtBQUdJO0VBQ0UscUJBQUE7QUFETjtBQUVNO0VBQ0UsZ0JBQUE7QUFBUjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBUiIsImZpbGUiOiJkZXRhaWxwcm9kdWl0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcblxyXG4gIH1cclxuXHJcbiAgLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDA7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgIC5pbWFnZXtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC02LjVyZW07XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBpb24taW1ne1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICBtYXJnaW4tdG9wOiAzNSU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogI2ZmYjgwMDtcclxuICAgICAgICBzdXB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJhdGVze1xyXG4gICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07Ki9cclxuICAgICAgLmJhZGdle1xyXG4gICAgICAgIC8qbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YjQ1YmM7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtOyovXHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFib3V0e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIGNvbG9yOiAjYjliOWI5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8826:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/detailproduits/detailproduits.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" >{{produitService.produit.nomboutique}}</ion-title>\r\n    <ion-buttons (click)=\"router.navigateByUrl('client/favorite')\" slot=\"end\" class=\" ion-margin-horizontal\">\r\n      <ion-icon name=\"heart-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n      <ion-badge>{{favoriteService.nb_favorite}}</ion-badge>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"router.navigateByUrl('client/panier')\">\r\n      <ion-icon name=\"cart-outline\" color=\"warning\" slot=\"icon-only\"></ion-icon>\r\n      <ion-badge>{{authenService.utilisateur.cart.cartItems.length}}</ion-badge>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"card\">\r\n    <div class=\"image\">\r\n      <ion-slides  pager=\"true\" [options]=\"slideopts\">\r\n        <ion-slide><ion-img [src]=\"produitService.produit.image\"></ion-img></ion-slide>\r\n        <ion-slide *ngFor=\"let i of produitService.produit.imageProduits\"><ion-img [src]=\"i.image\"></ion-img></ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n\r\n    <div class=\"card-content\">\r\n      <div class=\"card-title\">\r\n        <h1 class=\"ion-no-margin\">{{produitService.produit.nomProduit}}</h1>\r\n        <p class=\"ion-no-margin\">{{produitService.produit.prixProduit}}<sup>Fcfa</sup></p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"rates\">\r\n      <ion-item lines=\"none\" class=\"badge\">\r\n        <ion-button (click)=\"addfavoriteProduit(produitService.produit)\" shape=\"round\" fill=\"clear\"  slot=\"end\" class=\" ion-margin-horizontal\">\r\n          <ion-icon name=\"heart-outline\" color=\"danger\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" shape=\"round\" (click)=\"addToCart(produitService.produit)\">\r\n          <ion-icon name=\"cart-outline\" color=\"warning\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n        <ion-icon (click)=\"natifService.share(produitService.produit.image,'produit/'+produitService.produit.idProduit)\"\r\n                  name=\"share-social-outline\">\r\n        </ion-icon>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div class=\"about\">\r\n      <h1>Description</h1>\r\n      <p>{{produitService.produit.description}}</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_client_detailproduits_detailproduits_module_ts.js.map