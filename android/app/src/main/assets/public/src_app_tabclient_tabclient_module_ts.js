(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_tabclient_tabclient_module_ts"],{

/***/ 90008:
/*!*******************************************************!*\
  !*** ./src/app/tabclient/tabclient-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabclientPageRoutingModule": () => (/* binding */ TabclientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabclient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabclient.page */ 44113);




const routes = [
    {
        path: '',
        component: _tabclient_page__WEBPACK_IMPORTED_MODULE_0__.TabclientPage,
        children: []
    }
];
let TabclientPageRoutingModule = class TabclientPageRoutingModule {
};
TabclientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabclientPageRoutingModule);



/***/ }),

/***/ 56579:
/*!***********************************************!*\
  !*** ./src/app/tabclient/tabclient.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabclientPageModule": () => (/* binding */ TabclientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tabclient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabclient-routing.module */ 90008);
/* harmony import */ var _tabclient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabclient.page */ 44113);







let TabclientPageModule = class TabclientPageModule {
};
TabclientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabclientPageRoutingModule
        ],
        declarations: [_tabclient_page__WEBPACK_IMPORTED_MODULE_1__.TabclientPage]
    })
], TabclientPageModule);



/***/ }),

/***/ 44113:
/*!*********************************************!*\
  !*** ./src/app/tabclient/tabclient.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabclientPage": () => (/* binding */ TabclientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabclient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabclient.page.html */ 12168);
/* harmony import */ var _tabclient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabclient.page.scss */ 88832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabclientPage = class TabclientPage {
    constructor() { }
    ngOnInit() {
    }
};
TabclientPage.ctorParameters = () => [];
TabclientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabclient',
        template: _raw_loader_tabclient_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabclient_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabclientPage);



/***/ }),

/***/ 88832:
/*!***********************************************!*\
  !*** ./src/app/tabclient/tabclient.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJjbGllbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 12168:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabclient/tabclient.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"panier\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"favorite\">\r\n      <ion-icon name=\"heart-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabclient_tabclient_module_ts.js.map