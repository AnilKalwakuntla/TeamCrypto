(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <table>\r\n        <tr>\r\n            <td><button (click)=\"login()\" *ngIf=\"!isLoggedIn()\">SIGN IN</button></td>\r\n            <td><button (click)=\"logout()\" *ngIf=\"isLoggedIn()\">SIGN OUT</button></td>\r\n        </tr>\r\n    </table>\r\n    <!--<app-nav-menu></app-nav-menu>-->\r\n    <div *ngIf=\"isLoggedIn()\">\r\n        <h3>\r\n            You are Logged In\r\n        </h3>\r\n    </div>\r\n    <div *ngIf=\"!isLoggedIn()\">\r\n        <h3>\r\n            You are NOT Logged In\r\n        </h3>>\r\n\r\n    </div>\r\n    \r\n    <router-outlet></router-outlet>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse navbar-fixed-top bg-wells\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand mr-3\">Welcome - Name Pronunciation Tool</a>\r\n        </div>\r\n       \r\n        <ul class=\"navbar-nav\">\r\n            <li>\r\n                <i class=\"fs-5 bi bi-person-circle\"></i>\r\n                <span style=\"padding-left: 5px;\">{{loggedinUsername}}</span><span>&nbsp;- &nbsp;<a (click)=\"logout()\" style=\"cursor: pointer;\" title=\"Logout\"><i\r\n                    class=\"bi bi-power\"></i></a></span>\r\n            </li>\r\n            \r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<app-menu></app-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loginfrm\">\r\n    <div class=\"toolbar\" role=\"banner\">\r\n\r\n        <div class=\"px-3 py-2 bg-wells text-white\">\r\n            <div class=\"container\">\r\n                <div class=\"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start\">\r\n                    Name Pronunciation Tool\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"login\">\r\n        <div class=\"form-signin\">\r\n            <h1 class=\"h3 mb-3 fw-normal\">Please Log in</h1>\r\n            <div class=\"form-floating\">\r\n                <input type=\"email\" class=\"form-control\" id=\"floatingInput\" required placeholder=\"Employee Id\"\r\n                    [(ngModel)]=\"_loginrequestmodel.username\">\r\n                \r\n            </div>\r\n            <br />\r\n            <div class=\"form-floating\">\r\n                <input type=\"password\" class=\"form-control\" id=\"floatingPassword\" required placeholder=\"Password\"\r\n                    [(ngModel)]=\"_loginrequestmodel.password\">\r\n                \r\n            </div>\r\n            <div class=\"checkbox mb-3\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n                </label>\r\n            </div>\r\n            <button class=\"w-100 btn btn-lg btn-primary btn-bg\" type=\"submit\" (click)=\"login()\">Log in</button>\r\n            <p class=\"mt-5 mb-3 text-muted\">&copy; 2022</p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"row flex-nowrap\">\r\n    <div class=\"col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark\">\r\n      <div class=\"d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100\">\r\n        <div class=\"navbar-header\">\r\n          <h4 style=\"cursor: pointer;\"><i class=\"bi bi-justify\"  data-toggle=\"collapse\" data-target=\"#myNavbar\"></i></h4>\r\n        </div>\r\n        <div id=\"myNavbar\">\r\n          <ul class=\"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start\" id=\"menu\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link align-middle px-0\" style=\"color:white;cursor: pointer;\" (click)=\"menuclick(1)\">\r\n                <i class=\"fs-4 bi bi-mic\"></i><span class=\"ms-1 d-none d-sm-inline\">My Pronunciation</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"nav-link px-0 align-middle\" style=\"color:white;cursor: pointer;\" (click)=\"menuclick(3)\">\r\n                <i class=\"fs-5 bi bi-search\"></i> <span class=\"ms-1 d-none d-sm-inline\">Look Up</span></a>\r\n            </li>\r\n            <li>\r\n              <a class=\"nav-link px-0 align-middle\" style=\"color:white;cursor: pointer;\" (click)=\"menuclick(2)\">\r\n                <i class=\"fs-4 bi bi-people\"></i> <span class=\"ms-1 d-none d-sm-inline\">My Favourites</span>\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col py-3\">\r\n      <ng-container *ngIf=\"showMypronunciation\">\r\n        <app-mypronunciation></app-mypronunciation>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showMyTeam\">\r\n        <app-myteam></app-myteam>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showSearch\">\r\n        <app-search></app-search>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mypronunciation/mypronunciation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mypronunciation/mypronunciation.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" (click)=\"ismyInfoHidden=!ismyInfoHidden\">\r\n            <i class=\"bi bi-people\"></i><span>&nbsp;&nbsp;My Info</span>\r\n            <div style=\"float:right\">\r\n                <i class=\"fs-4 bi bi-arrow-up-circle-fill\" [hidden]=\"ismyInfoHidden\"></i>\r\n                <i class=\"fs-4 bi bi-arrow-down-circle-fill\" [hidden]=\"!ismyInfoHidden\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" [hidden]=\"ismyInfoHidden\">\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-12\">\r\n                    <label class=\"control-label\">\r\n                        Employee ID:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        1918301\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        First Name:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        Karthick\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Last Name:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        R\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Email:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Phone:\r\n                    </label>\r\n                    <label>\r\n\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Manager Name:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" (click)=\"ispronunciationHidden=!ispronunciationHidden\">\r\n            <i class=\"fs-4 bi bi-mic\"></i><span>My Pronunciation</span>\r\n            <div style=\"float:right\">\r\n                <i class=\"fs-4 bi bi-arrow-up-circle-fill\" [hidden]=\"ispronunciationHidden\"></i>\r\n                <i class=\"fs-4 bi bi-arrow-down-circle-fill\" [hidden]=\"!ispronunciationHidden\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" [hidden]=\"ispronunciationHidden\">\r\n\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-4 col-form-label\">\r\n                    <a (click)=\"getStandardPronunciation()\"><i class=\"bi bi-play-circle\"></i>Click here for\r\n                        Standard\r\n                        Pronunciation</a></label>\r\n                <label class=\"col-sm-4 col-form-label\"> <a><i class=\"bi bi-play-circle\"></i>Click here for\r\n                        Custom\r\n                        Pronunciation</a></label>\r\n            </div>\r\n            <br />\r\n            <div>\r\n                <label class=\"col-sm-8 col-form-label\">\r\n                    <i class=\"bi bi-emoji-frown\"></i> Not Happy with the Standard Pronunciation,<a>Set your\r\n                        Custom\r\n                        Pronunciation <i class=\"bi bi-emoji-smile\"></i></a>\r\n                </label>\r\n            </div>\r\n            <br />\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-2\">\r\n                    <button (click)=\"initiateRecording()\" class=\"btn btn-primary\" [disabled]=\"recording\"\r\n                        style=\"cursor: pointer;\"> <i class=\"bi bi-mic\"></i>Start Recording </button>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <button (click)=\"stopRecording()\" class=\"btn btn-danger\" [disabled]=\"!recording\"\r\n                        style=\"cursor: pointer;\"> <i class=\"bi bi-record-btn\"></i>&nbsp;Stop Recording </button>\r\n                </div>\r\n            </div>\r\n            <br />\r\n\r\n            <div class=\"form-group row\" *ngIf=\"recording\">\r\n                <div class=\"col-sm-4\">\r\n                    <div style=\"height: 85px;background-color:#e9ecef;border:2px dotted #d71e28\">\r\n                        <div style=\"text-align:center;\">\r\n                            <img src=\"assets/image/recordbutton.gif\" style=\"text-align:center;\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"url\">\r\n                <div class=\"col-sm-10\">\r\n                    <audio controls=\"\">\r\n                        <source [src]=\"sanitize(url)\" type=\"audio/wav\">\r\n                    </audio>\r\n                </div>\r\n\r\n            </div>\r\n            <br />\r\n            <div class=\"form-group row\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myteam/myteam.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myteam/myteam.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div>\r\n        <i class=\"fs-4 bi bi-people\"></i><u><span>My Favourites</span></u>\r\n    </div>\r\n    <br />\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>Employee Id</th>\r\n            <th>Firstname</th>\r\n            <th>Lastname</th>\r\n            <th>Pronunciation</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th>123456</th>  \r\n            <td>John</td>\r\n            <td>Doe</td>\r\n            <td><a><i class=\"bi bi-play-circle\"></i>Listen </a> </td>\r\n          </tr>\r\n          <tr>\r\n            <th>123457</th> \r\n            <td>Mary</td>\r\n            <td>Moe</td>\r\n            <td><a><i class=\"bi bi-play-circle\"></i>Listen </a> </td>\r\n          </tr>\r\n          <tr>\r\n            <th>123458</th> \r\n            <td>July</td>\r\n            <td>Dooley</td>\r\n            <td><a><i class=\"bi bi-play-circle\"></i>Listen </a> </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">NPT</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fs-5 bi bi-search\"></i><span style=\"padding-left: 5px;\">Look up for Pronunciation</span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n\r\n            <label for=\"inputPassword\" class=\"col-sm-1 col-form-label\">Search</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"inputsearch\" placeholder=\"Search with Name\">\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n                <img src=\"assets/image/search-button.png\" class=\"btn_search_icon\" title=\"Search\" alt=\"Search\"\r\n                    (click)=\"search()\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<ng-container *ngIf=\"showSearchresult\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" (click)=\"issearchInfoHidden=!issearchInfoHidden\">\r\n            <i class=\"bi bi-people\"></i><span>&nbsp;&nbsp;Search Results</span>\r\n            <div style=\"float:right\">\r\n                <i class=\"fs-4 bi bi-arrow-up-circle-fill\" [hidden]=\"issearchInfoHidden\"></i>\r\n                <i class=\"fs-4 bi bi-arrow-down-circle-fill\" [hidden]=\"!issearchInfoHidden\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" [hidden]=\"issearchInfoHidden\">\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-12\">\r\n                    <label class=\"control-label\">\r\n                        Employee ID:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        1918301\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        First Name:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        Karthick\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Last Name:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        R\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Email:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Phone:\r\n                    </label>\r\n                    <label>\r\n\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Manager Name:\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-4\">\r\n                    <label class=\"control-label\">\r\n                        Name Pronunciation :\r\n                    </label>\r\n                    <label class=\"control-label\">\r\n                        &nbsp;&nbsp; <button class=\"btn btn-primary\" style=\"cursor: pointer;\"> <i\r\n                                class=\"bi bi-mic\"></i>Listen</button>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Global.ts":
/*!***************************!*\
  !*** ./src/app/Global.ts ***!
  \***************************/
/*! exports provided: GlobalFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFunctions", function() { return GlobalFunctions; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class GlobalFunctions {
    static IsNullorEmpty(input) {
        return input === undefined || input === null || input.match(/^ *$/) !== null;
    }
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AppComponent = class AppComponent {
    constructor(msalService) {
        this.msalService = msalService;
        this.title = 'app';
    }
    isLoggedIn() {
        return this.msalService.instance.getActiveAccount() != null;
    }
    login() {
        this.msalService.loginPopup().subscribe((Response) => {
            this.msalService.instance.setActiveAccount(Response.account);
        });
    }
    logout() {
        this.msalService.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MSALInstanceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInstanceFactory", function() { return MSALInstanceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var src_app_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mypronunciation_mypronunciation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mypronunciation/mypronunciation.component */ "./src/app/mypronunciation/mypronunciation.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _myteam_myteam_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./myteam/myteam.component */ "./src/app/myteam/myteam.component.ts");
/* harmony import */ var _services_pronunciation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/pronunciation.service */ "./src/app/services/pronunciation.service.ts");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @azure/msal-browser */ "./node_modules/@azure/msal-browser/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


















