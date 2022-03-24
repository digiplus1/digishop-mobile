(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_staff_menustaff_menustaff_module_ts"],{

/***/ 80139:
/*!*************************************************************!*\
  !*** ./src/app/staff/menustaff/menustaff-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenustaffPageRoutingModule": () => (/* binding */ MenustaffPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _menustaff_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menustaff.page */ 26945);
/* harmony import */ var _components_accueilvendeur_accueilvendeur_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/accueilvendeur/accueilvendeur.component */ 26519);
/* harmony import */ var _components_accueilproprietaire_accueilproprietaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/accueilproprietaire/accueilproprietaire.component */ 59687);
/* harmony import */ var _components_profil_detail_profil_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profil-detail/profil-detail.component */ 93535);
/* harmony import */ var _components_rapport_fermeture_caisse_boutique_rapport_fermeture_caisse_boutique_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/rapport-fermeture-caisse-boutique/rapport-fermeture-caisse-boutique.component */ 93466);








const routes = [
    {
        path: '',
        component: _menustaff_page__WEBPACK_IMPORTED_MODULE_0__.MenustaffPage,
        children: [
            {
                path: 'accueilvendeur',
                component: _components_accueilvendeur_accueilvendeur_component__WEBPACK_IMPORTED_MODULE_1__.AccueilvendeurComponent,
            },
            {
                path: 'accueilproprietaire',
                component: _components_accueilproprietaire_accueilproprietaire_component__WEBPACK_IMPORTED_MODULE_2__.AccueilproprietaireComponent,
            },
            {
                path: 'profil',
                component: _components_profil_detail_profil_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProfilDetailComponent,
            },
            {
                path: 'rapport',
                component: _components_rapport_fermeture_caisse_boutique_rapport_fermeture_caisse_boutique_component__WEBPACK_IMPORTED_MODULE_4__.RapportFermetureCaisseBoutiqueComponent
            },
            {
                path: 'caisse',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_staff_components_caisse_components_clientcommande_components_details-commande-37eff5"), __webpack_require__.e("src_app_staff_components_caisse_caisse_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/caisse/caisse.module */ 80585)).then(m => m.CaissePageModule)
            },
            {
                path: 'apropos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_staff_components_aboutus_aboutus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../components/aboutus/aboutus.module */ 20701)).then(m => m.AboutusPageModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_staff_components_caisse_components_clientcommande_components_details-commande-37eff5"), __webpack_require__.e("src_app_staff_components_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/dashboard/dashboard.module */ 26080)).then(m => m.DashboardPageModule)
            },
            {
                path: 'vendeurs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_staff_components_vendeurs_vendeurs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/vendeurs/vendeurs.module */ 2508)).then(m => m.VendeursPageModule)
            },
            {
                path: 'boutique',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("src_app_staff_components_boutiques_boutiques_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/boutiques/boutiques.module */ 61138)).then(m => m.BoutiquesPageModule)
            },
        ]
    }
];
let MenustaffPageRoutingModule = class MenustaffPageRoutingModule {
};
MenustaffPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], MenustaffPageRoutingModule);



/***/ }),

/***/ 79687:
/*!*****************************************************!*\
  !*** ./src/app/staff/menustaff/menustaff.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenustaffPageModule": () => (/* binding */ MenustaffPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _menustaff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menustaff-routing.module */ 80139);
/* harmony import */ var _menustaff_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menustaff.page */ 26945);







let MenustaffPageModule = class MenustaffPageModule {
};
MenustaffPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menustaff_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenustaffPageRoutingModule
        ],
        declarations: [_menustaff_page__WEBPACK_IMPORTED_MODULE_1__.MenustaffPage]
    })
], MenustaffPageModule);



/***/ }),

/***/ 26945:
/*!***************************************************!*\
  !*** ./src/app/staff/menustaff/menustaff.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenustaffPage": () => (/* binding */ MenustaffPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_menustaff_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menustaff.page.html */ 15840);
