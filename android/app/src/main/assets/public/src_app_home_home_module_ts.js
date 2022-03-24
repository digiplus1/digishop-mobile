(self["webpackChunkDigiShopInside"] = self["webpackChunkDigiShopInside"] || []).push([["src_app_home_home_module_ts"],{

/***/ 8375:
/*!******************************************************************************!*\
  !*** ./src/app/home/components/forgot-password/forgot-password.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.component.html */ 62285);
/* harmony import */ var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component.scss */ 32240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/AuthenService */ 11531);







let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, formBuilder, authenservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenservice = authenservice;
        this.submittedRegister = false;
        this.is_loading = false;
    }
    ngOnInit() {
        this.initregister();
    }
    get g() {
        return this.registerForm.controls;
    }
    initregister() {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    requestPassword() {
        this.submittedRegister = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.is_loading = true;
        this.authenservice.requestPasswordReset(this.registerForm.value).subscribe(data => {
            this.is_loading = false;
        }, error => {
            this.is_loading = false;
            this.authenservice.toastMessage(error.error.message);
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService }
];
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ 52093:
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.component.html */ 81468);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 1730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigate(id) {
        if (id == 1) {
            this.router.navigateByUrl("/home/register");
        }
        else if (id == 2) {
            this.router.navigateByUrl("/home/login");
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeComponent);



/***/ }),

/***/ 41024:
/*!**********************************************************!*\
  !*** ./src/app/home/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 51070);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 14201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/AuthenService */ 11531);







let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, authenservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenservice = authenservice;
        this.submittedRegister = false;
        this.is_loading = false;
        this.login = "";
        this.password = "";
        this.isTypePassword = true;
    }
    ngOnInit() {
        this.initregister();
    }
    onChange() {
        this.isTypePassword = !this.isTypePassword;
    }
    get g() {
        return this.registerForm.controls;
    }
    initregister() {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
        });
    }
    onRegister() {
        this.submittedRegister = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.is_loading = true;
        this.authenservice.login(this.registerForm.value).subscribe(data => {
            this.authenservice.jwt = data.headers.get("Authorization");
            this.authenservice.getUser(this.registerForm.value.username).subscribe(use => {
                this.is_loading = false;
                this.authenservice.utilisateur = use;
                this.authenservice.saveToken();
                this.authenservice.verifierLocalStorage();
            }, error => {
                this.is_loading = false;
                this.authenservice.toastMessage(error.error.message);
            });
        }, error => {
            this.is_loading = false;
            this.authenservice.toastMessage("login ou mot de passe incorrect");
        });
    }
    goToRegister() {
        this.router.navigateByUrl("/home/register");
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _Service_AuthenService__WEBPACK_IMPORTED_MODULE_2__.AuthenService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginComponent);



/***/ }),

/***/ 32172:
/*!****************************************************************!*\
  !*** ./src/app/home/components/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.component.html */ 77201);
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ 84217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Model_Utilisateur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Model/Utilisateur */ 2283);
/* harmony import */ var _Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/AuthenService */ 11531);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 37673);









