(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_staff_components_dashboard_dashboard_module_ts"],{

/***/ 70111:
/*!******************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/accueildashboard/accueildashboard.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueildashboardComponent": () => (/* binding */ AccueildashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accueildashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accueildashboard.component.html */ 57474);
/* harmony import */ var _accueildashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueildashboard.component.scss */ 44674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);





let AccueildashboardComponent = class AccueildashboardComponent {
    constructor(serviceDash) {
        this.serviceDash = serviceDash;
    }
    ngOnInit() {
        console.log(this.serviceDash.menu_1);
        console.log(this.serviceDash.menu_2);
        this.segmentModel = this.serviceDash.menu_1;
        console.log(this.segmentModel);
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev.detail.value);
        if (ev.detail.value == "alerte" || this.segmentModel == "alerte") {
            this.serviceDash.testSegmentCaisse = false;
        }
        else if (ev.detail.value == "ventes" || this.segmentModel == "ventes") {
            this.serviceDash.testSegmentCaisse = false;
        }
        else if (ev.detail.value == "sessions" || this.segmentModel == "sessions") {
            this.serviceDash.testSegmentCaisse = true;
            this.serviceDash.segmentCaisse = "ouverte";
        }
    }
};
AccueildashboardComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash }
];
AccueildashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-accueildashboard',
        template: _raw_loader_accueildashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accueildashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccueildashboardComponent);



/***/ }),

/***/ 85394:
/*!******************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/alertstock/alertstock.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertstockComponent": () => (/* binding */ AlertstockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alertstock_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alertstock.component.html */ 80644);
/* harmony import */ var _alertstock_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alertstock.component.scss */ 88319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _models_StockAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/StockAlert */ 96039);








let AlertstockComponent = class AlertstockComponent {
    constructor(serviceDash, authenService, mainService) {
        this.serviceDash = serviceDash;
        this.authenService = authenService;
        this.mainService = mainService;
    }
    ngOnInit() {
        this.serviceDash.testFilter = 0;
        this.serviceDash.testSegmentCaisse = false;
        this.mainService.spinner.show();
        let stockA = new _models_StockAlert__WEBPACK_IMPORTED_MODULE_5__.StockAlert();
        stockA.referenceuser = this.authenService.utilisateur.reference;
        stockA.referenceboutique = this.authenService.boutique.reference;
        console.log(stockA);
        this.serviceDash.checkAlertStockInShop(stockA).subscribe(data => {
            console.log(data);
            this.serviceDash.stockAlertList = data;
            this.mainService.spinner.hide();
        }, error => {
            this.mainService.spinner.hide();
            this.authenService.toastMessage(error.error.message);
        });
    }
};
AlertstockComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__.MainService }
];
AlertstockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-alertstock',
        template: _raw_loader_alertstock_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alertstock_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertstockComponent);



/***/ }),

/***/ 54080:
/*!**************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/sessioncaisse/session-ferme/session-ferme.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionFermeComponent": () => (/* binding */ SessionFermeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_session_ferme_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-ferme.component.html */ 51499);
/* harmony import */ var _session_ferme_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-ferme.component.scss */ 41716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _models_SessionFermee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/SessionFermee */ 81943);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modals_rapport_fermeture_rapport_fermeture_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modals/rapport-fermeture/rapport-fermeture.component */ 29331);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/ServiceCaisse */ 18004);











let SessionFermeComponent = class SessionFermeComponent {
    constructor(serviceDash, authenService, caisseService, mainService, modalController) {
        this.serviceDash = serviceDash;
        this.authenService = authenService;
        this.caisseService = caisseService;
        this.mainService = mainService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.serviceDash.testFilter = 2;
        this.mainService.spinner.show();
        let sessionF = new _models_SessionFermee__WEBPACK_IMPORTED_MODULE_5__.SessionFermee();
        sessionF.referenceuser = this.authenService.utilisateur.reference;
        sessionF.referenceboutique = this.authenService.boutique.reference;
        this.serviceDash.checkSessionFermeeInShop(sessionF).subscribe(data => {
            console.log(data);
            this.serviceDash.sessionFermeeList = data;
            this.mainService.spinner.hide();
        }, error => {
            this.mainService.spinner.hide();
            this.authenService.toastMessage(error.error.message);
        }, () => {
            this.serviceDash.sessionFermeeList.nomvendeurs = [...new Set(this.serviceDash.sessionFermeeList.nomvendeurs)];
        });
    }
    finByidcaissesession(idsession) {
        this.mainService.spinner.show();
        this.caisseService.finByidcaissesession(idsession).subscribe(data => {
            this.mainService.spinner.hide();
            this.openRapport(data);
        }, error => {
            this.mainService.notificationService.showError(error.error.message);
            this.mainService.spinner.hide();
        });
    }
    openRapport(cT) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_rapport_fermeture_rapport_fermeture_component__WEBPACK_IMPORTED_MODULE_6__.RapportFermetureComponent,
                componentProps: {
                    'session': cT
                }
            });
            return yield modal.present();
        });
    }
};
SessionFermeComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_7__.ServiceCaisse },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
SessionFermeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-session-ferme',
        template: _raw_loader_session_ferme_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_ferme_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionFermeComponent);



/***/ }),

/***/ 13647:
/*!****************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/sessioncaisse/session-ouvert/session-ouvert.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionOuvertComponent": () => (/* binding */ SessionOuvertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_session_ouvert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-ouvert.component.html */ 64817);
/* harmony import */ var _session_ouvert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-ouvert.component.scss */ 58711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ServiceDash */ 40798);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _models_SessionOuverte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/SessionOuverte */ 30337);








let SessionOuvertComponent = class SessionOuvertComponent {
    constructor(serviceDash, mainservice, authenservice) {
        this.serviceDash = serviceDash;
        this.mainservice = mainservice;
        this.authenservice = authenservice;
    }
    ngOnInit() {
        this.serviceDash.testFilter = 1;
        this.mainservice.spinner.show();
        let sessionO = new _models_SessionOuverte__WEBPACK_IMPORTED_MODULE_5__.SessionOuverte();
        sessionO.referenceuser = this.authenservice.utilisateur.reference;
        sessionO.referenceboutique = this.authenservice.boutique.reference;
        console.log(sessionO);
        this.serviceDash.checkSessionOuverteInShop(sessionO).subscribe(data => {
            console.log(data);
            this.serviceDash.sessionOuverteList = data;
            this.mainservice.spinner.hide();
        }, error => {
            this.mainservice.spinner.hide();
            this.authenservice.toastMessage(error.error.message);
        }, () => {
            this.serviceDash.sessionOuverteList.nomusers = [...new Set(this.serviceDash.sessionOuverteList.nomusers)];
            this.serviceDash.sessionOuverteList.modepaiements = [...new Set(this.serviceDash.sessionOuverteList.modepaiements)];
        });
    }
};
SessionOuvertComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService }
];
SessionOuvertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-session-ouvert',
        template: _raw_loader_session_ouvert_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_ouvert_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionOuvertComponent);



/***/ }),

/***/ 53108:
/*!************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/sessioncaisse/sessioncaisse.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessioncaisseComponent": () => (/* binding */ SessioncaisseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sessioncaisse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sessioncaisse.component.html */ 91208);
/* harmony import */ var _sessioncaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessioncaisse.component.scss */ 35080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);





