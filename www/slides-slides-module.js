(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slides-slides-module"],{

/***/ "./src/app/slides/slides.module.ts":
/*!*****************************************!*\
  !*** ./src/app/slides/slides.module.ts ***!
  \*****************************************/
/*! exports provided: SlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "./src/app/slides/slides.page.ts");







var routes = [
    {
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]
    }
];
var SlidesPageModule = /** @class */ (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());



/***/ }),

/***/ "./src/app/slides/slides.page.html":
/*!*****************************************!*\
  !*** ./src/app/slides/slides.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>slides</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item routerLink=\"/tabs\">\n    <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n    <ion-label>Tab</ion-label>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/slides/slides.page.scss":
/*!*****************************************!*\
  !*** ./src/app/slides/slides.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/slides/slides.page.ts":
/*!***************************************!*\
  !*** ./src/app/slides/slides.page.ts ***!
  \***************************************/
/*! exports provided: SlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function() { return SlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlidesPage = /** @class */ (function () {
    function SlidesPage() {
    }
    SlidesPage.prototype.ngOnInit = function () {
    };
    SlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.page.html */ "./src/app/slides/slides.page.html"),
            styles: [__webpack_require__(/*! ./slides.page.scss */ "./src/app/slides/slides.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlidesPage);
    return SlidesPage;
}());



/***/ })

}]);
//# sourceMappingURL=slides-slides-module.js.map