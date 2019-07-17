(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(toastController) {
        this.toastController = toastController;
    }
    AlertService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: 'top',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");







var routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]
    }
];
var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
        })
    ], SignInPageModule);
    return SignInPageModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.html":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-content class=\"bg-theme\">\n      <div class=\"bg-white\">\n          <ion-grid col-11 col-sm-10>\n              <ion-row>\n                  <ion-col col-12 text-center>\n                      <img src=\"assets/img/actslogo.png\" alt=\"logo\" class=\"logo\">\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 text-center>\n                    <h3 id=\"business\">Business Excellence</h3>\n                </ion-col>\n              </ion-row>\n              <div class=\"sign-row\">\n                  <ion-segment [(ngModel)]=\"sign\">\n                      <ion-segment-button id=\"in\" value=\"signin\">\n                          Sign in\n                      </ion-segment-button>\n                      <ion-segment-button id=\"up\" value=\"signup\">\n                          Sign up\n                      </ion-segment-button>\n                  </ion-segment>\n              </div>\n          </ion-grid>\n      </div>\n      <div padding class=\"bg-theme\">\n          <div [ngSwitch]=\"sign\">\n              <ion-list *ngSwitchCase=\"'signin'\">\n                  <ion-grid col-11 col-sm-10 style=\"padding: 2rem 0;\">\n                    <form  #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n                      <ion-row>\n                          <ion-col class=\"form-theme\">\n                              <div padding>\n                                  <ion-item>\n                                    <ion-label position=\"floating\">your@email.com</ion-label>\n                                    <ion-input name=\"email\" type=\"email\" ngModel required></ion-input>\n                                  </ion-item>\n                                  <ion-item>\n                                    <ion-label position=\"floating\">Password</ion-label>\n                                    <ion-input name=\"password\" type=\"password\" ngModel required></ion-input>\n                                  </ion-item>\n                                </div>\n                                <div>\n                                  <ion-button size=\"large\" type=\"submit\" expand=\"block\">Login</ion-button>\n                                </div>\n                          </ion-col>\n                      </ion-row>\n                      <ion-row>\n                          <ion-col col-12>\n                              <!-- <button ion-button color=\"danger\" block class=\"btn-theme-big-red\" (click)=\"singIn()\">Sign in</button> -->\n                          </ion-col>\n                          <ion-col col-6  text-center>\n                              <p class=\"info-text\">forgot Password?</p>\n                          </ion-col>\n                          <ion-col col-6>\n                              <!-- <button ion-button color=\"danger\" block class=\"btn-theme-big-white\" strong (click)=\"sign='signup'\">Register Now</button> -->\n                          </ion-col>\n                      </ion-row>\n                    </form>\n                  </ion-grid>\n              </ion-list>\n              <ion-list *ngSwitchCase=\"'signup'\">\n                  <ion-grid col-11 col-sm-10 style=\"padding-top: 2rem 0;\">\n                    <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n                      <ion-row>\n                          <ion-col class=\"form-theme\">\n                            <div padding>\n                              <ion-item>\n                                <ion-label position=\"floating\">Name</ion-label>\n                                <ion-input  name=\"name\" type=\"text\" ngModel required></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                <ion-label position=\"floating\">type of Business</ion-label>\n                                <ion-input  name=\"businessType\" type=\"text\" ngModel required></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                <ion-label position=\"floating\">Cell Number</ion-label>\n                                <ion-input  name=\"cell\" type=\"tel\" ngModel required></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                <ion-label position=\"floating\">Type of Input Required</ion-label>\n                                <ion-input  name=\"name\" type=\"text\" ngModel required></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                <ion-label position=\"floating\">your@email.com</ion-label>\n                                <ion-input name=\"email\" type=\"email\" ngModel required></ion-input>\n                              </ion-item>\n                              <!-- <ion-list>\n                                <ion-radio-group>\n                                  <ion-list-header>\n                                    current business status\n                                  </ion-list-header>\n                                  \n                                  <ion-item>\n                                    <ion-label>New</ion-label>\n                                    <ion-radio value=\"new\"></ion-radio>\n                                  </ion-item>\n                              \n                                  <ion-item>\n                                    <ion-label>a few years</ion-label>\n                                    <ion-radio value=\"a few years\"></ion-radio>\n                                  </ion-item>\n                              \n                                  <ion-item>\n                                    <ion-label>Many years</ion-label>\n                                    <ion-radio value=\"many years\"></ion-radio>\n                                  </ion-item>\n                            \n                                </ion-radio-group>\n                              </ion-list> -->\n                              <ion-item>\n                                <ion-label position=\"floating\">Password</ion-label>\n                                <ion-input name=\"password\" type=\"password\" ngModel required></ion-input>\n                              </ion-item>\n                              <ion-item>\n                                <ion-label position=\"floating\">Confirm Password</ion-label>\n                                <ion-input name=\"confirm\" type=\"password\" ngModel required></ion-input>\n                              </ion-item>\n                            </div>\n                            <div padding>\n                              <ion-button  size=\"large\" type=\"submit\" expand=\"block\">Register</ion-button>\n                            </div>\n                          </ion-col>\n                      </ion-row>\n                    </form>\n                  </ion-grid>\n              </ion-list>\n          </div>\n      </div>\n  </ion-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('/assets/img/login_bg.jpg') no-repeat center 100% / cover; }\n\n#business {\n  font-weight: bolder;\n  color: white;\n  font-size: 28px;\n  background-color: darkgreen;\n  display: flex;\n  justify-content: center; }\n\n#up {\n  color: white;\n  font-weight: bolder; }\n\n#in {\n  color: white;\n  font-weight: bolder; }\n\nion-grid {\n  padding: 0rem 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9DOlxcVXNlcnNcXFJheW1vbmQgTW9ydHVcXERvY3VtZW50c1xcbGVzbGllXFxidXNpbmVzc0V4Y2VsbGVuY2Uvc3JjXFxhcHBcXHNpZ24taW5cXHNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkVBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFLckI7RUFDRSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmcuanBnJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9sb2dpbl9iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIDEwMCUgLyBjb3ZlcjtcclxuICB9XHJcblxyXG4gICNidXNpbmVzc3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICN1cHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIC8vIG9wYWNpdHk6IDAuMjtcclxuICB9XHJcblxyXG4gICNpbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIC8vIG9wYWNpdHk6IDAuMjtcclxuICB9XHJcblxyXG4gIGlvbi1ncmlke1xyXG4gICAgcGFkZGluZzogMHJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");





var SignInPage = /** @class */ (function () {
    function SignInPage(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    SignInPage.prototype.ngOnInit = function () {
    };
    SignInPage.prototype.login = function (form) {
        if (form.value.email != "" && form.value.password != "") {
            var email = 'ray@gmail.com';
            var password = '123456';
            this.authService.login(email, password);
        }
    };
    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.page.html */ "./src/app/sign-in/sign-in.page.html"),
            styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], SignInPage);
    return SignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map