let SessioncaisseComponent = class SessioncaisseComponent {
    constructor(serviceDash) {
        this.serviceDash = serviceDash;
    }
    ngOnInit() {
        this.serviceDash.testSegmentCaisse = true;
    }
};
SessioncaisseComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash }
];
SessioncaisseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sessioncaisse',
        template: _raw_loader_sessioncaisse_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sessioncaisse_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessioncaisseComponent);



/***/ }),

/***/ 38578:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/component/commandeencours/commandeencours.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandeencoursComponent": () => (/* binding */ CommandeencoursComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_commandeencours_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./commandeencours.component.html */ 73434);
/* harmony import */ var _commandeencours_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commandeencours.component.scss */ 16644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _caisse_components_clientcommande_components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../caisse/components/clientcommande/components/details-commande/details-commande.component */ 98820);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/ServiceCommande */ 60197);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);










let CommandeencoursComponent = class CommandeencoursComponent {
    constructor(serviceDash, authenService, serviceCommande, mainService, modalController) {
        this.serviceDash = serviceDash;
        this.authenService = authenService;
        this.serviceCommande = serviceCommande;
        this.mainService = mainService;
        this.modalController = modalController;
        this.cmdRef = [];
        this.search = '';
    }
    ngOnInit() {
        this.cmdRef = this.serviceDash.commandeDTOListFilter;
    }
    FilterElement(ev) {
        if (ev != null) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.serviceDash.commandeDTOListFilter = this.serviceDash.commandeDTOListFilter.filter((a) => {
                    return (a.referencecommande.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                this.cmdRef = this.serviceDash.commandeDTOListFilter;
            }
            else
                this.serviceDash.commandeDTOListFilter = [];
        }
        else {
            this.serviceDash.commandeDTOListFilter = [];
        }
    }
    selectCmd(ref) {
        this.cmdRef = this.serviceDash.commandeDTOListFilter.filter(c => c.referencecommande === ref);
        this.FilterElement(null);
        this.search = "";
    }
    selectItem(cmd) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.serviceCommande.commandeDTOTemp = cmd;
            const modal = yield this.modalController.create({
                component: _caisse_components_clientcommande_components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_2__.DetailsCommandeComponent,
            });
            return yield modal.present();
        });
    }
};
CommandeencoursComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_3__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_4__.AuthenService },
    { type: _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__.ServiceCommande },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_6__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
CommandeencoursComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-commandeencours',
        template: _raw_loader_commandeencours_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_commandeencours_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommandeencoursComponent);



/***/ }),

/***/ 98487:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/component/commandeterminer/commandeterminer.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandeterminerComponent": () => (/* binding */ CommandeterminerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_commandeterminer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./commandeterminer.component.html */ 20489);
/* harmony import */ var _commandeterminer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commandeterminer.component.scss */ 83696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/ServiceCommande */ 60197);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _caisse_components_clientcommande_components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../caisse/components/clientcommande/components/details-commande/details-commande.component */ 98820);










let CommandeterminerComponent = class CommandeterminerComponent {
    constructor(serviceDash, authenService, serviceCommande, mainService, modalController) {
        this.serviceDash = serviceDash;
        this.authenService = authenService;
        this.serviceCommande = serviceCommande;
        this.mainService = mainService;
        this.modalController = modalController;
        this.page = 0;
    }
    ngOnInit() { }
    selectItem(cmd) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.serviceCommande.commandeDTOTemp = cmd;
            const modal = yield this.modalController.create({
                component: _caisse_components_clientcommande_components_details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_6__.DetailsCommandeComponent,
            });
            return yield modal.present();
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.serviceDash.commandePage = null;
        this.serviceDash.getCommandesByBoutiqueIsTermine(this.page);
        event.target.complete();
    }
    loadData(evt) {
        if (this.page < this.serviceDash.commandePage.totalPages) {
            ++this.page;
            this.serviceDash.getCommandesByBoutiqueIsTermine(this.page);
            evt.target.complete();
        }
        if (this.page >= this.serviceDash.commandePage.totalPages) {
            evt.target.disabled = true;
        }
    }
};
CommandeterminerComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_4__.ServiceCommande },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_5__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
CommandeterminerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-commandeterminer',
        template: _raw_loader_commandeterminer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_commandeterminer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommandeterminerComponent);



/***/ }),

/***/ 70616:
/*!****************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/ventesdashboard.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentesdashboardComponent": () => (/* binding */ VentesdashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ventesdashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ventesdashboard.component.html */ 45211);
/* harmony import */ var _ventesdashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventesdashboard.component.scss */ 95429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/ServiceCommande */ 60197);









let VentesdashboardComponent = class VentesdashboardComponent {
    constructor(serviceDash, authenService, serviceCommande, mainService, modalController) {
        this.serviceDash = serviceDash;
        this.authenService = authenService;
        this.serviceCommande = serviceCommande;
        this.mainService = mainService;
        this.modalController = modalController;
        this.segment = 0;
    }
    ngOnInit() {
        this.getAllVenteEnCours();
    }
    getAllVenteTerminer() {
        this.serviceDash.getCommandesByBoutiqueIsTermine(0);
    }
    getAllVenteEnCours() {
        this.mainService.spinner.show();
        this.serviceDash.commandeDTOList = [];
        this.serviceDash.getCommandesByBoutiqueIsEncours().subscribe(data => {
            //this.serviceDash.commandePage=data;
            this.serviceDash.commandeDTOList = data;
            this.serviceDash.commandeDTOListFilter = data;
            this.mainService.spinner.hide();
        }, error => {
            this.mainService.spinner.hide();
            this.authenService.toastMessage(error.error.message);
        }, () => {
            this.serviceDash.montantVentes = 0;
            console.log(this.serviceDash.commandeDTOList.length);
            this.serviceDash.commandeDTOList.forEach(c => {
                console.log('test');
                this.serviceDash.nomvendeurVList.push(c.nomvendeur);
                this.serviceDash.modepaiementVList.push(c.modepayement);
                this.serviceDash.modecommandeVList.push(c.modecommande);
                this.serviceDash.montantVentes += (c.montantcommande + c.fraislivraison);
            });
            this.serviceDash.nomvendeurVList = [...new Set(this.serviceDash.nomvendeurVList)];
            this.serviceDash.modepaiementVList = [...new Set(this.serviceDash.modepaiementVList)];
            this.serviceDash.modecommandeVList = [...new Set(this.serviceDash.modecommandeVList)];
        });
    }
    segmentChanged(ev) {
        this.slider.slideTo(ev.target.value);
        if (ev.target.value == 0) {
            this.getAllVenteEnCours();
        }
        else if (ev.target.value == 1) {
            this.getAllVenteTerminer();
        }
    }
    slideChanged() {
        this.slider.getActiveIndex().then(index => {
            this.segment = index;
            if (this.segment == 0) {
                this.getAllVenteEnCours();
            }
            else if (this.segment == 1) {
                this.getAllVenteTerminer();
            }
        });
    }
    ionViewDidEnter() {
        this.serviceDash.testFilter = 3;
        this.serviceDash.testSegmentCaisse = true;
    }
};
VentesdashboardComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__.ServiceCommande },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__.MainService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
VentesdashboardComponent.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['search', { static: false },] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['slider', { static: false },] }]
};
VentesdashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ventesdashboard',
        template: _raw_loader_ventesdashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ventesdashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VentesdashboardComponent);



/***/ }),

/***/ 80959:
/*!*************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/ventesdashboard.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentesdashboardModule": () => (/* binding */ VentesdashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _component_commandeencours_commandeencours_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/commandeencours/commandeencours.component */ 38578);
/* harmony import */ var _component_commandeterminer_commandeterminer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/commandeterminer/commandeterminer.component */ 98487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







