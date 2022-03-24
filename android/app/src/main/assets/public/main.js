(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 80133:
/*!*******************************!*\
  !*** ./src/app/Model/Cart.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
    constructor() {
        this.montanttotal = 0;
        this.cartItems = [];
    }
}


/***/ }),

/***/ 19950:
/*!***********************************!*\
  !*** ./src/app/Model/CartItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
    constructor() {
        this.montant = 0;
    }
}


/***/ }),

/***/ 2237:
/*!*************************************!*\
  !*** ./src/app/Model/ProduitDto.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProduitDto": () => (/* binding */ ProduitDto)
/* harmony export */ });
class ProduitDto {
    constructor() {
        this.quantite_tempon = 0;
    }
}


/***/ }),

/***/ 43077:
/*!**************************************!*\
  !*** ./src/app/Service/AdresseIP.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdresseIP": () => (/* binding */ AdresseIP)
/* harmony export */ });
class AdresseIP {
}
// static host="http://192.168.100.10:9009/";
//static host="https://digiposbackend.herokuapp.com/";
AdresseIP.host = "https://digishopbackend-staging.herokuapp.com/";


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'client',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./client/client.module */ 27808)).then(m => m.ClientPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'staff',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_staff_staff_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./staff/staff.module */ 79531)).then(m => m.StaffPageModule)
    },
    {
        path: 'tabclient',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabclient_tabclient_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabclient/tabclient.module */ 56579)).then(m => m.TabclientPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/components/Service/AuthenService */ 11531);






let AppComponent = class AppComponent {
    constructor(router, authenservice) {
        this.router = router;
        this.authenservice = authenservice;
        this.login();
    }
    login() {
        this.authenservice.verifierLocalStorage();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/components/Service/AuthenService */ 11531);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _shared_services_NotificationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/NotificationService */ 69846);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/MainService */ 35006);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ 28078);
/* harmony import */ var _staff_components_printerlist_printerlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff/components/printerlist/printerlist.component */ 44725);
/* harmony import */ var _client_Service_CartService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/Service/CartService */ 51714);
/* harmony import */ var _client_Service_BoutiqueService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/Service/BoutiqueService */ 42871);





















const SERVICES = [
    _shared_services_MainService__WEBPACK_IMPORTED_MODULE_4__.MainService,
    _shared_services_NotificationService__WEBPACK_IMPORTED_MODULE_3__.NotificationService,
    _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_6__.BluetoothSerial,
];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _staff_components_printerlist_printerlist_component__WEBPACK_IMPORTED_MODULE_7__.PrinterlistComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        ],
        providers: [
            _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__.BarcodeScanner,
            _client_Service_CartService__WEBPACK_IMPORTED_MODULE_8__.CartService,
            _client_Service_BoutiqueService__WEBPACK_IMPORTED_MODULE_9__.BoutiqueService,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            SERVICES
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 42871:
/*!***************************************************!*\
  !*** ./src/app/client/Service/BoutiqueService.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoutiqueService": () => (/* binding */ BoutiqueService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _Service_AdresseIP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/AdresseIP */ 43077);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let BoutiqueService = class BoutiqueService {
    constructor(http, authenService, router) {
        this.http = http;
        this.authenService = authenService;
        this.router = router;
    }
    getAllboutique() {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_1__.AdresseIP.host + 'boutiques/active').subscribe(data => {
            this.boutiques = data;
        }, error => {
            this.authenService.toastMessage(error.error.message);
        });
    }
    getAllBoutiquesByCategorie(categorie) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_1__.AdresseIP.host + 'boutiques/categorie/' + categorie).subscribe(data => {
            this.boutiques = data;
            this.router.navigateByUrl("client/boutiques");
        }, error => {
            this.authenService.toastMessage(error.error.message);
        });
    }
    getBoutiqueByName(boutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_1__.AdresseIP.host + 'getboutiquebyname/' + boutique);
    }
    getBoutiqueByqrcode(qrcode) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_1__.AdresseIP.host + 'boutiques/qrcode/' + qrcode).subscribe(data => {
            if (data) {
                this.boutique = data;
                this.router.navigateByUrl("client/boutiques");
            }
        });
    }
    getboutiqueByReference(referenceboutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_1__.AdresseIP.host + "findbyreference/" + referenceboutique);
    }
};
BoutiqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_0__.AuthenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
BoutiqueService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], BoutiqueService);



