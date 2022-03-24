(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_staff_components_caisse_caisse_module_ts"],{

/***/ 60388:
/*!******************************************************************!*\
  !*** ./src/app/staff/components/caisse/caisse-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaissePageRoutingModule": () => (/* binding */ CaissePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _caisse_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caisse.page */ 60141);
/* harmony import */ var _components_clientcommande_clientcommande_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/clientcommande/clientcommande.component */ 15981);
/* harmony import */ var _components_entreecaisse_entreecaisse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/entreecaisse/entreecaisse.component */ 48062);
/* harmony import */ var _components_fermeturecaisse_fermeturecaisse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fermeturecaisse/fermeturecaisse.component */ 54447);
/* harmony import */ var _components_ouverturecaisse_ouverturecaisse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ouverturecaisse/ouverturecaisse.component */ 10406);
/* harmony import */ var _components_sortiecaisse_sortiecaisse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sortiecaisse/sortiecaisse.component */ 52775);
/* harmony import */ var _components_transactionscaisse_transactionscaisse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/transactionscaisse/transactionscaisse.component */ 34461);
/* harmony import */ var _components_venterapidecaisse_venterapidecaisse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/venterapidecaisse/venterapidecaisse.component */ 48306);
/* harmony import */ var _components_accueilcaisse_accueilcaisse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accueilcaisse/accueilcaisse.component */ 76648);
/* harmony import */ var _components_compteclient_compteclient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/compteclient/compteclient.component */ 53490);
/* harmony import */ var _components_compteclient_components_connexionclient_connexionclient_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/compteclient/components/connexionclient/connexionclient.component */ 72874);
/* harmony import */ var _components_compteclient_components_bodycart_bodycart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/compteclient/components/bodycart/bodycart.component */ 60060);
/* harmony import */ var _components_ventescaisse_ventescaisse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ventescaisse/ventescaisse.component */ 16281);
/* harmony import */ var _components_ventescaisse_components_bodyventes_bodyventes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ventescaisse/components/bodyventes/bodyventes.component */ 98513);

















const routes = [
    {
        path: '',
        component: _caisse_page__WEBPACK_IMPORTED_MODULE_0__.CaissePage,
        children: [
            { path: 'accueil', component: _components_accueilcaisse_accueilcaisse_component__WEBPACK_IMPORTED_MODULE_8__.AccueilcaisseComponent, },
            {
                path: 'client',
                component: _components_compteclient_compteclient_component__WEBPACK_IMPORTED_MODULE_9__.CompteclientComponent,
                children: [
                    { path: 'connexion', component: _components_compteclient_components_connexionclient_connexionclient_component__WEBPACK_IMPORTED_MODULE_10__.ConnexionclientComponent },
                    { path: 'bodycart', component: _components_compteclient_components_bodycart_bodycart_component__WEBPACK_IMPORTED_MODULE_11__.BodycartComponent }
                ]
            },
            { path: 'commandeclient', component: _components_clientcommande_clientcommande_component__WEBPACK_IMPORTED_MODULE_1__.ClientcommandeComponent, },
            { path: 'entreecaisse', component: _components_entreecaisse_entreecaisse_component__WEBPACK_IMPORTED_MODULE_2__.EntreecaisseComponent, },
            { path: 'fermeturecaisse', component: _components_fermeturecaisse_fermeturecaisse_component__WEBPACK_IMPORTED_MODULE_3__.FermeturecaisseComponent, },
            { path: 'ouverturecaisse', component: _components_ouverturecaisse_ouverturecaisse_component__WEBPACK_IMPORTED_MODULE_4__.OuverturecaisseComponent, },
            { path: 'sortiecaisse', component: _components_sortiecaisse_sortiecaisse_component__WEBPACK_IMPORTED_MODULE_5__.SortiecaisseComponent, },
            { path: 'transactionscaisse', component: _components_transactionscaisse_transactionscaisse_component__WEBPACK_IMPORTED_MODULE_6__.TransactionscaisseComponent, },
            {
                path: 'ventecaisse',
                component: _components_ventescaisse_ventescaisse_component__WEBPACK_IMPORTED_MODULE_12__.VentescaisseComponent,
                children: [
                    { path: 'body', component: _components_ventescaisse_components_bodyventes_bodyventes_component__WEBPACK_IMPORTED_MODULE_13__.BodyventesComponent }
                ]
            },
            { path: 'ventecaisserapide', component: _components_venterapidecaisse_venterapidecaisse_component__WEBPACK_IMPORTED_MODULE_7__.VenterapidecaisseComponent, },
        ]
    }
];
let CaissePageRoutingModule = class CaissePageRoutingModule {
};
CaissePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
    })
], CaissePageRoutingModule);



/***/ }),

/***/ 80585:
/*!**********************************************************!*\
  !*** ./src/app/staff/components/caisse/caisse.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaissePageModule": () => (/* binding */ CaissePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _caisse_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caisse-routing.module */ 60388);
/* harmony import */ var _caisse_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caisse.page */ 60141);
/* harmony import */ var _components_accueilcaisse_accueilcaisse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accueilcaisse/accueilcaisse.component */ 76648);
/* harmony import */ var _components_clientcommande_clientcommande_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clientcommande/clientcommande.component */ 15981);
/* harmony import */ var _components_entreecaisse_entreecaisse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/entreecaisse/entreecaisse.component */ 48062);
/* harmony import */ var _components_fermeturecaisse_fermeturecaisse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fermeturecaisse/fermeturecaisse.component */ 54447);
/* harmony import */ var _components_ouverturecaisse_ouverturecaisse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ouverturecaisse/ouverturecaisse.component */ 10406);
/* harmony import */ var _components_sortiecaisse_sortiecaisse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sortiecaisse/sortiecaisse.component */ 52775);
/* harmony import */ var _components_transactionscaisse_transactionscaisse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transactionscaisse/transactionscaisse.component */ 34461);
/* harmony import */ var _components_ventecaisse_ventecaisse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ventecaisse/ventecaisse.component */ 25501);
/* harmony import */ var _components_fermeturecaisse_modal_rapportcaisse_rapportcaisse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/fermeturecaisse/modal/rapportcaisse/rapportcaisse.component */ 24096);
/* harmony import */ var _components_transactionscaisse_components_list_transaction_list_transaction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/transactionscaisse/components/list-transaction/list-transaction.component */ 32210);
/* harmony import */ var _components_ventecaisse_components_paniercaisse_paniercaisse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ventecaisse/components/paniercaisse/paniercaisse.component */ 81721);
/* harmony import */ var _components_ventecaisse_components_paniertemp_paniertemp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ventecaisse/components/paniertemp/paniertemp.component */ 74735);
/* harmony import */ var _components_ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ventecaisse/components/paiement-proccess/paiement-proccess.component */ 71734);
/* harmony import */ var _components_ventecaisse_components_generique_generique_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ventecaisse/components/generique/generique.component */ 45816);
/* harmony import */ var _components_clientcommande_components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/clientcommande/components/details-commande/details-commande.component */ 98820);
/* harmony import */ var _components_venterapidecaisse_venterapidecaisse_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/venterapidecaisse/venterapidecaisse.component */ 48306);
/* harmony import */ var _components_compteclient_compteclient_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/compteclient/compteclient.module */ 86782);
/* harmony import */ var _components_ventescaisse_ventescaisse_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ventescaisse/ventescaisse.module */ 35473);

























let CaissePageModule = class CaissePageModule {
};
CaissePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonicModule,
            _caisse_routing_module__WEBPACK_IMPORTED_MODULE_0__.CaissePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _components_compteclient_compteclient_module__WEBPACK_IMPORTED_MODULE_18__.CompteclientModule,
            _components_ventescaisse_ventescaisse_module__WEBPACK_IMPORTED_MODULE_19__.VentescaisseModule,
        ],
        declarations: [_caisse_page__WEBPACK_IMPORTED_MODULE_1__.CaissePage,
            _components_accueilcaisse_accueilcaisse_component__WEBPACK_IMPORTED_MODULE_2__.AccueilcaisseComponent, _components_clientcommande_clientcommande_component__WEBPACK_IMPORTED_MODULE_3__.ClientcommandeComponent, _components_entreecaisse_entreecaisse_component__WEBPACK_IMPORTED_MODULE_4__.EntreecaisseComponent,
            _components_fermeturecaisse_fermeturecaisse_component__WEBPACK_IMPORTED_MODULE_5__.FermeturecaisseComponent, _components_ouverturecaisse_ouverturecaisse_component__WEBPACK_IMPORTED_MODULE_6__.OuverturecaisseComponent, _components_sortiecaisse_sortiecaisse_component__WEBPACK_IMPORTED_MODULE_7__.SortiecaisseComponent, _components_transactionscaisse_transactionscaisse_component__WEBPACK_IMPORTED_MODULE_8__.TransactionscaisseComponent,
            _components_ventecaisse_ventecaisse_component__WEBPACK_IMPORTED_MODULE_9__.VentecaisseComponent, _components_fermeturecaisse_modal_rapportcaisse_rapportcaisse_component__WEBPACK_IMPORTED_MODULE_10__.RapportcaisseComponent, _components_transactionscaisse_components_list_transaction_list_transaction_component__WEBPACK_IMPORTED_MODULE_11__.ListTransactionComponent, _components_ventecaisse_components_paniercaisse_paniercaisse_component__WEBPACK_IMPORTED_MODULE_12__.PaniercaisseComponent,
            _components_ventecaisse_components_paniertemp_paniertemp_component__WEBPACK_IMPORTED_MODULE_13__.PaniertempComponent, _components_ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_14__.PaiementProccessComponent, _components_ventecaisse_components_generique_generique_component__WEBPACK_IMPORTED_MODULE_15__.GeneriqueComponent, _components_clientcommande_components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_16__.DetailsCommandeComponent, _components_venterapidecaisse_venterapidecaisse_component__WEBPACK_IMPORTED_MODULE_17__.VenterapidecaisseComponent
        ]
    })
], CaissePageModule);



/***/ }),

/***/ 60141:
/*!********************************************************!*\
  !*** ./src/app/staff/components/caisse/caisse.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaissePage": () => (/* binding */ CaissePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_caisse_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./caisse.page.html */ 40975);
/* harmony import */ var _caisse_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caisse.page.scss */ 14997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ServiceCaisse */ 18004);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ServiceDash */ 40798);







let CaissePage = class CaissePage {
    constructor(router, caisseService, dashService) {
        this.router = router;
        this.caisseService = caisseService;
        this.dashService = dashService;
    }
    ngOnInit() {
        if (this.dashService.etatVendeur.nbsessionouverte != 0 || this.caisseService.SessionActive != null) {
            this.navigateRoute("/menustaff/caisse/accueil");
        }
        else {
            this.navigateRoute("/menustaff/caisse/ouverturecaisse");
        }
    }
    navigateRoute(s) {
        this.router.navigateByUrl("/staff" + s);
    }
    goVenteRapide() {
        this.navigateRoute("/menustaff/caisse/ventecaisserapide");
    }
};
CaissePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__.ServiceCaisse },
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_3__.ServiceDash }
];
CaissePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-caisse',
        template: _raw_loader_caisse_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_caisse_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CaissePage);



/***/ }),

/***/ 76648:
/*!*********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/accueilcaisse/accueilcaisse.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilcaisseComponent": () => (/* binding */ AccueilcaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accueilcaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accueilcaisse.component.html */ 55558);
/* harmony import */ var _accueilcaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueilcaisse.component.scss */ 21753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let AccueilcaisseComponent = class AccueilcaisseComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateRoute(s) {
        this.router.navigateByUrl("/staff" + s);
    }
    goVenteRapide() {
        this.navigateRoute("/menustaff/caisse/ventecaisserapide");
    }
};
AccueilcaisseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AccueilcaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-accueilcaisse',
        template: _raw_loader_accueilcaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accueilcaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccueilcaisseComponent);



/***/ }),

/***/ 15981:
/*!***********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/clientcommande/clientcommande.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientcommandeComponent": () => (/* binding */ ClientcommandeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clientcommande_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clientcommande.component.html */ 93200);
/* harmony import */ var _clientcommande_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientcommande.component.scss */ 23595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceCommande */ 60197);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details-commande/details-commande.component */ 98820);










let ClientcommandeComponent = class ClientcommandeComponent {
    constructor(router, serviceCommande, mainService, authenService, modalController) {
        this.router = router;
        this.serviceCommande = serviceCommande;
        this.mainService = mainService;
        this.authenService = authenService;
        this.modalController = modalController;
        this.search = "";
        this.cmdRef = [];
    }
    ngOnInit() {
        this.mainService.spinner.show();
        this.serviceCommande.getListRefCommande(this.authenService.boutique.reference).subscribe(data => {
            console.log(data);
            this.serviceCommande.commandeRefList = data;
            this.cmdRef = data;
            if (this.cmdRef.length == 0) {
                this.authenService.toastMessage("Aucune commande trouvée.");
            }
            this.mainService.spinner.hide();
        }, error => {
            this.authenService.toastMessage("Une erreur inattendue s'est produite.");
            this.mainService.spinner.hide();
        });
    }
    FilterElement(ev) {
        if (ev != null) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.serviceCommande.commandeRefListFilter = this.serviceCommande.commandeRefList.filter((a) => {
                    return (a.referencecommande.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                this.cmdRef = this.serviceCommande.commandeRefListFilter;
            }
            else
                this.serviceCommande.commandeRefListFilter = [];
        }
        else {
            this.serviceCommande.commandeRefListFilter = [];
        }
    }
    goBack() {
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    selectCmd(ref) {
        this.cmdRef = this.serviceCommande.commandeRefListFilter.filter(c => c.referencecommande === ref);
        this.FilterElement(null);
        this.search = "";
    }
    selectItem(cmd) {
        this.mainService.spinner.show();
        this.serviceCommande.getCommandeByID(cmd.idcommande).subscribe(data => {
            console.log(data);
            this.serviceCommande.commandeDTOTemp = data;
        }, error => {
            this.authenService.toastMessage("Une erreur inattendue s'est produite.");
            this.mainService.spinner.hide();
        }, () => {
            this.mainService.spinner.hide();
            this.showDetails(this.serviceCommande.commandeDTOTemp);
        });
    }
    showDetails(cmd) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_5__.DetailsCommandeComponent,
            });
            return yield modal.present();
        });
    }
};
ClientcommandeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_2__.ServiceCommande },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
ClientcommandeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-clientcommande',
        template: _raw_loader_clientcommande_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clientcommande_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientcommandeComponent);



/***/ }),

/***/ 60060:
/*!***********************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/components/bodycart/bodycart.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodycartComponent": () => (/* binding */ BodycartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bodycart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bodycart.component.html */ 929);
/* harmony import */ var _bodycart_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodycart.component.scss */ 75081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServiceProduit */ 52773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ventecaisse_components_generique_generique_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ventecaisse/components/generique/generique.component */ 45816);
/* harmony import */ var _client_Service_CartService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../client/Service/CartService */ 51714);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _modalpanier_modalpanier_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modalpanier/modalpanier.component */ 41604);