let VentesdashboardModule = class VentesdashboardModule {
};
VentesdashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_component_commandeencours_commandeencours_component__WEBPACK_IMPORTED_MODULE_0__.CommandeencoursComponent, _component_commandeterminer_commandeterminer_component__WEBPACK_IMPORTED_MODULE_1__.CommandeterminerComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ], exports: [_component_commandeencours_commandeencours_component__WEBPACK_IMPORTED_MODULE_0__.CommandeencoursComponent, _component_commandeterminer_commandeterminer_component__WEBPACK_IMPORTED_MODULE_1__.CommandeterminerComponent]
    })
], VentesdashboardModule);



/***/ }),

/***/ 1794:
/*!************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/dashboard-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 17232);
/* harmony import */ var _components_alertstock_alertstock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alertstock/alertstock.component */ 85394);
/* harmony import */ var _models_SessionOuverte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/SessionOuverte */ 30337);
/* harmony import */ var _components_sessioncaisse_session_ferme_session_ferme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sessioncaisse/session-ferme/session-ferme.component */ 54080);
/* harmony import */ var _components_accueildashboard_accueildashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accueildashboard/accueildashboard.component */ 70111);
/* harmony import */ var _components_ventesdashboard_component_commandeencours_commandeencours_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ventesdashboard/component/commandeencours/commandeencours.component */ 38578);
/* harmony import */ var _components_ventesdashboard_component_commandeterminer_commandeterminer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ventesdashboard/component/commandeterminer/commandeterminer.component */ 98487);










const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage,
        children: [
            { path: 'accueildash', component: _components_accueildashboard_accueildashboard_component__WEBPACK_IMPORTED_MODULE_4__.AccueildashboardComponent, },
            { path: 'alertstock', component: _components_alertstock_alertstock_component__WEBPACK_IMPORTED_MODULE_1__.AlertstockComponent, },
            { path: 'sessionouverte', component: _models_SessionOuverte__WEBPACK_IMPORTED_MODULE_2__.SessionOuverte, },
            { path: 'sessionfermee', component: _components_sessioncaisse_session_ferme_session_ferme_component__WEBPACK_IMPORTED_MODULE_3__.SessionFermeComponent, },
            { path: 'commandeencours', component: _components_ventesdashboard_component_commandeencours_commandeencours_component__WEBPACK_IMPORTED_MODULE_5__.CommandeencoursComponent, },
            { path: 'commandeterminer', component: _components_ventesdashboard_component_commandeterminer_commandeterminer_component__WEBPACK_IMPORTED_MODULE_6__.CommandeterminerComponent, },
        ]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 26080:
/*!****************************************************************!*\
  !*** ./src/app/staff/components/dashboard/dashboard.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 1794);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 17232);
/* harmony import */ var _components_alertstock_alertstock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/alertstock/alertstock.component */ 85394);
/* harmony import */ var _components_sessioncaisse_session_ouvert_session_ouvert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sessioncaisse/session-ouvert/session-ouvert.component */ 13647);
/* harmony import */ var _components_sessioncaisse_session_ferme_session_ferme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sessioncaisse/session-ferme/session-ferme.component */ 54080);
/* harmony import */ var _components_sessioncaisse_sessioncaisse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sessioncaisse/sessioncaisse.component */ 53108);
/* harmony import */ var _components_ventesdashboard_ventesdashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ventesdashboard/ventesdashboard.component */ 70616);
/* harmony import */ var _components_accueildashboard_accueildashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accueildashboard/accueildashboard.component */ 70111);
/* harmony import */ var _modals_session_ofilter_session_ofilter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/session-ofilter/session-ofilter.component */ 38508);
/* harmony import */ var _modals_session_ffilter_session_ffilter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/session-ffilter/session-ffilter.component */ 15168);
/* harmony import */ var _modals_vente_filter_vente_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/vente-filter/vente-filter.component */ 14341);
/* harmony import */ var _modals_rapport_fermeture_rapport_fermeture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/rapport-fermeture/rapport-fermeture.component */ 29331);
/* harmony import */ var _components_ventesdashboard_ventesdashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ventesdashboard/ventesdashboard.module */ 80959);


















let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _components_ventesdashboard_ventesdashboard_module__WEBPACK_IMPORTED_MODULE_12__.VentesdashboardModule,
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage,
            _components_alertstock_alertstock_component__WEBPACK_IMPORTED_MODULE_2__.AlertstockComponent, _components_sessioncaisse_session_ouvert_session_ouvert_component__WEBPACK_IMPORTED_MODULE_3__.SessionOuvertComponent, _components_sessioncaisse_session_ferme_session_ferme_component__WEBPACK_IMPORTED_MODULE_4__.SessionFermeComponent, _components_sessioncaisse_sessioncaisse_component__WEBPACK_IMPORTED_MODULE_5__.SessioncaisseComponent,
            _components_ventesdashboard_ventesdashboard_component__WEBPACK_IMPORTED_MODULE_6__.VentesdashboardComponent, _components_accueildashboard_accueildashboard_component__WEBPACK_IMPORTED_MODULE_7__.AccueildashboardComponent, _modals_session_ofilter_session_ofilter_component__WEBPACK_IMPORTED_MODULE_8__.SessionOFilterComponent, _modals_session_ffilter_session_ffilter_component__WEBPACK_IMPORTED_MODULE_9__.SessionFFilterComponent,
            _modals_vente_filter_vente_filter_component__WEBPACK_IMPORTED_MODULE_10__.VenteFilterComponent, _modals_rapport_fermeture_rapport_fermeture_component__WEBPACK_IMPORTED_MODULE_11__.RapportFermetureComponent]
    })
], DashboardPageModule);



/***/ }),

/***/ 17232:
/*!**************************************************************!*\
  !*** ./src/app/staff/components/dashboard/dashboard.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 56148);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 15455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ServiceDash */ 40798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modals_session_ofilter_session_ofilter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/session-ofilter/session-ofilter.component */ 38508);
/* harmony import */ var _modals_session_ffilter_session_ffilter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/session-ffilter/session-ffilter.component */ 15168);
/* harmony import */ var _modals_vente_filter_vente_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/vente-filter/vente-filter.component */ 14341);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _client_Service_BoutiqueService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../client/Service/BoutiqueService */ 42871);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/MainService */ 35006);













let DashboardPage = class DashboardPage {
    constructor(router, serviceDash, modalController, authenService, boutiqueService, mainService) {
        this.router = router;
        this.serviceDash = serviceDash;
        this.modalController = modalController;
        this.authenService = authenService;
        this.boutiqueService = boutiqueService;
        this.mainService = mainService;
    }
    ngOnInit() {
        this.mainService.spinner.show();
        this.boutiqueService.getboutiqueByReference(this.authenService.utilisateur.referenceboutique).subscribe(data => {
            this.mainService.spinner.hide();
            this.boutiqueService.boutique = data;
            console.log(data);
        }, error => {
            this.mainService.spinner.hide();
            this.mainService.notificationService.showError(error.error.message);
        });
        this.router.navigateByUrl("/staff/menustaff/dashboard/accueildash");
    }
    afficheFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.serviceDash.testFilter == 0) {
                this.authenService.toastMessage("Aucun filtre disponible.");
            }
            else if (this.serviceDash.testFilter == 1) {
                const modal = yield this.modalController.create({
                    component: _modals_session_ofilter_session_ofilter_component__WEBPACK_IMPORTED_MODULE_3__.SessionOFilterComponent,
                });
                return yield modal.present();
            }
            else if (this.serviceDash.testFilter == 2) {
                const modal = yield this.modalController.create({
                    component: _modals_session_ffilter_session_ffilter_component__WEBPACK_IMPORTED_MODULE_4__.SessionFFilterComponent,
                });
                return yield modal.present();
            }
            else if (this.serviceDash.testFilter == 3) {
                const modal = yield this.modalController.create({
                    component: _modals_vente_filter_vente_filter_component__WEBPACK_IMPORTED_MODULE_5__.VenteFilterComponent,
                });
                return yield modal.present();
            }
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_6__.AuthenService },
    { type: _client_Service_BoutiqueService__WEBPACK_IMPORTED_MODULE_7__.BoutiqueService },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_8__.MainService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 29331:
/*!****************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/rapport-fermeture/rapport-fermeture.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RapportFermetureComponent": () => (/* binding */ RapportFermetureComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rapport_fermeture_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rapport-fermeture.component.html */ 87719);
/* harmony import */ var _rapport_fermeture_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rapport-fermeture.component.scss */ 13052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);
/* harmony import */ var _client_Service_BoutiqueService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../client/Service/BoutiqueService */ 42871);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ 46351);








let RapportFermetureComponent = class RapportFermetureComponent {
    constructor(modalController, navParam, serviceDash, boutiqueService) {
        this.modalController = modalController;
        this.navParam = navParam;
        this.serviceDash = serviceDash;
        this.boutiqueService = boutiqueService;
        this.segment = 0;
    }
    ngOnInit() {
        this.cstemp = this.navParam.get("session");
        console.log(this.boutiqueService.boutique);
    }
    onPrint() {
    }
    exportexcel() {
        /* pass here the table id */
        let element = document.getElementById('excel-table');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_4__.writeFile(wb, this.cstemp.datefermeture + ".xlsx");
    }
    exportCSV() {
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.book_new();
        let element = document.getElementById('excel-table');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.table_to_sheet(element);
        xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.book_append_sheet(wb, ws, 'test');
        xlsx__WEBPACK_IMPORTED_MODULE_4__.writeFile(wb, this.cstemp.datefermeture + '.csv');
    }
    segmentChanged(ev) {
        this.slider.slideTo(ev.target.value);
    }
    slideChanged() {
        this.slider.getActiveIndex().then(index => {
            this.segment = index;
        });
    }
    onDismiss() {
        this.modalController.dismiss();
    }
};
RapportFermetureComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _client_Service_BoutiqueService__WEBPACK_IMPORTED_MODULE_3__.BoutiqueService }
];
RapportFermetureComponent.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['search', { static: false },] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slider', { static: false },] }]
};
RapportFermetureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-rapport-fermeture',
        template: _raw_loader_rapport_fermeture_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rapport_fermeture_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RapportFermetureComponent);



/***/ }),

/***/ 15168:
/*!************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/session-ffilter/session-ffilter.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionFFilterComponent": () => (/* binding */ SessionFFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_session_ffilter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-ffilter.component.html */ 88627);
/* harmony import */ var _session_ffilter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-ffilter.component.scss */ 63477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _models_SessionFermee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/SessionFermee */ 81943);








let SessionFFilterComponent = class SessionFFilterComponent {
    constructor(serviceDash, authenservice, modalController) {
        this.serviceDash = serviceDash;
        this.authenservice = authenservice;
        this.modalController = modalController;
        this.is_loading = false;
    }
    ngOnInit() {
        this.setCustomerPickerOptions();
    }
    onDismiss() {
        this.modalController.dismiss();
    }
    updateVendeur(ev) {
        this.serviceDash.nomvendeurF = ev.target.value;
    }
    updateDateDebut(ev) {
        this.serviceDash.datedebutF = ev.target.value;
    }
    updateDateFin(ev) {
        this.serviceDash.datefinF = ev.target.value;
    }
    setCustomerPickerOptions() {
        this.customPickerOptionsDebut = {
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Effacer',
                    handler: () => {
                        this.serviceDash.datedebutF = null;
                    }
                }, {
                    text: 'Selectionner',
                    handler: (data) => {
                        console.log('Data', data);
                        let year = data.year.text;
                        let month = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
                        let day = data.day.text;
                        this.valueDebut = year + '-' + month + '-' + day + 'T00:00:00.000Z';
                        this.serviceDash.datedebutFTemp = this.valueDebut;
                        this.serviceDash.datedebutF = new Date(this.valueDebut);
                    }
                }]
        };
        this.customPickerOptionsFin = {
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Effacer',
                    handler: () => {
                        this.serviceDash.datefinF = null;
                    }
                }, {
                    text: 'Selectionner',
                    handler: (data) => {
                        console.log('Data', data);
                        let year = data.year.text;
                        let month = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
                        let day = data.day.text;
                        this.valueFin = year + '-' + month + '-' + day + 'T23:59:59.000Z';
                        this.serviceDash.datefinFTemp = this.valueFin;
                        this.serviceDash.datefinF = new Date(this.valueFin);
                    }
                }]
        };
    }
    onFilter() {
        this.is_loading = true;
        let sessionF = new _models_SessionFermee__WEBPACK_IMPORTED_MODULE_4__.SessionFermee();
        sessionF.nomuser = this.authenservice.utilisateur.username;
        sessionF.nomboutique = this.authenservice.utilisateur.nomBoutique;
        sessionF.nomvendeur = this.serviceDash.nomvendeurF;
        sessionF.datedebut = this.serviceDash.datedebutF;
        sessionF.datefin = this.serviceDash.datefinF;
        this.serviceDash.checkSessionFermeeInShop(sessionF).subscribe(data => {
            console.log(data);
            this.serviceDash.sessionFermeeList = data;
            this.is_loading = false;
            this.onDismiss();
        }, error => {
            this.is_loading = false;
            this.authenservice.toastMessage(error.error.message);
            this.onDismiss();
        });
    }
};
SessionFFilterComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SessionFFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-session-ffilter',
        template: _raw_loader_session_ffilter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_ffilter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionFFilterComponent);



/***/ }),

/***/ 38508:
/*!************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/session-ofilter/session-ofilter.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionOFilterComponent": () => (/* binding */ SessionOFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_session_ofilter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-ofilter.component.html */ 49662);
/* harmony import */ var _session_ofilter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-ofilter.component.scss */ 93017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _models_SessionOuverte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/SessionOuverte */ 30337);








let SessionOFilterComponent = class SessionOFilterComponent {
    constructor(serviceDash, authenservice, modalController) {
        this.serviceDash = serviceDash;
        this.authenservice = authenservice;
        this.modalController = modalController;
        this.is_loading = false;
    }
    ngOnInit() { }
    updateVendeur(ev) {
        this.serviceDash.nomvendeurO = ev.target.value;
    }
    updatePaiement(ev) {
        let val = ev.target.value;
        if (val == "tout") {
            this.serviceDash.modepaiementO = null;
        }
        else {
            this.serviceDash.modepaiementO = val;
        }
    }
    onFilter() {
        this.is_loading = true;
        let sessionO = new _models_SessionOuverte__WEBPACK_IMPORTED_MODULE_4__.SessionOuverte();
        if (this.serviceDash.nomvendeurO == "" || this.serviceDash.nomvendeurO == null) {
            this.serviceDash.nomvendeurO = this.authenservice.utilisateur.username;
            sessionO.nomuser = this.authenservice.utilisateur.username;
        }
        else {
            sessionO.nomuser = this.serviceDash.nomvendeurO;
        }
        sessionO.nomboutique = this.authenservice.utilisateur.nomBoutique;
        sessionO.modepaiement = this.serviceDash.modepaiementO;
        this.serviceDash.checkSessionOuverteInShop(sessionO).subscribe(data => {
            console.log(data);
            this.serviceDash.sessionOuverteList = data;
            this.is_loading = false;
            this.onDismiss();
        }, error => {
            this.is_loading = false;
            this.authenservice.toastMessage(error.error.message);
            this.onDismiss();
        });
    }
    onDismiss() {
        this.modalController.dismiss();
    }
};
SessionOFilterComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SessionOFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-session-ofilter',
        template: _raw_loader_session_ofilter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_ofilter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionOFilterComponent);