/***/ }),

/***/ 51714:
/*!***********************************************!*\
  !*** ./src/app/client/Service/CartService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Model_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Model/CartItem */ 19950);
/* harmony import */ var _Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/AdresseIP */ 43077);







let CartService = class CartService {
    constructor(http, authenService, router) {
        this.http = http;
        this.authenService = authenService;
        this.router = router;
        this.count_cart = 0;
    }
    ajouter_panier(produit, qty, action) {
        if ((produit.quantiteEnStock > 0 && produit.manageStock) || (produit.quantiteEnStock <= 0 && !produit.manageStock)) {
            this.cartitem = new _Model_CartItem__WEBPACK_IMPORTED_MODULE_1__.CartItem();
            this.cartitem.quantite = qty;
            this.cartitem.prixunitaire = produit.prixProduit;
            this.cartitem.description = produit.nomProduit;
            this.cartitem.typeaction = action;
            this.cartitem.idproduit = produit.idProduit;
            this.cartitem.produit = produit;
            let existe_shop;
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
                    }
                    else if (action == 'remove') {
                        this.authenService.utilisateur.cart.cartItems[index].quantite -= qty;
                        if (this.authenService.utilisateur.cart.cartItems[index].quantite == 0) {
                            this.authenService.utilisateur.cart.cartItems.splice(index, 1);
                        }
                    }
                    else if (action == 'delete') {
                        this.authenService.utilisateur.cart.cartItems.splice(index, 1);
                    }
                }
                else {
                    this.authenService.utilisateur.cart.cartItems.push(this.cartitem);
                }
                this.calcul_price();
            }
            else {
                this.authenService.toastMessage("Votre panier contient deja les produits de " + this.authenService.utilisateur.cart.cartItems[0].produit.nomboutique);
            }
        }
        else {
            this.authenService.toastMessage("Le produit " + produit.nomProduit + " n'existe plus en stock");
        }
    }
    calcul_price() {
        let icount = 0;
        let total = 0;
        if (this.authenService.utilisateur && this.authenService.utilisateur.cart.cartItems) {
            this.authenService.utilisateur.cart.cartItems.forEach(c => {
                c.montant = c.prixunitaire * c.quantite;
                total += c.montant;
                icount += 1;
            });
            this.count_cart = icount;
            this.authenService.utilisateur.cart.montanttotal = total;
        }
    }
    managecartAction(cartItemDTO) {
        if (this.authenService.utilisateur) {
            if (this.authenService.utilisateur.roles.length == 1) {
                cartItemDTO.idcart = this.authenService.utilisateur.cart.idcart;
            }
            else {
                cartItemDTO.idcart = this.authenService.user_vendeur.cart.idcart;
            }
            return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'cartaction', cartItemDTO).subscribe(data => {
                this.authenService.toastMessage("Action effectuée avec succes");
                localStorage.removeItem('utilisateur');
                localStorage.setItem('utilisateur', JSON.stringify(this.authenService.utilisateur));
            }, error => {
                this.authenService.toastMessage(error.error.message);
            });
        }
    }
    getPanier(idPanier) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'cart/' + idPanier);
    }
    delete_cart() {
        if (this.authenService.utilisateur) {
            this.is_loarding_delect = true;
            this.deleteAllItemOnCart().subscribe(data => {
                this.is_loarding_delect = false;
                this.authenService.utilisateur.cart = data;
                this.calcul_price();
                this.router.navigateByUrl("client/menuclient/acceuil");
                this.authenService.saveToken();
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.is_loarding_delect = false;
            });
        }
    }
    deleteAllItemOnCart() {
        if (this.authenService.utilisateur) {
            return this.http.delete(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'clearcart/' + this.authenService.utilisateur.cart.idcart);
        }
    }
    getcartById() {
        if (this.authenService.utilisateur) {
            return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'cart/' + this.authenService.utilisateur.cart.idcart).subscribe(data => {
                this.authenService.utilisateur.cart = data;
                this.calcul_price();
                this.authenService.saveToken();
            });
        }
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_0__.AuthenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], CartService);



/***/ }),

