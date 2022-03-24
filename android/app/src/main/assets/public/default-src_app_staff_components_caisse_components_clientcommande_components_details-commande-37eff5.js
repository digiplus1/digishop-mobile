(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["default-src_app_staff_components_caisse_components_clientcommande_components_details-commande-37eff5"],{

/***/ 98820:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/clientcommande/components/details-commande/details-commande.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsCommandeComponent": () => (/* binding */ DetailsCommandeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_details_commande_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details-commande.component.html */ 93481);
/* harmony import */ var _details_commande_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-commande.component.scss */ 36448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/services/MainService */ 35006);
/* harmony import */ var _paiement_commande_paiement_commande_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paiement-commande/paiement-commande.component */ 12164);
/* harmony import */ var _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/ServiceCommande */ 60197);
/* harmony import */ var _models_ClotureCommande__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../models/ClotureCommande */ 88370);
/* harmony import */ var _dashboard_models_ClotureCommandeDTO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../dashboard/models/ClotureCommandeDTO */ 89875);
/* harmony import */ var _services_ServiceDash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/ServiceDash */ 40798);
/* harmony import */ var _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../services/ServiceCaisse */ 18004);













let DetailsCommandeComponent = class DetailsCommandeComponent {
    constructor(modalController, authenService, serviceDash, serviceCommande, mainService, caisseService) {
        this.modalController = modalController;
        this.authenService = authenService;
        this.serviceDash = serviceDash;
        this.serviceCommande = serviceCommande;
        this.mainService = mainService;
        this.caisseService = caisseService;
        this.codeCloture = "";
        this.is_cloture = false;
    }
    ngOnInit() {
    }
    payer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _paiement_commande_paiement_commande_component__WEBPACK_IMPORTED_MODULE_4__.PaiementCommandeComponent,
            });
            return yield modal.present();
        });
    }
    cancel() {
        this.modalController.dismiss();
    }
    cloturer() {
        this.codeCloture = "";
        this.is_cloture = true;
    }
    cloturer_commande(reference) {
        if (this.code_cloture) {
            let cloture = new _dashboard_models_ClotureCommandeDTO__WEBPACK_IMPORTED_MODULE_7__.ClotureCommandeDTO();
            cloture.user = this.authenService.utilisateur.username;
            cloture.codecloture = this.code_cloture;
            cloture.referencecommande = reference;
            cloture.idsession = this.caisseService.SessionActive.idcaissesession;
            this.mainService.spinner.show();
            this.serviceDash.ClotureCommande(cloture).subscribe(data => {
                this.cancel();
                this.code_cloture = null;
                if (data) {
                    this.retirer_commande_cloture(reference);
                }
                this.mainService.spinner.hide();
            }, error => {
                this.mainService.spinner.hide();
                this.mainService.notificationService.showError(error.error.message);
            });
        }
        else {
            this.mainService.notificationService.showInfo("Entrer le code de cloture du client", "");
        }
    }
    retirer_commande_cloture(reference) {
        let index = this.serviceDash.commandeDTOListFilter.findIndex(i => i.referencecommande == reference);
        this.serviceDash.commandeDTOListFilter.splice(index, 1);
        this.recalculsolde();
    }
    recalculsolde() {
        this.serviceDash.montantVentes = 0;
        this.serviceDash.commandeDTOListFilter.filter(c => {
            this.serviceDash.montantVentes += c.montantcommande;
        });
    }
    valider() {
        if (this.codeCloture == "") {
            this.authenService.toastMessage("Vous devez remplir une valeur.");
        }
        else {
            this.mainService.spinner.show();
            let cc = new _models_ClotureCommande__WEBPACK_IMPORTED_MODULE_6__.ClotureCommande();
            cc.referencecommande = this.serviceCommande.commandeDTOTemp.referencecommande;
            cc.user = this.authenService.utilisateur.username;
            cc.codecloture = this.codeCloture;
            this.serviceCommande.clotureCommande(cc).subscribe(data => {
                if (data) {
                    this.serviceCommande.commandeDTOTemp.statut = "TERMINEE";
                }
                this.mainService.spinner.hide();
                this.Annuler();
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.Annuler();
                this.mainService.spinner.hide();
            });
        }
    }
    Annuler() {
        this.codeCloture = "";
        this.is_cloture = false;
    }
};
DetailsCommandeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _services_ServiceDash__WEBPACK_IMPORTED_MODULE_8__.ServiceDash },
    { type: _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__.ServiceCommande },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__.MainService },
    { type: _services_ServiceCaisse__WEBPACK_IMPORTED_MODULE_9__.ServiceCaisse }
];
DetailsCommandeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-details-commande',
        template: _raw_loader_details_commande_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_commande_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailsCommandeComponent);



/***/ }),

/***/ 12164:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/clientcommande/components/paiement-commande/paiement-commande.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaiementCommandeComponent": () => (/* binding */ PaiementCommandeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_paiement_commande_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./paiement-commande.component.html */ 23955);
/* harmony import */ var _paiement_commande_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paiement-commande.component.scss */ 13882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_ServicePaiement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ServicePaiement */ 79131);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/ServicePrinter */ 34962);
/* harmony import */ var _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/ServiceCommande */ 60197);









