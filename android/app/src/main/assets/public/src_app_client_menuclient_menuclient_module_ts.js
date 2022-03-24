(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_client_menuclient_menuclient_module_ts"],{

/***/ 79823:
/*!****************************************************************!*\
  !*** ./src/app/client/menuclient/menuclient-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuclientPageRoutingModule": () => (/* binding */ MenuclientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _menuclient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuclient.page */ 90309);
/* harmony import */ var _component_acceuil_acceuil_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/acceuil/acceuil.component */ 83591);
/* harmony import */ var _component_commande_commande_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/commande/commande.component */ 45778);
/* harmony import */ var _component_historique_historique_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/historique/historique.component */ 17864);
/* harmony import */ var _component_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/coupon/coupon.component */ 35084);
/* harmony import */ var _component_apropos_apropos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/apropos/apropos.component */ 26058);
/* harmony import */ var _component_profil_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/profil/profil.component */ 59800);










const routes = [
    {
        path: '',
        component: _menuclient_page__WEBPACK_IMPORTED_MODULE_0__.MenuclientPage,
        children: [
            {
                path: 'acceuil',
                component: _component_acceuil_acceuil_component__WEBPACK_IMPORTED_MODULE_1__.AcceuilComponent
            },
            {
                path: 'commande',
                component: _component_commande_commande_component__WEBPACK_IMPORTED_MODULE_2__.CommandeComponent
            },
            {
                path: 'historique',
                component: _component_historique_historique_component__WEBPACK_IMPORTED_MODULE_3__.HistoriqueComponent
            },
            {
                path: 'coupon',
                component: _component_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_4__.CouponComponent
            },
            {
                path: 'apropos',
                component: _component_apropos_apropos_component__WEBPACK_IMPORTED_MODULE_5__.AproposComponent
            },
            {
                path: 'profil',
                component: _component_profil_profil_component__WEBPACK_IMPORTED_MODULE_6__.ProfilComponent
            },
        ]
    }
];
let MenuclientPageRoutingModule = class MenuclientPageRoutingModule {
};
MenuclientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], MenuclientPageRoutingModule);



/***/ }),

/***/ 61079:
/*!********************************************************!*\
  !*** ./src/app/client/menuclient/menuclient.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuclientPageModule": () => (/* binding */ MenuclientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _menuclient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuclient-routing.module */ 79823);
/* harmony import */ var _menuclient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuclient.page */ 90309);







let MenuclientPageModule = class MenuclientPageModule {
};
MenuclientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menuclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuclientPageRoutingModule
        ],
        declarations: [_menuclient_page__WEBPACK_IMPORTED_MODULE_1__.MenuclientPage]
    })
], MenuclientPageModule);



/***/ }),

/***/ 90309:
/*!******************************************************!*\
  !*** ./src/app/client/menuclient/menuclient.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuclientPage": () => (/* binding */ MenuclientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_menuclient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menuclient.page.html */ 25355);
/* harmony import */ var _menuclient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuclient.page.scss */ 66171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/share */ 16380);







let MenuclientPage = class MenuclientPage {
    constructor(authenservice, router) {
        this.authenservice = authenservice;
        this.router = router;
        this.menu = [
            { title: "Acceuil", url: "client/menuclient/acceuil", icon: "home-outline", status: 'active' },
            { title: "Commandes en cours", url: "client/menuclient/commande", icon: "layers-outline", status: 'none' },
            { title: "Historique", url: "client/menuclient/historique", icon: "archive-outline", status: 'none' },
            { title: "Partager", url: "socialshare", icon: "share-social-outline", status: 'none' },
            { title: "Coupon", url: "client/menuclient/coupon", icon: "ear-outline", status: 'none' },
            { title: "Profil", url: "client/menuclient/profil", icon: "people-outline", status: 'none' },
            { title: "A propos", url: "client/menuclient/apropos", icon: "information-outline", status: 'none' },
            { title: "Déconnexion", url: "/home/login", icon: "exit-outline" },
        ];
    }
    ngOnInit() {
    }
    onMenuAction(url) {
        if (url.url == "/home/login") {
            this.authenservice.deconnexion();
        }
        else if (url.url == "socialshare") {
            this.partager();
        }
        else {
            this.menu.forEach(m => {
                m.status = 'none';
                if (m == url) {
                    m.status = 'active';
                }
            });
            this.router.navigateByUrl(url.url);
        }
    }
    partager() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_3__.Share.share({
                title: 'See cool stuff',
                text: 'Really awesome thing you need to see right meow',
                url: 'https://play.google.com/store/apps/details?id=com.digishop.ftg',
                dialogTitle: 'Share with buddies',
            });
        });
    }
};
MenuclientPage.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
MenuclientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menuclient',
        template: _raw_loader_menuclient_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menuclient_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuclientPage);



/***/ }),

/***/ 66171:
/*!********************************************************!*\
  !*** ./src/app/client/menuclient/menuclient.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background: var(--ion-color-primary);\n  background: linear-gradient(90deg, var(--ion-color-primary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  border-radius: 10px 10px 10px 50px;\n  transform: rotate(-15deg);\n  margin: -50px 0 60px -18px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 2px solid #0d4765;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: var(--ion-color-primary);\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-item {\n  margin: 0;\n}\n\n.menu-item ion-icon {\n  font-weight: bold;\n  font-size: 30px;\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-item ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n  --background: transparent;\n}\n\n.menu-item .active {\n  border-left: 5px solid;\n  color: var(--ion-color-warning);\n  padding-left: 15px;\n}\n\n.menu-item .active ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-content {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVjbGllbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSw4RkFBQTtFQUNBLGdEQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFFRSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFJO0VBQ0UsK0JBQUE7QUFFTjs7QUFHQTtFQUNFLHFCQUFBO0FBQUYiLCJmaWxlIjoibWVudWNsaWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItYmd7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyx2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMCUsdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LDE0MCwyNTUsMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgbWFyZ2luOiAtNTBweCAwIDYwcHggLTE4cHg7XHJcbn1cclxuLmhlYWRlci1jb250ZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBkNDc2NTtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2U0ZTRlNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIH1cclxufVxyXG4ubWVudS1pdGVte1xyXG4gIG1hcmdpbjogMDtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM4Njk3OWY7XHJcbiAgfVxyXG4gIGlvbi1pdGVte1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5hY3RpdmV7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 25355:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/menuclient/menuclient.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu contentId=\"main\">\r\n  <ion-content>\r\n    <div class=\"menu-header-bg\">Menu</div>\r\n    <div class=\"header-content\">\r\n      <img [src]=\"authenservice.utilisateur.photouser?authenservice.utilisateur.photouser:'assets/img/users.png'\">\r\n      <ion-label>\r\n        <h2>{{authenservice.utilisateur.username}}</h2>\r\n        <p>{{authenservice.utilisateur.email}}</p>\r\n      </ion-label>\r\n    </div>\r\n    <!--  <div class=\"action-button\">\r\n        <ion-button ></ion-button>\r\n      </div>-->\r\n    <ion-menu-toggle lines=\"none\" class=\"menu-item\" >\r\n      <ion-item  *ngFor=\"let m of menu\" button (click)=\"onMenuAction(m)\" [class]=\"m.status\">\r\n        <ion-icon [color]=\"m.status=='active'?'warning':'primary'\" [name]=\"m.icon\"></ion-icon><ion-label [color]=\"m.status=='active'?'warning':'primary'\" >{{m.title}}</ion-label>\r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\" main></ion-router-outlet>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_client_menuclient_menuclient_module_ts.js.map