/***/ }),

/***/ 14341:
/*!******************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/vente-filter/vente-filter.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenteFilterComponent": () => (/* binding */ VenteFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_vente_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vente-filter.component.html */ 80365);
/* harmony import */ var _vente_filter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vente-filter.component.scss */ 97992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ServiceDash */ 40798);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let VenteFilterComponent = class VenteFilterComponent {
    constructor(serviceDash, authenservice, modalController) {
        this.serviceDash = serviceDash;
        this.authenservice = authenservice;
        this.modalController = modalController;
        this.is_loading = false;
    }
    ngOnInit() {
        this.setCustomerPickerOptions();
    }
    onDismiss() {
        this.modalController.dismiss();
    }
    setCustomerPickerOptions() {
        this.customPickerOptionsDebut = {
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Effacer',
                    handler: () => {
                        this.serviceDash.datedebutV = null;
                    }
                }, {
                    text: 'Selectionner',
                    handler: (data) => {
                        console.log('Data', data);
                        let year = data.year.text;
                        let month = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
                        let day = data.day.text;
                        this.valueDebut = year + '-' + month + '-' + day + 'T00:00:00.000Z';
                        this.serviceDash.datedebutVTemp = this.valueDebut;
                        this.serviceDash.datedebutV = new Date(this.valueDebut);
                    }
                }]
        };
        this.customPickerOptionsFin = {
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Effacer',
                    handler: () => {
                        this.serviceDash.datefinV = null;
                    }
                }, {
                    text: 'Selectionner',
                    handler: (data) => {
                        console.log('Data', data);
                        let year = data.year.text;
                        let month = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
                        let day = data.day.text;
                        this.valueFin = year + '-' + month + '-' + day + 'T23:59:59.000Z';
                        this.serviceDash.datefinVTemp = this.valueFin;
                        this.serviceDash.datefinV = new Date(this.valueFin);
                    }
                }]
        };
    }
    onFilter() {
        this.is_loading = true;
        let cmdList = this.serviceDash.commandeDTOList;
        if (this.serviceDash.modecommandeV) {
            cmdList = cmdList.filter(c => {
                return c.modecommande == this.serviceDash.modecommandeV;
            });
        }
        if (this.serviceDash.nomvendeurV) {
            cmdList = cmdList.filter(c => {
                return c.nomvendeur == this.serviceDash.nomvendeurV;
            });
        }
        if (this.serviceDash.modepaiementV) {
            cmdList = cmdList.filter(c => {
                return c.modepayement == this.serviceDash.modepaiementV;
            });
        }
        if (this.serviceDash.datedebutV) {
            cmdList = cmdList.filter(c => {
                return c.datecommande <= this.serviceDash.datedebutV;
            });
        }
        if (this.serviceDash.datefinV) {
            cmdList = cmdList.filter(c => {
                return c.datecommande == this.serviceDash.datefinV;
            });
        }
        this.serviceDash.commandeDTOListFilter = cmdList;
        this.serviceDash.montantVentes = 0;
        cmdList.forEach(c => {
            this.serviceDash.montantVentes += (c.montantcommande + c.fraislivraison);
        });
        this.is_loading = false;
        this.onDismiss();
    }
    updateModeC(ev) {
        let val = ev.target.value;
        if (val == "tout") {
            this.serviceDash.modecommandeV = null;
        }
        else {
            this.serviceDash.modecommandeV = val;
        }
    }
    updateVendeur(ev) {
        let val = ev.target.value;
        if (val == "tout") {
            this.serviceDash.nomvendeurV = null;
        }
        else {
            this.serviceDash.nomvendeurV = val;
        }
    }
    updateModeP(ev) {
        let val = ev.target.value;
        if (val == "tout") {
            this.serviceDash.modepaiementV = null;
        }
        else {
            this.serviceDash.modepaiementV = val;
        }
    }
    updateDateDebut(ev) {
        this.serviceDash.datedebutV = ev.target.value;
    }
    updateDateFin(ev) {
        this.serviceDash.datefinV = ev.target.value;
    }
};
VenteFilterComponent.ctorParameters = () => [
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_2__.ServiceDash },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
VenteFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-vente-filter',
        template: _raw_loader_vente_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vente_filter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VenteFilterComponent);



/***/ }),

/***/ 96039:
/*!*****************************************************************!*\
  !*** ./src/app/staff/components/dashboard/models/StockAlert.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockAlert": () => (/* binding */ StockAlert)
/* harmony export */ });
class StockAlert {
}


/***/ }),

/***/ 44674:
/*!********************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/accueildashboard/accueildashboard.component.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImFjY3VlaWxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 88319:
/*!********************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/alertstock/alertstock.component.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list {\n  background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0c3RvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImFsZXJ0c3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 41716:
/*!****************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/sessioncaisse/session-ferme/session-ferme.component.scss ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLWZlcm1lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 58711:
/*!******************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/sessioncaisse/session-ouvert/session-ouvert.component.scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLW91dmVydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 35080:
/*!**************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/sessioncaisse/sessioncaisse.component.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uY2Fpc3NlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 16644:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/component/commandeencours/commandeencours.component.scss ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("th, td {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRlZW5jb3Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJjb21tYW5kZWVuY291cnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCx0ZHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 83696:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/component/commandeterminer/commandeterminer.component.scss ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("th, td {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRldGVybWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiY29tbWFuZGV0ZXJtaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLHRke1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 95429:
/*!******************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/components/ventesdashboard/ventesdashboard.component.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50ZXNkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 15455:
/*!****************************************************************!*\
  !*** ./src/app/staff/components/dashboard/dashboard.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #0f5173;\n}\nion-toolbar ion-buttons, ion-toolbar ion-title, ion-toolbar ion-label, ion-toolbar ion-icon {\n  color: white;\n}\nion-label, ion-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwZjUxNzM7XHJcbiAgaW9uLWJ1dHRvbnMsIGlvbi10aXRsZSwgaW9uLWxhYmVsLCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbGFiZWwsIGlvbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 13052:
/*!******************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/rapport-fermeture/rapport-fermeture.component.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin: 5% 5% 5%;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n\nion-item {\n  --background: #f5f5f3;\n}\n\n.card-body .row {\n  font-size: 10px;\n}\n\ntd, tr {\n  font-size: 10px;\n}\n\n.custom-size {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhcHBvcnQtZmVybWV0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoicmFwcG9ydC1mZXJtZXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbiA6IDUlIDUlIDUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgLnJvd3tcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxudGQsdHJ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 63477:
/*!**************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/session-ffilter/session-ffilter.component.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin: 5% 5% 5%;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n\nion-item {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tZmZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6InNlc3Npb24tZmZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luIDogNSUgNSUgNSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 93017:
/*!**************************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/session-ofilter/session-ofilter.component.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin: 5% 5% 5%;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n\nion-item {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tb2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6InNlc3Npb24tb2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luIDogNSUgNSUgNSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 97992:
/*!********************************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/modals/vente-filter/vente-filter.component.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin: 5% 5% 5%;\n}\n\nion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n\nion-item {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRlLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6InZlbnRlLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luIDogNSUgNSUgNSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 57474:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/accueildashboard/accueildashboard.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-segment scrollable\r\n               [value]=\"serviceDash.menu_1\"\r\n               mode=\"md\"\r\n               color=\"success\"\r\n               [(ngModel)]=\"segmentModel\"\r\n               (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"sessions\">\r\n      <ion-icon name=\"wallet\"></ion-icon>\r\n      <ion-label class=\"text-lowercase\">Sessions de Caisse</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"ventes\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label class=\"text-lowercase\">Ventes</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"alerte\" >\r\n      <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n      <ion-label class=\"text-lowercase\">Stock Alert</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-alertstock *ngIf=\"segmentModel == 'alerte'\"></app-alertstock>\r\n  <app-sessioncaisse *ngIf=\"segmentModel == 'sessions'\"></app-sessioncaisse>\r\n  <app-ventesdashboard *ngIf=\"segmentModel == 'ventes'\"></app-ventesdashboard>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"serviceDash.testSegmentCaisse\">\r\n  <ion-segment\r\n    [value]=\"serviceDash.menu_2\"\r\n    mode=\"md\"\r\n    color=\"primary\"\r\n    [(ngModel)]=\"serviceDash.segmentCaisse\">\r\n    <ion-segment-button value=\"ouverte\">\r\n      <ion-icon name=\"enter-outline\"></ion-icon>\r\n      <ion-label class=\"text-lowercase\">Sessions Ouvertes</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"fermee\">\r\n      <ion-icon name=\"exit-outline\"></ion-icon>\r\n      <ion-label class=\"text-lowercase\">Sessions Fermées</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-footer>\r\n\r\n\r\n");

/***/ }),