let BodycartComponent = class BodycartComponent {
    constructor(serviceproduit, router, barcodeScanner, cartService, caisseService, mainService, authenService, modalController) {
        this.serviceproduit = serviceproduit;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.cartService = cartService;
        this.caisseService = caisseService;
        this.mainService = mainService;
        this.authenService = authenService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.initializeData();
        this.findProdByShop();
    }
    initializeData() {
        this.mainService.spinner.show();
        this.serviceproduit.getAllNomProduit(this.authenService.boutique.nomBoutique);
    }
    goBack() {
        this.authenService.user_vendeur = null;
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    findProdByShop() {
        this.mainService.spinner.show();
        this.serviceproduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(data => {
            this.mainService.spinner.hide();
            this.produits = data;
            this.produitsFilter = data;
        }, error => {
            this.mainService.spinner.hide();
            this.mainService.notificationService.showError(error.error.message);
        });
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.mainService.spinner.show();
            this.serviceproduit.getproductByBarcode(barcodeData.text).subscribe(data => {
                this.mainService.spinner.hide();
                this.addPanier(data);
                this.mainService.notificationService.showSuccess("Ajout avec succes");
            }, error => {
                this.mainService.spinner.hide();
                this.mainService.notificationService.showError(error.error.message);
            });
        }).catch(err => {
            console.log('Error', err);
        });
    }
    FilterElement(ev) {
        if (ev != null) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.produits = this.produitsFilter.filter((a) => {
                    return (a.nomProduit.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            else
                this.serviceproduit.nomProduitFilter = [];
        }
        else {
            this.serviceproduit.nomProduitFilter = [];
        }
    }
    addPanier(prod) {
        this.FilterElement(null);
        if (prod.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.generiqueModal(prod);
        }
        else {
            this.caisseService.ajouter_panierClient(prod, 1, "add");
        }
    }
    panier() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.authenService.user_vendeur.cart.cartItems.length > 0) {
                const modal = yield this.modalController.create({
                    component: _modalpanier_modalpanier_component__WEBPACK_IMPORTED_MODULE_9__.ModalpanierComponent,
                    cssClass: "paniermodal",
                    componentProps: {
                        'panier': this.authenService.user_vendeur.cart
                    }
                });
                return yield modal.present();
            }
            else {
                this.authenService.toastMessage("Aucun article ajouté.");
            }
        });
    }
    generiqueModal(produit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ventecaisse_components_generique_generique_component__WEBPACK_IMPORTED_MODULE_6__.GeneriqueComponent,
                componentProps: {
                    'generique': produit
                }
            });
            return yield modal.present();
        });
    }
};
BodycartComponent.ctorParameters = () => [
    { type: _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__.ServiceProduit },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner },
    { type: _client_Service_CartService__WEBPACK_IMPORTED_MODULE_7__.CartService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_8__.ServiceCaisse },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_5__.MainService },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
BodycartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-bodycart',
        template: _raw_loader_bodycart_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bodycart_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BodycartComponent);



/***/ }),

/***/ 72874:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/components/connexionclient/connexionclient.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnexionclientComponent": () => (/* binding */ ConnexionclientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_connexionclient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./connexionclient.component.html */ 58644);
/* harmony import */ var _connexionclient_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connexionclient.component.scss */ 35543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _Model_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../Model/Cart */ 80133);









let ConnexionclientComponent = class ConnexionclientComponent {
    constructor(router, authenService, panierService, serviceCaisse) {
        this.router = router;
        this.authenService = authenService;
        this.panierService = panierService;
        this.serviceCaisse = serviceCaisse;
        this.login = "";
        this.is_loading = false;
        this.is_loading2 = false;
        this.affiche = 1;
    }
    ngOnInit() {
        this.panierService.panierCaisse = new _Model_Cart__WEBPACK_IMPORTED_MODULE_5__.Cart();
    }
    goBack() {
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    onAction() {
        this.is_loading = true;
        if (this.login == "") {
            this.authenService.toastMessage("Le champ est obligatoire.");
            this.is_loading = false;
        }
        else {
            this.authenService.ConnectAccountInShop(this.login).subscribe(data => {
                this.authenService.user_vendeur = data;
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.is_loading = false;
            }, () => {
                this.is_loading = false;
                if (this.authenService.user_vendeur) {
                    if (!this.authenService.user_vendeur.client) {
                        this.authenService.toastMessage("Impossible de se connecter avec ce compte.");
                        this.authenService.user_vendeur = null;
                    }
                    else {
                        this.router.navigateByUrl("staff/menustaff/caisse/client/bodycart");
                    }
                }
            });
        }
    }
    annuler() {
        this.login = "";
        this.serviceCaisse.affiche = 1;
    }
    poursuivre() {
        this.is_loading2 = true;
        this.panierService.deletePanierClient(this.authenService.user_vendeur.cart.idcart).subscribe(data => {
            console.log(data);
            if (data) {
                this.serviceCaisse.affiche = 3;
            }
            else {
                this.authenService.toastMessage("Une erreure est survenue lors de la suppression.");
                this.annuler();
            }
        }, error => {
            this.authenService.toastMessage(error.error.message);
            this.is_loading = false;
        });
    }
};
ConnexionclientComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_3__.ServicePanier },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_4__.ServiceCaisse }
];
ConnexionclientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-connexionclient',
        template: _raw_loader_connexionclient_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_connexionclient_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConnexionclientComponent);



/***/ }),

/***/ 41604:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/components/modalpanier/modalpanier.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalpanierComponent": () => (/* binding */ ModalpanierComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modalpanier_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalpanier.component.html */ 25610);
/* harmony import */ var _modalpanier_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalpanier.component.scss */ 98260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServiceProduit */ 52773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ventecaisse/components/paiement-proccess/paiement-proccess.component */ 71734);










let ModalpanierComponent = class ModalpanierComponent {
    constructor(serviceproduit, router, alertCtrl, caisseService, navParam, authenService, modalController) {
        this.serviceproduit = serviceproduit;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.caisseService = caisseService;
        this.navParam = navParam;
        this.authenService = authenService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.cart = this.navParam.get("panier");
    }
    remove_qty(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (c.quantite == 1) {
                const alert = yield this.alertCtrl.create({
                    header: 'Supprimer',
                    message: 'êtes-vous sûr de vouloir Supprimer ' + c.description + ' ?',
                    buttons: [
                        {
                            text: 'OUI',
                            handler: () => this.caisseService.ajouter_panierClient(c.produit, 1, "delete")
                        },
                        {
                            text: 'NON'
                        }
                    ]
                });
                alert.present();
            }
            else {
                this.caisseService.ajouter_panierClient(c.produit, 1, "remove");
            }
        });
    }
    ajouter(c) {
        if (c.quantite < c.produit.quantiteEnStock) {
            this.caisseService.ajouter_panierClient(c.produit, 1, "add");
        }
        else {
            this.authenService.toastMessage("Le stock est fini");
        }
    }
    delete_round(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Supprimer',
                message: 'êtes-vous sûr de vouloir Supprimer?',
                buttons: [
                    {
                        text: 'OUI',
                        handler: () => this.caisseService.ajouter_panierClient(c.produit, c.quantite, "delete")
                    },
                    {
                        text: 'NON'
                    }
                ]
            });
            alert.present();
        });
    }
    clearPanier() {
        this.authenService.user_vendeur.cart.cartItems = [];
    }
    payer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cart.cartItems.length > 0) {
                const modal = yield this.modalController.create({
                    component: _ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_5__.PaiementProccessComponent,
                    componentProps: {
                        'panier': this.cart
                    }
                });
                return yield modal.present();
            }
            else {
                this.authenService.toastMessage("Aucun article ajouté.");
            }
        });
    }
    cancel() {
        this.modalController.dismiss();
    }
};
ModalpanierComponent.ctorParameters = () => [
    { type: _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__.ServiceProduit },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__.ServiceCaisse },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
ModalpanierComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-modalpanier',
        template: _raw_loader_modalpanier_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalpanier_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalpanierComponent);



/***/ }),

/***/ 53490:
/*!*******************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/compteclient.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompteclientComponent": () => (/* binding */ CompteclientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_compteclient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./compteclient.component.html */ 54994);
/* harmony import */ var _compteclient_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compteclient.component.scss */ 22548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CompteclientComponent = class CompteclientComponent {
    constructor() { }
    ngOnInit() { }
};
CompteclientComponent.ctorParameters = () => [];
CompteclientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-compteclient',
        template: _raw_loader_compteclient_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_compteclient_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompteclientComponent);



/***/ }),

/***/ 86782:
/*!****************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/compteclient.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompteclientModule": () => (/* binding */ CompteclientModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_connexionclient_connexionclient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/connexionclient/connexionclient.component */ 72874);
/* harmony import */ var _compteclient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compteclient.component */ 53490);
/* harmony import */ var _components_bodycart_bodycart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bodycart/bodycart.component */ 60060);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_modalpanier_modalpanier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modalpanier/modalpanier.component */ 41604);










let CompteclientModule = class CompteclientModule {
};
CompteclientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        ],
        declarations: [_components_connexionclient_connexionclient_component__WEBPACK_IMPORTED_MODULE_0__.ConnexionclientComponent, _compteclient_component__WEBPACK_IMPORTED_MODULE_1__.CompteclientComponent, _components_bodycart_bodycart_component__WEBPACK_IMPORTED_MODULE_2__.BodycartComponent, _components_modalpanier_modalpanier_component__WEBPACK_IMPORTED_MODULE_3__.ModalpanierComponent]
    })
], CompteclientModule);



/***/ }),

/***/ 48062:
/*!*******************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/entreecaisse/entreecaisse.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntreecaisseComponent": () => (/* binding */ EntreecaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_entreecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./entreecaisse.component.html */ 91346);
/* harmony import */ var _entreecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entreecaisse.component.scss */ 28967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/CaisseDTO */ 15081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let EntreecaisseComponent = class EntreecaisseComponent {
    constructor(authenService, caisseService, router) {
        this.authenService = authenService;
        this.caisseService = caisseService;
        this.router = router;
        this.montant = 0;
        this.commentaire = "";
        this.is_loading = false;
    }
    ngOnInit() {
    }
    onAction() {
        this.is_loading = true;
        console.log(this.montant + ' ++++----- ' + this.commentaire);
        if (this.montant < 0 || this.montant == null || this.commentaire == "") {
            this.authenService.toastMessage("Tous les champs doivent être correctement remplis.");
            this.is_loading = false;
        }
        else {
            let cDTO = new _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_4__.CaisseDTO();
            cDTO.action = "entree";
            cDTO.idcaissesession = this.caisseService.SessionActive.idcaissesession;
            cDTO.referenceuser = this.authenService.utilisateur.reference;
            cDTO.montanttransaction = this.montant;
            cDTO.commentaire = this.commentaire;
            this.caisseService.ManageCaisse(cDTO).subscribe(data => {
                console.log(data);
                this.caisseService.caisseDTOTemp = data;
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.is_loading = false;
            }, () => {
                this.caisseService.SessionActive.soldesession = this.caisseService.caisseDTOTemp.soldesession;
                this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
                this.caisseService.directsTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
                this.is_loading = false;
                this.authenService.toastMessage("Opération réussie!");
            });
        }
    }
    goBack() {
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
};
EntreecaisseComponent.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__.ServiceCaisse },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
EntreecaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-entreecaisse',
        template: _raw_loader_entreecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_entreecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EntreecaisseComponent);



/***/ }),

/***/ 54447:
/*!*************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/fermeturecaisse/fermeturecaisse.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FermeturecaisseComponent": () => (/* binding */ FermeturecaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_fermeturecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fermeturecaisse.component.html */ 43687);
/* harmony import */ var _fermeturecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fermeturecaisse.component.scss */ 85207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_rapportcaisse_rapportcaisse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/rapportcaisse/rapportcaisse.component */ 24096);
/* harmony import */ var _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/CaisseDTO */ 15081);











let FermeturecaisseComponent = class FermeturecaisseComponent {
    constructor(authenService, caisseService, router, mainService, modalController) {
        this.authenService = authenService;
        this.caisseService = caisseService;
        this.router = router;
        this.mainService = mainService;
        this.modalController = modalController;
        this.montant = 0;
        this.commentaire = "";
    }
    ngOnInit() { }
    goBack() {
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    onAction() {
        if (this.montant < 0 || this.montant == null || this.commentaire == "") {
            this.authenService.toastMessage("Tous les champs doivent être correctement remplis.");
        }
        else {
            this.fermeture_caisse();
        }
    }
    fermeture_caisse() {
        let caisseDto = new _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_6__.CaisseDTO();
        caisseDto.action = 'close';
        caisseDto.commentaire = this.commentaire;
        caisseDto.montanttransaction = this.montant;
        caisseDto.idcaissesession = this.caisseService.SessionActive.idcaissesession;
        caisseDto.referenceuser = this.authenService.utilisateur.reference;
        caisseDto.datefermeture = new Date();
        this.mainService.spinner.show();
        this.caisseService.getfermeturecaisse(caisseDto).subscribe(data => {
            this.mainService.spinner.hide();
            this.sessionFermer = data;
            console.log(data);
        }, error => {
            this.mainService.spinner.hide();
            this.authenService.toastMessage(error.error.message);
        }, () => {
            this.mainService.spinner.hide();
            this.getRapport();
        });
    }
    getEtatSession() {
        this.mainService.spinner.show();
        this.caisseService.getEtatSession(this.caisseService.SessionActive.idcaissesession, this.authenService.utilisateur.reference).subscribe(data => {
            console.log(data);
            this.caisseService.caisseDTOTemp = data;
        }, error => {
            this.authenService.toastMessage(error.error.message);
            this.mainService.spinner.hide();
        }, () => {
            this.mainService.spinner.hide();
            this.getRapport();
        });
    }
    getRapport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_rapportcaisse_rapportcaisse_component__WEBPACK_IMPORTED_MODULE_5__.RapportcaisseComponent,
                componentProps: {
                    'montant': this.montant,
                    'commentaire': this.commentaire,
                    'sessionFermer': this.sessionFermer
                }
            });
            return yield modal.present();
        });
    }
};
FermeturecaisseComponent.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__.ServiceCaisse },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
FermeturecaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fermeturecaisse',
        template: _raw_loader_fermeturecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fermeturecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FermeturecaisseComponent);



/***/ }),

/***/ 24096:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/fermeturecaisse/modal/rapportcaisse/rapportcaisse.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RapportcaisseComponent": () => (/* binding */ RapportcaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rapportcaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rapportcaisse.component.html */ 89606);
/* harmony import */ var _rapportcaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rapportcaisse.component.scss */ 94998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../models/CaisseDTO */ 15081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/services/MainService */ 35006);










