(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdf-pdf-module"],{

/***/ "./src/app/pdf/pdf.module.ts":
/*!***********************************!*\
  !*** ./src/app/pdf/pdf.module.ts ***!
  \***********************************/
/*! exports provided: PdfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageModule", function() { return PdfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pdf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdf.page */ "./src/app/pdf/pdf.page.ts");







var routes = [
    {
        path: '',
        component: _pdf_page__WEBPACK_IMPORTED_MODULE_6__["PdfPage"]
    }
];
var PdfPageModule = /** @class */ (function () {
    function PdfPageModule() {
    }
    PdfPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pdf_page__WEBPACK_IMPORTED_MODULE_6__["PdfPage"]]
        })
    ], PdfPageModule);
    return PdfPageModule;
}());



/***/ }),

/***/ "./src/app/pdf/pdf.page.html":
/*!***********************************!*\
  !*** ./src/app/pdf/pdf.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pdf</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pdf/pdf.page.scss":
/*!***********************************!*\
  !*** ./src/app/pdf/pdf.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BkZi9wZGYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pdf/pdf.page.ts":
/*!*********************************!*\
  !*** ./src/app/pdf/pdf.page.ts ***!
  \*********************************/
/*! exports provided: PdfPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPage", function() { return PdfPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_yt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/yt.service */ "./src/app/provider/yt.service.ts");






var PdfPage = /** @class */ (function () {
    function PdfPage(activatedRoute, router, ytProvider, youtube, plt) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ytProvider = ytProvider;
        this.youtube = youtube;
        this.plt = plt;
        // let listId = this.navParams.get('id');
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.id) {
                var listId = JSON.parse(params.id);
                console.log("pdf: ", listId);
                // this.videos = this.ytProvider.getListVideos(listId);
            }
        });
        console.log('test');
        this.pdf();
    }
    PdfPage.prototype.pdf = function () {
        this.playlists = this.ytProvider.getpdf();
        this.playlists.subscribe(function (data) {
            console.log('playlists: ', data);
        }, function (err) {
            // let alert = this.alertCtrl.create({
            //   header: 'Error',
            //   message: 'No Playlists found for that Channel ID',
            //   buttons: ['OK']
            // });
        });
    };
    PdfPage.prototype.ngOnInit = function () {
    };
    PdfPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdf',
            template: __webpack_require__(/*! ./pdf.page.html */ "./src/app/pdf/pdf.page.html"),
            styles: [__webpack_require__(/*! ./pdf.page.scss */ "./src/app/pdf/pdf.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _provider_yt_service__WEBPACK_IMPORTED_MODULE_5__["YtService"], _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_3__["YoutubeVideoPlayer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], PdfPage);
    return PdfPage;
}());



/***/ })

}]);
//# sourceMappingURL=pdf-pdf-module.js.map