/***/ 2902:
/*!***************************************************!*\
  !*** ./src/app/configuration/apiUrl/urlConfig.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlConfig": () => (/* binding */ UrlConfig)
/* harmony export */ });
class UrlConfig {
}
UrlConfig.apiUrl = 'localhost:8080/';


/***/ }),

/***/ 11531:
/*!**********************************************************!*\
  !*** ./src/app/home/components/Service/AuthenService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenService": () => (/* binding */ AuthenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Service/AdresseIP */ 43077);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let AuthenService = class AuthenService {
    constructor(router, http, toastController) {
        this.router = router;
        this.http = http;
        this.toastController = toastController;
    }
    register(user) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "register", user);
    }
    requestPasswordReset(resert) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "password-request", resert);
    }
    login(user) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "login", user, { observe: 'response' });
    }
    getUser(user) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "connection/" + user);
    }
    getBoutique() {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "getboutiquebyname/" + this.utilisateur.referenceboutique).subscribe(data => {
            this.boutique = data;
        }, error => {
            this.toastMessage(error.error.message);
        });
    }
    getBoutiqueByLien() {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "getboutiquebylien/" + this.utilisateur.nomBoutique).subscribe(data => {
            this.boutique = data;
        }, error => {
            this.toastMessage(error.error.message);
        });
    }
    ConnectAccountInShop(username) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "connection/" + username + "/" + this.boutique.nomBoutique);
    }
    //cette methode permet de choisir la route de navigation apres le login
    navigationRoute(roles, remember) {
        if (roles.length == 5) {
            this.utilisateur.role = "admin";
            this.router.navigateByUrl("/admin");
        }
        else if (roles.length == 4) {
            this.utilisateur.role = "support";
            this.router.navigateByUrl("/monitoring");
        }
        else if (roles.length == 3) {
            this.utilisateur.role = "proprietaire";
            this.router.navigateByUrl("/staff/menustaff/accueilproprietaire");
        }
        else if (roles.length == 2) {
            this.utilisateur.role = "vendeur";
            this.router.navigateByUrl("/staff/menustaff/accueilvendeur");
        }
        else if (roles.length == 1) {
            this.utilisateur.role = "client";
            this.router.navigateByUrl("/client/menuclient/acceuil");
        }
    }
    toastMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    verifierLocalStorage() {
        this.utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.jwt = localStorage.getItem('token');
        if (this.utilisateur && this.jwt) {
            let jwthelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
            this.navigationRoute(jwthelper.decodeToken(this.jwt).roles, true);
        }
        else {
            this.router.navigateByUrl('/home/login');
        }
    }
    confirmpassword(confir_password) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "confirm-password", confir_password);
    }
    deconnexion() {
        this.utilisateur = null;
        localStorage.removeItem("token");
        localStorage.removeItem("utilisateur");
        this.router.navigateByUrl('');
    }
    updateuser(user) {
        return this.http.put(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_0__.AdresseIP.host + "update", user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Authorization': this.jwt }) });
    }
    saveToken() {
        localStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));
        localStorage.setItem('token', this.jwt);
    }
    getToken() {
        return localStorage.getItem('token');
    }
};
AuthenService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
AuthenService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthenService);



/***/ }),

/***/ 35006:
/*!************************************************!*\
  !*** ./src/app/shared/services/MainService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainService": () => (/* binding */ MainService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _NotificationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationService */ 69846);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _configuration_apiUrl_urlConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuration/apiUrl/urlConfig */ 2902);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);