let RapportcaisseComponent = class RapportcaisseComponent {
    constructor(authenService, caisseService, _navParamsService, mainService, _modalController, router) {
        this.authenService = authenService;
        this.caisseService = caisseService;
        this._navParamsService = _navParamsService;
        this.mainService = mainService;
        this._modalController = _modalController;
        this.router = router;
        this.montant = 0;
        this.commentaire = "";
    }
    ngOnInit() {
        this.datetime = new Date();
        this.montant = this._navParamsService.get('montant');
        this.commentaire = this._navParamsService.get('commentaire');
        this.sessionFermer = this._navParamsService.get('sessionFermer');
    }
    dismiss() {
        this._modalController.dismiss();
    }
    fermetureCaisse() {
        let cDTO = new _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_4__.CaisseDTO();
        cDTO.action = "close";
        cDTO.referenceuser = this.authenService.utilisateur.reference;
        cDTO.idcaissesession = this.caisseService.SessionActive.idcaissesession;
        cDTO.montanttransaction = this.montant;
        cDTO.commentaire = this.commentaire;
        this.mainService.spinner.show();
        this.caisseService.fermeturecaisse(this.sessionFermer.reference).subscribe(data => {
            this.sessionFermer = data;
        }, error => {
            this.authenService.toastMessage(error.error.message);
            this.mainService.spinner.hide();
        }, () => {
            this.mainService.spinner.hide();
            this.caisseService.SessionActive = null;
            this.caisseService.caisseTransactionsList = [];
            this.caisseService.directsTransactionsList = [];
            this.caisseService.ventesTransactionsList = [];
            this.caisseService.caisseTransactionsList.push(this.sessionFermer.caisseSession.caisse.caisseTransaction);
            this.authenService.toastMessage("Opération réussie!");
            this.dismiss();
            this.router.navigateByUrl("/staff/menustaff/caisse/ouverturecaisse");
        });
        /*this.caisseService.ManageCaisse(cDTO).subscribe(
          data=>{
            console.log(data)
            this.caisseService.caisseDTOTemp=data;
          },error => {
            this.authenService.toastMessage(error.error.message);
            this.mainService.spinner.hide()
          },
          ()=> {
            this.mainService.spinner.hide()
            this.caisseService.SessionActive=null;
            this.caisseService.caisseTransactionsList = []
            this.caisseService.directsTransactionsList = []
            this.caisseService.ventesTransactionsList = []
            this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
            this.authenService.toastMessage("Opération réussie!");
            this.dismiss();
            this.router.navigateByUrl("/staff/menustaff/caisse/ouverturecaisse")
          }
        );*/
    }
    print() {
    }
};
RapportcaisseComponent.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__.ServiceCaisse },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_5__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
RapportcaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-rapportcaisse',
        template: _raw_loader_rapportcaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rapportcaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RapportcaisseComponent);



/***/ }),

/***/ 10406:
/*!*************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ouverturecaisse/ouverturecaisse.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OuverturecaisseComponent": () => (/* binding */ OuverturecaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ouverturecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ouverturecaisse.component.html */ 95893);
/* harmony import */ var _ouverturecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ouverturecaisse.component.scss */ 61821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/CaisseDTO */ 15081);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let OuverturecaisseComponent = class OuverturecaisseComponent {
    constructor(authenService, caisseService, router) {
        this.authenService = authenService;
        this.caisseService = caisseService;
        this.router = router;
        this.montant = 0;
        this.commentaire = "";
        this.is_loading = false;
    }
    ngOnInit() { }
    onAction() {
        this.is_loading = true;
        console.log(this.montant + ' ++++----- ' + this.commentaire);
        if (this.montant < 0 || this.commentaire == "") {
            this.authenService.toastMessage("Tous les champs doivent être correctement remplis.");
            this.is_loading = false;
        }
        else {
            let cDTO = new _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_2__.CaisseDTO();
            cDTO.action = "open";
            cDTO.referenceuser = this.authenService.utilisateur.reference;
            cDTO.montantinitial = this.montant;
            cDTO.montanttransaction = this.montant;
            cDTO.commentaire = this.commentaire;
            this.caisseService.ManageCaisse(cDTO).subscribe(data => {
                console.log(data);
                this.caisseService.caisseDTOTemp = data;
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.is_loading = false;
            }, () => {
                this.caisseService.SessionActive = this.caisseService.caisseDTOTemp;
                this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
                this.is_loading = false;
                this.authenService.toastMessage("Ouverture de caisse réussie!");
                this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
            });
        }
    }
};
OuverturecaisseComponent.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_4__.ServiceCaisse },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
OuverturecaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ouverturecaisse',
        template: _raw_loader_ouverturecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ouverturecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OuverturecaisseComponent);



/***/ }),

/***/ 52775:
/*!*******************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/sortiecaisse/sortiecaisse.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortiecaisseComponent": () => (/* binding */ SortiecaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sortiecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sortiecaisse.component.html */ 82191);
/* harmony import */ var _sortiecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortiecaisse.component.scss */ 17256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/CaisseDTO */ 15081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let SortiecaisseComponent = class SortiecaisseComponent {
    constructor(authenService, caisseService, router) {
        this.authenService = authenService;
        this.caisseService = caisseService;
        this.router = router;
        this.montant = 0;
        this.commentaire = "";
        this.is_loading = false;
    }
    ngOnInit() {
    }
    onAction() {
        this.is_loading = true;
        console.log(this.montant + ' ++++----- ' + this.commentaire);
        if (this.montant < 0 || this.montant == null || this.commentaire == "") {
            this.authenService.toastMessage("Tous les champs doivent être correctement remplis.");
            this.is_loading = false;
        }
        else {
            let cDTO = new _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_4__.CaisseDTO();
            cDTO.action = "sortie";
            cDTO.referenceuser = this.authenService.utilisateur.reference;
            cDTO.idcaissesession = this.caisseService.SessionActive.idcaissesession;
            cDTO.montanttransaction = this.montant;
            cDTO.commentaire = this.commentaire;
            this.caisseService.ManageCaisse(cDTO).subscribe(data => {
                console.log(data);
                this.caisseService.caisseDTOTemp = data;
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.is_loading = false;
            }, () => {
                this.caisseService.SessionActive.soldesession = this.caisseService.caisseDTOTemp.soldesession;
                this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
                this.caisseService.directsTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
                this.is_loading = false;
                this.authenService.toastMessage("Opération réussie!");
            });
        }
    }
    goBack() {
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
};
SortiecaisseComponent.ctorParameters = () => [
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__.ServiceCaisse },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SortiecaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sortiecaisse',
        template: _raw_loader_sortiecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sortiecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SortiecaisseComponent);



/***/ }),

/***/ 32210:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/transactionscaisse/components/list-transaction/list-transaction.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListTransactionComponent": () => (/* binding */ ListTransactionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_list_transaction_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-transaction.component.html */ 18384);
/* harmony import */ var _list_transaction_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-transaction.component.scss */ 78114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _show_transaction_show_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show-transaction/show-transaction.component */ 26620);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServicePrinter */ 34962);







let ListTransactionComponent = class ListTransactionComponent {
    constructor(modalController, printer) {
        this.modalController = modalController;
        this.printer = printer;
        this.cashTransactions = [];
    }
    ngOnInit() { console.log(this.cashTransactions); }
    showDetail(t) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.printer.initializeTicketVenteAfter(t);
            const modal = yield this.modalController.create({
                component: _show_transaction_show_transaction_component__WEBPACK_IMPORTED_MODULE_2__.ShowTransactionComponent,
                componentProps: {
                    'transaction': t
                },
            });
            return yield modal.present();
        });
    }
};
ListTransactionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__.ServicePrinter }
];
ListTransactionComponent.propDecorators = {
    cashTransactions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ["transac",] }]
};
ListTransactionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-transaction',
        template: _raw_loader_list_transaction_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_transaction_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListTransactionComponent);



/***/ }),

/***/ 26620:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/transactionscaisse/components/show-transaction/show-transaction.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowTransactionComponent": () => (/* binding */ ShowTransactionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_transaction_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-transaction.component.html */ 8279);
/* harmony import */ var _show_transaction_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-transaction.component.scss */ 31559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServicePrinter */ 34962);







let ShowTransactionComponent = class ShowTransactionComponent {
    constructor(_navParamsService, _modalController, printer, authenService) {
        this._navParamsService = _navParamsService;
        this._modalController = _modalController;
        this.printer = printer;
        this.authenService = authenService;
    }
    ngOnInit() {
        this.transaction = this._navParamsService.get('transaction');
    }
    dismiss() {
        this._modalController.dismiss();
    }
    print() {
        this.printer.sendToBluetoothPrinter(this.printer.selectedPrinter, this.printer.printVente);
    }
};
ShowTransactionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__.ServicePrinter },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService }
];
ShowTransactionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-show-transaction',
        template: _raw_loader_show_transaction_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_transaction_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowTransactionComponent);



/***/ }),

/***/ 34461:
/*!*******************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/transactionscaisse/transactionscaisse.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionscaisseComponent": () => (/* binding */ TransactionscaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_transactionscaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./transactionscaisse.component.html */ 42455);
/* harmony import */ var _transactionscaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactionscaisse.component.scss */ 10141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);








let TransactionscaisseComponent = class TransactionscaisseComponent {
    constructor(router, mainService, caisseService, autheService) {
        this.router = router;
        this.mainService = mainService;
        this.caisseService = caisseService;
        this.autheService = autheService;
    }
    ngOnInit() {
        this.caisseService.ventesTransactionsList = [];
        this.caisseService.directsTransactionsList = [];
        this.mainService.spinner.show();
        this.caisseService.getAllTransactionBySessionAndUser(this.caisseService.SessionActive.idcaissesession).subscribe(data => {
            console.log(data);
            this.caisseService.caisseTransactionsList = data["content"];
        }, error => {
            this.autheService.toastMessage(error.error.message);
            this.mainService.spinner.hide();
        }, () => {
            this.mainService.spinner.hide();
            this.caisseService.caisseTransactionsList.forEach(ct => {
                if (ct.typetransaction == "Entree en caisse" || ct.typetransaction == "Sortie de caisse") {
                    this.caisseService.directsTransactionsList.push(ct);
                }
                else if (ct.typetransaction == "Vente en caisse") {
                    this.caisseService.ventesTransactionsList.push(ct);
                }
            });
            this.segmentModel = "tout";
        });
    }
    goBack() {
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    segmentChanged(e) {
        console.log('Segment changed', e.detail.value);
    }
};
TransactionscaisseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_2__.MainService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__.ServiceCaisse },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService }
];
TransactionscaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-transactionscaisse',
        template: _raw_loader_transactionscaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_transactionscaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TransactionscaisseComponent);



/***/ }),

/***/ 45816:
/*!************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/generique/generique.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneriqueComponent": () => (/* binding */ GeneriqueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_generique_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./generique.component.html */ 34140);
/* harmony import */ var _generique_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generique.component.scss */ 14857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _Model_CartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Model/CartItem */ 19950);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);








let GeneriqueComponent = class GeneriqueComponent {
    constructor(panierService, modalController, _navParamsService, authenService) {
        this.panierService = panierService;
        this.modalController = modalController;
        this._navParamsService = _navParamsService;
        this.authenService = authenService;
        this.placeholder = "";
        this.indication = "";
    }
    ngOnInit() {
        this.produit = this._navParamsService.get('generique');
    }
    dismiss() {
        this.modalController.dismiss();
    }
    addPanier() {
        if (this.indication == "" || this.prix <= 0 || this.qte <= 0) {
            this.authenService.toastMessage("Bien vouloir contrôler les données entrées.");
        }
        else {
            let cartItemTemp = new _Model_CartItem__WEBPACK_IMPORTED_MODULE_3__.CartItem();
            cartItemTemp.produit = this.produit;
            cartItemTemp.quantite = this.qte;
            cartItemTemp.description = this.indication;
            let mnt = Number(this.prix / this.qte).toFixed(0);
            cartItemTemp.prixunitaire = Number(mnt);
            cartItemTemp.montant = this.qte * this.prix;
            cartItemTemp.idproduit = this.produit.idProduit;
            cartItemTemp.nomproduit = this.produit.nomProduit;
            this.panierService.addItem(cartItemTemp);
            this.dismiss();
        }
    }
};
GeneriqueComponent.ctorParameters = () => [
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_4__.ServicePanier },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService }
];
GeneriqueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-generique',
        template: _raw_loader_generique_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_generique_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GeneriqueComponent);



/***/ }),

/***/ 79556:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paiement-proccess/modalconfirm/modalconfirm.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalconfirmComponent": () => (/* binding */ ModalconfirmComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modalconfirm_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalconfirm.component.html */ 16087);
/* harmony import */ var _modalconfirm_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalconfirm.component.scss */ 52214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/ServicePrinter */ 34962);







let ModalconfirmComponent = class ModalconfirmComponent {
    constructor(serviceCaisse, navParam, servicePrinter, modalController, printer) {
        this.serviceCaisse = serviceCaisse;
        this.navParam = navParam;
        this.servicePrinter = servicePrinter;
        this.modalController = modalController;
        this.printer = printer;
    }
    ngOnInit() {
        this.commande = this.navParam.get("payment");
    }
    getstatus(commande) {
        if (commande.payement.modepayement == "ORANGE MONEY") {
            window.open(commande.payement.url_to_connect, "_blank");
            this.commande.message = "Merci de cliquer sur le button pour continuer l'opération de paiment sur " + commande.modepayement;
        }
        else {
            this.serviceCaisse.get_status_vente(commande.referencecommande).subscribe(data => {
                if (data.commande.modepayement == "MTN MOBILE MONEY") {
                    if (data.commande.payement.statut == "FAILED") {
                        this.commande.message = "Votre solde est insufisant";
                    }
                    else if (data.commande.payement.statut == "PENDING") {
                        this.commande.message = "Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer";
                    }
                    else if (data.commande.payement.statut == "SUCCESSFUL") {
                        this.servicePrinter.initializeTicketVenteBefore(data.caisseTransaction);
                        this.modalController.dismiss();
                        this.commande.message = "Merci d'avoir confirmé le paiement nous vous remercions pour cela";
                    }
                }
            }, error => {
                this.commande.message = error.error.message;
            }, () => {
                this.printer.sendToBluetoothPrinter(this.printer.selectedPrinter, this.printer.printVente);
            });
        }
    }
    closepaiement() {
        this.modalController.dismiss();
    }
};
ModalconfirmComponent.ctorParameters = () => [
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__.ServiceCaisse },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__.ServicePrinter },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_3__.ServicePrinter }
];
ModalconfirmComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modalconfirm',
        template: _raw_loader_modalconfirm_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalconfirm_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalconfirmComponent);



/***/ }),

/***/ 71734:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paiement-proccess/paiement-proccess.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaiementProccessComponent": () => (/* binding */ PaiementProccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_paiement_proccess_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paiement-proccess.component.html */ 75379);
/* harmony import */ var _paiement_proccess_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paiement-proccess.component.scss */ 19021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServicePaiement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServicePaiement */ 79131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../models/CaisseDTO */ 15081);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/ServicePrinter */ 34962);
/* harmony import */ var _modalconfirm_modalconfirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modalconfirm/modalconfirm.component */ 79556);