function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_17__["PublicClientApplication"]({
        auth: {
            clientId: '10c7ee7f-d6c4-4a51-a596-00366271b85d',
            redirectUri: 'https://localhost:44311/'
        }
    });
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"],
            src_app_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
            src_app_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _myteam_myteam_component__WEBPACK_IMPORTED_MODULE_15__["MyteamComponent"],
            _mypronunciation_mypronunciation_component__WEBPACK_IMPORTED_MODULE_13__["MypronunciationComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: src_app_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] }
            ], { useHash: true, onSameUrlNavigation: 'reload' })
        ],
        providers: [_services_pronunciation_service__WEBPACK_IMPORTED_MODULE_16__["Pronunciationservice"],
            {
                provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MSAL_INSTANCE"],
                useFactory: MSALInstanceFactory
            },
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__["MsalService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-wells\r\n  {\r\n      background-color: #d71e2b;\r\n    color: white;\r\n    border-bottom: 3px solid #ffcd41;\r\n  }\r\n a{\r\n    color: white;\r\n    text-decoration: none; \r\n }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O01BRU0seUJBQXlCO0lBQzNCLFlBQVk7SUFDWixnQ0FBZ0M7RUFDbEM7Q0FDRDtJQUNHLFlBQVk7SUFDWixxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy13ZWxsc1xyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MWUyYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZjZDQxO1xyXG4gIH1cclxuIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.loggedinUsername = '';
    }
    ngOnInit() {
        this.loggedinUsername = "Karthick R";
    }
    logout() {
        if (confirm("Are you sure to logout ?"))
            this.router.navigate(['/']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginfrm {\r\n  height: 100%;\r\n  \r\n  background-color: #f9f7f6;\r\n}\r\n\r\n.login {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n  background-color: #ffffff;\r\n  border: 1px dotted #d71e2b;\r\n  border-radius: 10px 10px 10px 10px;\r\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-floating:focus-within {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.btn-bg {\r\n  background-color: #d71e2b !important;\r\n  color: white;\r\n  border: 1px solid #d71e2b;\r\n}\r\n\r\n.btn-bg:hover {\r\n  background-color: #bb0826;\r\n  color: white;\r\n}\r\n\r\n.btn-bg:focus {\r\n  background-color: #bb0826;\r\n  color: white;\r\n}\r\n\r\n.toolbar {\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #d71e2b;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-bottom: 3px solid #ffcd41;\r\n}\r\n\r\n.spacer {\r\n  flex: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7O0VBRVoseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9COztFQUVwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luZnJtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjdmNjtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgI2Q3MWUyYjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgcmdiKDAgMCAwIC8gMjAlKTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWZsb2F0aW5nOmZvY3VzLXdpdGhpbiB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5idG4tYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzFlMmIgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3MWUyYjtcclxufVxyXG5cclxuLmJ0bi1iZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiMDgyNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tYmc6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjA4MjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcxZTJiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZjZDQxO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global */ "./src/app/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this._loginrequestmodel =
            {
                username: '',
                password: ''
            };
    }
    login() {
        if (!_Global__WEBPACK_IMPORTED_MODULE_2__["GlobalFunctions"].IsNullorEmpty(this._loginrequestmodel.username)) {
            if (!_Global__WEBPACK_IMPORTED_MODULE_2__["GlobalFunctions"].IsNullorEmpty(this._loginrequestmodel.password)) {
                //API CALL
                this.router.navigate(['/home']);
            }
            else {
                alert('Please enter a Employee Id and Password.');
            }
        }
        else {
            alert('Please enter a Employee Id and Password.');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".b-example-divider {\r\n  height: 3rem;\r\n  background-color: rgba(0, 0, 0, .1);\r\n  border: solid rgba(0, 0, 0, .15);\r\n  border-width: 1px 0;\r\n  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\r\n}\r\n\r\n.form-control-dark {\r\n  color: #fff;\r\n  background-color: var(--bs-dark);\r\n  border-color: var(--bs-gray);\r\n}\r\n\r\n.form-control-dark:focus {\r\n  color: #fff;\r\n  background-color: var(--bs-dark);\r\n  border-color: #fff;\r\n  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);\r\n}\r\n\r\n.bi {\r\n  vertical-align: -.125em;\r\n  fill: currentColor;\r\n}\r\n\r\n.text-small {\r\n  font-size: 85%;\r\n}\r\n\r\n.dropdown-toggle {\r\n  outline: 0;\r\n}\r\n\r\n.bg-dark {\r\n  background-color: #d71e28 !important;\r\n  border-right: 3px solid #ffcd41;\r\n}\r\n\r\n@media (min-width: 991.98px) {\r\n  main {\r\n    padding-left: 240px;\r\n  }\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 58px 0 0;\r\n  /* Height of navbar */\r\n  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);\r\n  width: 240px;\r\n\r\n  z-index: 600;\r\n  background-color: #d71e28;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .sidebar {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.sidebar .active {\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n}\r\n\r\n.sidebar-sticky {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: 0.5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLG9DQUFvQztFQUNwQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixxRUFBcUU7RUFDckUsWUFBWTs7RUFFWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1RUFBdUU7QUFDekU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2REFBNkQ7QUFDL0QiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iLWV4YW1wbGUtZGl2aWRlciB7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gIGJvcmRlcjogc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAuNWVtIDEuNWVtIHJnYmEoMCwgMCwgMCwgLjEpLCBpbnNldCAwIC4xMjVlbSAuNWVtIHJnYmEoMCwgMCwgMCwgLjE1KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kYXJrKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJzLWdyYXkpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWRhcmspO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAuMjVyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG59XHJcblxyXG4uYmkge1xyXG4gIHZlcnRpY2FsLWFsaWduOiAtLjEyNWVtO1xyXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnRleHQtc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODUlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5cclxuLmJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzFlMjggIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZjZDQxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcclxuICBtYWluIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDU4cHggMCAwO1xyXG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyA1JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG5cclxuICB6LWluZGV4OiA2MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MWUyODtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciAuYWN0aXZlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let MenuComponent = class MenuComponent {
    constructor() {
        this.showMypronunciation = false;
        this.showMyTeam = false;
        this.showSearch = false;
    }
    ngOnInit() {
    }
    menuclick(id) {
        switch (id) {
            case 1:
                this.showMyTeam = this.showSearch = false;
                this.showMypronunciation = true;
                break;
            case 2:
                this.showMypronunciation = this.showSearch = false;
                this.showMyTeam = true;
                break;
            case 3:
                this.showMypronunciation = this.showMyTeam = false;
                this.showSearch = true;
                break;
        }
    }
};
MenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);



/***/ }),

/***/ "./src/app/mypronunciation/mypronunciation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/mypronunciation/mypronunciation.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    text-decoration: underline!important;\r\n    cursor: pointer;\r\n    color: blue!important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9udW5jaWF0aW9uL215cHJvbnVuY2lhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9teXByb251bmNpYXRpb24vbXlwcm9udW5jaWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsdWUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/mypronunciation/mypronunciation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mypronunciation/mypronunciation.component.ts ***!
  \**************************************************************/
/*! exports provided: MypronunciationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypronunciationComponent", function() { return MypronunciationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_pronunciation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pronunciation.service */ "./src/app/services/pronunciation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let MypronunciationComponent = class MypronunciationComponent {
    constructor(domSanitizer, pronunciationservice) {
        this.domSanitizer = domSanitizer;
        this.pronunciationservice = pronunciationservice;
        //Will use this flag for detect recording
        this.recording = false;
        this.ismyInfoHidden = false;
        this.ispronunciationHidden = false;
    }
    ngOnInit() {
        this._standardpronunciationRequestModel =
            {
                employeeID: '1123456',
                fullName: 'Anil Kumar Kalwakuntla'
            };
    }
    getStandardPronunciation() {
        this.standardpronunciation = this.pronunciationservice.GetStandardPronunciation(this._standardpronunciationRequestModel);
    }
    sanitize(url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
    initiateRecording() {
        this.url = '';
        this.recording = true;
        let mediaConstraints = {
            video: false,
            audio: true
        };
        navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
    /**
    * Will be called automatically.
    */
    successCallback(stream) {
        var options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1
        };
        //Start Actuall Recording
        var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_1__["StereoAudioRecorder"];
        this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    }
    /**
    * Stop recording.
    */
    stopRecording() {
        this.recording = false;
        this.record.stop(this.processRecording.bind(this));
    }
    /**
    * processRecording Do what ever you want with blob
    * @param  {any} blob Blog
    */
    processRecording(blob) {
        this.url = URL.createObjectURL(blob);
    }
    /**
    * Process Error.
    */
    errorCallback(error) {
        this.error = 'Can not play audio in your browser';
    }
};
MypronunciationComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: src_app_services_pronunciation_service__WEBPACK_IMPORTED_MODULE_3__["Pronunciationservice"] }
];
MypronunciationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mypronunciation',
        template: __importDefault(__webpack_require__(/*! raw-loader!./mypronunciation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mypronunciation/mypronunciation.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./mypronunciation.component.css */ "./src/app/mypronunciation/mypronunciation.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], src_app_services_pronunciation_service__WEBPACK_IMPORTED_MODULE_3__["Pronunciationservice"]])
], MypronunciationComponent);



