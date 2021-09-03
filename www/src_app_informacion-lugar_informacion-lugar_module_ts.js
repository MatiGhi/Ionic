(self["webpackChunktempo"] = self["webpackChunktempo"] || []).push([["src_app_informacion-lugar_informacion-lugar_module_ts"],{

/***/ 7911:
/*!***********************************************************************!*\
  !*** ./src/app/informacion-lugar/informacion-lugar-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionLugarPageRoutingModule": () => (/* binding */ InformacionLugarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _informacion_lugar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-lugar.page */ 4300);




const routes = [
    {
        path: '',
        component: _informacion_lugar_page__WEBPACK_IMPORTED_MODULE_0__.InformacionLugarPage
    }
];
let InformacionLugarPageRoutingModule = class InformacionLugarPageRoutingModule {
};
InformacionLugarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformacionLugarPageRoutingModule);



/***/ }),

/***/ 9769:
/*!***************************************************************!*\
  !*** ./src/app/informacion-lugar/informacion-lugar.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionLugarPageModule": () => (/* binding */ InformacionLugarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _informacion_lugar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-lugar-routing.module */ 7911);
/* harmony import */ var _informacion_lugar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion-lugar.page */ 4300);







let InformacionLugarPageModule = class InformacionLugarPageModule {
};
InformacionLugarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _informacion_lugar_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformacionLugarPageRoutingModule
        ],
        declarations: [_informacion_lugar_page__WEBPACK_IMPORTED_MODULE_1__.InformacionLugarPage]
    })
], InformacionLugarPageModule);



/***/ }),

/***/ 4300:
/*!*************************************************************!*\
  !*** ./src/app/informacion-lugar/informacion-lugar.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionLugarPage": () => (/* binding */ InformacionLugarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_informacion_lugar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./informacion-lugar.page.html */ 2916);
/* harmony import */ var _informacion_lugar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion-lugar.page.scss */ 7690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ 6297);








let InformacionLugarPage = class InformacionLugarPage {
    constructor(geolocation, loadingCtrl, callNumber, launchNavigator) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.mapRef = null;
    }
    ngOnInit() {
        this.loadMap();
    }
    loadMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //const loading = await this.loadingCtrl.create();
            //loading.present();
            const myLatLng = yield this.getLocation();
            const mapEle = document.getElementById('map');
            this.mapRef = new google.maps.Map(mapEle, {
                center: myLatLng,
                zoom: 17
            });
            google.maps.event
                .addListenerOnce(this.mapRef, 'idle', () => {
                //loading.dismiss();
                this.addMaker(myLatLng.lat, myLatLng.lng);
            });
        });
    }
    addMaker(lat, lng) {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.mapRef,
            title: 'Hello World!'
        });
    }
    getLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let coordenadas = {
                lat: null,
                lng: null
            };
            yield this.geolocation.getCurrentPosition().then((res) => {
                coordenadas.lat = res.coords.latitude;
                coordenadas.lng = res.coords.longitude;
            }).catch((error) => {
                console.log('error: ', error);
            });
            return coordenadas;
        });
    }
    llamar() {
        this.callNumber.callNumber('912993220', true)
            .then(res => console.log('llamando: ', res))
            .catch(err => console.log('Error: ', err));
    }
    navegar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const myLatLng = yield this.getLocation();
            let options = {
                start: [myLatLng.lat, myLatLng.lng],
                app: this.launchNavigator.APP.GOOGLE_MAPS
            };
            this.launchNavigator.navigate('Gualeguaychu', options)
                .then(success => console.log('Launched navigator', success), error => console.log('Error launching navigator', error));
        });
    }
};
InformacionLugarPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__.LaunchNavigator }
];
InformacionLugarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-informacion-lugar',
        template: _raw_loader_informacion_lugar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_informacion_lugar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InformacionLugarPage);



/***/ }),

/***/ 7690:
/*!***************************************************************!*\
  !*** ./src/app/informacion-lugar/informacion-lugar.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#map {\n  width: 100%;\n  height: 100%;\n  position: initial !important;\n}\n\nion-card-content {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWFjaW9uLWx1Z2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJpbmZvcm1hY2lvbi1sdWdhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ 2916:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/informacion-lugar/informacion-lugar.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"ion-text-center\">\n        <h3>Nombre del restaurante</h3>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div id=\"map\"></div>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            <b>Información</b>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item (click)=\"navegar()\">\n          <ion-label>\n            <b>Cómo llegar</b>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item (click)=\"llamar()\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n          <ion-label>\n            <b>912 993 220</b>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-icon name=\"navigate-outline\"></ion-icon>\n          <ion-label>\n            Calle Oriente 46, 13700, Tomelloso\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label size=\"12\">\n            <h2><ion-icon name=\"time-outline\"></ion-icon><b> Domingo</b></h2>\n            <p>10:00 - 12:00</p>\n            <p>19:00 - 21:00</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>\n            <h2><ion-icon name=\"time-outline\"></ion-icon><b> Sábado</b></h2>\n            <p>10:00 - 17:00</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>\n            <h2><ion-icon name=\"time-outline\"></ion-icon><b> Lunes a Viernes</b></h2>\n            <p>8:00 - 15:00</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"secondary\">Realizar reserva</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_informacion-lugar_informacion-lugar_module_ts.js.map