(self["webpackChunktempo"] = self["webpackChunktempo"] || []).push([["src_app_login_login_module_ts"],{

/***/ 9328:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 7393);

function pairwise() {
    return (source) => source.lift(new PairwiseOperator());
}
class PairwiseOperator {
    call(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    }
}
class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination) {
        super(destination);
        this.hasPrev = false;
    }
    _next(value) {
        let pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    }
}
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/user */ 5783);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/network.service */ 2982);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9328);










let LoginPage = class LoginPage {
    constructor(_userService, router, route, networkService, changeRef) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.networkService = networkService;
        this.changeRef = changeRef;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__.User('', '');
    }
    ngOnInit() {
        this.networkSubscriber();
        // if(localStorage.getItem('token') !== null) {
        //   this.router.navigate(['/home/pedir']);
        //   /* alert(localStorage.getItem('token'));
        //   this.route.params.subscribe(() => {
        //   }); */
        // }
    }
    onSubmit() {
        this.router.navigate(['/home/pedir']);
        // this._userService.login(this.user).subscribe(
        //   response => {
        //     console.log(response);
        //     if(response.errnro == 0 && response.msg == "Success.") {
        //       localStorage.setItem('token', response.data.token);
        //       this.router.navigate(['/home/pedir']);
        //     }
        //   },
        //   error => {
        //     this.error = error.error;
        //   }
        // );
    }
    networkSubscriber() {
        this.networkService
            .onNetworkChange()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300))
            .subscribe((connected) => {
            this.conectado = Boolean(Number(connected));
            this.changeRef.detectChanges();
        });
    }
    getPrevPage() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RoutesRecognized), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.pairwise)())
            .subscribe((events) => {
            this.prevPage = events[0].urlAfterRedirects;
            alert(this.prevPage);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_4__.NetworkService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 5783:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }
}


/***/ }),

/***/ 3913:
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "global": () => (/* binding */ global)
/* harmony export */ });
var global = {
    url: 'http://e0b820907da3.ngrok.io/v2'
};


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);




let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    login(user) {
        //return this._http.get(`http://core.tempo.local/v2/auth/${user.usuario}/${user.password}`);
        return this._http.get(`${this.url}/auth/${user.usuario}/${user.password}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], UserService);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  height: 100% !important;\n}\n\nion-row {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n.desconectado {\n  animation: disabled 4s infinite;\n}\n\n@keyframes disabled {\n  0% {\n    background-color: red;\n  }\n  25% {\n    background-color: white;\n  }\n  50% {\n    background-color: red;\n  }\n  100% {\n    background-color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQU0scUJBQUE7RUFFTjtFQURBO0lBQU0sdUJBQUE7RUFJTjtFQUhBO0lBQU0scUJBQUE7RUFNTjtFQUxBO0lBQU0sdUJBQUE7RUFRTjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjb25lY3RhZG8ge1xuICBhbmltYXRpb246IGRpc2FibGVkIDRzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGRpc2FibGVkIHtcbiAgMCUgICB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cbiAgMjUlICB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxuICA1MCUgIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxuICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XG59Il19 */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-backdrop *ngIf=\"conectado\"></ion-backdrop>\n\n<ion-header [translucent]=\"true\">\n\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon *ngIf=\"conectado\" class=\"desconectado\" slot=\"icon-only\" name=\"wifi-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\">\n      <h3>Login</h3>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <form #loginForm=\"ngForm\">\n        <ion-col size=\"8\" offset=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">Usuario</ion-label>\n            <ion-input type=\"usuario\" name=\"usuario\" id=\"usuario\" #usuario=\"ngModel\" [(ngModel)]=\"user.usuario\" required>\n            </ion-input>\n          </ion-item>\n          <small *ngIf=\"!usuario.valid && usuario.touched\" class=\"invalid-feedback d-block\">El usuario no es válido.</small>\n        </ion-col>\n        <ion-col size=\"8\" offset=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" name=\"password\" id=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\"\n              required></ion-input>\n          </ion-item>\n          <small *ngIf=\"!password.valid && password.touched\" class=\"invalid-feedback d-block\">La password no es\n            válida.</small>\n        </ion-col>\n        <ion-col size=\"8\" offset=\"4\">\n          <ion-button color=\"primary\" (click)=\"onSubmit()\">Login</ion-button>\n          <!-- <ion-button color=\"primary\" [disabled]=\"conectado\" (click)=\"onSubmit()\">Login</ion-button> -->\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color=\"danger\" *ngIf=\"error\">{{error.data}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </form>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map