/* harmony import */ var _menustaff_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menustaff.page.scss */ 22442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ServicePrinter */ 34962);
/* harmony import */ var _components_printerlist_printerlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/printerlist/printerlist.component */ 44725);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let MenustaffPage = class MenustaffPage {
    constructor(authenservice, router, printer, modalController) {
        this.authenservice = authenservice;
        this.router = router;
        this.printer = printer;
        this.modalController = modalController;
        this.menuVendeur = [
            { title: "Accueil", url: "/staff/menustaff/accueilvendeur", icon: "home-outline", status: 'active' },
            { title: "Gestion Caisse", url: "/staff/menustaff/caisse", icon: "cash-outline", status: 'none' },
            { title: "Tableau de Bord", url: "/staff/menustaff/dashboard", icon: "clipboard-outline", status: 'none' },
            { title: "Imprimante", url: "/print/", icon: "print", status: 'none' },
            { title: "A propos de nous", url: "/staff/menustaff/apropos", icon: "people-outline", status: 'none' },
            // {title:"Partager",url:"/staff/menustaff/shareapp",icon:"share-outline", status:'none'},
            { title: "Déconnexion", url: "/home", icon: "exit-outline", status: 'none' },
        ];
        this.menuProp = [
            { title: "Accueil", url: "/staff/menustaff/accueilproprietaire", icon: "home-outline", status: 'active' },
            { title: "Gestion Caisse", url: "/staff/menustaff/caisse", icon: "cash-outline", status: 'none' },
            { title: "Gestion Boutique", url: "/staff/menustaff/boutique", icon: "card-outline", status: 'none' },
            //{title:"Gestion Vendeurs",url:"/staff/menustaff/vendeurs",icon:"person-outline", status:'none'},
            { title: "Tableau de Bord", url: "/staff/menustaff/dashboard", icon: "clipboard-outline", status: 'none' },
            { title: "Rapport fermeture caisse boutique", url: "/staff/menustaff/rapport", icon: "clipboard-outline", status: 'none' },
            { title: "Imprimante", url: "/print/", icon: "print", status: 'none' },
            { title: "A propos de nous", url: "/staff/menustaff/apropos", icon: "people-outline", status: 'none' },
            // {title:"Partager",url:"/staff/menustaff/shareapp",icon:"share-outline", status:'none'},
            { title: "Déconnexion", url: "/home", icon: "exit-outline", status: 'none' },
        ];
        this.menus = [];
    }
    ngOnInit() {
        if (this.authenservice.utilisateur.role == "vendeur") {
            this.menus = this.menuVendeur;
        }
        else {
            this.menus = this.menuProp;
        }
        this.authenservice.getBoutiqueByLien();
    }
    onMenuAction(url) {
        if (url.url == "/home/login") {
            if (this.authenservice.utilisateur.role == "vendeur") {
                this.menus = this.menuVendeur;
            }
            else if (this.authenservice.utilisateur.role == "proprietaire") {
                this.menus = this.menuProp;
            }
            this.authenservice.deconnexion();
        }
        else if (url.url == "/print/") {
            this.printerModal();
        }
        else {
            this.menus.forEach(m => {
                m.status = 'none';
                if (m == url) {
                    m.status = 'active';
                }
            });
            this.router.navigateByUrl(url.url);
        }
    }
    printerModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_printerlist_printerlist_component__WEBPACK_IMPORTED_MODULE_4__.PrinterlistComponent,
                cssClass: 'my-custom-css'
            });
            return yield modal.present();
        });
    }
};
MenustaffPage.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__.ServicePrinter },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
MenustaffPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-menustaff',
        template: _raw_loader_menustaff_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menustaff_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenustaffPage);



/***/ }),

/***/ 22442:
/*!*****************************************************!*\
  !*** ./src/app/staff/menustaff/menustaff.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background: var(--ion-color-primary);\n  background: linear-gradient(90deg, var(--ion-color-primary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  border-radius: 10px 10px 10px 50px;\n  transform: rotate(-15deg);\n  margin: -50px 0 60px -18px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 2px solid #0d4765;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: var(--ion-color-primary);\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-item {\n  margin: 0;\n}\n\n.menu-item ion-icon {\n  font-weight: bold;\n  font-size: 30px;\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-item ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n  --background: transparent;\n}\n\n.menu-item .active {\n  border-left: 5px solid;\n  color: var(--ion-color-secondary);\n  padding-left: 15px;\n}\n\n.menu-item .active ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-content {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVzdGFmZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDhGQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUVFLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUk7RUFDRSwrQkFBQTtBQUVOOztBQUdBO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJtZW51c3RhZmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBmb250LWZhbWlseTogbGF0bztcclxufVxyXG5cclxuLm1lbnUtaGVhZGVyLWJne1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwxNDAsMjU1LDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gIG1hcmdpbjogLTUwcHggMCA2MHB4IC0xOHB4O1xyXG59XHJcbi5oZWFkZXItY29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWd7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZDQ3NjU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGlvbi1idXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBpb24taWNvbntcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICB9XHJcbn1cclxuLm1lbnUtaXRlbXtcclxuICBtYXJnaW46IDA7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjODY5NzlmO1xyXG4gIH1cclxuICBpb24taXRlbXtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYWN0aXZle1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbiAgICBpb24taWNvbntcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 15840:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/menustaff/menustaff.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu contentId=\"mainstaff\">\r\n  <ion-content>\r\n    <div class=\"menu-header-bg\">Menu</div>\r\n    <div class=\"header-content\">\r\n      <img [src]=\"authenservice.utilisateur.photouser?authenservice.utilisateur.photouser:'assets/img/users.png'\">\r\n      <ion-label>\r\n        <h2>{{authenservice.utilisateur.username}}</h2>\r\n        <p>{{authenservice.utilisateur.email}}</p>\r\n        <p>{{authenservice.utilisateur.phone}}</p>\r\n      </ion-label>\r\n    </div>\r\n    <ion-menu-toggle lines=\"none\" class=\"menu-item\" >\r\n      <ion-item  *ngFor=\"let m of menus\" button (click)=\"onMenuAction(m)\" [class]=\"m.status\">\r\n        <ion-icon [color]=\"m.status=='active'?'secondary':'primary'\" [name]=\"m.icon\"></ion-icon><ion-label [color]=\"m.status=='active'?'secondary':'primary'\" >{{m.title}}</ion-label>\r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon size=\"small\" style=\"margin-left: 5%\" name=\"call-outline\" color=\"primary\"></ion-icon>\r\n      <ion-label style=\"margin-left: 5%\">6 77 10 40 40 / 6 96 96 10 11</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon size=\"small\" style=\"margin-left: 5%\" name=\"mail-outline\" color=\"danger\"></ion-icon>\r\n      <ion-label style=\"margin-left: 5%\">contact@digiplus-cm.com</ion-label>\r\n    </ion-item>\r\n  </ion-footer>\r\n</ion-menu>\r\n<ion-router-outlet id=\"mainstaff\" main></ion-router-outlet>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_staff_menustaff_menustaff_module_ts.js.map