let PaiementProccessComponent = class PaiementProccessComponent {
    constructor(paiementService, modalController, panierService, serviceCaisse, navParam, authenService, servicePrinter) {
        this.paiementService = paiementService;
        this.modalController = modalController;
        this.panierService = panierService;
        this.serviceCaisse = serviceCaisse;
        this.navParam = navParam;
        this.authenService = authenService;
        this.servicePrinter = servicePrinter;
        this.is_loading = false;
        this.operateurNom = '';
        this.commentaire = '';
    }
    ngOnInit() {
        this.cart = this.panierService.panierCaisse;
        this.serviceCaisse.getAlloperateur();
    }
    cancel() {
        this.modalController.dismiss();
    }
    select(s) {
        console.log(s);
        this.paiementService.affiche = s;
    }
    openpaiement(cT) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modalconfirm_modalconfirm_component__WEBPACK_IMPORTED_MODULE_8__.ModalconfirmComponent,
                cssClass: "modalpaymentconfirm",
                componentProps: {
                    'payment': cT
                }
            });
            return yield modal.present();
        });
    }
    onAction() {
        this.is_loading = true;
        let cDTO = new _models_CaisseDTO__WEBPACK_IMPORTED_MODULE_5__.CaisseDTO();
        cDTO.action = "vente";
        cDTO.idcaissesession = this.serviceCaisse.SessionActive.idcaissesession;
        cDTO.referenceuser = this.authenService.utilisateur.reference;
        cDTO.cartItems = this.cart.cartItems;
        cDTO.typepaiement = this.paiementService.affiche;
        cDTO.operateurnom = this.operateurNom;
        cDTO.commentaire = this.commentaire;
        cDTO.phone = this.paiementService.momo;
        this.serviceCaisse.ManageCaisse(cDTO).subscribe(data => {
            console.log(data);
            this.serviceCaisse.caisseDTOTemp = data;
        }, error => {
            this.authenService.toastMessage(error.error.message);
            this.is_loading = false;
        }, () => {
            this.is_loading = false;
            if (this.serviceCaisse.caisseDTOTemp.commande.modepayement == "MTN MOBILE MONEY") {
                if (this.serviceCaisse.caisseDTOTemp.commande.payement.statut == "FAILED") {
                    this.serviceCaisse.caisseDTOTemp.commande.message = "Votre solde est insufisant";
                }
                else if (this.serviceCaisse.caisseDTOTemp.commande.payement.statut == "PENDING") {
                    this.serviceCaisse.caisseDTOTemp.commande.message = "Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer";
                }
                else if (this.serviceCaisse.caisseDTOTemp.commande.payement.statut == "SUCCESSFUL") {
                    this.servicePrinter.initializeTicketVenteBefore(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
                    this.serviceCaisse.caisseDTOTemp.commande.message = "Merci d'avoir confirmé le paiement nous vous remercions pour cela";
                }
            }
            else if (this.serviceCaisse.caisseDTOTemp.commande.modepayement == "ORANGE MONEY") {
                if (this.serviceCaisse.caisseDTOTemp.commande.payement.url_to_connect) {
                    this.serviceCaisse.caisseDTOTemp.commande.message = "Merci de cliquer sur le button pour continuer l'opération de paiment sur " + this.serviceCaisse.caisseDTOTemp.commande.modepayement;
                }
            }
            if (this.serviceCaisse.caisseDTOTemp.commande.modepayement != "CASH") {
                this.openpaiement(this.serviceCaisse.caisseDTOTemp.commande);
            }
            else {
                this.servicePrinter.initializeTicketVenteBefore(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
            }
            this.serviceCaisse.SessionActive.soldesession = this.serviceCaisse.caisseDTOTemp.soldesession;
            this.serviceCaisse.caisseTransactionsList.push(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
            this.serviceCaisse.ventesTransactionsList.push(this.serviceCaisse.caisseDTOTemp.caisseTransaction);
            this.authenService.toastMessage("Vente effectuée avec succès.");
            this.panierService.clearPanierSansNotif();
            this.paiementService.affiche = "";
            this.paiementService.om = "";
            this.paiementService.momo = "";
            this.paiementService.codeOrange = "";
            this.cancel();
        });
    }
};
PaiementProccessComponent.ctorParameters = () => [
    { type: _services_ServicePaiement__WEBPACK_IMPORTED_MODULE_2__.ServicePaiement },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_3__.ServicePanier },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_4__.ServiceCaisse },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_6__.AuthenService },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_7__.ServicePrinter }
];
PaiementProccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-paiement-proccess',
        template: _raw_loader_paiement_proccess_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paiement_proccess_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaiementProccessComponent);



/***/ }),

/***/ 81721:
/*!******************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paniercaisse/paniercaisse.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaniercaisseComponent": () => (/* binding */ PaniercaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_paniercaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paniercaisse.component.html */ 57290);
/* harmony import */ var _paniercaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paniercaisse.component.scss */ 95105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);






let PaniercaisseComponent = class PaniercaisseComponent {
    constructor(panierService, authenService) {
        this.panierService = panierService;
        this.authenService = authenService;
    }
    ngOnInit() { }
    changePrix(pr) {
        this.panierService.panierCaisse.cartItems.forEach(c => {
            if (c.description == pr.description && c.produit == pr.produit) {
                c.prixunitaire = pr.prixunitaire;
                this.panierService.refreshPanier();
            }
        });
    }
    addQuantite(pr) {
        if (pr.produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.authenService.toastMessage("Impossible d'ajouter la quantité");
        }
        else {
            this.panierService.updateQuantite(pr.produit, 1);
        }
    }
    RemoveQuantie(pr) {
        if (pr.produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.authenService.toastMessage("Impossible de réduire la quantité");
        }
        else {
            this.panierService.updateQuantite(pr.produit, -1);
        }
    }
    DeleteItem(pr) {
        this.panierService.deleteItem(pr);
    }
};
PaniercaisseComponent.ctorParameters = () => [
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_2__.ServicePanier },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService }
];
PaniercaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-paniercaisse',
        template: _raw_loader_paniercaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paniercaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaniercaisseComponent);



/***/ }),

/***/ 74735:
/*!**************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paniertemp/paniertemp.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaniertempComponent": () => (/* binding */ PaniertempComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_paniertemp_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paniertemp.component.html */ 9287);
/* harmony import */ var _paniertemp_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paniertemp.component.scss */ 95886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _models_panierTemp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../models/panierTemp */ 93314);








let PaniertempComponent = class PaniertempComponent {
    constructor(modalController, servicePanier, authenService) {
        this.modalController = modalController;
        this.servicePanier = servicePanier;
        this.authenService = authenService;
        this.libelle = '';
    }
    ngOnInit() {
        if (this.servicePanier.panierCaisse.cartItems.length == 0) {
            this.testaffiche = 1;
        }
        else {
            this.testaffiche = 2;
        }
    }
    removeitem(v) {
        let i = this.servicePanier.panierTempList.findIndex(p => {
            return p.id == v.id;
        });
        if (i != -1) {
            this.servicePanier.panierTempList.splice(i, 1);
        }
    }
    selectItem(v) {
        console.log(v);
        console.log(this.servicePanier.panierTempList);
        let i = this.servicePanier.panierTempList.findIndex(p => {
            return p.id == v.id;
        });
        if (i != -1) {
            this.servicePanier.panierCaisse = v.panier;
            this.servicePanier.refreshPanier();
            this.removeitem(v);
            this.dismiss();
        }
        console.log(this.servicePanier.panierCaisse);
    }
    dismiss() {
        this.modalController.dismiss();
    }
    saveBrouillon() {
        console.log(this.servicePanier.panierCaisse);
        if (this.libelle == "") {
            this.authenService.toastMessage("Vous devez entrer une valeur");
        }
        else {
            let temp = new _models_panierTemp__WEBPACK_IMPORTED_MODULE_4__.PanierTemp();
            this.servicePanier.index += 1;
            temp.id = this.servicePanier.index;
            temp.libelle = this.libelle + " : " + this.servicePanier.index;
            this.servicePanier.panierCaisse.cartItems.forEach(a => {
                temp.panier.cartItems.push(a);
            });
            this.servicePanier.panierTempList.push(temp);
            this.servicePanier.clearPanierSansNotif();
            console.log(this.servicePanier.panierTempList);
            this.testaffiche = 1;
        }
    }
};
PaniertempComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_2__.ServicePanier },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService }
];
PaniertempComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-paniertemp',
        template: _raw_loader_paniertemp_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paniertemp_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaniertempComponent);



/***/ }),

/***/ 25501:
/*!*****************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/ventecaisse.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentecaisseComponent": () => (/* binding */ VentecaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ventecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ventecaisse.component.html */ 9157);
/* harmony import */ var _ventecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventecaisse.component.scss */ 48011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceProduit */ 52773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ServicePanier */ 62484);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _Model_CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Model/CartItem */ 19950);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/paiement-proccess/paiement-proccess.component */ 71734);
/* harmony import */ var _components_paniertemp_paniertemp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/paniertemp/paniertemp.component */ 74735);
/* harmony import */ var _components_generique_generique_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/generique/generique.component */ 45816);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);















let VentecaisseComponent = class VentecaisseComponent {
    constructor(serviceproduit, router, autheService, barcodeScanner, servicepanier, mainService, authenService, modalController) {
        this.serviceproduit = serviceproduit;
        this.router = router;
        this.autheService = autheService;
        this.barcodeScanner = barcodeScanner;
        this.servicepanier = servicepanier;
        this.mainService = mainService;
        this.authenService = authenService;
        this.modalController = modalController;
        this.search = "";
    }
    ngOnInit() {
        if (this.serviceproduit.produitList.length == 0 || this.serviceproduit.nomProduit.length == 0) {
            this.initializeData();
        }
    }
    initializeData() {
        this.mainService.spinner.show();
        this.serviceproduit.getAllNomProduit(this.autheService.boutique.nomBoutique);
    }
    goBack() {
        this.servicepanier.clearPanierSansNotif();
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    savePanierToBrouillon() {
        if (this.servicepanier.panierCaisse.cartItems.length > 0) {
            this.brouillonModal();
        }
        else {
            if (this.servicepanier.panierTempList.length == 0) {
                this.autheService.toastMessage("Aucun brouillon n'existe.");
            }
            else {
                this.brouillonModal();
            }
        }
    }
    brouillonModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_paniertemp_paniertemp_component__WEBPACK_IMPORTED_MODULE_8__.PaniertempComponent,
            });
            return yield modal.present();
        });
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.mainService.spinner.show();
            this.serviceproduit.getproductByBarcode(barcodeData.text).subscribe(data => {
                this.mainService.spinner.hide();
                this.addPanier(data.nomProduit);
                this.mainService.notificationService.showSuccess("Ajout avec succes");
            }, error => {
                this.mainService.spinner.hide();
                this.mainService.notificationService.showError(error.error.message);
            });
        }).catch(err => {
            console.log('Error', err);
        });
    }
    FilterElement(ev) {
        if (ev != null) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.serviceproduit.nomProduitFilter = this.serviceproduit.nomProduit.filter((a) => {
                    return (a.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            else
                this.serviceproduit.nomProduitFilter = [];
        }
        else {
            this.serviceproduit.nomProduitFilter = [];
        }
    }
    addPanier(prod) {
        console.log(prod);
        let produit = this.serviceproduit.searchProduitByNom(prod);
        this.FilterElement(null);
        this.search = "";
        if (produit) {
            if (prod.toLowerCase().indexOf("generique") > -1) {
                console.log("Generique");
                this.generiqueModal(produit);
            }
            else {
                if (produit.quantiteEnStock > 0 || !produit.manageStock) {
                    this.cartItemTemp = new _Model_CartItem__WEBPACK_IMPORTED_MODULE_6__.CartItem();
                    this.cartItemTemp.produit = produit;
                    this.cartItemTemp.quantite = 1;
                    this.cartItemTemp.description = produit.nomProduit;
                    this.cartItemTemp.prixunitaire = produit.prixProduit;
                    this.cartItemTemp.montant = this.cartItemTemp.quantite * this.cartItemTemp.prixunitaire;
                    this.cartItemTemp.idproduit = produit.idProduit;
                    this.cartItemTemp.nomproduit = produit.nomProduit;
                    this.servicepanier.addItem(this.cartItemTemp);
                    this.FilterElement(null);
                    this.search = "";
                }
                else {
                    this.autheService.toastMessage("Le stock du produit est insuffisant.");
                }
            }
        }
        else {
            this.autheService.toastMessage("Le produit n'existe pas.");
        }
    }
    payer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.servicepanier.panierCaisse.cartItems.length > 0) {
                const modal = yield this.modalController.create({
                    component: _components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_7__.PaiementProccessComponent,
                });
                return yield modal.present();
            }
            else {
                this.autheService.toastMessage("Aucun article ajouté.");
            }
        });
    }
    generiqueModal(produit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_generique_generique_component__WEBPACK_IMPORTED_MODULE_9__.GeneriqueComponent,
                componentProps: {
                    'generique': produit
                }
            });
            return yield modal.present();
        });
    }
    clearPanier() {
        this.servicepanier.clearPanier();
    }
};
VentecaisseComponent.ctorParameters = () => [
    { type: _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__.ServiceProduit },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_5__.AuthenService },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__.BarcodeScanner },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_3__.ServicePanier },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__.MainService },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_5__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController }
];
VentecaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-ventecaisse',
        template: _raw_loader_ventecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ventecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VentecaisseComponent);



/***/ }),

/***/ 48306:
/*!*****************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/venterapidecaisse/venterapidecaisse.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenterapidecaisseComponent": () => (/* binding */ VenterapidecaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_venterapidecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./venterapidecaisse.component.html */ 26586);
/* harmony import */ var _venterapidecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venterapidecaisse.component.scss */ 37881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/ServiceProduit */ 52773);
/* harmony import */ var _Model_CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Model/CartItem */ 19950);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/ServicePanier */ 62484);
/* harmony import */ var _Model_Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../Model/Cart */ 80133);
/* harmony import */ var _ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ventecaisse/components/paiement-proccess/paiement-proccess.component */ 71734);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/ServicePrinter */ 34962);















