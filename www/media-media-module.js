(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"],{

/***/ "./src/app/media/media.module.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/*! exports provided: MediaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPageModule", function() { return MediaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media.page */ "./src/app/media/media.page.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");








var routes = [
    {
        path: '',
        component: _media_page__WEBPACK_IMPORTED_MODULE_6__["MediaPage"]
    }
];
var MediaPageModule = /** @class */ (function () {
    function MediaPageModule() {
    }
    MediaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _media_page__WEBPACK_IMPORTED_MODULE_6__["MediaPage"]
            ]
        })
    ], MediaPageModule);
    return MediaPageModule;
}());



/***/ }),

/***/ "./src/app/media/media.page.html":
/*!***************************************!*\
  !*** ./src/app/media/media.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='danger'>\n    <ion-row>\n    <ion-col>\n      <ion-title>\n        Media\n      </ion-title>\n       </ion-col>\n        <ion-col>\n            <h4 routerLink=\"/tabs\" float-right>back</h4>\n        </ion-col> \n    </ion-row>\n  </ion-toolbar>\n  <!--Code for our second navbar starts here. Navbars are fixed. so if you want this to scroll with the page place in ion-content-->\n  <!-- <ion-toolbar color='danger'>\n    <ion-item>\n     <ion-icon item-left color='danger' name='logo-youtube'></ion-icon> -->\n      <!--Code for our dropdown with ngFor to iterate through our categories and form a ion-select for each one -->\n      <!-- <ion-select placeholder='Choose a category...' item-left [(ngModel)]=\"category\" (ionChange)=\"filter(category)\">\n        <ion-select-option *ngFor=\"let category of categoryArray\" [value]=\"category.id\">{{category.snippet.title}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n    <!-- <ion-item>\n        <ion-label stacked>Channel ID</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"channelId\"></ion-input>\n    </ion-item> -->\n\n\n\n    <ion-card *ngFor=\"let list of playlists | async\">\n        <img [src]=\"list.snippet.thumbnails.high.url\">\n      <ion-card-header (click)=\"viewVideo(list)\">\n         \n        <ion-card-subtitle>{{ list.snippet.title }}</ion-card-subtitle>\n        <ion-card-title>{{ list.snippet.publishedAt | date:'short' }}</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n          <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <h4>{{list.snippet.description}}</h4>\n                </ion-col>\n                <ion-col>\n                   <!-- <ion-button (click)=\"openPlaylist(list.id.videoId)\">view pdf</ion-button> -->\n                   <ion-button (click)=\"pdf()\">view pdf</ion-button>\n                </ion-col>\n              </ion-row>\n         </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-item  class='pageText'  *ngIf='playlists && playlists.length > 0'>\n        <p>Displaying {{playlists.length}} of {{playlists.length}}</p>\n    </ion-item>\n    <ion-item class='empty-list' *ngIf='playlists && playlists.length <= 0'>\n      <h2><ion-icon item-left color='danger' name='logo-youtube'></ion-icon></h2>\n      <h2>No videos to show.</h2>\n    </ion-item>\n\n\n\n\n\n\n\n<!-- <ion-card (click)='viewVideo(vid)' *ngFor=\"let vid of videos\">\n    <img [src]=\"vid.snippet.thumbnails.default.url\">\n  <ion-card-header>\n     \n    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n    <ion-card-title>{{vid.snippet.title}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n      \n  </ion-card-content>\n</ion-card>\n\n<ion-item  class='pageText'  *ngIf='videos && videos.length > 0'>\n    <p>Displaying {{videos.length}} of  {{videos.length}}</p>\n</ion-item>\n<ion-item class='empty-list' *ngIf='videos && videos.length <= 0'>\n  <h2><ion-icon item-left color='danger' name='logo-youtube'></ion-icon></h2>\n  <h2>No videos to show.</h2>\n</ion-item> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/media/media.page.scss":
/*!***************************************!*\
  !*** ./src/app/media/media.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* styling for our title*/\nion-title {\n  font-family: PermanentMarker;\n  /*changes the font of our title*/\n  margin-top: 1vh;\n  /*adds a margin to the top of our title*/ }\n/*styling for our empty list class, in the event that\r\n    your app will be more than one page, I suggest placing this\r\n    in app.scss*/\n.empty-list {\n  text-align: center;\n  /*centers all text and divs horizontally*/\n  margin-top: 40% !important;\n  /*adds a margin to the top of our element*/\n  /*styles our ion-icons that are within the class empty list*/\n  /*styles class pageText*/ }\n.empty-list ion-icon {\n    font-size: 10vh;\n    opacity: .5; }\n.empty-list .pageText {\n    text-align: center;\n    /*centers text/divs of class pageText*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvQzpcXFVzZXJzXFxSYXltb25kIE1vcnR1XFxEb2N1bWVudHNcXGxlc2xpZVxcQWN0c0J1c2luZXNzRXhcXEFjdHNCdXNpbmVzc0V4L3NyY1xcYXBwXFxtZWRpYVxcbWVkaWEucGFnZS5zY3NzIiwic3JjL2FwcC9tZWRpYS9tZWRpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUkseUJBQUE7QUFDRjtFQUNJLDRCQUE0QjtFQUFDLGdDQUFBO0VBQzdCLGVBQWM7RUFBQyx3Q0FBQSxFQUF5QztBQUUxRDs7Z0JDQVk7QURHZDtFQUNJLGtCQUFrQjtFQUFFLHlDQUFBO0VBQ3BCLDBCQUEwQjtFQUFDLDBDQUFBO0VBQzdCLDREQUFBO0VBS0Esd0JBQUEsRUFBeUI7QUFSM0I7SUFLUSxlQUFlO0lBQ2YsV0FBVSxFQUFBO0FBTmxCO0lBVVEsa0JBQWtCO0lBQUUsc0NBQUEsRUFBdUMiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS9tZWRpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRhaW5zIHRoZSBzdHlsaW5nIGZvciBvdXIgaG9tZSBwYWdlLlxyXG4vLyBwYWdlLWhvbWUge1xyXG5cclxuXHJcbiAgICAvKiBzdHlsaW5nIGZvciBvdXIgdGl0bGUqL1xyXG4gIGlvbi10aXRsZXtcclxuICAgICAgZm9udC1mYW1pbHk6IFBlcm1hbmVudE1hcmtlcjsvKmNoYW5nZXMgdGhlIGZvbnQgb2Ygb3VyIHRpdGxlKi9cclxuICAgICAgbWFyZ2luLXRvcDoxdmg7LyphZGRzIGEgbWFyZ2luIHRvIHRoZSB0b3Agb2Ygb3VyIHRpdGxlKi9cclxuICB9XHJcbiAgICAvKnN0eWxpbmcgZm9yIG91ciBlbXB0eSBsaXN0IGNsYXNzLCBpbiB0aGUgZXZlbnQgdGhhdFxyXG4gICAgeW91ciBhcHAgd2lsbCBiZSBtb3JlIHRoYW4gb25lIHBhZ2UsIEkgc3VnZ2VzdCBwbGFjaW5nIHRoaXNcclxuICAgIGluIGFwcC5zY3NzKi9cclxuICAuZW1wdHktbGlzdHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKmNlbnRlcnMgYWxsIHRleHQgYW5kIGRpdnMgaG9yaXpvbnRhbGx5Ki9cclxuICAgICAgbWFyZ2luLXRvcDogNDAlICFpbXBvcnRhbnQ7LyphZGRzIGEgbWFyZ2luIHRvIHRoZSB0b3Agb2Ygb3VyIGVsZW1lbnQqL1xyXG4gICAgLypzdHlsZXMgb3VyIGlvbi1pY29ucyB0aGF0IGFyZSB3aXRoaW4gdGhlIGNsYXNzIGVtcHR5IGxpc3QqL1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTB2aDtcclxuICAgICAgICAgIG9wYWNpdHk6LjU7XHJcbiAgICAgIH1cclxuICAgIC8qc3R5bGVzIGNsYXNzIHBhZ2VUZXh0Ki9cclxuICAgICAgLnBhZ2VUZXh0e1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKmNlbnRlcnMgdGV4dC9kaXZzIG9mIGNsYXNzIHBhZ2VUZXh0Ki9cclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gLy8gfSIsIi8qIHN0eWxpbmcgZm9yIG91ciB0aXRsZSovXG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogUGVybWFuZW50TWFya2VyO1xuICAvKmNoYW5nZXMgdGhlIGZvbnQgb2Ygb3VyIHRpdGxlKi9cbiAgbWFyZ2luLXRvcDogMXZoO1xuICAvKmFkZHMgYSBtYXJnaW4gdG8gdGhlIHRvcCBvZiBvdXIgdGl0bGUqLyB9XG5cbi8qc3R5bGluZyBmb3Igb3VyIGVtcHR5IGxpc3QgY2xhc3MsIGluIHRoZSBldmVudCB0aGF0XHJcbiAgICB5b3VyIGFwcCB3aWxsIGJlIG1vcmUgdGhhbiBvbmUgcGFnZSwgSSBzdWdnZXN0IHBsYWNpbmcgdGhpc1xyXG4gICAgaW4gYXBwLnNjc3MqL1xuLmVtcHR5LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qY2VudGVycyBhbGwgdGV4dCBhbmQgZGl2cyBob3Jpem9udGFsbHkqL1xuICBtYXJnaW4tdG9wOiA0MCUgIWltcG9ydGFudDtcbiAgLyphZGRzIGEgbWFyZ2luIHRvIHRoZSB0b3Agb2Ygb3VyIGVsZW1lbnQqL1xuICAvKnN0eWxlcyBvdXIgaW9uLWljb25zIHRoYXQgYXJlIHdpdGhpbiB0aGUgY2xhc3MgZW1wdHkgbGlzdCovXG4gIC8qc3R5bGVzIGNsYXNzIHBhZ2VUZXh0Ki8gfVxuICAuZW1wdHktbGlzdCBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxMHZoO1xuICAgIG9wYWNpdHk6IC41OyB9XG4gIC5lbXB0eS1saXN0IC5wYWdlVGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qY2VudGVycyB0ZXh0L2RpdnMgb2YgY2xhc3MgcGFnZVRleHQqLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/media/media.page.ts":
/*!*************************************!*\
  !*** ./src/app/media/media.page.ts ***!
  \*************************************/
/*! exports provided: MediaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPage", function() { return MediaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/loading.service */ "./src/app/provider/loading.service.ts");
/* harmony import */ var _provider_yt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/yt.service */ "./src/app/provider/yt.service.ts");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");