let PaiementCommandeComponent = class PaiementCommandeComponent {
    constructor(paiementService, modalController, serviceCommande, authenService, servicePrinter) {
        this.paiementService = paiementService;
        this.modalController = modalController;
        this.serviceCommande = serviceCommande;
        this.authenService = authenService;
        this.servicePrinter = servicePrinter;
        this.is_loading = false;
    }
    ngOnInit() {
    }
    cancel() {
        this.modalController.dismiss();
    }
    select(s) {
        console.log(s);
        this.paiementService.affiche = s;
    }
    onAction() {
        this.is_loading = true;
        this.serviceCommande.commandeDTOTemp.modecommande = "boutique";
        this.serviceCommande.commandeDTOTemp.modepayement = this.paiementService.affiche;
        this.serviceCommande.createCommande(this.serviceCommande.commandeDTOTemp).subscribe(data => {
            console.log(data);
            this.serviceCommande.commandeDTOTemp = data;
            this.is_loading = false;
            this.cancel();
        }, error => {
            this.authenService.toastMessage(error.error.message);
        });
    }
};
PaiementCommandeComponent.ctorParameters = () => [
    { type: _services_ServicePaiement__WEBPACK_IMPORTED_MODULE_2__.ServicePaiement },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_ServiceCommande__WEBPACK_IMPORTED_MODULE_5__.ServiceCommande },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_4__.ServicePrinter }
];
PaiementCommandeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-paiement-commande',
        template: _raw_loader_paiement_commande_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_paiement_commande_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaiementCommandeComponent);



/***/ }),

/***/ 89875:
/*!*************************************************************************!*\
  !*** ./src/app/staff/components/dashboard/models/ClotureCommandeDTO.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClotureCommandeDTO": () => (/* binding */ ClotureCommandeDTO)
/* harmony export */ });
class ClotureCommandeDTO {
}


/***/ }),

/***/ 88370:
/*!*************************************************!*\
  !*** ./src/app/staff/models/ClotureCommande.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClotureCommande": () => (/* binding */ ClotureCommande)
/* harmony export */ });
class ClotureCommande {
}


/***/ }),

