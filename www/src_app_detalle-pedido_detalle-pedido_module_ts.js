(self["webpackChunktempo"] = self["webpackChunktempo"] || []).push([["src_app_detalle-pedido_detalle-pedido_module_ts"],{

/***/ 4782:
/*!*****************************************************************!*\
  !*** ./src/app/detalle-pedido/detalle-pedido-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallePedidoPageRoutingModule": () => (/* binding */ DetallePedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-pedido.page */ 1505);




const routes = [
    {
        path: '',
        component: _detalle_pedido_page__WEBPACK_IMPORTED_MODULE_0__.DetallePedidoPage
    }
];
let DetallePedidoPageRoutingModule = class DetallePedidoPageRoutingModule {
};
DetallePedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetallePedidoPageRoutingModule);



/***/ }),

/***/ 2019:
/*!*********************************************************!*\
  !*** ./src/app/detalle-pedido/detalle-pedido.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallePedidoPageModule": () => (/* binding */ DetallePedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _detalle_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-pedido-routing.module */ 4782);
/* harmony import */ var _detalle_pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-pedido.page */ 1505);







let DetallePedidoPageModule = class DetallePedidoPageModule {
};
DetallePedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallePedidoPageRoutingModule
        ],
        declarations: [_detalle_pedido_page__WEBPACK_IMPORTED_MODULE_1__.DetallePedidoPage]
    })
], DetallePedidoPageModule);



/***/ }),

/***/ 1505:
/*!*******************************************************!*\
  !*** ./src/app/detalle-pedido/detalle-pedido.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallePedidoPage": () => (/* binding */ DetallePedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-pedido.page.html */ 4701);
/* harmony import */ var _detalle_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-pedido.page.scss */ 3098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DetallePedidoPage = class DetallePedidoPage {
    constructor() { }
    ngOnInit() {
    }
};
DetallePedidoPage.ctorParameters = () => [];
DetallePedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detalle-pedido',
        template: _raw_loader_detalle_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetallePedidoPage);



/***/ }),

/***/ 3098:
/*!*********************************************************!*\
  !*** ./src/app/detalle-pedido/detalle-pedido.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLXBlZGlkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4701:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-pedido/detalle-pedido.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"ion-text-center\">\n        <h3>BurgaZone</h3>\n        <h6><ion-icon name=\"location-outline\"></ion-icon>C/ Avenida Antonio Huertas, 24</h6>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <div class=\"ion-text-center\">\n        <h4>Estado: En preparación</h4>\n        <h2>Pedido:#2123</h2>\n        <h4>18/04/2020 - 20:41</h4>\n        <p>¿Algún problema con tu pedido?</p>\n      </div>\n\n      <ion-item color=\"primary\">\n        <ion-label>Entrantes</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Finn</h2>\n          <h3>I'm a big deal</h3>\n          <p>Listen, I've had a pretty messed up day...</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Finn</h2>\n          <h3>I'm a big deal</h3>\n          <p>Listen, I've had a pretty messed up day...</p>\n        </ion-label>\n      </ion-item>\n      \n      <ion-item color=\"primary\">\n        <ion-label>Segundos</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Finn</h2>\n          <h3>I'm a big deal</h3>\n          <p>Listen, I've had a pretty messed up day...</p>\n        </ion-label>\n      </ion-item>\n\n\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_detalle-pedido_detalle-pedido_module_ts.js.map