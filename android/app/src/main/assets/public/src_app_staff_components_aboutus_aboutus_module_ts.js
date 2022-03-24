(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_staff_components_aboutus_aboutus_module_ts"],{

/***/ 993:
/*!********************************************************************!*\
  !*** ./src/app/staff/components/aboutus/aboutus-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPageRoutingModule": () => (/* binding */ AboutusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus.page */ 17175);




const routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_0__.AboutusPage
    }
];
let AboutusPageRoutingModule = class AboutusPageRoutingModule {
};
AboutusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutusPageRoutingModule);



/***/ }),

/***/ 20701:
/*!************************************************************!*\
  !*** ./src/app/staff/components/aboutus/aboutus.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPageModule": () => (/* binding */ AboutusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus-routing.module */ 993);
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.page */ 17175);







let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutusPageRoutingModule
        ],
        declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_1__.AboutusPage]
    })
], AboutusPageModule);



/***/ }),

/***/ 17175:
/*!**********************************************************!*\
  !*** ./src/app/staff/components/aboutus/aboutus.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPage": () => (/* binding */ AboutusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aboutus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aboutus.page.html */ 53234);
/* harmony import */ var _aboutus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.page.scss */ 61402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AboutusPage = class AboutusPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutusPage.ctorParameters = () => [];
AboutusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-aboutus',
        template: _raw_loader_aboutus_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aboutus_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutusPage);



/***/ }),

/***/ 61402:
/*!************************************************************!*\
  !*** ./src/app/staff/components/aboutus/aboutus.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-text-justify {\n  padding: 5px 20px 10px;\n}\n\nh2 {\n  font-weight: bold;\n  font-size: 14px;\n  color: #0f5173;\n  margin-left: 5px;\n}\n\nion-label {\n  font-size: 12px;\n}\n\nion-toolbar {\n  --background: #0f5173;\n}\n\nion-toolbar ion-buttons, ion-toolbar ion-title, ion-toolbar ion-label {\n  color: white;\n}\n\nion-item {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFBRTtFQUNFLFlBQUE7QUFFSjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoiYWJvdXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXRleHQtanVzdGlmeSB7XHJcbiAgcGFkZGluZzogNXB4IDIwcHggMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzBmNTE3MztcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzBmNTE3MztcclxuICBpb24tYnV0dG9ucywgaW9uLXRpdGxlLCBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 53234:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/aboutus/aboutus.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>A propos de nous</ion-title>\r\n    <ion-buttons slot=\"end\" style=\"margin-right: 8px\">\r\n      <ion-icon\r\n        size=\"large\"\r\n        name=\"share-social-outline\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"text-center\">\r\n    <img\r\n      style=\"width: 250px; height: 250px\"\r\n      class=\"text-center\"\r\n      src=\"./assets/images/about.png\"\r\n      alt=\"Digishop logo\">\r\n  </div>\r\n\r\n  <div class=\"ion-text-justify\">\r\n    <h2>A PROPOS</h2>\r\n    <ion-label>\r\n      DIGISHOP est une solution de Commerce de détails en ligne et en boutique. Nous fournissons une combinaison de service en ligne et de services de point de vente présentée sous forme de fédération de boutiques ayant chacune un fonctionnement indépendant.\r\n    </ion-label>\r\n    <h2>NOTRE CIBLE</h2>\r\n    <ion-label>\r\n      La solution est faite pour les boutiques de toutes industries (mode, quincaillerie, alimentaire, matériels électroniques, etc) avec un accent particulier sur les petits commerces qui n’ont pas la capacité et les moyens d’acquérir et d’exploiter les logiciels standard du marché.\r\n    </ion-label>\r\n    <h2>NOS MISSIONS</h2>\r\n    <ion-label>\r\n      <ul>\r\n        <li>Permettre au promoteur de gérer toute sa boutique à travers la solution: facturation, suivi de la caisse, suivi des commandes et de livraisons et reporting des activités. </li>\r\n        <li>Donner la possibilité aux promoteurs à travers une connexion internet normal  et une souscription mensuelle/trimestrielle/annuelle, d’éviter des investissements en infrastructure informatique et assurer une haute disponibilité des services tant au client en ligne qu’au vendeur.</li>\r\n        <li>Donner au client l’accès à sa boutique préférée et la possibilité d’interagir avec un agent de la boutique dans la continuité des relations personnelles existantes et pour une éventuelle négociation de prix.</li>\r\n        <li>Faciliter la tâche au client à travers le service en ligne, paiement en ligne et la livraison à l’adresse de son choix.</li>\r\n        <li>Offrir un large choix au client grâce à l’accès à un ensemble de boutiques. </li>\r\n      </ul>\r\n    </ion-label>\r\n\r\n    <h2>NOTRE VISION</h2>\r\n    <ion-label>\r\n      Nous voulons apporter une valeur indiscutable à la gestion complète de votre boutique partout où vous vous trouver.\r\n    </ion-label>\r\n\r\n    <h2>PRIX</h2>\r\n    <ion-label>\r\n      Il existe les packages suivants payable sur une base mensuelle, trimestrielle ou annuelle:\r\n      <ul>\r\n        <li>Base, </li>\r\n        <li>Premium (Inclus les campagnes marketing et promotions),</li>\r\n        <li>+ Options (Inclues les terminaux de caisses)</li>\r\n      </ul>\r\n    </ion-label>\r\n\r\n    <h2>NEWSLETTER</h2>\r\n    <ion-label>\r\n      Inscrivez-vous maintenant pour obtenir des mises à jour sur les ressentes boutiques enregistrées sur la plateforme, les arrivages et les promotions, les nouvelles fonctionnalités pour mieux vous servir.\r\n    </ion-label>\r\n\r\n    <h2>NOUS CONTACTER</h2>\r\n    <ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon style=\"margin-left: 5%; color: #4ac959\" name=\"call-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5%\">(+237) 677104040 / 696961011</ion-label>\r\n      </ion-item>\r\n    </ion-label>\r\n\r\n    <h2>SUIVEZ NOUS</h2>\r\n    <ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon style=\"margin-left: 5%; color: #3b5998\" name=\"logo-facebook\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5%\">facebook.com/digishop2020</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon style=\"margin-left: 5%; color: #00acee\" name=\"logo-twitter\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5%\">twitter.com/DigiShop6</ion-label>\r\n      </ion-item>\r\n    </ion-label>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_staff_components_aboutus_aboutus_module_ts.js.map