let VenterapidecaisseComponent = class VenterapidecaisseComponent {
    constructor(caisseService, mainService, authenService, serviceProduit, servicepanier, modalController, router, printService) {
        this.caisseService = caisseService;
        this.mainService = mainService;
        this.authenService = authenService;
        this.serviceProduit = serviceProduit;
        this.servicepanier = servicepanier;
        this.modalController = modalController;
        this.router = router;
        this.printService = printService;
        this.testMore = true;
        this.cartTemp = new _Model_Cart__WEBPACK_IMPORTED_MODULE_8__.Cart();
        this.prodList = [];
        this.search = "";
        this.slideopts = {
            initialSilde: 0,
            spaceBetween: 0,
            slidesPerView: 2.8,
            slidesOffsetBefore: 5
        };
    }
    ngOnInit() {
        this.testMore = true;
        /*if(this.serviceProduit.produitList.length==0){*/
        console.log('test');
        this.mainService.spinner.show();
        this.serviceProduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(data => {
            console.log(data);
            this.serviceProduit.produitPopulaire = data.filter(p => p.nomProduit != "Generique");
            this.prodList = this.serviceProduit.produitPopulaire;
            this.mainService.spinner.hide();
        }, error => {
            this.mainService.spinner.hide();
            this.authenService.toastMessage(error.error.message);
        });
        /*} else {
          this.serviceProduit.produitPopulaire = this.serviceProduit.produitList.filter(p=> p.populaire && p.nomProduit!="Generique");
          this.serviceProduit.produitNonPopulaire = this.serviceProduit.produitList.filter(p=> !p.populaire && p.nomProduit!="Generique");
        }*/
    }
    addPanier(prod) {
        let cartItem = new _Model_CartItem__WEBPACK_IMPORTED_MODULE_6__.CartItem();
        if (prod.manageStock) {
            if (prod.quantiteEnStock >= 1) {
                cartItem.produit = prod;
                cartItem.description = prod.nomProduit;
                cartItem.montant = prod.prixProduit;
                cartItem.quantite = 1;
                cartItem.prixunitaire = prod.prixProduit;
                cartItem.idproduit = prod.idProduit;
                cartItem.nomproduit = prod.nomProduit;
                this.addItem(cartItem);
            }
            else {
                this.authenService.toastMessage("Le stock du produit est insuffisant.");
            }
        }
        else {
            cartItem.produit = prod;
            cartItem.description = prod.nomProduit;
            cartItem.montant = prod.prixProduit;
            cartItem.quantite = 1;
            cartItem.prixunitaire = prod.prixProduit;
            cartItem.idproduit = prod.idProduit;
            cartItem.nomproduit = prod.nomProduit;
            this.addItem(cartItem);
        }
    }
    addItem(cI) {
        if (cI.produit.quantiteEnStock < 1 && cI.produit.manageStock && !(cI.produit.nomProduit.toLowerCase().indexOf("generique") > -1)) {
            this.authenService.toastMessage("La quantité en stock est insuffisante.");
        }
        else {
            let test = this.cartTemp.cartItems.find(c => { return c.description == cI.description && c.produit == cI.produit; });
            if (test) {
                //Mise à jour de l'élément
                this.cartTemp.cartItems.forEach(c => {
                    if (c.description == cI.description) {
                        c.quantite += 1;
                        c.montant = c.prixunitaire * c.quantite;
                        this.refreshPanier();
                    }
                });
            }
            else {
                //Ajout de l'élément
                this.cartTemp.cartItems.push(cI);
                this.refreshPanier();
            }
        }
        console.log(this.cartTemp);
    }
    changePrix(pr) {
        this.cartTemp.cartItems.forEach(c => {
            if (c.description == pr.description && c.produit == pr.produit) {
                c.prixunitaire = pr.prixunitaire;
                this.refreshPanier();
            }
        });
    }
    addQuantite(pr) {
        if (pr.produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.authenService.toastMessage("Impossible d'ajouter la quantité");
        }
        else {
            this.updateQuantite(pr.produit, 1);
        }
    }
    RemoveQuantie(pr) {
        if (pr.produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.authenService.toastMessage("Impossible de réduire la quantité");
        }
        else {
            this.updateQuantite(pr.produit, -1);
        }
    }
    DeleteItem(pr) {
        this.deleteItem(pr);
    }
    refreshPanier() {
        let prix = 0;
        this.cartTemp.cartItems.forEach(c => {
            c.montant = c.prixunitaire * c.quantite;
            prix += c.montant;
        });
        this.cartTemp.montanttotal = prix;
    }
    updateQuantite(prod, quantite) {
        let cI = this.cartTemp.cartItems.find(c => {
            return c.produit == prod && c.description == prod.nomProduit;
        });
        if (cI) {
            if (quantite == 1) {
                this.cartTemp.cartItems.forEach(c => {
                    if (c.description == cI.description) {
                        if (prod.quantiteEnStock <= c.quantite) {
                            this.authenService.toastMessage("Le stock de ce produit est insuffisant.");
                        }
                        else {
                            c.quantite += 1;
                            c.montant = c.quantite * c.prixunitaire;
                            this.refreshPanier();
                        }
                    }
                });
            }
            else if (quantite == -1) {
                this.cartTemp.cartItems.forEach(c => {
                    if (c.description == prod.nomProduit) {
                        if (c.quantite == 0) {
                            this.authenService.toastMessage("Impossible d'avoir une quantité négative");
                        }
                        else if (c.quantite == 1) {
                            this.deleteItem(c);
                        }
                        else if (c.quantite > 1) {
                            c.quantite -= 1;
                            c.montant = c.quantite * c.prixunitaire;
                            this.refreshPanier();
                        }
                    }
                });
            }
        }
    }
    deleteItem(cI) {
        let test = this.cartTemp.cartItems.findIndex(c => {
            return c.description == cI.description && c.produit == cI.produit;
        });
        if (test != -1) {
            this.cartTemp.cartItems.splice(test, 1);
            this.refreshPanier();
        }
        else {
            this.authenService.toastMessage("Le produit n'existe pas dans le panier.");
        }
    }
    clearPanier() {
        this.cartTemp.cartItems = [];
        this.refreshPanier();
        this.authenService.toastMessage("Suppression réussie");
    }
    payer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.servicepanier.panierCaisse = this.cartTemp;
            if (this.servicepanier.panierCaisse.cartItems.length > 0) {
                const modal = yield this.modalController.create({
                    component: _ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_9__.PaiementProccessComponent,
                });
                return yield modal.present();
            }
            else {
                this.authenService.toastMessage("Aucun produit ajouté.");
            }
        });
    }
    goBack() {
        this.servicepanier.clearPanierSansNotif();
        this.cartTemp.cartItems = [];
        this.refreshPanier();
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    getMore() {
        if (this.serviceProduit.produitList.length < 1) {
            if (this.serviceProduit.produitNonPopulaire.length < 1) {
                this.mainService.spinner.show();
                this.serviceProduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(data => {
                    console.log(data);
                    this.serviceProduit.produitNonPopulaire = data.filter(p => p.nomProduit != "Generique");
                    this.serviceProduit.produitNonPopulaire.forEach(p => {
                        this.prodList.push(p);
                    });
                    this.mainService.spinner.hide();
                    this.testMore = false;
                }, error => {
                    this.mainService.spinner.hide();
                    this.authenService.toastMessage(error.error.message);
                });
            }
            else {
                this.testMore = false;
            }
        }
        else {
            this.serviceProduit.produitNonPopulaire.forEach(p => {
                this.prodList.push(p);
            });
            this.testMore = false;
        }
    }
    FilterElement(ev) {
        if (ev != null) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.prodList = this.serviceProduit.produitPopulaire.filter((a) => {
                    return (a.nomProduit.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            else
                this.prodList = this.serviceProduit.produitPopulaire;
        }
        else {
            this.prodList = this.serviceProduit.produitPopulaire;
        }
    }
};
VenterapidecaisseComponent.ctorParameters = () => [
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_2__.ServiceCaisse },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService },
    { type: _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_5__.ServiceProduit },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_7__.ServicePanier },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_10__.ServicePrinter }
];
VenterapidecaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-venterapidecaisse',
        template: _raw_loader_venterapidecaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_venterapidecaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VenterapidecaisseComponent);



/***/ }),

/***/ 98513:
/*!***************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/components/bodyventes/bodyventes.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyventesComponent": () => (/* binding */ BodyventesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bodyventes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bodyventes.component.html */ 76802);
/* harmony import */ var _bodyventes_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodyventes.component.scss */ 27702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServiceProduit */ 52773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _client_Service_CartService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../client/Service/CartService */ 51714);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ventecaisse_components_generique_generique_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ventecaisse/components/generique/generique.component */ 45816);
/* harmony import */ var _Model_CartItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../Model/CartItem */ 19950);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);
/* harmony import */ var _modalpaniervente_modalpaniervente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modalpaniervente/modalpaniervente.component */ 49057);
















let BodyventesComponent = class BodyventesComponent {
    constructor(serviceproduit, router, barcodeScanner, cartService, servicepanier, caisseService, mainService, authenService, modalController) {
        this.serviceproduit = serviceproduit;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.cartService = cartService;
        this.servicepanier = servicepanier;
        this.caisseService = caisseService;
        this.mainService = mainService;
        this.authenService = authenService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.initializeData();
        this.findProdByShop();
    }
    initializeData() {
        this.mainService.spinner.show();
        this.serviceproduit.getAllNomProduit(this.authenService.boutique.nomBoutique);
    }
    goBack() {
        this.authenService.user_vendeur = null;
        this.router.navigateByUrl("/staff/menustaff/caisse/accueil");
    }
    findProdByShop() {
        this.mainService.spinner.show();
        this.serviceproduit.getAllProduit(this.authenService.boutique.nomBoutique).subscribe(data => {
            this.mainService.spinner.hide();
            this.produits = data;
            this.produitsFilter = data;
        }, error => {
            this.mainService.spinner.hide();
            this.mainService.notificationService.showError(error.error.message);
        });
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.mainService.spinner.show();
            this.serviceproduit.getproductByBarcode(barcodeData.text).subscribe(data => {
                this.mainService.spinner.hide();
                this.addPanier(data);
                this.mainService.notificationService.showSuccess("Ajout avec succes");
            }, error => {
                this.mainService.spinner.hide();
                this.mainService.notificationService.showError(error.error.message);
            });
        }).catch(err => {
            console.log('Error', err);
        });
    }
    FilterElement(ev) {
        if (ev != null) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.produits = this.produitsFilter.filter((a) => {
                    return (a.nomProduit.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            else
                this.produits = this.produitsFilter;
        }
        else {
            this.produits = this.produitsFilter;
        }
    }
    addPanier(produit) {
        this.FilterElement(null);
        if (produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.generiqueModal(produit);
        }
        else {
            if (produit.quantiteEnStock > 0 || !produit.manageStock) {
                this.cartItem = new _Model_CartItem__WEBPACK_IMPORTED_MODULE_9__.CartItem();
                this.cartItem.produit = produit;
                this.cartItem.quantite = 1;
                this.cartItem.description = produit.nomProduit;
                this.cartItem.prixunitaire = produit.prixProduit;
                this.cartItem.montant = this.cartItem.quantite * this.cartItem.prixunitaire;
                this.cartItem.idproduit = produit.idProduit;
                this.cartItem.nomproduit = produit.nomProduit;
                this.servicepanier.addItem(this.cartItem);
                this.FilterElement(null);
            }
            else {
                this.mainService.notificationService.showInfo("Le stock du produit est insuffisant.");
            }
        }
    }
    panier() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.servicepanier.panierCaisse.cartItems.length > 0) {
                const modal = yield this.modalController.create({
                    component: _modalpaniervente_modalpaniervente_component__WEBPACK_IMPORTED_MODULE_11__.ModalpanierventeComponent,
                    cssClass: "paniermodal",
                    componentProps: {
                        'panier': this.servicepanier.panierCaisse
                    }
                });
                return yield modal.present();
            }
            else {
                this.authenService.toastMessage("Aucun article ajouté.");
            }
        });
    }
    generiqueModal(produit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ventecaisse_components_generique_generique_component__WEBPACK_IMPORTED_MODULE_8__.GeneriqueComponent,
                componentProps: {
                    'generique': produit
                }
            });
            return yield modal.present();
        });
    }
};
BodyventesComponent.ctorParameters = () => [
    { type: _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__.ServiceProduit },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner },
    { type: _client_Service_CartService__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_10__.ServicePanier },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_5__.ServiceCaisse },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_6__.MainService },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_7__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController }
];
BodyventesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-bodyventes',
        template: _raw_loader_bodyventes_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bodyventes_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BodyventesComponent);



/***/ }),

/***/ 49057:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/components/modalpaniervente/modalpaniervente.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalpanierventeComponent": () => (/* binding */ ModalpanierventeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modalpaniervente_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalpaniervente.component.html */ 51233);
/* harmony import */ var _modalpaniervente_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalpaniervente.component.scss */ 1000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServiceProduit */ 52773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ventecaisse/components/paiement-proccess/paiement-proccess.component */ 71734);
/* harmony import */ var _services_ServicePanier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/ServicePanier */ 62484);











let ModalpanierventeComponent = class ModalpanierventeComponent {
    constructor(serviceproduit, router, alertCtrl, caisseService, navParam, panierService, authenService, modalController) {
        this.serviceproduit = serviceproduit;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.caisseService = caisseService;
        this.navParam = navParam;
        this.panierService = panierService;
        this.authenService = authenService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.cart = this.navParam.get("panier");
    }
    remove_qty(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (c.produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
                this.authenService.toastMessage("Impossible de réduire la quantité");
            }
            else {
                this.panierService.updateQuantite(c.produit, -1);
            }
        });
    }
    ajouter(c) {
        if (c.produit.nomProduit.toLowerCase().indexOf("generique") > -1) {
            this.authenService.toastMessage("Impossible d'ajouter la quantité");
        }
        else {
            this.panierService.updateQuantite(c.produit, 1);
        }
    }
    delete_round(c) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Supprimer',
                message: 'êtes-vous sûr de vouloir Supprimer?',
                buttons: [
                    {
                        text: 'OUI',
                        handler: () => this.panierService.deleteItem(c)
                    },
                    {
                        text: 'NON'
                    }
                ]
            });
            alert.present();
        });
    }
    clearPanier() {
        this.panierService.clearPanier();
        this.modalController.dismiss();
    }
    payer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cart.cartItems.length > 0) {
                const modal = yield this.modalController.create({
                    component: _ventecaisse_components_paiement_proccess_paiement_proccess_component__WEBPACK_IMPORTED_MODULE_5__.PaiementProccessComponent,
                    componentProps: {
                        'panier': this.cart
                    }
                });
                return yield modal.present();
            }
            else {
                this.authenService.toastMessage("Aucun article ajouté.");
            }
        });
    }
    cancel() {
        this.modalController.dismiss();
    }
};
ModalpanierventeComponent.ctorParameters = () => [
    { type: _services_ServiceProduit__WEBPACK_IMPORTED_MODULE_2__.ServiceProduit },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_3__.ServiceCaisse },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams },
    { type: _services_ServicePanier__WEBPACK_IMPORTED_MODULE_6__.ServicePanier },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
ModalpanierventeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-modalpaniervente',
        template: _raw_loader_modalpaniervente_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalpaniervente_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalpanierventeComponent);



/***/ }),

/***/ 9579:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/components/modalpaymentvente/modalpaymentvente.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalpaymentventeComponent": () => (/* binding */ ModalpaymentventeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modalpaymentvente_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalpaymentvente.component.html */ 6730);
/* harmony import */ var _modalpaymentvente_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalpaymentvente.component.scss */ 69874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ModalpaymentventeComponent = class ModalpaymentventeComponent {
    constructor() { }
    ngOnInit() { }
};
ModalpaymentventeComponent.ctorParameters = () => [];
ModalpaymentventeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modalpaymentvente',
        template: _raw_loader_modalpaymentvente_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalpaymentvente_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalpaymentventeComponent);



/***/ }),

/***/ 16281:
/*!*******************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/ventescaisse.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentescaisseComponent": () => (/* binding */ VentescaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ventescaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ventescaisse.component.html */ 26575);
/* harmony import */ var _ventescaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventescaisse.component.scss */ 13622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let VentescaisseComponent = class VentescaisseComponent {
    constructor() { }
    ngOnInit() { }
};
VentescaisseComponent.ctorParameters = () => [];
VentescaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ventescaisse',
        template: _raw_loader_ventescaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ventescaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VentescaisseComponent);



/***/ }),

/***/ 35473:
/*!****************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/ventescaisse.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentescaisseModule": () => (/* binding */ VentescaisseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_bodyventes_bodyventes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bodyventes/bodyventes.component */ 98513);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ventescaisse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventescaisse.component */ 16281);
/* harmony import */ var _components_modalpaymentvente_modalpaymentvente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modalpaymentvente/modalpaymentvente.component */ 9579);
/* harmony import */ var _components_modalpaniervente_modalpaniervente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modalpaniervente/modalpaniervente.component */ 49057);










let VentescaisseModule = class VentescaisseModule {
};
VentescaisseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        ], declarations: [
            _components_bodyventes_bodyventes_component__WEBPACK_IMPORTED_MODULE_0__.BodyventesComponent,
            _ventescaisse_component__WEBPACK_IMPORTED_MODULE_1__.VentescaisseComponent,
            _components_modalpaniervente_modalpaniervente_component__WEBPACK_IMPORTED_MODULE_3__.ModalpanierventeComponent,
            _components_modalpaymentvente_modalpaymentvente_component__WEBPACK_IMPORTED_MODULE_2__.ModalpaymentventeComponent
        ],
    })
], VentescaisseModule);



/***/ }),

/***/ 93314:
/*!********************************************!*\
  !*** ./src/app/staff/models/panierTemp.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanierTemp": () => (/* binding */ PanierTemp)
/* harmony export */ });
/* harmony import */ var _Model_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Model/Cart */ 80133);

class PanierTemp {
    constructor() {
        this.panier = new _Model_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart();
    }
}


/***/ }),