let RegisterComponent = class RegisterComponent {
    constructor(router, formBuilder, authenservice) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenservice = authenservice;
        this.submittedRegister = false;
        this.user = new _Model_Utilisateur__WEBPACK_IMPORTED_MODULE_2__.Utilisateur();
        this.isLoading = false;
        this.password = "";
    }
    ngOnInit() {
        this.initregister();
    }
    get g() {
        return this.registerForm.controls;
    }
    initregister() {
        this.registerForm = this.formBuilder.group({
            /*    nomcomplet: ['', Validators.required],
                username: ['', Validators.required],
                acceptTerms: [false, Validators.requiredTrue],
                email: ['', [Validators.required, Validators.email]],*/
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
        });
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.image = null;
            yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64,
            }).then(i => {
                this.image = "data:image/png;base64," + i.base64String;
            });
        });
    }
    ;
    onRegister() {
        this.submittedRegister = true;
        if (this.registerForm.invalid) {
            return;
        }
        if (this.registerForm.value.password2 == this.registerForm.value.password) {
            this.user = this.registerForm.value;
            this.user.client = true;
            this.user.client = true;
            this.isLoading = true;
            this.authenservice.register(this.user).subscribe(data => {
                this.isLoading = false;
                this.authenservice.toastMessage("Création reussi");
                this.router.navigateByUrl('/home/login');
            }, error => {
                this.isLoading = false;
                this.authenservice.toastMessage(error.error.message);
            });
        }
        else {
            this.password = "Les mots de passes ne sont pas identique";
        }
    }
    goTologin() {
        this.router.navigateByUrl("/home/login");
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _Service_AuthenService__WEBPACK_IMPORTED_MODULE_3__.AuthenService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterComponent);



/***/ }),

/***/ 57777:
/*!****************************************************************************!*\
  !*** ./src/app/home/components/reset-password/reset-password.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset-password.component.html */ 27769);
/* harmony import */ var _reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss */ 27938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() { }
    ngOnInit() { }
};
ResetPasswordComponent.ctorParameters = () => [];
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 41024);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 32172);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 8375);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 57777);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ 52093);









const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: '',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
            },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
            },
            {
                path: 'forgot-password',
                component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent,
            },
            {
                path: 'reset-password',
                component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 41024);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ 32172);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 8375);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 57777);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 52093);
/* harmony import */ var _services_ConnexionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/ConnexionService */ 6666);













const COMPONENTS = [
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
    _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
    _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent,
    _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent,
    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent
];
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, COMPONENTS],
        exports: COMPONENTS,
        providers: [
            _services_ConnexionService__WEBPACK_IMPORTED_MODULE_7__.ConnexionService,
        ]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 6666:
/*!***************************************************!*\
  !*** ./src/app/home/services/ConnexionService.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnexionService": () => (/* binding */ ConnexionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_MainService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/MainService */ 35006);



let ConnexionService = class ConnexionService {
    constructor(mainService) {
        this.mainService = mainService;
    }
};
ConnexionService.ctorParameters = () => [
    { type: _shared_services_MainService__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
ConnexionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], ConnexionService);



/***/ }),