/***/ 36448:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/clientcommande/components/details-commande/details-commande.component.scss ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: #f5f5f3;\n}\n\n.footer ion-button {\n  width: 100%;\n}\n\n.row {\n  font-size: 12px;\n}\n\nth, td {\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtY29tbWFuZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6ImRldGFpbHMtY29tbWFuZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbi5mb290ZXIge1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5yb3d7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbnRoLHRke1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 13882:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/staff/components/caisse/components/clientcommande/components/paiement-commande/paiement-commande.component.scss ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaWVtZW50LWNvbW1hbmRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUNGIiwiZmlsZSI6InBhaWVtZW50LWNvbW1hbmRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 93481:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/clientcommande/components/details-commande/details-commande.component.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row *ngIf=\"serviceCommande.commandeDTOTemp.statut=='EN COURS'\">\r\n  <ion-col class=\"col-6\">\r\n    <ion-label color=\"secondary\">Code Cloture :</ion-label>\r\n  </ion-col>\r\n  <ion-col class=\"col-5\">\r\n    <ion-input class=\"w-100 bg-light\" type=\"text\" [(ngModel)] =\"code_cloture\"></ion-input>\r\n  </ion-col>\r\n  <ion-col class=\"col-1 ion-text-end\">\r\n    <ion-icon name=\"close\" color=\"secondary\" (click)=\"cancel()\"></ion-icon>\r\n  </ion-col>\r\n</ion-row>\r\n<ion-content>\r\n  <div  class=\"container\">\r\n    <div id=\"print-sections\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"invoice-title\">\r\n            <h6 class=\"text-center\">Commande : <strong>{{this.serviceCommande.commandeDTOTemp.referencecommande}}</strong> </h6>\r\n          </div>\r\n          <hr>\r\n          <ion-row class=\"text-center\">\r\n            <span class=\"text-danger\"> <strong class=\"text-dark\">Mode Commande :</strong> {{serviceCommande.commandeDTOTemp.modecommande}} </span><br>\r\n          </ion-row>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6 text-right\" *ngIf=\"this.serviceCommande.commandeDTOTemp.client\">\r\n              <address>\r\n                <strong>Client : {{this.serviceCommande.commandeDTOTemp.client.nomcomplet}}</strong><br>\r\n                Contact : {{this.serviceCommande.commandeDTOTemp.client.phone}}<br>\r\n                Email : {{this.serviceCommande.commandeDTOTemp.client.email}}\r\n              </address>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n              <address class=\"justify-content-end\">\r\n                <span class=\"text-dark\" > Mode de paiement:<strong [class]=\"serviceCommande.commandeDTOTemp.statut=='TERMINEE'?'text-success ':'text-danger'\">{{serviceCommande.commandeDTOTemp.payement.modepayement}}</strong></span>\r\n                <p>Commandé le :{{this.serviceCommande.commandeDTOTemp.datecommande | date:\"dd-MM-yyyy HH:mm\"}}</p>\r\n              </address>\r\n              <div class=\"justify-content-end\">\r\n                <span class=\"text-danger\"> <strong class=\"text-dark\">Statut :</strong> {{serviceCommande.commandeDTOTemp.payement.statut}} </span><br>\r\n              </div>\r\n              <div class=\"justify-content-end\">\r\n                <span class=\"text-danger\"> <strong class=\"text-dark\">Code cloture :</strong> {{serviceCommande.commandeDTOTemp.codeclotureboutique}} </span><br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              <h3 class=\"panel-title text-center\"><strong>Listes des produits</strong></h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-condensed\">\r\n                  <thead>\r\n                  <tr>\r\n                    <td><strong>Description</strong></td>\r\n                    <td class=\"text-center\"><strong>Prix Unitaire</strong></td>\r\n                    <td class=\"text-center\"><strong>Quantité</strong></td>\r\n                    <td class=\"text-right\"><strong>Total</strong></td>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let item of serviceCommande.commandeDTOTemp.cartItems\">\r\n                    <td>{{item.description}}</td>\r\n                    <td class=\"text-center\">{{item.prixunitaire}}</td>\r\n                    <td class=\"text-center\">{{item.quantite}}</td>\r\n                    <td class=\"text-right\">{{item.montant}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"text-right\"></td>\r\n                    <td class=\"thick-line text-center\" colspan=\"2\"><strong>Sous total</strong></td>\r\n                    <td class=\"thick-line text-right\" colspan=\"2\">{{this.serviceCommande.commandeDTOTemp.montantcommande}} FCFA</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"text-right\"></td>\r\n                    <td class=\"no-line text-center\" colspan=\"2\"><strong>Livraison</strong></td>\r\n                    <td class=\"no-line text-right\" colspan=\"2\">{{this.serviceCommande.commandeDTOTemp.fraislivraison}} FCFA</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"text-right\"></td>\r\n                    <td class=\"no-line text-center\" colspan=\"2\"><strong>Total</strong></td>\r\n                    <td class=\"no-line text-right text-danger\" colspan=\"2\">{{this.serviceCommande.commandeDTOTemp.montantcommande + serviceCommande.commandeDTOTemp.fraislivraison}} FCFA</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-item class=\"footer\" lines = \"none\">\r\n    <ion-button (click)=\"cancel()\" color=\"light\" expand=\"block\">Fermer</ion-button>\r\n    <ion-button *ngIf=\"serviceCommande.commandeDTOTemp.statut=='EN COURS'\"\r\n                (click)=\"cloturer_commande(serviceCommande.commandeDTOTemp.referencecommande)\" color=\"primary\" expand=\"block\">Cloturer ></ion-button>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 23955:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/caisse/components/clientcommande/components/paiement-commande/paiement-commande.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item lines=\"none\">\r\n        <ion-label color=\"primary\"> <strong>Choisir le mode de payement</strong></ion-label>\r\n        <ion-icon (click)=\"cancel()\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-justify-content-center\">\r\n      <ion-radio-group value=\"cash\">\r\n        <ion-item>\r\n          <ion-label>CASH</ion-label>\r\n          <ion-radio (click)=\"select('CASH')\" value=\"cash\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>MTN MOBILE MONEY</ion-label>\r\n          <ion-radio (click)=\"select('MTN MOBILE MONEY')\" value=\"momo\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"paiementService.affiche == 'MTN MOBILE MONEY'\">\r\n          <ion-label position=\"floating\">Entrer le numero : </ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            expand=\"block\"\r\n            [(ngModel)]=\"paiementService.momo\"\r\n            name=\"momo\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>ORANGE MONEY</ion-label>\r\n          <ion-radio (click)=\"select('ORANGE MONEY')\" value=\"om\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item  *ngIf=\"paiementService.affiche == 'ORANGE MONEY'\">\r\n          <ion-label position=\"floating\">Entrer le numero : </ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            expand=\"block\"\r\n            [(ngModel)]=\"paiementService.om\"\r\n            name=\"om\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-card-content>\r\n    <ion-card-subtitle>\r\n      <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (click)=\"onAction()\" (keydown.enter)=\"onAction()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n        Finaliser\r\n        <div *ngIf=\"is_loading\"><ion-spinner name=\"lines\"></ion-spinner></div>\r\n      </ion-button>\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n\r\n  <div style=\"margin-top: 5%; margin-left: 10%; margin-right: 10%\">\r\n    <ion-label color=\"primary\"><strong>Détail facture</strong></ion-label>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>Montant total : </ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"text-end\">\r\n        <ion-label color=\"secondary\"><strong>{{serviceCommande.commandeDTOTemp.montantcommande + serviceCommande.commandeDTOTemp.fraislivraison}} XAF</strong></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_staff_components_caisse_components_clientcommande_components_details-commande-37eff5.js.map