/***/ 80644:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/alertstock/alertstock.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"table-responsive\" >\r\n      <table class=\"table table-striped table-bordered\">\r\n        <tbody>\r\n        <tr>\r\n          <th>Produits</th>\r\n          <th>Total en stock</th>\r\n          <th>Stock Alert</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let p of this.serviceDash.stockAlertList\">\r\n          <td>{{p.nomproduit}}</td>\r\n          <td>{{p.quantiteEnstock}}</td>\r\n          <td>{{p.quantiteAlerte}}</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 51499:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/sessioncaisse/session-ferme/session-ferme.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"serviceDash.sessionFermeeList.caisseSessions.length==0\" class=\"ion-text-center\" >\r\n    <img style=\"margin-top: 25%\" src=\"./assets/images/empty.png\" alt=\"Aucune fermeture de caisse trouvee\">\r\n    <ion-label color=\"primary\">Aucune fermeture de caisse trouvee</ion-label>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngFor=\"let cs of serviceDash.sessionFermeeList.caisseSessions\">\r\n    <ion-card (click)=\"finByidcaissesession(cs.reference)\">\r\n      <ion-row class=\"header-row\">\r\n        <ion-col style=\"padding-left: 10%;\">\r\n          <ion-label class=\"ion-text-start\"><strong>Ref session</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 15%;\">\r\n          <ion-label class=\"ion-text-end\">{{cs.reference}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"padding-left: 10%;\">\r\n          <ion-label class=\"ion-text-start\"><strong>Vendeur</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 15%;\">\r\n          <ion-label class=\"ion-text-end\">{{cs.nomuser}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"padding-left: 10%;\">\r\n          <ion-label class=\"ion-text-start\"><strong>Montant théorique</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 15%;\">\r\n          <ion-label class=\"ion-text-end\">{{cs.montanttheorique}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"padding-left: 10%;\">\r\n          <ion-label class=\"ion-text-start\"><strong>Montant déclaré</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 15%;\">\r\n          <ion-label class=\"ion-text-end\">{{cs.montantphysique}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"padding-left: 10%;\">\r\n          <ion-label class=\"ion-text-start\"><strong>Différence</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 15%;\">\r\n          <ion-label class=\"ion-text-end\">{{cs.montantphysique - cs.montanttheorique}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"padding-left: 10%;\">\r\n          <ion-label class=\"ion-text-start\"><strong>Date Fermeture</strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 15%;\">\r\n          <ion-label class=\"ion-text-end\">{{cs.datefermeture | date:\"dd-MM-yyyy HH:mm\"}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 64817:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/sessioncaisse/session-ouvert/session-ouvert.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\r\n  <ion-label color=\"primary\"><h2 class=\"text-center\"><strong>Montant</strong></h2></ion-label>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-col style=\"padding-left: 5%\">\r\n          <ion-label class=\"ion-text-start\"><strong>Ligne : </strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 5%\">\r\n          <ion-label color=\"secondary\" class=\"ion-text-start\">{{serviceDash.sessionOuverteList.montantligne}}</ion-label>\r\n        </ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-col style=\"padding-left: 5%\">\r\n          <ion-label class=\"ion-text-start\"><strong>Boutique : </strong></ion-label>\r\n        </ion-col>\r\n        <ion-col style=\"padding-left: 5%\">\r\n          <ion-label color=\"secondary\" class=\"ion-text-start\">{{serviceDash.sessionOuverteList.montantboutique}}</ion-label>\r\n        </ion-col>\r\n      </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"text-center\"  style=\"padding-left: 5%\">\r\n      <ion-label><strong>Total : </strong></ion-label>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label color=\"secondary\" class=\"ion-text-start\">{{serviceDash.sessionOuverteList.montanttotal}}</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"serviceDash.sessionOuverteList.caisseSessions.length==0\" class=\"ion-text-center\" >\r\n    <img style=\"margin-top: 25%\" src=\"./assets/images/empty.png\" alt=\"Aucune caisse ouverte trouvee\">\r\n    <ion-label color=\"primary\">Aucune caisse ouverte trouvée</ion-label>\r\n  </ion-grid>\r\n\r\n  <ion-card *ngFor=\"let c of serviceDash.sessionOuverteList.caisseSessions\">\r\n    <ion-row class=\"header-row\">\r\n      <ion-col style=\"padding-left: 10%;\">\r\n        <ion-label class=\"ion-text-start\"><strong>ID Session</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col style=\"padding-left: 15%;\">\r\n        <ion-label class=\"ion-text-end\">{{c.idcaissesession}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col style=\"padding-left: 10%;\">\r\n        <ion-label class=\"ion-text-start\"><strong>Date Ouverture</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col style=\"padding-left: 15%;\">\r\n        <ion-label class=\"ion-text-end\">{{c.dateouverture | date : 'dd-MMM-yy h:mm'}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col style=\"padding-left: 10%;\">\r\n        <ion-label class=\"ion-text-start\"><strong>Vendeur</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col style=\"padding-left: 15%;\">\r\n        <ion-label class=\"ion-text-end\">{{c.nomuser}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col style=\"padding-left: 10%;\">\r\n        <ion-label class=\"ion-text-start\"><strong>Solde</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col style=\"padding-left: 15%;\">\r\n        <ion-label class=\"ion-text-end\">{{c.soldesession}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 91208:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/sessioncaisse/sessioncaisse.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n  <app-session-ouvert *ngIf=\"serviceDash.segmentCaisse === 'ouverte'\"></app-session-ouvert>\r\n  <app-session-ferme *ngIf=\"serviceDash.segmentCaisse === 'fermee'\"></app-session-ferme>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 73434:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/ventesdashboard/component/commandeencours/commandeencours.component.html ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-label color=\"primary\"><h2 class=\"text-center\">Montant : <strong>{{serviceDash.montantVentes}}<sup>Fcfa</sup></strong></h2></ion-label>\r\n    <div>\r\n      <ion-searchbar (ionInput)=\"FilterElement($event)\" [(ngModel)]=\"search\" placeholder=\"Entrer une référence commande\" name =\"Entrer la référence\" ></ion-searchbar>\r\n      <ion-list style=\"padding: unset\">\r\n        <ion-item (click)=\"selectCmd(a.referencecommande)\" lines=\"none\" *ngFor=\"let a of serviceDash.commandeDTOListFilter\">{{a.referencecommande}}</ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-grid  *ngIf=\"serviceDash.commandeDTOListFilter.length==0\" class=\"ion-text-center\" >\r\n      <img style=\"margin-top: 25%\" src=\"./assets/images/empty.png\" alt=\"Aucune alerte\">\r\n      <ion-label color=\"primary\">Aucune commande trouvée</ion-label>\r\n    </ion-grid>\r\n    <div class=\"table-responsive\" >\r\n      <table class=\"table table-striped table-bordered\">\r\n        <tbody *ngIf=\"serviceDash.commandeDTOListFilter.length>0\">\r\n        <tr>\r\n          <th>Ref</th>\r\n          <th>Client</th>\r\n          <th>Vendeur</th>\r\n          <th>date</th>\r\n          <th>Détail</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let c of cmdRef\">\r\n          <td>{{c.referencecommande}}</td>\r\n          <td>{{c.nomclient}}</td>\r\n          <td>{{c.nomvendeur}}</td>\r\n          <td>{{c.datecommande|date:'dd/MM/yy HH:mm'}}</td>\r\n          <td (click)=\"selectItem(c)\"> <ion-icon class=\"text-success\"  color=\"success\" name=\"eye-outline\"></ion-icon></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ 20489:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/ventesdashboard/component/commandeterminer/commandeterminer.component.html ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-label color=\"primary\"><h2 class=\"text-center\">Montant : <strong>{{serviceDash.montantVentes}}<sup>Fcfa</sup></strong></h2></ion-label>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-grid  *ngIf=\"serviceDash.commandeDTOListFilter.length==0\" class=\"ion-text-center\" >\r\n      <img style=\"margin-top: 25%\" src=\"./assets/images/empty.png\" alt=\"Aucune alerte\">\r\n      <ion-label color=\"primary\">Aucune commande trouvée</ion-label>\r\n    </ion-grid>\r\n    <div class=\"table-responsive\" >\r\n      <table class=\"table table-striped table-bordered\">\r\n        <tbody *ngIf=\"serviceDash.commandeDTOList.length != 0\">\r\n        <tr>\r\n          <th>Ref</th>\r\n          <th>Client</th>\r\n          <th>Vendeur</th>\r\n          <th>date</th>\r\n          <th>Détail</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let c of serviceDash.commandeDTOList\">\r\n          <td>{{c.referencecommande}}</td>\r\n          <td>{{c.nomclient}}</td>\r\n          <td>{{c.nomvendeur}}</td>\r\n          <td>{{c.datepayement|date:'dd/MM/yy HH:mm'}}</td>\r\n          <td (click)=\"selectItem(c)\"> <ion-icon class=\"text-success\"  color=\"success\" name=\"eye-outline\"></ion-icon></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ 45211:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/components/ventesdashboard/ventesdashboard.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-segment scrollable=\"true\" swipeGesture=\"false\" mode=\"md\" class=\"ion-margin-bottom \" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\r\n    <ion-segment-button value=\"0\">\r\n      <ion-label>Vente en cours</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"1\">\r\n      <ion-label>Vente terminer</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-slides class=\"slides-wrapper\" #slider (ionSlideDidChange)=\"slideChanged()\">\r\n    <ion-slide>\r\n      <app-commandeencours></app-commandeencours>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <app-commandeterminer></app-commandeterminer>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n");