var MediaPage = /** @class */ (function () {
    function MediaPage(ytProvider, alertCtrl, loading, modalCtrl, plt, router, loadingCtrl, youtube, http, fileOpener) {
        this.ytProvider = ytProvider;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.youtube = youtube;
        this.http = http;
        this.fileOpener = fileOpener;
        this.videos = [];
        //channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID
        this.channelId = 'UCBdTgfPwN3qcbef_rbd2UQw';
        this.searchPlaylists();
    }
    //opens selected video for viewing
    MediaPage.prototype.viewVideo = function (vid) {
        //if we are on a device where cordova is available we user the youtube video player
        if (this.plt.is('cordova')) {
            this.youtube.openVideo(vid.id.videoId); //opens video with videoId
        }
        else {
            //if we are not on a device where cordova is available we open the video in browser.
            window.open('https://www.youtube.com/watch?v=' + vid.id.videoId);
        }
    };
    MediaPage.prototype.searchPlaylists = function () {
        var _this = this;
        this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
        this.playlists.subscribe(function (data) {
            console.log('playlists: ', data);
        }, function (err) {
            var alert = _this.alertCtrl.create({
                header: 'Error',
                message: 'No Playlists found for that Channel ID',
                buttons: ['OK']
            });
            // alert.present();
        });
    };
    MediaPage.prototype.pdf = function () {
        this.fileOpener.open('assets/data/pdf/TEAM-2-BRANDING-YOURSELF.-FRESH-GRADUATE-JUNE-2019.pdf', 'application/pdf')
            .then(function () { return console.log('File is opened'); })
            .catch(function (e) { return console.log('Error opening file', e); });
        // this.fileOpener.showOpenWithDialog('assets/data/pdf/TEAM-2-BRANDING-YOURSELF.-FRESH-GRADUATE-JUNE-2019.pdf', 'application/pdf')
        //   .then(() => console.log('File is opened'))
        //   .catch(e => console.log('Error opening file', e));
    };
    MediaPage.prototype.openPlaylist = function (id) {
        this.router.navigate(['/pdf'], {
            queryParams: id,
        });
    };
    MediaPage.prototype.ngOnInit = function () {
    };
    MediaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.page.html */ "./src/app/media/media.page.html"),
            providers: [
                _provider_yt_service__WEBPACK_IMPORTED_MODULE_3__["YtService"],
                _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__["YoutubeVideoPlayer"],
                _provider_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
            ],
            styles: [__webpack_require__(/*! ./media.page.scss */ "./src/app/media/media.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_yt_service__WEBPACK_IMPORTED_MODULE_3__["YtService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _provider_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__["YoutubeVideoPlayer"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"]])
    ], MediaPage);
    return MediaPage;
}());



/***/ })

}]);
//# sourceMappingURL=media-media-module.js.map