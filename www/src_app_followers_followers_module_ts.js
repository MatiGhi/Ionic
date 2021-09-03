(self["webpackChunktempo"] = self["webpackChunktempo"] || []).push([["src_app_followers_followers_module_ts"],{

/***/ 4691:
/*!*******************************************************!*\
  !*** ./src/app/followers/followers-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowersPageRoutingModule": () => (/* binding */ FollowersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _followers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followers.page */ 7061);




const routes = [
    {
        path: '',
        component: _followers_page__WEBPACK_IMPORTED_MODULE_0__.FollowersPage
    }
];
let FollowersPageRoutingModule = class FollowersPageRoutingModule {
};
FollowersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FollowersPageRoutingModule);



/***/ }),

/***/ 5129:
/*!***********************************************!*\
  !*** ./src/app/followers/followers.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowersPageModule": () => (/* binding */ FollowersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _followers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followers-routing.module */ 4691);
/* harmony import */ var _followers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followers.page */ 7061);







let FollowersPageModule = class FollowersPageModule {
};
FollowersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _followers_routing_module__WEBPACK_IMPORTED_MODULE_0__.FollowersPageRoutingModule
        ],
        declarations: [_followers_page__WEBPACK_IMPORTED_MODULE_1__.FollowersPage]
    })
], FollowersPageModule);



/***/ }),

/***/ 7061:
/*!*********************************************!*\
  !*** ./src/app/followers/followers.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowersPage": () => (/* binding */ FollowersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_followers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./followers.page.html */ 7110);
/* harmony import */ var _followers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followers.page.scss */ 9775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let FollowersPage = class FollowersPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        /*  if(localStorage.getItem('token') === null) {
           this.router.navigate(['/login']);
         } */
    }
};
FollowersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FollowersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-followers',
        template: _raw_loader_followers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_followers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FollowersPage);



/***/ }),

/***/ 9775:
/*!***********************************************!*\
  !*** ./src/app/followers/followers.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb2xsb3dlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7110:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"ion-text-center\">\n        <h3>Followers</h3>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-finn.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>Kevin Noboa</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\" color=\"light\">Eliminar</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-han.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>Mattie Blooman</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-rey.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-luke.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>I'm a big deal</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-finn.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>Kevin Noboa</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-han.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>Mattie Blooman</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-rey.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\" color=\"light\">Eliminar</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-luke.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>I'm a big deal</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-finn.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>Kevin Noboa</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-han.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>Mattie Blooman</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\" color=\"light\">Eliminar</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-rey.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-luke.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>I'm a big deal</h3>\n      </ion-label>\n      <ion-label>\n        <ion-button size=\"small\">Seguir</ion-button>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_followers_followers_module_ts.js.map