let MainService = class MainService {
    constructor(notificationService, spinner, http) {
        this.notificationService = notificationService;
        this.spinner = spinner;
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(JSON.parse(localStorage.getItem('userConnect')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(localStorage.getItem('token'));
        this.currentToken = this.currentTokenSubject.asObservable();
    }
    get(url, token) {
        return this.http.get(_configuration_apiUrl_urlConfig__WEBPACK_IMPORTED_MODULE_2__.UrlConfig.apiUrl + url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Authorization': token }) });
    }
    postSimple(url, body) {
        return this.http.post(_configuration_apiUrl_urlConfig__WEBPACK_IMPORTED_MODULE_2__.UrlConfig.apiUrl + url, body);
    }
    post(url, body, token) {
        return this.http.post(_configuration_apiUrl_urlConfig__WEBPACK_IMPORTED_MODULE_2__.UrlConfig.apiUrl + url, body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Authorization': token }) });
    }
    put(url, body, token) {
        return this.http.put(_configuration_apiUrl_urlConfig__WEBPACK_IMPORTED_MODULE_2__.UrlConfig.apiUrl + url, body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Authorization': token }) });
    }
    delete(url, token) {
        return this.http.delete(_configuration_apiUrl_urlConfig__WEBPACK_IMPORTED_MODULE_2__.UrlConfig.apiUrl + url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Authorization': token }) });
    }
    ToastNotification(icon, msg) {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
        });
        Toast.fire({
            icon: icon,
            title: msg,
        });
    }
};
MainService.ctorParameters = () => [
    { type: _NotificationService__WEBPACK_IMPORTED_MODULE_0__.NotificationService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
MainService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], MainService);



/***/ }),

/***/ 69846:
/*!********************************************************!*\
  !*** ./src/app/shared/services/NotificationService.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ 49344);



let NotificationService = class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message = 'Opération effectuée avec succès', title = 'DigiShop') {
        this.toastr.success(message, title);
    }
    showError(message = "Erreur survenue lors du traitement. Bien vouloir rééssayer.", title = 'DigiShop') {
        this.toastr.error(message, title);
    }
    showInfo(message, title = 'DigiShop') {
        this.toastr.info(message, title);
    }
};
NotificationService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__.ToastrService }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], NotificationService);



/***/ }),

/***/ 44725:
/*!***********************************************************************!*\
  !*** ./src/app/staff/components/printerlist/printerlist.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterlistComponent": () => (/* binding */ PrinterlistComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_printerlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./printerlist.component.html */ 14917);
/* harmony import */ var _printerlist_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printerlist.component.scss */ 29835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ServicePrinter */ 34962);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/MainService */ 35006);







let PrinterlistComponent = class PrinterlistComponent {
    constructor(_modalController, printeService, mainService) {
        this._modalController = _modalController;
        this.printeService = printeService;
        this.mainService = mainService;
    }
    ngOnInit() {
        this.listPrinter();
    }
    dismiss() {
        this._modalController.dismiss();
    }
    listPrinter() {
        this.printeService.searchBluetoothPrinter()
            .then(resp => {
            //List of bluetooth device list
            this.printeService.bluetoothList = resp;
        });
    }
    //This will store selected bluetooth device mac address
    selectPrinter(macAddress) {
        //Selected printer macAddress stored here
        this.printeService.selectedPrinter = macAddress;
        localStorage.setItem("printer", macAddress);
        this.printeService.connectToBluetoothPrinter(macAddress);
        this.mainService.notificationService.showSuccess("Connexion à l'équipement " + macAddress + " effectué avec succès.");
    }
    refreshList() {
        this.printeService.searchBluetoothPrinter()
            .then(resp => {
            //List of bluetooth device list
            this.printeService.bluetoothList = resp;
        });
        if (this.printeService.bluetoothList.length >= 1) {
            this.mainService.notificationService.showSuccess("Actualisation effectuée");
        }
        else {
            this.mainService.notificationService.showError("Rééssayer...");
        }
    }
};
PrinterlistComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_ServicePrinter__WEBPACK_IMPORTED_MODULE_2__.ServicePrinter },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__.MainService }
];
PrinterlistComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-printerlist',
        template: _raw_loader_printerlist_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_printerlist_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrinterlistComponent);



/***/ }),

/***/ 79131:
/*!***************************************************!*\
  !*** ./src/app/staff/services/ServicePaiement.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePaiement": () => (/* binding */ ServicePaiement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let ServicePaiement = class ServicePaiement {
    constructor() {
    }
};
ServicePaiement.ctorParameters = () => [];
ServicePaiement = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], ServicePaiement);



/***/ }),

/***/ 62484:
/*!*************************************************!*\
  !*** ./src/app/staff/services/ServicePanier.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePanier": () => (/* binding */ ServicePanier)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _Model_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Model/Cart */ 80133);
/* harmony import */ var _Model_CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Model/CartItem */ 19950);
/* harmony import */ var _Service_AdresseIP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/AdresseIP */ 43077);