/***/ 32240:
/*!********************************************************************************!*\
  !*** ./src/app/home/components/forgot-password/forgot-password.component.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n}\nion-toolbar ion-title {\n  font-weight: bold;\n  font-size: 15px;\n  color: #010100;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content #header {\n  margin-top: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 8px solid #ffffff;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLHVCQUFBO0FBRUo7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjtBQUVBO0VBQ0UscUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVOO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtBQUNOO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBQ047QUFDTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFBTiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDEwMTAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG4gICNoZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiA4cHggc29saWQgI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgI2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDowcHg7XHJcblxyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1730:
/*!**********************************************************!*\
  !*** ./src/app/home/components/home/home.component.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 14201:
/*!************************************************************!*\
  !*** ./src/app/home/components/login/login.component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 8px solid #ffffff;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UscUJBQUE7QUFDSjtBQUFJO0VBQ0UsdUJBQUE7QUFFTjtBQUVFO0VBQ0UscUJBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQURNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR1I7QUFETTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUdSO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFNO0VBQ0UsZUFBQTtBQUVSO0FBQU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBRVI7QUFBUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRVY7QUFDTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFDUiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG4gICAgI2hlYWRlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgICB9XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiA4cHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2Zvcm17XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6MHB4O1xyXG5cclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 84217:
/*!******************************************************************!*\
  !*** ./src/app/home/components/register/register.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-icon {\n  font-size: 25px;\n  font-weight: bold;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content #header {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #header img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 8px solid #ffffff;\n}\nion-content #form {\n  margin-top: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-text {\n  font-size: 10px;\n}\nion-content #form ion-item {\n  border-radius: 50px;\n  height: 45px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height:0px;\n}\nion-content #form ion-item ion-input {\n  font-size: 18px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\nion-content #form ion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\nion-content #form ion-button {\n  margin-top: 20px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUo7QUFBRTtFQUNFLHVCQUFBO0FBRUo7QUFFQTtFQUVFLHFCQUFBO0FBQUY7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRU47QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUNNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDUjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQUFOIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1idXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbiAgI2hlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6MHB4O1xyXG5cclxuICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 27938:
/*!******************************************************************************!*\
  !*** ./src/app/home/components/reset-password/reset-password.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ 62285:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button default-href color=\"primary\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>MOT DE PASSE OUBLIE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n\r\n    <img src=\"./assets/images/forgotpassword.png\">\r\n\r\n  </div>\r\n  <form id=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"requestPassword()\">\r\n    <p>Entrer votre email, vous recevrez un mail vous présentant la procédure pour réinitialiser votre mot de passe.</p>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input type=\"number\" formControlName=\"email\" placeholder=\"* Téléphone\"></ion-input>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" [disabled]=\"is_loading==true\"  class=\"ion-margin-top text-secondary\" (keydown.enter)=\"requestPassword()\"color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Valider\r\n      <ion-spinner name=\"lines\" *ngIf=\"is_loading\"></ion-spinner>\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 81468:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home/home.component.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content> <!--style=\"&#45;&#45;background : #ebebeb\"-->\r\n    <div class=\"img-fluid text-center\">\r\n      <img style=\"width: 45%; height: 35%; margin-top: 15%; object-fit: contain\" src=\"./assets/icon/favicon.png\" alt=\"\"/>\r\n    </div>\r\n  <div>\r\n    <img style=\"height: 150px; width: 100%\" src=\"./assets/images/shopping-online.jpg\" alt=\"\"/>\r\n  </div>\r\n  <div class=\"buttons\" style=\"margin-top: 20%; margin-left: 12%; margin-right: 12%\">\r\n    <ion-button (click)=\"navigate(1)\" class=\"ion-margin-top\" color=\"secondary\" type=\"submit\" expand=\"block\">\r\n      S' inscrire\r\n    </ion-button>\r\n\r\n    <ion-button (click)=\"navigate(2)\"  class=\"ion-margin-top\" color=\"primary\" type=\"submit\" expand=\"block\">\r\n      Se connecter\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 51070:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/login/login.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\">\r\n     <a routerLink=\"/home/forgot-password\">  Mot de passe oublié</a>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"danger\" (click)=\"goToRegister()\">\r\n        S'inscrire\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <h1>Connexion</h1>\r\n    <img src=\"./assets/icon/favicon.png\">\r\n  </div>\r\n  <form id=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input formControlName=\"username\" placeholder=\"Téléphone\" type=\"number\"\r\n                 [ngClass]=\"{ 'is-invalid': submittedRegister && g.username.errors }\"></ion-input>\r\n      <ion-icon slot=\"end\" color=\"primary\" name=\"person-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"submittedRegister && g.username.errors\">\r\n      <p class=\"error\" *ngIf=\"g.username.errors.required\">*Pseudo est obligatoire</p>\r\n    </ion-text>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input [type]=\"isTypePassword?'password':'text'\" formControlName=\"password\" placeholder=\"password\"></ion-input>\r\n      <ion-icon (click)=\"onChange()\" [name]=\"isTypePassword? 'eye-off-outline':'eye-outline'\" slot=\"end\"\r\n                [color]=\"isTypePassword?'medium':'primary'\"></ion-icon>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\"\r\n              *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">\r\n      <p class=\"error\" *ngIf=\"g.password.invalid && g.password.errors.required\">\r\n        * S'il vous plait entrez votre mot de passe </p>\r\n      <p class=\"error\" *ngIf=\"g.password.dirty\">* Le mot de passe doit comporter au moins 8 caractères</p>\r\n    </ion-text>\r\n    <ion-button expand=\"block\" [disabled]=\"is_loading==true\" (keydown.enter)=\"onRegister()\" color=\"primary\" shape=\"round\" type=\"submit\">\r\n      Se connecter\r\n      <ion-spinner name=\"lines\" *ngIf=\"is_loading\"></ion-spinner>\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ 77201:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/register/register.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\">\r\n        <ion-icon (click)=\"takePicture()\" name=\"camera-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"goTologin()\">\r\n        Se connecter\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form id=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\r\n    <div id=\"header\">\r\n      <img [src]=\"image?image:'assets/img/users.png'\">\r\n    </div>\r\n\r\n    <!--<ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input formControlName=\"nomcomplet\"  type=\"text\" placeholder=\"Nom complet\" [ngClass]=\"{ 'is-invalid': submittedRegister && g.nomcomplet.errors }\"></ion-input>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"submittedRegister && g.nomcomplet.errors\">\r\n      <p class=\"error\" *ngIf=\"g.nomcomplet.errors.required\">*Le nom complet est obligatoire</p>\r\n    </ion-text>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input formControlName=\"username\" placeholder=\"Pseudo\" [ngClass]=\"{ 'is-invalid': submittedRegister && g.username.errors }\"></ion-input>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"submittedRegister && g.username.errors\">\r\n      <p class=\"error\" *ngIf=\"g.username.errors.required\">*Pseudo est obligatoire</p>\r\n    </ion-text>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input formControlName=\"email\" placeholder=\"* E-mail\"></ion-input>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"submittedRegister && !g.email.valid\">\r\n      <p class=\"error\" >*E-mail doit être une adresse e-mail valides</p>\r\n    </ion-text>\r\n-->\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input type=\"number\" formControlName=\"phone\" placeholder=\"Contact\" ></ion-input>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"submittedRegister && g.phone.errors\">\r\n      <p class=\"error\">*Le contact est Obligatoire</p>\r\n    </ion-text>\r\n\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"password\" ></ion-input>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">\r\n      <p class=\"error\" *ngIf=\"registerForm.get('password').invalid && registerForm.get('password').errors.required\">*Please enter your password</p>\r\n      <p class=\"error\" *ngIf=\"registerForm.get('password').dirty\">*Password must be of atleast 8 charaters</p>\r\n    </ion-text>\r\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n      <ion-input type=\"password\" formControlName=\"password2\" placeholder=\"Confirm password\" ></ion-input>\r\n    </ion-item>\r\n    <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"!g.password2.valid && g.password2.touched || g.password.value!=g.password2.value\">\r\n      <p class=\"error\" *ngIf=\"g.password2.invalid && g.password2.errors.required\">*Please enter your password</p>\r\n      <p class=\"error\" *ngIf=\"g.password2.value!=g.password2.value\">*Le mot de passe n'est pas identique</p>\r\n    </ion-text>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-control custom-checkbox\">\r\n        <input class=\"custom-control-input\" formControlName=\"acceptTerms\" type=\"checkbox\"/>\r\n        <label class=\"custom-control-label\"><a routerLink=\"/thermecondition\" class=\"text-muted\">J'acceptez les thermes et conditions.</a></label>\r\n        <ion-text class=\"ion-text-left\" color=\"danger\" *ngIf=\"g.acceptTerms.invalid\">\r\n          <p class=\"error\">* Bien vouloir accepter</p>\r\n        </ion-text>\r\n      </div>\r\n    </div>\r\n    <ion-button expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"isLoading==true\" (keydown.enter)=\"onRegister()\">S'enregister\r\n      <ion-spinner name=\"lines\" *ngIf=\"isLoading\"></ion-spinner>\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 27769:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/reset-password/reset-password.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\r\n  reset-password works!\r\n</p>\r\n");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet></ion-router-outlet>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map