/***/ 14997:
/*!**********************************************************!*\
  !*** ./src/app/staff/components/caisse/caisse.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box {\n  padding: 30px 20px;\n}\n\n.box-part {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 25px 10px;\n  margin: 15px 10px;\n  cursor: pointer;\n}\n\n.text {\n  margin: 20px 0px;\n}\n\n.blue-icon-fa {\n  color: #4183D7;\n}\n\n.white-icon-fa {\n  color: #fff;\n}\n\n.box-part:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n\nh2 {\n  color: #fff;\n}\n\n.title h2 {\n  color: #0f5173;\n  font-weight: bold;\n}\n\nion-toolbar {\n  --background: #0f5173;\n}\n\nion-toolbar ion-buttons, ion-toolbar ion-title, ion-toolbar ion-label {\n  color: white;\n}\n\nion-label {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhaXNzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsMENBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7QUFHSjs7QUFDQTtFQUNFLGlCQUFBO0FBRUYiLCJmaWxlIjoiY2Fpc3NlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgcGFkZGluZzozMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5ib3gtcGFydHtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gIHBhZGRpbmc6MjVweCAxMHB4O1xyXG4gIG1hcmdpbjoxNXB4IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0e1xyXG4gIG1hcmdpbjoyMHB4IDBweDtcclxufVxyXG5cclxuLmJsdWUtaWNvbi1mYXtcclxuICBjb2xvcjojNDE4M0Q3O1xyXG59XHJcblxyXG4ud2hpdGUtaWNvbi1mYXtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5ib3gtcGFydDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiYSgzMywzMywzMywuMik7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogIzBmNTE3MztcclxuICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzBmNTE3MztcclxuICBpb24tYnV0dG9ucywgaW9uLXRpdGxlLCBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 21753:
/*!***********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/accueilcaisse/accueilcaisse.component.scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box {\n  padding: 30px 20px;\n}\n\n.box-part {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 25px 10px;\n  margin: 15px 10px;\n  cursor: pointer;\n}\n\n.text {\n  margin: 20px 0px;\n}\n\n.blue-icon-fa {\n  color: #4183D7;\n}\n\n.white-icon-fa {\n  color: #fff;\n}\n\n.box-part:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n\nh2 {\n  color: #fff;\n}\n\n.title h2 {\n  color: #0f5173;\n  font-weight: bold;\n}\n\nion-toolbar {\n  --background: #0f5173;\n}\n\nion-toolbar ion-buttons, ion-toolbar ion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWxjYWlzc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsMENBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7QUFHSiIsImZpbGUiOiJhY2N1ZWlsY2Fpc3NlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICBwYWRkaW5nOjMwcHggMjBweDtcclxufVxyXG5cclxuLmJveC1wYXJ0e1xyXG4gIGJhY2tncm91bmQ6I0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgcGFkZGluZzoyNXB4IDEwcHg7XHJcbiAgbWFyZ2luOjE1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRleHR7XHJcbiAgbWFyZ2luOjIwcHggMHB4O1xyXG59XHJcblxyXG4uYmx1ZS1pY29uLWZhe1xyXG4gIGNvbG9yOiM0MTgzRDc7XHJcbn1cclxuXHJcbi53aGl0ZS1pY29uLWZhe1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuLmJveC1wYXJ0OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLDMzLDMzLC4yKTtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjMGY1MTczO1xyXG4gICAgZm9udC13ZWlnaHQgOiBib2xkO1xyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMGY1MTczO1xyXG4gIGlvbi1idXR0b25zLCBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 23595:
/*!*************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/clientcommande/clientcommande.component.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: #f5f5f3;\n}\n\n.footer ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGNvbW1hbmRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFRTtFQUNFLFdBQUE7QUFDSiIsImZpbGUiOiJjbGllbnRjb21tYW5kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 75081:
/*!*************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/components/bodycart/bodycart.component.scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: #f5f5f3;\n}\n\n.footer ion-button {\n  width: 100%;\n}\n\n.nom_produt {\n  font-size: 10px;\n  text-align: center;\n}\n\nimg {\n  width: 109.333px;\n  height: 109.333px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHljYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImJvZHljYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4uZm9vdGVyIHtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4ubm9tX3Byb2R1dHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDEwOS4zMzNweDtcclxuICBoZWlnaHQ6IDEwOS4zMzNweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 35543:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/components/connexionclient/connexionclient.component.scss ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\nion-content .form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content .form div ion-icon {\n  font-size: 18px;\n}\nion-content .form ion-text {\n  font-size: 14px;\n}\nion-content .form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content .form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content .form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n.footer ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5leGlvbmNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFFSTtFQUNFLGVBQUE7QUFBTjtBQUdJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQkFBQTtBQUROO0FBR007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURSO0FBSUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBRk47QUFTRTtFQUNFLFdBQUE7QUFOSiIsImZpbGUiOiJjb25uZXhpb25jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcblxyXG4gIC5mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXZ7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OjBweDtcclxuXHJcbiAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuLmZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 98260:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/components/modalpanier/modalpanier.component.scss ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap\");\nion-item {\n  --background: #f5f5f3;\n}\n.footer ion-button {\n  width: 100%;\n}\nion-content {\n  font-family: \"Manrope\", sans-serif;\n  background: #eee;\n}\nion-content ion-card {\n  background: transparent;\n  box-shadow: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.size span {\n  font-size: 11px;\n}\n.color span {\n  font-size: 11px;\n}\n.product-deta {\n  margin-right: 70px;\n}\n.gift-card:focus {\n  box-shadow: none;\n}\n.pay-button {\n  color: #fff;\n}\n.pay-button:hover {\n  color: #fff;\n}\n.pay-button:focus {\n  color: #fff;\n  box-shadow: none;\n}\n.text-grey {\n  color: #a39f9f;\n}\n.qty i {\n  font-size: 11px;\n}\nion-icon {\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscGFuaWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNRLHFGQUFBO0FBVFI7RUFDRSxxQkFBQTtBQUVGO0FBQ0U7RUFDRSxXQUFBO0FBRUo7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERiIsImZpbGUiOiJtb2RhbHBhbmllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hbnJvcGU6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIGlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zaXplIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTFweFxyXG59XHJcblxyXG4uY29sb3Igc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGEge1xyXG4gIG1hcmdpbi1yaWdodDogNzBweFxyXG59XHJcblxyXG4uZ2lmdC1jYXJkOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbi5wYXktYnV0dG9uIHtcclxuICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ucGF5LWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnBheS1idXR0b246Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmVcclxufVxyXG5cclxuLnRleHQtZ3JleSB7XHJcbiAgY29sb3I6ICNhMzlmOWZcclxufVxyXG5cclxuLnF0eSBpIHtcclxuICBmb250LXNpemU6IDExcHhcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 22548:
/*!*********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/compteclient/compteclient.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wdGVjbGllbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 28967:
/*!*********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/entreecaisse/entreecaisse.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJlZWNhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUFOIiwiZmlsZSI6ImVudHJlZWNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgI2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDowcHg7XHJcblxyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 85207:
/*!***************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/fermeturecaisse/fermeturecaisse.component.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlcm1ldHVyZWNhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUFOIiwiZmlsZSI6ImZlcm1ldHVyZWNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgI2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDowcHg7XHJcblxyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 94998:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/fermeturecaisse/modal/rapportcaisse/rapportcaisse.component.scss ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  margin-top: 10px;\n  height: 35px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 100px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhcHBvcnRjYWlzc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0FBQ0YiLCJmaWxlIjoicmFwcG9ydGNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 61821:
/*!***************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ouverturecaisse/ouverturecaisse.component.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dmVydHVyZWNhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUFOIiwiZmlsZSI6Im91dmVydHVyZWNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgI2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDowcHg7XHJcblxyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 17256:
/*!*********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/sortiecaisse/sortiecaisse.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRpZWNhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUFOIiwiZmlsZSI6InNvcnRpZWNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgI2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDowcHg7XHJcblxyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 78114:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/transactionscaisse/components/list-transaction/list-transaction.component.scss ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list {\n  background-color: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6Imxpc3QtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 31559:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/transactionscaisse/components/show-transaction/show-transaction.component.scss ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 10141:
/*!*********************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/transactionscaisse/transactionscaisse.component.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uc2NhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoidHJhbnNhY3Rpb25zY2Fpc3NlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 14857:
/*!**************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/generique/generique.component.scss ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main {\n  margin-top: 1%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyaXF1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBR0YiLCJmaWxlIjoiZ2VuZXJpcXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbmlvbi1jYXJke1xyXG4gIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 52214:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paiement-proccess/modalconfirm/modalconfirm.component.scss ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGNvbmZpcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 19021:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paiement-proccess/paiement-proccess.component.scss ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaWVtZW50LXByb2NjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUNGIiwiZmlsZSI6InBhaWVtZW50LXByb2NjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 95105:
/*!********************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paniercaisse/paniercaisse.component.scss ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5pZXJjYWlzc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 95886:
/*!****************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/components/paniertemp/paniertemp.component.scss ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmllcnRlbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQ0YiLCJmaWxlIjoicGFuaWVydGVtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 48011:
/*!*******************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventecaisse/ventecaisse.component.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: #f5f5f3;\n}\n\n.footer ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRlY2Fpc3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFRTtFQUNFLFdBQUE7QUFDSiIsImZpbGUiOiJ2ZW50ZWNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 37881:
/*!*******************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/venterapidecaisse/venterapidecaisse.component.scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n\n.box {\n  align-content: center;\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 15px 5px;\n  margin: 10px 5px;\n  cursor: pointer;\n}\n\nion-item {\n  --background: #f5f5f3;\n}\n\n.itemheader {\n  transform: translate(0%, -15%);\n}\n\nion-footer ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRlcmFwaWRlY2Fpc3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFHRTtFQUNFLFdBQUE7QUFBSiIsImZpbGUiOiJ2ZW50ZXJhcGlkZWNhaXNzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3g6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsMzMsMzMsLjIpO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDojRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICBwYWRkaW5nOjE1cHggNXB4O1xyXG4gIG1hcmdpbjoxMHB4IDA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcblxyXG4uaXRlbWhlYWRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xNSUpO1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 27702:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/components/bodyventes/bodyventes.component.scss ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: #f5f5f3;\n}\n\n.footer ion-button {\n  width: 100%;\n}\n\n.nom_produt {\n  font-size: 10px;\n  text-align: center;\n}\n\nimg {\n  width: 109.333px;\n  height: 109.333px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHl2ZW50ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYm9keXZlbnRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLm5vbV9wcm9kdXR7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1ne1xyXG4gIHdpZHRoOiAxMDkuMzMzcHg7XHJcbiAgaGVpZ2h0OiAxMDkuMzMzcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1000:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/components/modalpaniervente/modalpaniervente.component.scss ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap\");\nion-item {\n  --background: #f5f5f3;\n}\n.footer ion-button {\n  width: 100%;\n}\nion-content {\n  font-family: \"Manrope\", sans-serif;\n  background: #eee;\n}\nion-content ion-card {\n  background: transparent;\n  box-shadow: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.size span {\n  font-size: 11px;\n}\n.color span {\n  font-size: 11px;\n}\n.product-deta {\n  margin-right: 70px;\n}\n.gift-card:focus {\n  box-shadow: none;\n}\n.pay-button {\n  color: #fff;\n}\n.pay-button:hover {\n  color: #fff;\n}\n.pay-button:focus {\n  color: #fff;\n  box-shadow: none;\n}\n.text-grey {\n  color: #a39f9f;\n}\n.qty i {\n  font-size: 11px;\n}\nion-icon {\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscGFuaWVydmVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1EscUZBQUE7QUFUUjtFQUNFLHFCQUFBO0FBRUY7QUFDRTtFQUNFLFdBQUE7QUFFSjtBQUlBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtBQURGO0FBRUU7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUFKO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGIiwiZmlsZSI6Im1vZGFscGFuaWVydmVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbi5mb290ZXIge1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYW5yb3BlOndnaHRAMjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2l6ZSBzcGFuIHtcclxuICBmb250LXNpemU6IDExcHhcclxufVxyXG5cclxuLmNvbG9yIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTFweFxyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHhcclxufVxyXG5cclxuLmdpZnQtY2FyZDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG4ucGF5LWJ1dHRvbiB7XHJcbiAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnBheS1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5wYXktYnV0dG9uOmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbi50ZXh0LWdyZXkge1xyXG4gIGNvbG9yOiAjYTM5ZjlmXHJcbn1cclxuXHJcbi5xdHkgaSB7XHJcbiAgZm9udC1zaXplOiAxMXB4XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 69874:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/components/modalpaymentvente/modalpaymentvente.component.scss ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHBheW1lbnR2ZW50ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 13622:
/*!*********************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/ventescaisse/ventescaisse.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50ZXNjYWlzc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 40975:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/caisse.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Gestion Caisse</ion-title>\r\n    <ion-label *ngIf=\"caisseService.SessionActive\" slot=\"end\">{{caisseService.SessionActive.soldesession}} FCFA</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-content>\r\n\r\n<ion-fab *ngIf=\"(this.dashService.etatVendeur.nbsessionouverte != 0 || this.caisseService.SessionActive != null)\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\r\n  <ion-fab-button (click)=\"goVenteRapide()\" title=\"Vente Rapide\" color=\"secondary\" mode=\"md\" type=\"button\">\r\n    <ion-icon name=\"flash\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n");

/***/ }),

