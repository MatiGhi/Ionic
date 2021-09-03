(self["webpackChunktempo"] = self["webpackChunktempo"] || []).push([["src_app_ajustes_ajustes_module_ts"],{

/***/ 3953:
/*!***************************************************!*\
  !*** ./src/app/ajustes/ajustes-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPageRoutingModule": () => (/* binding */ AjustesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes.page */ 7778);




const routes = [
    {
        path: '',
        component: _ajustes_page__WEBPACK_IMPORTED_MODULE_0__.AjustesPage
    }
];
let AjustesPageRoutingModule = class AjustesPageRoutingModule {
};
AjustesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AjustesPageRoutingModule);



/***/ }),

/***/ 3016:
/*!*******************************************!*\
  !*** ./src/app/ajustes/ajustes.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPageModule": () => (/* binding */ AjustesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes-routing.module */ 3953);
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes.page */ 7778);







let AjustesPageModule = class AjustesPageModule {
};
AjustesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AjustesPageRoutingModule
        ],
        declarations: [_ajustes_page__WEBPACK_IMPORTED_MODULE_1__.AjustesPage]
    })
], AjustesPageModule);



/***/ }),

/***/ 7778:
/*!*****************************************!*\
  !*** ./src/app/ajustes/ajustes.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPage": () => (/* binding */ AjustesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ajustes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ajustes.page.html */ 5092);
/* harmony import */ var _ajustes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes.page.scss */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let AjustesPage = class AjustesPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['/login']);
        }
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
};
AjustesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AjustesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ajustes',
        template: _raw_loader_ajustes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ajustes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AjustesPage);



/***/ }),

/***/ 635:
/*!*******************************************!*\
  !*** ./src/app/ajustes/ajustes.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".less-mt-25 {\n  margin-top: -25px !important;\n}\n\n.user-email {\n  font-size: 0.8em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqdXN0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoiYWp1c3Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVzcy1tdC0yNSB7XG4gICAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcbn1cblxuLnVzZXItZW1haWwge1xuICAgIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 5092:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajustes/ajustes.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"ion-text-center\">\n        <h3>Ajustes</h3>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item [routerLink]=\"['/mis-pedidos']\">\n      <ion-label>Mis pedidos</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mis datos personales</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Métodos de pago</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Tempo Plus</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Crédito en cuenta</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Código promocional</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Invitar a un amigo</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Preguntas frecuentes</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Social</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Valora a Tempo</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\" offset=\"2\">\n        <ion-avatar class=\"ion-margin-start\">\n          <ion-icon name=\"football-outline\"></ion-icon>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\" offset=\"1\">\n        <ion-avatar class=\"ion-margin-start\">\n          <ion-icon name=\"football-outline\"></ion-icon>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"2\" offset=\"1\">\n        <ion-avatar class=\"ion-margin-start\">\n          <ion-icon name=\"football-outline\"></ion-icon>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"ion-text-center less-mt-25\">\n    <ion-chip outline color=\"primary\" (click)=\"logout()\">\n      <ion-label>Cerrar sesión</ion-label>\n    </ion-chip>\n  </div>\n  <div class=\"ion-text-center user-email\">\n      <ion-label>Conectado como j4rk0r@gmail.com</ion-label>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ajustes_ajustes_module_ts.js.map