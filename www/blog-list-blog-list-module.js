(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-list-blog-list-module"],{

/***/ "./src/app/blog-list/blog-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/blog-list/blog-list.module.ts ***!
  \***********************************************/
/*! exports provided: BlogListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListPageModule", function() { return BlogListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-list.page */ "./src/app/blog-list/blog-list.page.ts");







var routes = [
    {
        path: '',
        component: _blog_list_page__WEBPACK_IMPORTED_MODULE_6__["BlogListPage"]
    }
];
var BlogListPageModule = /** @class */ (function () {
    function BlogListPageModule() {
    }
    BlogListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blog_list_page__WEBPACK_IMPORTED_MODULE_6__["BlogListPage"]]
        })
    ], BlogListPageModule);
    return BlogListPageModule;
}());



/***/ }),

/***/ "./src/app/blog-list/blog-list.page.html":
/*!***********************************************!*\
  !*** ./src/app/blog-list/blog-list.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>blogList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/blog-list/blog-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/blog-list/blog-list.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctbGlzdC9ibG9nLWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog-list/blog-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/blog-list/blog-list.page.ts ***!
  \*********************************************/
/*! exports provided: BlogListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListPage", function() { return BlogListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogListPage = /** @class */ (function () {
    function BlogListPage() {
    }
    BlogListPage.prototype.ngOnInit = function () {
    };
    BlogListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blog-list.page.html */ "./src/app/blog-list/blog-list.page.html"),
            styles: [__webpack_require__(/*! ./blog-list.page.scss */ "./src/app/blog-list/blog-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogListPage);
    return BlogListPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-list-blog-list-module.js.map