/***/ 55558:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/accueilcaisse/accueilcaisse.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"box\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)=\"navigateRoute('/menustaff/caisse/entreecaisse')\">\r\n          <ion-icon name=\"enter-outline\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Entreé en Caisse</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)='navigateRoute(\"/menustaff/caisse/client/connexion\")'>\r\n          <ion-icon name=\"person\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Compte Client</h2>\r\n          </div>\r\n        </div>\r\n      </div>-->\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)='navigateRoute(\"/menustaff/caisse/sortiecaisse\")'>\r\n          <ion-icon name=\"exit-outline\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Sortie de Caisse</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)='navigateRoute(\"/menustaff/caisse/ventecaisse/body\")'>\r\n          <ion-icon name=\"cart-outline\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Vente en Caisse</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)='navigateRoute(\"/menustaff/caisse/transactionscaisse\")'>\r\n          <ion-icon name=\"clipboard-outline\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Transaction de Caisse</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)='navigateRoute(\"/menustaff/caisse/fermeturecaisse\")'>\r\n          <ion-icon name=\"close-circle-outline\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Fermeture de Caisse</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <!--<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"box-part text-center\" (click)='navigateRoute(\"/menustaff/caisse/commandeclient\")'>\r\n          <ion-icon name=\"book\" size=\"large\" color=\"secondary\"></ion-icon>\r\n          <div class=\"title\">\r\n            <h2>Commande Client</h2>\r\n          </div>\r\n        </div>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 93200:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/clientcommande/clientcommande.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-icon (click)=\"goBack()\" slot=\"start\" size=\"large\" color=\"primary\" name=\"arrow-undo-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <div>\r\n    <ion-searchbar (ionInput)=\"FilterElement($event)\" [(ngModel)]=\"search\" placeholder=\"Entrer une référence commande\" name =\"Entrer la référence\" ></ion-searchbar>\r\n    <ion-list style=\"padding: unset\">\r\n      <ion-item (click)=\"selectCmd(a.referencecommande)\" lines=\"none\" *ngFor=\"let a of serviceCommande.commandeRefListFilter\">{{a.referencecommande}}</ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"cmdRef.length>0\">\r\n    <ion-card *ngFor=\"let c of cmdRef\">\r\n      <ion-row class=\"justify-content-center\">\r\n        <ion-col>\r\n          <ion-label><strong>{{c.referencecommande}}</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"text-center\">\r\n          <ion-label color=\"secondary\">{{c.statut}}</ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"text-end\">\r\n          <ion-button size=\"small\" (click)=\"selectItem(c)\">\r\n            <ion-icon name=\"send\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 929:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/compteclient/components/bodycart/bodycart.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <div id=\"headerV\">\r\n    <ion-item lines=\"none\">\r\n      <ion-icon (click)=\"goBack()\" slot=\"start\" size=\"large\" color=\"primary\" name=\"arrow-undo-outline\"></ion-icon>\r\n      <ion-buttons (click)=\"scanCode()\" slot=\"end\" style=\"margin-right: 10%\">\r\n        <ion-icon color=\"success\" name=\"aperture\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"margin-top: 2px\"> Scan</ion-label>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-buttons slot=\"start\" style=\"margin-left: 20%\" (click)=\"panier()\">\r\n        <ion-icon color=\"secondary\" size=\"large\" name=\"cart-outline\"></ion-icon>\r\n        <ion-label color=\"primary\"><strong>{{authenService.user_vendeur.cart.cartItems.length}}</strong></ion-label>\r\n      </ion-buttons>\r\n      <ion-label slot=\"end\"><strong>{{authenService.user_vendeur.cart.montanttotal}}<sup>Fcfa</sup></strong></ion-label>\r\n    </ion-item>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <ion-searchbar (ionInput)=\"FilterElement($event)\" placeholder=\"Rechercher un produit\"></ion-searchbar>\r\n  </div>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"card\" size=\"4\" *ngFor=\"let p of produits\" (click)=\"addPanier(p)\">\r\n      <img [src]=\"p.image\" alt=\"\">\r\n          <ion-label class=\"nom_produt\">{{p.nomProduit}}</ion-label>\r\n          <ion-row>\r\n            <ion-col><ion-label class=\"nom_produt\">{{p.prixProduit}}<sup>Fcfa</sup></ion-label></ion-col>\r\n            <ion-col><ion-label class=\"nom_produt\">Qte: <span>{{p.quantiteEnStock}}</span></ion-label></ion-col>\r\n          </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 58644:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/compteclient/components/connexionclient/connexionclient.component.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid class=\"form\">\r\n\r\n    <ion-icon (click)=\"goBack()\" class=\"text-start\" size=\"large\" color=\"secondary\" name=\"arrow-undo-outline\"></ion-icon>\r\n    <div class=\"text-center\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/images/opensource.png\" style=\"height: 150px; width: 150px; margin-bottom: 5%\">\r\n    </div>\r\n    <h5 class=\"text-center\" style=\"color: #0f5173\"><strong>CONNEXION</strong></h5>\r\n        <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"login\" placeholder=\"Entrer le téléphone ou username\" type=\"text\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"person\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Valider\r\n      <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n    </ion-button>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"form\" *ngIf=\"serviceCaisse.affiche == 2\">\r\n    <ion-text class=\"ion-text-justify\">\r\n      <strong class=\"text-danger\">NB : </strong> Un ou plusieurs produits de votre panier n'appartienent pas à cette boutique.\r\n      Pour poursuivre il faudrait vider le panier. Êtes-vous d'accord ?\r\n    </ion-text>\r\n    <ion-item class=\"footer\" lines = \"none\">\r\n      <ion-button (click)=\"annuler()\" color=\"light\" expand=\"block\">Annuler</ion-button>\r\n      <ion-button expand=\"block\" [disabled]=\"is_loading2==true\" (click)=\"poursuivre()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n        Poursuivre\r\n        <div *ngIf=\"is_loading2\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 25610:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/compteclient/components/modalpanier/modalpanier.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\"> <strong>Panier</strong></ion-label>\r\n        <ion-icon (click)=\"cancel()\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div *ngFor=\"let i of cart.cartItems\" class=\"d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-2 rounded\">\r\n        <div class=\"mr-1\"><img class=\"rounded\" [src]=\"i.produit.image\" width=\"70\"></div>\r\n        <div class=\"d-flex flex-column align-items-center product-details\"><span class=\"font-weight-bold\">{{i.description}}</span>\r\n        </div>\r\n        <div class=\"d-flex flex-row align-items-center qty\"><ion-icon name=\"remove-outline\" color=\"danger\" (click)=\"remove_qty(i)\"></ion-icon>\r\n          <h5 class=\"text-grey mt-1 mr-1 ml-1\">{{i.quantite}}</h5><ion-icon name=\"add-outline\" color=\"success\"  (click)=\"ajouter(i)\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <h5 class=\"text-grey\">{{i.montant}}<sup>Fcfa</sup></h5>\r\n        </div>\r\n        <div class=\"d-flex align-items-center\" (click)=\"delete_round(i)\"><i class=\"fa fa-trash mb-1 text-danger\"></i></div>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-item class=\"footer\" lines=\"none\">\r\n    <ion-button (click)=\"clearPanier()\" color=\"secondary\" expand=\"block\">x Vider</ion-button>\r\n    <ion-button color=\"light\" expand=\"block\">{{cart.montanttotal}} FCFA</ion-button>\r\n    <ion-button (click)=\"payer()\" color=\"primary\" expand=\"block\">Payer ></ion-button>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 54994:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/compteclient/compteclient.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <router-outlet></router-outlet>\r\n</ion-content>\r\n");

/***/ }),

/***/ 91346:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/entreecaisse/entreecaisse.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-grid id=\"form\">\r\n      <ion-icon (click)=\"goBack()\" class=\"text-start\" size=\"large\" color=\"secondary\" name=\"arrow-undo-outline\"></ion-icon>\r\n      <h5 class=\"text-center\" style=\"color: #0f5173\"><strong>ENTREE EN CAISSE</strong></h5>\r\n\r\n    <div class=\"text-center\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/images/enter.png\" style=\"height: 150px; width: 150px; margin-bottom: 5%\">\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"montant\" placeholder=\"Montant d'ouverture\" type=\"number\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"cash-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"commentaire\" type=\"text\" placeholder=\"Commentaire\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"information-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Valider\r\n      <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n    </ion-button>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 43687:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/fermeturecaisse/fermeturecaisse.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-grid id=\"form\">\r\n      <ion-icon (click)=\"goBack()\" class=\"text-start\" size=\"large\" color=\"secondary\" name=\"arrow-undo-outline\"></ion-icon>\r\n      <h5 class=\"text-center\" style=\"color: #0f5173\"><strong>FERMETURE DE CAISSE</strong></h5>\r\n\r\n    <div class=\"text-center\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/images/opensource.png\" style=\"height: 150px; width: 150px; margin-bottom: 5%\">\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"montant\" placeholder=\"Montant d'ouverture\" type=\"number\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"cash-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"commentaire\" type=\"text\" placeholder=\"Commentaire\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"information-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Valider\r\n    </ion-button>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 89606:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/fermeturecaisse/modal/rapportcaisse/rapportcaisse.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div id=\"print-section\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"invoice-title text-center\">\r\n          <h2>RAPPORT DE SESSION</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 text-center\">\r\n        <address>\r\n          <strong>{{this.sessionFermer.caisseSession.shopuser.nomBoutique}} </strong><br>\r\n        </address>\r\n      </div>\r\n      <div class=\"col-md-4 text-center\">\r\n        <address>\r\n          <strong> Vendeur : {{ this.sessionFermer.caisseSession.shopuser.nomcomplet }} </strong><br>\r\n        </address>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title text-center\"><strong>Détails</strong></h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-condensed\">\r\n                <thead>\r\n                <tr>\r\n                  <td class=\"text-left\"><strong>Libelle</strong></td>\r\n                  <td class=\"text-center\"><strong>Montant</strong></td>\r\n                </tr>\r\n                </thead>\r\n                <tbody >\r\n                <!-- foreach ($order->lineItems as $line) or some such thing here -->\r\n                <tr>\r\n                  <td class=\"text-left\">Date ouverture</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.caisseSession.dateouverture || 'dd/MM/yyyy'}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Date fermeture</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.caisseSession.datefermeture || 'dd/MM/yyyy'}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Montant fermeture</td>\r\n                  <td class=\"text-center\">{{this.montant}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Montant Ouverture</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.caisseSession.montantinitial}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Montant Orange Money</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.om}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Montant Mobile Money</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.momo}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Cash</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.cash}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Montant des Entrées</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.entree}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Montant des Sorties</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.sortie}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Solde en Caisse</td>\r\n                  <td class=\"text-center\">{{this.sessionFermer.caisseSession.soldesession}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\">Difference</td>\r\n                  <td class=\"text-center\">{{(sessionFermer.caisseSession.soldesession) - this.montant}}</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button size=\"small\" color=\"primary\" expand=\"block\" (keydown.enter)= \"fermetureCaisse()\" (click)=\"fermetureCaisse()\">Valider</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button size=\"small\" color=\"danger\" expand=\"block\" (click)=\"dismiss()\">Annuler</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 95893:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ouverturecaisse/ouverturecaisse.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-grid id=\"form\">\r\n      <h5 class=\"text-center\" style=\"color: #0f5173\"><strong>OUVERTURE DE CAISSE</strong></h5>\r\n\r\n    <div class=\"text-center\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/images/opensource.png\" style=\"height: 150px; width: 150px; margin-bottom: 5%\">\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"montant\" placeholder=\"Montant d'ouverture\" type=\"number\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"cash-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"commentaire\" type=\"text\" placeholder=\"Commentaire\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"information-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Valider\r\n      <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n    </ion-button>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 82191:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/sortiecaisse/sortiecaisse.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-grid id=\"form\">\r\n      <ion-icon (click)=\"goBack()\" class=\"text-start\" size=\"large\" color=\"secondary\" name=\"arrow-undo-outline\"></ion-icon>\r\n      <h5 class=\"text-center\" style=\"color: #0f5173\"><strong>SORTIE DE CAISSE</strong></h5>\r\n\r\n    <div class=\"text-center\">\r\n      <img class=\"img-thumbnail\" src=\"./assets/images/result.png\" style=\"height: 150px; width: 150px; margin-bottom: 5%\">\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"montant\" placeholder=\"Montant d'ouverture\" type=\"number\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"cash-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [(ngModel)]=\"commentaire\" type=\"text\" placeholder=\"Commentaire\" required></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"information-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Valider\r\n      <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n    </ion-button>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 18384:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/transactionscaisse/components/list-transaction/list-transaction.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-row *ngFor=\"let t of cashTransactions\">\r\n        <ion-card class=\"card\" style=\"width: 100%\">\r\n          <ion-row>\r\n            <ion-col class=\"titre\">\r\n              <ion-label><strong>Type Transaction</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-label> {{t.typetransaction}} </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"titre\">\r\n              <ion-label><strong>Montant</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-label>{{t.montanttransaction}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"titre\">\r\n              <ion-label><strong>Date</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-label>{{t.datetransaction | date : 'dd-MMM-yy h:mm:ss a'}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item *ngIf=\"t.typetransaction ==='Vente en caisse'\" color=\"none\" lines=\"none\">\r\n            <ion-fab-button (click)=\"showDetail(t);\" slot=\"end\" size=\"small\" color=\"primary\">\r\n              <ion-icon size=\"small\" name=\"document-text-outline\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-row>\r\n    </ion-list>\r\n  </ion-content>\r\n\r\n");

/***/ }),

