(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>\n        <ion-buttons slot=\"start\">\n\n          <ion-menu-button>\n            \n          </ion-menu-button>\n\n        </ion-buttons>\n\n        <ion-col col-12>\n          <img src=\"assets/img/actslogo.png\" alt=\"logo\" class=\"logo\">\n        </ion-col>\n      \n        <ion-col col-12>\n          <h3 id=\"business\">Business Excellence</h3>\n        </ion-col>\n\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-content padding class=\"bg-theme\"> -->\n      <ion-content class=\"home-bg\">\n        <ion-grid col-12>\n    \n          <ion-row>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content routerLink=\"/media\" text-center>\n                <!-- <ion-card-content (click)=\"goToPage(aboutPage)\"> -->\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_gallery.png\" alt=\"icon\">\n                  <p>Videos</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content routerLink=\"/slides\" text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_appointment.png\" alt=\"icon\">\n                  <p>Slides</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_appointment.png\" alt=\"icon\">\n                  <p>Blog</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_blog.png\" alt=\"icon\">\n                  <p>Leaders</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_testimonials.png\" alt=\"icon\">\n                  <p>About</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_gallery.png\" alt=\"icon\">\n                  <p>Gallery</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n\n        <ion-row>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_availibility.png\" alt=\"icon\">\n                  <p>Contact</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_reach_us.png\" alt=\"icon\">\n                  <p>test</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col col-4>\n              <ion-card>\n                <ion-card-content text-center>\n                  <img src=\"assets/Icons/drawable-xxxhdpi/ic_contatc_us.png\" alt=\"icon\">\n                  <p>test</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n    \n        </ion-grid>\n      </ion-content>\n\n    \n    \n\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.back-button {\n  display: none !important; }\n\nion-toolbar {\n  --background: url('/assets/img/bg.jpg') no-repeat center center / cover; }\n\n#business {\n  font-weight: bolder;\n  color: white;\n  font-size: 28px;\n  background-color: darkgreen;\n  display: flex;\n  justify-content: center; }\n\nion-content {\n  --background: url('/assets/img/bg.jpg') no-repeat center center / cover; }\n\n.card-content-md {\n  background: white; }\n\n.logo {\n  width: 46%;\n  margin-top: 11px; }\n\n.ion-page {\n  padding: 0 !important; }\n\n.ion-page h1.heading-text {\n    color: #5f5f5f;\n    margin-top: 1rem;\n    font-size: 2.4rem;\n    margin-bottom: 5px; }\n\n.ion-page p.sub-text {\n    margin-top: 0;\n    font-size: 1.5rem;\n    color: #a7a7a7; }\n\n.card {\n  margin: 0;\n  width: 100%;\n  border-radius: 10px;\n  text-align: center;\n  margin-bottom: .5rem;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 0px -2px rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 0px -2px rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 0, 0.12); }\n\n.card img {\n    width: 80%;\n    margin: 0 auto; }\n\n.card p {\n    font-size: 1.2rem !important;\n    font-weight: bold !important;\n    white-space: nowrap;\n    margin-left: -15px;\n    margin-right: -15px; }\n\n.button-inner {\n  line-height: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXFJheW1vbmQgTW9ydHVcXERvY3VtZW50c1xcbGVzbGllXFxidXNpbmVzc0V4Y2VsbGVuY2Uvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUlsQjtFQUNJLHdCQUF3QixFQUFBOztBQUk1QjtFQUdJLHVFQUFhLEVBQUE7O0FBR2pCO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHM0I7RUFFRSx1RUFBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLHFCQUFxQixFQUFBOztBQUR6QjtJQVFRLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQVgxQjtJQWNRLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYyxFQUFBOztBQUd0QjtFQUNJLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsK0dBQStHO0VBQy9HLHVIQUF1SCxFQUFBOztBQVAzSDtJQVNRLFVBQVU7SUFDVixjQUFjLEVBQUE7O0FBVnRCO0lBYVEsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLmJhY2stYnV0dG9ue1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG5pb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvLyAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICB9XG5cbiNidXNpbmVzc3tcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuaW9uLWNvbnRlbnQge1xuICAvLyAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmcuanBnJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JnLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi5jYXJkLWNvbnRlbnQtbWR7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubG9nb3tcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuLmlvbi1wYWdle1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBpbWcubG9nb3tcbiAgICAgICAgLy8gd2lkdGg6IDMwJTtcbiAgICAgICAgLy8gZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA1NXB4O1xuICAgIH1cbiAgICBoMS5oZWFkaW5nLXRleHR7XG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICBwLnN1Yi10ZXh0e1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6ICNhN2E3YTc7XG4gICAgfVxufVxuLmNhcmR7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIH1cbn1cbi5idXR0b24taW5uZXJ7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(authService) {
        this.authService = authService;
    }
    Tab1Page.prototype.logout = function () {
        this.authService.logout();
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map