let ServicePanier = class ServicePanier {
    constructor(http, authenService) {
        this.http = http;
        this.authenService = authenService;
        this.panierCaisse = new _Model_Cart__WEBPACK_IMPORTED_MODULE_1__.Cart();
        this.cartItem = new _Model_CartItem__WEBPACK_IMPORTED_MODULE_2__.CartItem();
        this.panierTempList = [];
        this.index = 0;
    }
    deletePanierClient(idcart) {
        return this.http.delete(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_3__.AdresseIP.host + "clearcart/" + idcart);
    }
    savePanierClient(cart) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_3__.AdresseIP.host + "saveallcartbyclient", cart);
    }
    addItem(cI) {
        if (cI.produit.quantiteEnStock < 1 && cI.produit.manageStock && !(cI.produit.nomProduit.toLowerCase().indexOf("generique") > -1)) {
            this.authenService.toastMessage("La quantité en stock est insuffisante.");
        }
        else {
            let test = this.panierCaisse.cartItems.find(c => { return c.description == cI.description && c.produit == cI.produit; });
            if (test) {
                //Mise à jour de l'élément
                this.panierCaisse.cartItems.forEach(c => {
                    if (c.description == cI.description) {
                        c.quantite += 1;
                        c.montant = c.prixunitaire * c.quantite;
                        this.refreshPanier();
                    }
                });
            }
            else {
                //Ajout de l'élément
                this.panierCaisse.cartItems.push(cI);
                this.refreshPanier();
            }
        }
        console.log(this.panierCaisse);
    }
    refreshPanier() {
        let prix = 0;
        this.panierCaisse.cartItems.forEach(c => {
            c.montant = c.prixunitaire * c.quantite;
            prix += c.montant;
        });
        this.panierCaisse.montanttotal = prix;
    }
    updateQuantite(prod, quantite) {
        let cI = this.panierCaisse.cartItems.find(c => {
            return c.produit == prod && c.description == prod.nomProduit;
        });
        if (cI) {
            if (quantite == 1) {
                this.panierCaisse.cartItems.forEach(c => {
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
                this.panierCaisse.cartItems.forEach(c => {
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
        let test = this.panierCaisse.cartItems.findIndex(c => {
            return c.description == cI.description && c.produit == cI.produit;
        });
        if (test != -1) {
            this.panierCaisse.cartItems.splice(test, 1);
            this.refreshPanier();
        }
        else {
            this.authenService.toastMessage("Le produit n'existe pas dans le panier.");
        }
    }
    clearPanier() {
        if (this.panierCaisse.cartItems.length > 0) {
            this.panierCaisse.cartItems = [];
            this.refreshPanier();
            this.authenService.toastMessage("Suppression réussie");
        }
        else {
            this.authenService.toastMessage("Le panier est vide.");
        }
    }
    clearPanierSansNotif() {
        this.panierCaisse.cartItems = [];
        this.refreshPanier();
    }
};
ServicePanier.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_0__.AuthenService }
];
ServicePanier = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ServicePanier);



/***/ }),

/***/ 34962:
/*!**************************************************!*\
  !*** ./src/app/staff/services/ServicePrinter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePrinter": () => (/* binding */ ServicePrinter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ServicePanier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServicePanier */ 62484);
/* harmony import */ var _ServicePaiement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicePaiement */ 79131);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _ServiceProduit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceProduit */ 52773);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ 28078);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);