/***/ }),

/***/ 56148:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/dashboard.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Tableau de bord</ion-title>\r\n    <!--<ion-buttons slot=\"end\">\r\n      <ion-icon (click)=\"afficheFilter()\" size=\"large\" name=\"filter-outline\"></ion-icon>\r\n    </ion-buttons>-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-content>\r\n");

/***/ }),

/***/ 87719:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/modals/rapport-fermeture/rapport-fermeture.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-row>\r\n    <ion-col class=\"col-10\">\r\n      <ion-label color=\"primary\"><h2 class=\"text-center\"><strong>Rapport Session de caisse</strong></h2></ion-label>\r\n    </ion-col>\r\n    <ion-col class=\"col-2 ion-text-end\">\r\n      <ion-icon class=\"custom-size\" name=\"close\" color=\"secondary\" (click)=\"onDismiss()\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-label color=\"secondary\"><h2 class=\"text-center\"><strong>{{cstemp.reference}}</strong></h2></ion-label>\r\n  <ion-segment scrollable=\"true\" swipeGesture=\"false\" mode=\"md\" class=\"ion-margin-bottom \" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\r\n    <ion-segment-button value=\"0\">\r\n      <ion-label>Rapport global</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"1\">\r\n      <ion-label>Rapport des ventes</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-slides class=\"slides-wrapper\" #slider (ionSlideDidChange)=\"slideChanged()\">\r\n    <ion-slide>\r\n      <ion-grid *ngIf=\"cstemp\" style=\"margin-left: 5%\">\r\n        <ion-card class=\"card\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label color=\"primary\"><strong>Vendeur</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.nomuser}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Date ouverture</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.dateouverture | date:\"yyyy-MM-dd HH:mm\"}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Date Fermeture</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.datefermeture | date:\"yyyy-MM-dd HH:mm\"}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Montant Ouverture</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.montantinitial}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Montant Fermeture</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.montantphysique}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Montant des entrées</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.entree}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Montant des sorties</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.sortie}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Cash</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.cash}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Montant OM</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.om}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Montant MOMO</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.momo}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Solde</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.soldesession}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label><strong>Difference</strong></ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label><strong>{{cstemp.caisseSession.montantphysique - cstemp.caisseSession.soldesession}}</strong></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"text-center\">\r\n            <p class=\"text-danger\" *ngIf=\"(cstemp.caisseSession.montantphysique - cstemp.caisseSession.soldesession)<0\">Le Montant theorique est\r\n              supérieur au montant de fermeture </p>\r\n\r\n            <p class=\"text-danger\" *ngIf=\"(cstemp.caisseSession.montantphysique - cstemp.caisseSession.soldesession)>0\">Le Montant theorique est\r\n              inférieur au montant de fermeture </p>\r\n          </div>\r\n        </ion-card>\r\n        <!--<ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" (click)=\"onPrint()\" (keydown.enter)=\"onPrint()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n              Imprimer\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" (click)=\"onDismiss()\" (keydown.enter)=\"onDismiss()\" color=\"light\" shape=\"round\" type=\"submit\">\r\n              Annuler\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>-->\r\n      </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <div class=\"card-body\" id=\"rapport\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm\">\r\n              <h6 class=\"mb-0\">Date ouverture</h6>\r\n            </div>\r\n            <div class=\"col-sm text-secondary\">\r\n              {{cstemp.caisseSession.dateouverture| date:'dd/MM/yyyy HH:mm'}}\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <h6 class=\"mb-0\">Caissier(e)</h6>\r\n            </div>\r\n            <div class=\"col text-secondary\">\r\n              {{cstemp.caisseSession.nomuser}}\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\" id=\"excel-table\">\r\n              <thead>\r\n              <tr>\r\n                <th scope=\"col\">External ID</th>\r\n                <th scope=\"col\">Customer</th>\r\n                <th scope=\"col\">Date</th>\r\n                <th scope=\"col\">Location</th>\r\n                <th scope=\"col\">MEMO</th>\r\n                <th scope=\"col\">Item</th>\r\n                <th scope=\"col\">Quantity</th>\r\n                <th scope=\"col\">Amount</th>\r\n                <th scope=\"col\">Tax Code</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let c of cstemp.itemsessionfermers\">\r\n                <td>{{boutiqueService.boutique.referenceexterne}}</td>\r\n                <td class=\"text-center\">{{boutiqueService.boutique.nomBoutique}}</td>\r\n                <td>{{c.date | date:\"d/M/yyyy HH:mm\"}}</td>\r\n                <td class=\"text-center\">{{boutiqueService.boutique.region}}</td>\r\n                <td class=\"text-center\">MEMO</td>\r\n                <td>{{c.produit.nomProduit}}</td>\r\n                <td class=\"text-center\">{{c.quantite}}</td>\r\n                <td class=\"text-center\">{{c.montant}}</td>\r\n                <td class=\"text-center\">VAT_CM:TVA 19.25%</td>\r\n              </tr>\r\n              <tr>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>Total</td>\r\n                <td>{{ cstemp.totalvente| number }}<sup>Fcfa</sup></td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!--<ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" (click)=\"exportexcel()\" color=\"success\" shape=\"round\" type=\"submit\">\r\n                Excel\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" (click)=\"exportCSV()\" color=\"secondary\" shape=\"round\" type=\"submit\">\r\n                CSV\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" (click)=\"onDismiss()\" (keydown.enter)=\"onDismiss()\" color=\"light\" shape=\"round\" type=\"submit\">\r\n                Annuler\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>-->\r\n        </div>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 88627:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/modals/session-ffilter/session-ffilter.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <br><br>\r\n  <ion-label color=\"primary\"><h2 class=\"text-center\"><strong>Choisir une option de filtre</strong></h2></ion-label>\r\n  <br>\r\n  <ion-grid class=\"content\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Vendeur : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Selectionner un vendeur\" [(ngModel)]=\"serviceDash.nomvendeurF\" required (ionChange)=\"updateVendeur($event)\">\r\n          <ion-select-option *ngFor=\"let ve of this.serviceDash.sessionFermeeList.nomvendeurs\" value=\"{{ve}}\">\r\n            {{ve}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Date début : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-datetime [pickerOptions]=\"customPickerOptionsDebut\" [(ngModel)]=\"serviceDash.datedebutFTemp\" (ionChange)=\"updateDateDebut($event)\"  displayFormat=\"MMM DD, YYYY\" max=\"2030\" min=\"2019\" placeholder=\"Selectionner une date\"></ion-datetime>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Date Fin : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-datetime [pickerOptions]=\"customPickerOptionsFin\" [(ngModel)]=\"serviceDash.datefinFTemp\" (ionChange)=\"updateDateFin($event)\"  displayFormat=\"MMM DD, YYYY\" max=\"2030\" min=\"2019\" placeholder=\"Selectionner une date\"></ion-datetime>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onFilter()\" (keydown.enter)=\"onFilter()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n          Valider\r\n          <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"onDismiss()\" (keydown.enter)=\"onDismiss()\" color=\"light\" shape=\"round\" type=\"submit\">\r\n          Annuler\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 49662:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/modals/session-ofilter/session-ofilter.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <br><br>\r\n  <ion-label color=\"primary\"><h2 class=\"text-center\"><strong>Choisir une option de filtre</strong></h2></ion-label>\r\n  <br>\r\n  <ion-grid class=\"content\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Vendeur : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Selectionner un vendeur\" [(ngModel)]=\"serviceDash.nomvendeurO\" required (ionChange)=\"updateVendeur($event)\">\r\n          <ion-select-option *ngFor=\"let ve of this.serviceDash.sessionOuverteList.nomusers\" value=\"{{ve}}\">\r\n            {{ve}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Mode de paiement : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Mode de paiement\" [(ngModel)]=\"serviceDash.modepaiementO\" required (ionChange)=\"updatePaiement($event)\">\r\n          <ion-select-option value=\"tout\">Tout</ion-select-option>\r\n          <ion-select-option *ngFor=\"let ve of this.serviceDash.sessionOuverteList.modepaiements\" value=\"{{ve}}\">\r\n            {{ve}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onFilter()\" (keydown.enter)=\"onFilter()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n          Valider\r\n          <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"onDismiss()\" (keydown.enter)=\"onDismiss()\" color=\"light\" shape=\"round\" type=\"submit\">\r\n          Annuler\r\n        </ion-button>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 80365:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/dashboard/modals/vente-filter/vente-filter.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <br><br>\r\n  <ion-label color=\"primary\"><h2 class=\"text-center\"><strong>Choisir une option de filtre</strong></h2></ion-label>\r\n  <br>\r\n  <ion-grid class=\"content\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Mode commande : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Selectionner un mode de commande\" [(ngModel)]=\"serviceDash.modecommandeV\" required (ionChange)=\"updateModeC($event)\">\r\n          <ion-select-option value=\"tout\">Tout</ion-select-option>\r\n          <ion-select-option *ngFor=\"let ve of this.serviceDash.modecommandeVList\" value=\"{{ve}}\">\r\n            {{ve}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Vendeur : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Selectionner un vendeur\" [(ngModel)]=\"serviceDash.nomvendeurV\" required (ionChange)=\"updateVendeur($event)\">\r\n          <ion-select-option value=\"tout\">Tout</ion-select-option>\r\n          <ion-select-option *ngFor=\"let ve of this.serviceDash.nomvendeurVList\" value=\"{{ve}}\">\r\n            {{ve}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Mode de paiement : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Selectionner un mode de paiement\" [(ngModel)]=\"serviceDash.modepaiementV\" required (ionChange)=\"updateModeP($event)\">\r\n          <ion-select-option value=\"tout\">Tout</ion-select-option>\r\n          <ion-select-option *ngFor=\"let ve of this.serviceDash.modepaiementVList\" value=\"{{ve}}\">\r\n            {{ve}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Date début : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-datetime [pickerOptions]=\"customPickerOptionsDebut\" [(ngModel)]=\"serviceDash.datedebutFTemp\" (ionChange)=\"updateDateDebut($event)\"  displayFormat=\"MMM DD, YYYY\" max=\"2030\" min=\"2019\" placeholder=\"Selectionner une date\"></ion-datetime>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Date Fin : </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-datetime [pickerOptions]=\"customPickerOptionsFin\" [(ngModel)]=\"serviceDash.datefinFTemp\" (ionChange)=\"updateDateFin($event)\"  displayFormat=\"MMM DD, YYYY\" max=\"2030\" min=\"2019\" placeholder=\"Selectionner une date\"></ion-datetime>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onFilter()\" (keydown.enter)=\"onFilter()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n          Valider\r\n          <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"onDismiss()\" (keydown.enter)=\"onDismiss()\" color=\"light\" shape=\"round\" type=\"submit\">\r\n          Annuler\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_staff_components_dashboard_dashboard_module_ts.js.map