/***/ }),

/***/ "./src/app/myteam/myteam.component.css":
/*!*********************************************!*\
  !*** ./src/app/myteam/myteam.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215dGVhbS9teXRlYW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/myteam/myteam.component.ts":
/*!********************************************!*\
  !*** ./src/app/myteam/myteam.component.ts ***!
  \********************************************/
/*! exports provided: MyteamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyteamComponent", function() { return MyteamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let MyteamComponent = class MyteamComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyteamComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-myteam',
        template: __importDefault(__webpack_require__(/*! raw-loader!./myteam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myteam/myteam.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./myteam.component.css */ "./src/app/myteam/myteam.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], MyteamComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SearchComponent = class SearchComponent {
    constructor() {
        this.issearchInfoHidden = false;
        this.showSearchresult = false;
    }
    ngOnInit() {
    }
    search() {
        this.showSearchresult = true;
    }
};
SearchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);



/***/ }),

/***/ "./src/app/services/pronunciation.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/pronunciation.service.ts ***!
  \***************************************************/
/*! exports provided: Pronunciationservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pronunciationservice", function() { return Pronunciationservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let Pronunciationservice = class Pronunciationservice {
    constructor(httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.url = '';
        this.url = baseUrl;
    }
    GetStandardPronunciation(standardpronunciationRequestModel) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        let apiurl = this.url + 'api/pronunciation/GetStandardPronunciation/v1';
        console.log(apiurl);
        return this.httpClient.post(apiurl, standardpronunciationRequestModel, httpOptions).subscribe({
            next: data => {
                console.log(data);
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });
    }
};
Pronunciationservice.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
Pronunciationservice = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], Pronunciationservice);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anil Kalwakuntla\source\repos\TeamCrypto1\NPT\NPT\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map