let ServicePrinter = class ServicePrinter {
    constructor(servicePanier, servicePaiment, bluetoothSerial, authenService, serviceProduit, barcodeScanner) {
        this.servicePanier = servicePanier;
        this.servicePaiment = servicePaiment;
        this.bluetoothSerial = bluetoothSerial;
        this.authenService = authenService;
        this.serviceProduit = serviceProduit;
        this.barcodeScanner = barcodeScanner;
        this.bluetoothList = [];
        this.printVente = "";
    }
    initializeTicketVente() {
        this.printVente = "";
        this.printVente += "\n \t \tTicket de caisse \n\n";
        this.printVente += "\n" + new Date().toString();
        this.printVente += "\n Boutique : " + this.authenService.boutique.nomBoutique;
        this.printVente += "\n Vendeur  : " + this.authenService.utilisateur.username;
        this.printVente += "\n --------------------------------------";
        this.printVente += "\n Designation \t Quantite \t Montant";
        this.servicePanier.panierCaisse.cartItems.forEach(c => {
            if (c.quantite != 0) {
                this.printVente += "\n " + c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0, 15) + "    " + c.quantite + "   " + "    " + c.montant;
            }
        });
        this.printVente += "\n Montant Total : \t" + this.servicePanier.panierCaisse.montanttotal;
        this.printVente += "\n Mode de paiement : \t" + this.servicePaiment.affiche;
        this.printVente += "\n \t Merci pour votre visite!!!";
        this.printVente += "\n \n \n \n \n \n";
        console.log(this.printVente);
    }
    initializeTicketVenteAfter(transaction) {
        this.printVente = "";
        let date = new Date(transaction.datetransaction);
        this.printVente = "";
        this.printVente += "\n \t \t {{DUPLICATA}} \n\n";
        this.printVente += "\n \t \tTicket de caisse  \n\n";
        this.printVente += "\n" + transaction.commande.referencecommande;
        this.printVente += "\n" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes();
        this.printVente += "\n Boutique : " + this.authenService.utilisateur.nomBoutique;
        this.printVente += "\n Vendeur  : " + this.authenService.utilisateur.username;
        this.printVente += "\n -----------------------------";
        this.printVente += "\n Designation \t Quantite \t Montant";
        transaction.commande.cartItems.forEach(c => {
            if (c.quantite != 0) {
                this.printVente += "\n " + c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0, 15) + " \t " + c.quantite + " \t" + " \t " + c.montant + "XAF";
            }
        });
        this.printVente += "\n Montant Total : \t" + transaction.commande.montantcommande;
        this.printVente += "\n \n Mode de paiement : \t" + transaction.typepaiement;
        this.printVente += "\n \t Merci pour votre visite!!!";
        this.printVente += "\n \n \n \n \n \n";
        console.log(this.printVente);
        //this.printer.isAvailable().then();
    }
    initializeTicketVenteBefore(transaction) {
        this.printVente = "";
        let date = new Date(transaction.datetransaction);
        this.printVente = "";
        this.printVente += "\n \t \tTicket de caisse  \n\n";
        this.printVente += "\n" + transaction.commande.referencecommande;
        this.printVente += "\n" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes();
        this.printVente += "\n Boutique : " + this.authenService.utilisateur.nomBoutique;
        this.printVente += "\n Vendeur  : " + this.authenService.utilisateur.username;
        this.printVente += "\n -------------------------------------";
        this.printVente += "\n Designation \t Quantite \t Montant";
        transaction.commande.cartItems.forEach(c => {
            if (c.quantite != 0) {
                this.printVente += "\n " + c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0, 15) + "  " + c.quantite + "  " + "  " + c.montant + "XAF";
            }
        });
        this.printVente += "\n Montant Total : \t" + transaction.commande.montantcommande + "XAF";
        this.printVente += "\n \n Mode de paiement : \t" + transaction.typepaiement;
        this.printVente += "\n \t Merci pour votre visite!!!";
        this.printVente += "\n \n \n \n \n \n";
        console.log(this.printVente);
        this.selectedPrinter = localStorage.getItem("printer");
        this.sendToBluetoothPrinter(this.selectedPrinter, this.printVente);
        //this.printer.isAvailable().then();
    }
    initializeTicketClient(cmd) {
        let date = new Date(cmd.datecommande);
        this.printVente = "";
        this.printVente += "\n \t Facture \n\n";
        this.printVente += "\n" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes();
        this.printVente += "\n Boutique : " + this.authenService.boutique.nomBoutique;
        this.printVente += "\n Contact : " + this.authenService.boutique.telephoneBoutique;
        this.printVente += "\n Vendeur  : " + this.authenService.utilisateur.username;
        this.printVente += "\n -------------------------------------";
        this.printVente += "\n Client  : " + this.authenService.user_vendeur.username;
        this.printVente += "\n -------------------------------------";
        this.printVente += "\n Designation \t Quantite \t Montant";
        cmd.cartItems.forEach(c => {
            this.printVente += "\n " + c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "\t" + c.quantite + "\t" + "\t" + c.montant;
        });
        this.printVente += "\n Frais de livraison :  \t" + cmd.fraislivraison;
        this.printVente += "\n Montant HT : \t" + ((cmd.montantcommande) - (cmd.montantcommande * 0.1925)).toFixed(1) + "XAF";
        this.printVente += "\n Montant TVA : \t" + (cmd.montantcommande * 0.1925).toFixed(1) + "XAF";
        this.printVente += "\n Montant TTC : \t" + cmd.montantcommande.toFixed(1) + "XAF";
        this.printVente += "\n Merci pour votre visite!!!";
        this.printVente += "\n \n \n";
        this.selectedPrinter = localStorage.getItem("printer");
        this.sendToBluetoothPrinter(this.selectedPrinter, this.printVente);
        console.log(this.printVente);
    }
    searchBluetoothPrinter() {
        return this.bluetoothSerial.list();
    }
    connectToBluetoothPrinter(macAddress) {
        //This will connect to bluetooth printer via the mac address provided
        return this.bluetoothSerial.connect(macAddress);
    }
    disconnectBluetoothPrinter() {
        //This will disconnect the current bluetooth connection
        return this.bluetoothSerial.disconnect();
    }
    sendToBluetoothPrinter(macAddress, data_string) {
        //1. Try connecting to bluetooth printer
        this.connectToBluetoothPrinter(macAddress)
            .subscribe(_ => {
            //2. Connected successfully
            console.log(data_string);
            this.bluetoothSerial.write(data_string)
                .then(_ => {
                //3. Print successful If you want to tell user print is successful, handle it here
                // 4. IMPORTANT! Disconnect bluetooth after printing
                this.authenService.toastMessage("Impression réussie");
                //if(test) this.disconnectBluetoothPrinter();
            }, err => {
                //If there is an error printing to bluetooth printer handle it here
                console.log(err);
                this.authenService.toastMessage("Echec d'impression");
            });
        }, err => {
            console.log(err);
            this.authenService.toastMessage("Echec d'impression");
            //if(test) this.disconnectBluetoothPrinter();
            //If there is an error connecting to bluetooth printer
            //handle it here
        });
    }
};
ServicePrinter.ctorParameters = () => [
    { type: _ServicePanier__WEBPACK_IMPORTED_MODULE_0__.ServicePanier },
    { type: _ServicePaiement__WEBPACK_IMPORTED_MODULE_1__.ServicePaiement },
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__.BluetoothSerial },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService },
    { type: _ServiceProduit__WEBPACK_IMPORTED_MODULE_3__.ServiceProduit },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__.BarcodeScanner }
];
ServicePrinter = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], ServicePrinter);