/***/ 8279:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/transactionscaisse/components/show-transaction/show-transaction.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item lines=\"none\">\r\n  <ion-icon (click)=\"dismiss()\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n</ion-item>\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-label style=\"margin-left: 5%; margin-bottom: 5px\" color=\"primary\"><strong>Detail de la transaction</strong></ion-label>\r\n        </ion-row>\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col class=\"ion-justify-content-center\">\r\n            <ion-label><strong>Boutique : </strong></ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-justify-content-center\">\r\n            <ion-label><strong>Vendeur : </strong></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col class=\"ion-justify-content-center\">\r\n            <ion-label>{{authenService.utilisateur.nomBoutique}}</ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-justify-content-center\">\r\n            <ion-label>{{authenService.utilisateur.username}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col class=\"titre\">\r\n            <ion-label><strong>Date transaction : </strong></ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-label>{{transaction.datetransaction | date:\"yyyy-MM-dd HH:mm\"}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"titre\">\r\n            <ion-label><strong>Type transaction : </strong></ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-label>Vente en caisse</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"titre\">\r\n            <ion-label><strong>Montant : </strong></ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-label>{{transaction.montanttransaction}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"titre\">\r\n            <ion-label><strong>Mode de paiement : </strong></ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-label>{{transaction.typepaiement}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"titre\">\r\n            <ion-label><strong>Commentaire : </strong></ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-label>{{transaction.commentaire}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div *ngIf=\"transaction.commande\">\r\n          <ion-row>\r\n            <ion-list-header style=\"padding: 0\" class=\"ion-justify-content-center\">\r\n              <ion-col>\r\n                <ion-label><strong>libelle</strong></ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-label><strong>Qte</strong></ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-label><strong>Montant</strong></ion-label>\r\n              </ion-col>\r\n            </ion-list-header>\r\n          </ion-row>\r\n          <ion-list *ngFor=\"let a of transaction.commande.cartItems\" class=\"ion-text-center\" style=\"padding: 0\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-label>{{a.description}}</ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-label>{{a.quantite}}</ion-label>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-label>{{a.prixunitaire}}</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label>Montant Total : </ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-right\">\r\n              <ion-label>{{transaction.commande.montantcommande}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <br>\r\n          <ion-item color=\"none\" lines=\"none\">\r\n            <ion-fab-button (click)=\"print();\" slot=\"end\" size=\"small\" color=\"secondary\">\r\n              <ion-icon size=\"large\" name=\"print\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-item>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 42455:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/transactionscaisse/transactionscaisse.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-icon (click)=\"goBack()\" class=\"text-start\" size=\"large\" color=\"secondary\" name=\"arrow-undo-outline\"></ion-icon>\r\n<h5 class=\"text-center\" style=\"color: #0f5173\"><strong>TRANSACTIONS DE CAISSE</strong></h5>\r\n\r\n<ion-segment scrollable\r\n             value=\"tout\"\r\n             mode=\"md\"\r\n             color=\"secondary\"\r\n             [(ngModel)]=\"segmentModel\"\r\n             (ionChange)=\"segmentChanged($event)\">\r\n  <ion-segment-button value=\"tout\" checked>\r\n    <ion-icon name=\"list\"></ion-icon>\r\n    <ion-label>Tout</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"ventes\">\r\n    <ion-icon name=\"wallet\"></ion-icon>\r\n    <ion-label>Ventes</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"directs\">\r\n    <ion-icon name=\"compass\"></ion-icon>\r\n    <ion-label>Directs</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content>\r\n\r\n    <app-list-transaction *ngIf=\"segmentModel=='tout'\" [transac]=\"caisseService.caisseTransactionsList\"></app-list-transaction>\r\n    <app-list-transaction *ngIf=\"segmentModel=='ventes'\" [transac]=\"caisseService.ventesTransactionsList\"></app-list-transaction>\r\n    <app-list-transaction *ngIf=\"segmentModel=='directs'\" [transac]=\"caisseService.directsTransactionsList\"></app-list-transaction>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 34140:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventecaisse/components/generique/generique.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <ion-item lines = \"none\">\r\n    <ion-icon (click)=\"dismiss()\" color=\"secondary\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-card>\r\n    <ion-card-title>\r\n      <h5 class=\"text-center\" style=\"color: #0f5173;margin-top: 2%\"><strong>Informations du produit</strong></h5>\r\n    </ion-card-title>\r\n    <ion-card-content>\r\n      <form>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col align-self-center size-md=\"6\" offset-md=\"3\" size-xs=\"12\" size-lg=\"5\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Description du produit : </ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"indication\"\r\n                  expand=\"block\"\r\n                  name=\"description\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Prix : </ion-label>\r\n                <ion-input\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"prix\"\r\n                  expand=\"block\"\r\n                  name=\"prix\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Quantité : </ion-label>\r\n                <ion-input\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"qte\"\r\n                  expand=\"block\"\r\n                  name=\"quantite\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                size=\"large\"\r\n                color=\"secondary\"\r\n                expand=\"block\"\r\n                type=\"submit\"\r\n                shape=\"round\"\r\n                (click)=\"addPanier()\"\r\n              >Save\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 16087:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventecaisse/components/paiement-proccess/modalconfirm/modalconfirm.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-header slot=\"end\">\r\n      <ion-icon  (click)=\"closepaiement()\" name=\"close-outline\"></ion-icon>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h5 class=\"card-title \"><b>{{commande.modepayement}}</b></h5>\r\n      <p class=\"card-text \">{{commande.message}}</p>\r\n    </ion-card-content>\r\n    <ion-card-subtitle class=\"text-center\">\r\n      <ion-button type=\"button\" (click)=\"getstatus(commande)\">Continuer</ion-button>\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 75379:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventecaisse/components/paiement-proccess/paiement-proccess.component.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\"> <strong>Choisir le mode de payement</strong></ion-label>\r\n        <ion-icon (click)=\"cancel()\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-justify-content-center\">\r\n      <ion-radio-group>\r\n        <ion-item>\r\n          <ion-label>CASH</ion-label>\r\n          <ion-radio (click)=\"select('CASH')\"></ion-radio>\r\n        </ion-item>\r\n        <!--<ion-item>\r\n          <ion-label>MTN MOBILE MONEY</ion-label>\r\n          <ion-radio (click)=\"select('MTN MOBILE MONEY')\"></ion-radio>\r\n        </ion-item>-->\r\n        <ion-item *ngIf=\"paiementService.affiche == 'MTN MOBILE MONEY'\">\r\n          <ion-label position=\"floating\">Entrer le numero : </ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            expand=\"block\"\r\n            [(ngModel)]=\"paiementService.momo\"\r\n            name=\"momo\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <!--<ion-item>\r\n          <ion-label>ORANGE MONEY</ion-label>\r\n          <ion-radio (click)=\"select('ORANGE MONEY')\"></ion-radio>\r\n        </ion-item>-->\r\n        <ng-container *ngIf=\"paiementService.affiche != ''\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Entrer le nom de la personne</ion-label>\r\n            <ion-input list=\"operateur\" type=\"text\" expand=\"block\" [(ngModel)]=\"operateurNom\"></ion-input>\r\n            <datalist id=\"operateur\">\r\n              <option *ngFor=\"let o of serviceCaisse.operateur\">{{ o }}</option>\r\n            </datalist>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Commentaire</ion-label>\r\n            <ion-input type=\"text\" expand=\"block\" [(ngModel)]=\"commentaire\"></ion-input>\r\n          </ion-item>\r\n        </ng-container>\r\n      </ion-radio-group>\r\n    </ion-card-content>\r\n    <ion-card-subtitle>\r\n      <ion-button expand=\"block\" [disabled]=\"is_loading==true || !paiementService.affiche\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n        Finaliser\r\n        <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n      </ion-button>\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n\r\n  <div style=\"margin-top: 5%; margin-left: 10%; margin-right: 10%\">\r\n    <ion-label color=\"primary\"><strong>Détails facture</strong></ion-label>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Montant total : </ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"text-end\">\r\n        <ion-label color=\"secondary\"><strong>{{cart.montanttotal}} XAF</strong></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 57290:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventecaisse/components/paniercaisse/paniercaisse.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content *ngIf=\"panierService.panierCaisse.cartItems.length>0\">\r\n  <ion-card *ngFor=\"let pr of panierService.panierCaisse.cartItems\">\r\n    <ion-card-content >\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-thumbnail>\r\n            <img [src]=\"pr.produit.image\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <ion-row>\r\n            <ion-label>\r\n              <h3><strong>{{pr.description}}</strong></h3>\r\n            </ion-label>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"ion-justify-content-center\">\r\n              prix :\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label>\r\n                <ion-input style=\"--background : #F2F2F2;\" type=\"text\" (keydown.enter)=\"changePrix(pr)\" [(ngModel)] = \"pr.prixunitaire\"></ion-input>\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-label>\r\n              <p class=\"text-center\">Total : <strong>{{pr.montant}}</strong></p>\r\n            </ion-label>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-icon size=\"large\" (click)=\"addQuantite(pr)\" name=\"chevron-up-outline\"></ion-icon>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-label color=\"danger\">{{pr.quantite}}</ion-label>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-icon size=\"large\" (click)=\"RemoveQuantie(pr)\" name=\"chevron-down-outline\"></ion-icon>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"ion-justify-content-center\" color=\"danger\" (click)=\"DeleteItem(pr)\" name=\"trash-outline\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9287:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventecaisse/components/paniertemp/paniertemp.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"main\" >\r\n\r\n  <div class=\"text-center\">\r\n    <ion-label><strong>Liste des brouillons</strong></ion-label>\r\n  </div>\r\n\r\n  <ion-card *ngIf=\"testaffiche==1\">\r\n    <ion-item *ngFor=\"let v of servicePanier.panierTempList\">\r\n      <ion-label>{{v.libelle}}</ion-label>\r\n      <ion-button size=\"small\" (click)=\"selectItem(v)\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button size=\"small\" (click)=\"removeitem(v)\">\r\n        <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"testaffiche==2\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Entrer un nom :</ion-label>\r\n      <ion-input type=\"text\" required [(ngModel)] = \"libelle\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button shape=\"round\" (click)=\"saveBrouillon()\" class=\"ion-margin-top text-secondary\" color=\"secondary\" type=\"submit\" expand=\"block\">\r\n      Valider\r\n    </ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"text-center\">\r\n  <ion-button shape=\"round\" expand=\"block\"  color=\"primary\" (click)=\"dismiss()\">Annuler</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 9157:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventecaisse/ventecaisse.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <div id=\"headerV\">\r\n    <ion-item lines=\"none\">\r\n      <ion-icon (click)=\"goBack()\" slot=\"start\" size=\"large\" color=\"primary\" name=\"arrow-undo-outline\"></ion-icon>\r\n      <ion-buttons (click)=\"savePanierToBrouillon()\" slot=\"end\" class=\"topright\" >\r\n        {{this.servicepanier.panierTempList.length}}\r\n        <ion-icon color=\"primary\" size=\"large\" name=\"card\"></ion-icon>\r\n        <ion-label> Brouillon</ion-label>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-buttons slot=\"start\" style=\"margin-left: 20%\">\r\n        <ion-icon color=\"secondary\" size=\"large\" name=\"cart-outline\"></ion-icon>\r\n        <ion-label color=\"primary\"><strong>{{servicepanier.panierCaisse.cartItems.length}}</strong></ion-label>\r\n      </ion-buttons>\r\n      <ion-buttons (click)=\"scanCode()\" slot=\"end\" style=\"margin-right: 30%\">\r\n        <ion-icon color=\"secondary\" name=\"aperture\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"margin-top: 2px\"> Scan</ion-label>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <ion-searchbar (ionInput)=\"FilterElement($event)\" [(ngModel)]=\"search\" placeholder=\"Rechercher un produit\" name =\"Entrer le nom du produit\" ></ion-searchbar>\r\n    <ion-list style=\"padding: unset\">\r\n      <ion-item (click)=\"addPanier(a)\" lines=\"none\" *ngFor=\"let a of serviceproduit.nomProduitFilter\">{{a}}</ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-header>\r\n<ion-content>\r\n<app-paniercaisse></app-paniercaisse>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-item class=\"footer\" lines = \"none\">\r\n    <ion-button (click)=\"clearPanier()\" color=\"secondary\" expand=\"block\">x Vider</ion-button>\r\n    <ion-button color=\"light\" expand=\"block\">{{servicepanier.panierCaisse.montanttotal}} FCFA</ion-button>\r\n    <ion-button (click)=\"payer()\" color=\"primary\" expand=\"block\">Payer ></ion-button>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 26586:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/venterapidecaisse/venterapidecaisse.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-item class=\"itemheader\" lines=\"none\">\r\n    <ion-icon (click)=\"goBack()\" slot=\"start\" size=\"large\" color=\"primary\" name=\"arrow-undo-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"testMore\" (click)=\"getMore()\" slot=\"end\" size=\"large\" color=\"primary\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n  </ion-item>\r\n  <div class=\"text-center\">\r\n    <img *ngIf=\"prodList.length<1\" class=\"text-center\" src=\"./assets/images/empty.png\" alt=\"empty\" style=\"width: 200px; height: 80px\">\r\n  </div>\r\n  <div>\r\n    <ion-searchbar (ionInput)=\"FilterElement($event)\" placeholder=\"Rechercher un produit\"></ion-searchbar>\r\n  </div>\r\n  <ion-slides [options]=\"slideopts\">\r\n    <ion-slide *ngFor=\"let p of prodList\">\r\n      <ion-card class=\"box\" (click)=\"addPanier(p)\">\r\n        <img [src]=\"p.image\" [alt]=\"p.nomProduit\" style=\"width: 200px; height: 80px\">\r\n        <hr>\r\n        <ion-card-subtitle>\r\n          <ion-label class=\"text-center\">{{p.nomProduit}}</ion-label><br>\r\n          <ion-label class=\"text-center text-danger\"><b>{{p.prixProduit}}</b></ion-label>\r\n        </ion-card-subtitle>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"cartTemp.cartItems.length>0\">\r\n    <ion-card *ngFor=\"let pr of cartTemp.cartItems\">\r\n      <ion-card-content >\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-thumbnail>\r\n              <img [src]=\"pr.produit.image\">\r\n            </ion-thumbnail>\r\n          </ion-col>\r\n          <ion-col size=\"7\">\r\n            <ion-row>\r\n              <ion-label color=\"primary\">\r\n                <h3><strong>{{pr.description}}</strong></h3>\r\n              </ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"3\" class=\"ion-justify-content-center\">\r\n                Prix :\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <ion-label>\r\n                  <ion-input style=\"--background : #F2F2F2;\" type=\"text\" (keydown.enter)=\"changePrix(pr)\" [(ngModel)] = \"pr.prixunitaire\"></ion-input>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                <ion-label>\r\n                  <p class=\"text-center\">Total : <strong class=\"text-danger\">{{pr.montant}}</strong></p>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-icon size=\"large\" (click)=\"addQuantite(pr)\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-row>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-label color=\"danger\">{{pr.quantite}}</ion-label>\r\n            </ion-row>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <ion-icon size=\"large\" (click)=\"RemoveQuantie(pr)\" name=\"chevron-down-outline\"></ion-icon>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-icon class=\"ion-justify-content-center\" color=\"danger\" (click)=\"DeleteItem(pr)\" name=\"trash-outline\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-item class=\"footer\" lines = \"none\">\r\n    <ion-button (click)=\"clearPanier()\" color=\"secondary\" expand=\"block\" *ngIf=\"cartTemp.cartItems.length>0\">x Vider</ion-button>\r\n    <ion-button color=\"light\" expand=\"block\">{{cartTemp.montanttotal}} FCFA</ion-button>\r\n    <ion-button (click)=\"payer()\" color=\"primary\" expand=\"block\">Payer ></ion-button>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 76802:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventescaisse/components/bodyventes/bodyventes.component.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <div id=\"headerV\">\r\n    <ion-item lines=\"none\">\r\n      <ion-icon (click)=\"goBack()\" slot=\"start\" size=\"large\" color=\"primary\" name=\"arrow-undo-outline\"></ion-icon>\r\n      <ion-buttons (click)=\"scanCode()\" slot=\"end\" style=\"margin-right: 10%\">\r\n        <ion-icon color=\"success\" name=\"aperture\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"margin-top: 2px\"> Scan</ion-label>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-buttons slot=\"start\" style=\"margin-left: 20%\" (click)=\"panier()\">\r\n        <ion-icon color=\"secondary\" size=\"large\" name=\"cart-outline\"></ion-icon>\r\n        <ion-label color=\"primary\"><strong>{{servicepanier.panierCaisse.cartItems.length}}</strong></ion-label>\r\n      </ion-buttons>\r\n      <ion-label slot=\"end\"><strong>{{servicepanier.panierCaisse.montanttotal}}<sup>Fcfa</sup></strong></ion-label>\r\n    </ion-item>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <ion-searchbar (ionInput)=\"FilterElement($event)\" placeholder=\"Rechercher un produit\"></ion-searchbar>\r\n  </div>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"card\" size=\"4\" *ngFor=\"let p of produits\" (click)=\"addPanier(p)\">\r\n      <img [src]=\"p.image\" alt=\"\">\r\n      <ion-label class=\"nom_produt\">{{p.nomProduit}}</ion-label>\r\n      <ion-row>\r\n        <ion-col><ion-label class=\"nom_produt\">{{p.prixProduit}}<sup>Fcfa</sup></ion-label></ion-col>\r\n        <ion-col><ion-label class=\"nom_produt\">Qte: <span>{{p.quantiteEnStock}}</span></ion-label></ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 51233:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventescaisse/components/modalpaniervente/modalpaniervente.component.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\"> <strong>Panier</strong></ion-label>\r\n        <ion-icon (click)=\"cancel()\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div *ngFor=\"let i of cart.cartItems\" class=\"d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-2 rounded\">\r\n        <div class=\"mr-1\"><img class=\"rounded\" [src]=\"i.produit.image\" width=\"70\"></div>\r\n        <div class=\"d-flex flex-column align-items-center product-details\"><span class=\"font-weight-bold\">{{i.description}}</span>\r\n        </div>\r\n        <div class=\"d-flex flex-row align-items-center qty\"><ion-icon name=\"remove-outline\" color=\"danger\" (click)=\"remove_qty(i)\"></ion-icon>\r\n          <h5 class=\"text-grey mt-1 mr-1 ml-1\">{{i.quantite}}</h5><ion-icon name=\"add-outline\" color=\"success\"  (click)=\"ajouter(i)\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <h5 class=\"text-grey\">{{i.montant}}<sup>Fcfa</sup></h5>\r\n        </div>\r\n        <div class=\"d-flex align-items-center\" (click)=\"delete_round(i)\"><i class=\"fa fa-trash mb-1 text-danger\"></i></div>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-item class=\"footer\" lines=\"none\">\r\n    <ion-button (click)=\"clearPanier()\" color=\"secondary\" expand=\"block\">x Vider</ion-button>\r\n    <ion-button color=\"light\" expand=\"block\">{{cart.montanttotal}} FCFA</ion-button>\r\n    <ion-button (click)=\"payer()\" color=\"primary\" expand=\"block\">Payer ></ion-button>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 6730:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventescaisse/components/modalpaymentvente/modalpaymentvente.component.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\r\n  modalpaymentvente works!\r\n</p>\r\n");

/***/ }),

/***/ 26575:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/ventescaisse/ventescaisse.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n  <ion-router-outlet></ion-router-outlet>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_staff_components_caisse_caisse_module_ts.js.map