/***/ }),

/***/ 52773:
/*!**************************************************!*\
  !*** ./src/app/staff/services/ServiceProduit.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceProduit": () => (/* binding */ ServiceProduit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Model_ProduitDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Model/ProduitDto */ 2237);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/components/Service/AuthenService */ 11531);
/* harmony import */ var _Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/AdresseIP */ 43077);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/MainService */ 35006);







let ServiceProduit = class ServiceProduit {
    constructor(http, authenService, mainService) {
        this.http = http;
        this.authenService = authenService;
        this.mainService = mainService;
        this.produit = new _Model_ProduitDto__WEBPACK_IMPORTED_MODULE_0__.ProduitDto();
        this.produitList = [];
        this.produitListTemp = [];
        this.produitPopulaire = [];
        this.produitNonPopulaire = [];
        this.nomProduit = [];
        this.nomProduitFilter = [];
        this.categorieList = [];
        this.categorieListTemp = [];
        this.categorieNomList = [];
        this.categorieFilter = [];
    }
    getAllNomProduit(nomboutique) {
        this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + "getallnomproduitbyshop/" + nomboutique).subscribe(data => {
            console.log(data);
            this.nomProduit = data;
        }, error => {
            this.authenService.toastMessage(error.error.message);
            this.mainService.spinner.hide();
        }, () => {
            this.getAllProduit(nomboutique).subscribe(data => {
                console.log(data);
                this.produitList = data;
                this.produitListTemp = data;
                this.produitListTemp.forEach(p => {
                    p.quantite_tempon = 0;
                });
                this.mainService.spinner.hide();
            }, error => {
                this.authenService.toastMessage(error.error.message);
                this.mainService.spinner.hide();
            });
        });
    }
    getProduitByNomAndBoutique(nomproduit, nomboutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + "getproduitbynomproduitandboutique/" + nomproduit + "/" + nomboutique);
    }
    findAllByProduitPopulaire(boutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'getProduitPopulaire/' + boutique);
    }
    getAllProduit(nomboutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + "produit_shop/" + nomboutique);
    }
    getAllProduitPopulaire(nomboutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + "getProduitPopulaire/" + nomboutique);
    }
    getAllProduitNonPopulaire(nomboutique) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + "getProduitNotPopulaire/" + nomboutique);
    }
    getproductByBarcode(barecode) {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'getproduitbyqcode/' + barecode);
    }
    searchProduitByNom(nomproduit) {
        return this.produitList.find(p => { return p.nomProduit == nomproduit; });
    }
    getAllCategorie() {
        return this.http.get(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + "all/categorie/");
    }
    saveProduit(produitDto) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'saveproduit/', produitDto);
    }
    updateProduit(produitDto) {
        return this.http.put(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'updateproduit/', produitDto);
    }
    savestockbyShop(stock) {
        return this.http.post(_Service_AdresseIP__WEBPACK_IMPORTED_MODULE_2__.AdresseIP.host + 'manageStock', stock);
    }
};
ServiceProduit.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _home_components_Service_AuthenService__WEBPACK_IMPORTED_MODULE_1__.AuthenService },
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_3__.MainService }
];
ServiceProduit = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ServiceProduit);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 29835:
/*!*************************************************************************!*\
  !*** ./src/app/staff/components/printerlist/printerlist.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".alertModal ion-content.content {\n  align-content: center;\n}\n.alertModal ion-content.content div.scroll-content {\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 50%;\n  overflow: hidden;\n}\n.alertModal ion-content.content-ios {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.alertModal ion-content.content-ios div.scroll-content {\n  background-color: #f8f8f8;\n  border-radius: 13px;\n  padding: 16px;\n}\n.alertModal ion-content.content-md {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.alertModal ion-content.content-md div.scroll-content {\n  background-color: #fafafa;\n  border-radius: 2px;\n  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50ZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UscUJBQUE7QUFGTjtBQUdNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRFI7QUFLSTtFQUNFLG9DQUFBO0FBSE47QUFLTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSFI7QUFPSTtFQUNFLG9DQUFBO0FBTE47QUFPTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUFMUiIsImZpbGUiOiJwcmludGVybGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY3JlZGl0OiBodHRwczovL2ZvcnVtLmlvbmljZnJhbWV3b3JrLmNvbS90L2N1c3RvbS1tb2RhbC1hbGVydC13aXRoLWh0bWwtZm9ybS80Nzk4MC8zN1xyXG4uYWxlcnRNb2RhbCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgJi5jb250ZW50IHtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBkaXYuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuY29udGVudC1pb3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4gICAgICBkaXYuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5jb250ZW50LW1kIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgICAgZGl2LnNjcm9sbC1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDE2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n  <ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#731A23\" type = \"ball-newton-cradle\" [fullScreen] = \"true\"><p style=\"color: white\" > Patienter svp ... </p></ngx-spinner>\r\n</ion-app>\r\n");

/***/ }),

/***/ 14917:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/components/printerlist/printerlist.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title slot=\"start\">Gerer les imprimantes...</ion-title>\r\n    <ion-icon (click)=\"refreshList()\" slot=\"end\" size=\"large\" name=\"refresh-circle-outline\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-bounce >\r\n  <ion-card>\r\n    <ion-item *ngFor=\"let v of printeService.bluetoothList\">\r\n      <ion-label>{{v.name}}</ion-label>\r\n      <ion-button slot=\"end\" (click)=\"selectPrinter(v.id)\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-card-subtitle>\r\n      <ion-label color=\"primary\">Imprimante Active : <strong>{{printeService.selectedPrinter}}</strong></ion-label>\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-justify-content-center\">\r\n  <ion-button color=\"primary\" (click)=\"dismiss()\">Fermer</ion-button>\r\n</ion-footer>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map