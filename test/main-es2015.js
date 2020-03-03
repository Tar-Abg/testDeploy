(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapperr\" (scroll)=\"onScrollEvent($event)\">\n    <app-header ></app-header>\n    <app-lending ></app-lending>\n    <div class=\"footer\">\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5\">\n    <h6>Description</h6>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.<br><br> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br><br> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n</div>\n<div class=\"mt-5\">\n    <h5>Share this project in social</h5>\n    <div class=\"d-flex pt-2\">\n        <img class=\"mr-2 logo\" src=\"../../../assets/images/logos/facebook.svg\" alt=\"\">\n        <img class=\"logo\" src=\"../../../assets/images/logos/linkedin .svg\" alt=\"\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coment-item/coment-item.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coment-item/coment-item.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mt-4 \">\n    <img class=\"userPicture mr-3\" [src]=\"item.userPicture\" alt=\"\">\n    <div>\n        <div>\n            <p class=\"mb-0\">{{item.name}} <span class=\"mr-2\">{{item.date}}</span></p>\n        </div>\n        <p class=\"text\">{{item?.text}}</p>\n        <img class=\"comentImg mt-0\" [src]=\"item?.ComentImg\" alt=\"\">\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coments/coments.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coments/coments.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-write-coment></app-write-coment>\n<h6 class=\"mt-3\">46 comments</h6>\n<app-coment-item *ngFor=\"let item of comentsArray\" [item]='item'></app-coment-item>\n<h5 class=\"text-center mt-2\">Load more comments</h5>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/donations-box/donations-box.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/donations-box/donations-box.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\"> \n    <h4>Donations</h4>\n    <div class=\"mt-4\">\n        <div *ngFor=\"let item of donors\">\n            <app-donations-item [donor]='item'></app-donations-item>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/donations-item/donations-item.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/donations-item/donations-item.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex position-relative\">\n    <img [src]=\"donor.pictureUrl\" alt=\"\" class=\"mr-3 mt-2 pictureUrl\" >\n    <div>\n        <span>{{donor.donateDate}}</span>\n        <p class=\"donorName mb-1\">{{donor.name + ' ' + donor.surName}}</p>\n    </div>\n    <p class=\"mb-0 quantity\">${{donor.quantity}}</p>\n</div>\n<hr class=\"mt-0\">\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100\">\n    <hr class=\"mb-5 FooterTopLine\">\n    <div class=\"wrapper mx-auto\">\n        <div class=\"mt-5\">\n            <p class=\"mb-2\">Tel: <span class=\"phoneNumber\">+3740111111</span></p>\n            <p>Mail: <span class=\"ml-4\">charity@gmail.com</span></p>\n        </div>\n        <div>\n            <h6>Company</h6>\n            <ul class=\"list-unstyled pt-3\">\n                <li class=\"mt-1\">Home</li>\n                <li class=\"mt-1\">Projects</li>\n                <li class=\"mt-1\">Community</li>\n                <li class=\"mt-1\">About us</li>\n                <li class=\"mt-1\">News</li>\n            </ul>\n        </div>\n        <div>\n            <h6>Help and Support</h6>\n            <ul class=\"list-unstyled pt-3\">\n                <li class=\"mt-1\">FAQ</li>\n                <li class=\"mt-1\">Terms and Condition</li>\n                <li class=\"mt-1\">Privacy Policy</li>\n                <li class=\"mt-1\">Contacts</li>\n            </ul>\n        </div>\n        <div>\n            <h6>Follow us in social</h6>\n            <div class=\"logosBox\">\n                <img src=\"../../../assets//images/logos/facebook-app-symbol.svg\" alt=\"\">\n                <img src=\"../../../assets//images/logos/twitter.svg\" alt=\"\">\n                <img src=\"../../../assets//images/logos/linkedin-logo.svg\" alt=\"\">\n                <img src=\"../../../assets//images/logos/instagram-logo.svg\" alt=\"\">\n            </div>\n            <h6 class=\"mt-3\">Subscribe for new projects</h6>\n            <div class=\"mt-4\">\n                <div class=\"d-flex position-relative\">\n                    <input type=\"text\" placeholder=\"Your email\">\n                    <i class=\"fa fa-long-arrow-right fa-lg\" aria-hidden=\"true\"></i>\n                </div>\n                <hr class=\"mt-2\">\n            </div>\n        </div>\n    </div>\n    <div class=\"bootomLine mx-auto\">\n        <hr class=\"  mt-0\">\n        <span>Address Line, Yerevan, RA, 374154</span>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/goal/goal.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/goal/goal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div>\n        <p class=\"title mb-1\">Goal</p>\n        <h2 class=\"goal mb-0\">$ 1150000 <span>of</span></h2>\n        <p class=\"reaised\">$ 1132500 raised</p>\n        <div class=\"d-flex\">\n            <span class=\"text-danger mr-1\">* </span>\n            <p class=\"smallText\"> 40% of required amount was donated <br> by Charity <span class=\"boldText\">Foundation</span></p>\n        </div>\n    </div>\n    <div class=\"inputBox d-flex\">\n        <input type=\"text\" placeholder=\"Donation amount\" >\n        <div class=\"line\"></div>\n        <select class=\"form-control\">\n            <option selected>USD</option>\n            <option value=\"1\">One</option>\n            <option value=\"2\">Two</option>\n            <option value=\"3\">Three</option>\n          </select>\n    </div>\n    <button type=\"button\" class=\"donateBtn mt-4\">DONATE NOW</button>\n    <p class=\"text-center helpText mt-3\">Can help with anything else? <br> <span>More about it</span> </p>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n    <button class=\"navbar-toggler border-0 ml-3\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n      </ul>\n    </div>\n    <ul class=\"d-flex list-unstyled icons-box\">\n        <li class=\"mr-4\">\n            <i class=\"fa fa-search \" aria-hidden=\"true\"></i>\n        </li>\n        <li>\n            <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n        </li>\n    </ul>\n  </nav>\n\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/lending/lending.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/lending/lending.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper mx-auto\">\n    <div class=\"section mx-auto\">\n        <div class=\"goalComponent\">\n            <app-goal></app-goal>\n        </div>\n        <div class=\"text-box\">\n            <div class=\"d-flex\">\n                <i class=\"fa fa-map-marker text-white mr-2\" aria-hidden=\"true\"></i>\n                <p class=\"mb-2\">Yerevan, Armenia</p>\n            </div>\n            <div>\n                <h2 class=\"text-white mt-0 pt-0\">\n                    Gyumri Hospital Reconstruction\n                </h2>\n            </div>\n            <div class=\"saveProject d-flex\">\n                <i class=\"fa fa-bookmark-o mr-2 text-white\" aria-hidden=\"true\"></i>\n                <p> Save project</p>\n            </div>\n            <div class=\"progress mt-1\">\n                <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 44.5%; background-color: #F1205D;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 23.5%; background-color: #FBC0D3;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n            <div class=\"d-flex progresTextBox mt-2\">\n                <p class=\"progresFirstText text-center\">\n                    Work progress<br>\n                    <span>for 07 Nov</span>\n                </p>\n                <p class=\"ml-5\">\n                Collected<br>\n                    <span>$ 1132500</span>\n                </p>\n            </div>\n        \n        </div>\n    </div>\n</div>\n<div class=\"navBar\" >\n    <app-nav-bar></app-nav-bar>\n</div>\n<div class=\"section1 mx-auto\"> \n    <div>\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"ml-4 mt-5\">\n        <app-donations-box></app-donations-box>\n    </div>\n   \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper d-flex justify-content-center mx-auto\" #navBar>\n    <div class=\"section d-block d-flex justify-content-between\">\n        <ul class=\"d-flex list-unstyled mb-0\">\n            <div>\n                <li> <a class=\"text-decoration-none text-body\" [routerLink]=\"['']\" (click)=\"changActiveRout('about')\"> About </a> </li>\n                <hr *ngIf=\"activeRout == 'about'\" class=\"active\" >\n            </div>\n            <div>\n                <li *ngIf=\"scrollTop > 600\">Updates</li>\n                <hr *ngIf=\"activeRout == 'updates'\" class=\"active\">\n            </div>\n           <div>\n                <li *ngIf=\"scrollTop > 600\">Gallery</li>\n                <hr *ngIf=\"activeRout == 'gallery'\" class=\"active\">\n           </div>\n            <div>\n                <li> <a class=\"text-decoration-none text-body\" [routerLink]=\"['coments']\" (click)=\"changActiveRout('comments')\">Comments</a></li>    \n                <hr *ngIf=\"activeRout == 'comments'\" class=\"active\">\n            </div>\n            \n        </ul>\n        <div class=\"d-flex leftSide\">\n            <p class=\"ml-5\">25 Nov <span class=\"d-block\">Finish</span></p>\n            <div class=\"line mr-4 ml-3\"></div> \n            <p class=\"mr-4\">1982 <br><span class=\"d-block\">Donators</span></p> \n            <div class=\"line\"></div>\n            <button *ngIf=\"scrollTop > 600\" type=\"button\" class=\"donateBtn mt-1\">DONATE NOW</button>\n        </div>\n    </div>\n\n</div>\n<hr class=\"m-0\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/write-coment/write-coment.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/write-coment/write-coment.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mt-5\">\n    <img class=\"mr-3\" src=\"../../../assets/images//coments/adam.png\" alt=\"\">\n    <input class=\"pl-4\" type=\"text\" placeholder=\"Write your comment...\">\n</div>\n<div>\n    <input class=\"d-none\" type=\"file\" id=\"chooseFile\">\n    <label class=\"mt-2\" for=\"chooseFile\">+ Upload image</label>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_coments_coments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/coments/coments.component */ "./src/app/components/coments/coments.component.ts");





const routes = [
    { path: '', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'coments', component: _components_coments_coments_component__WEBPACK_IMPORTED_MODULE_4__["ComentsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapperr{\n    height: 75vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.footer{\n    margin-top: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcnJ7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/scroll.service */ "./src/app/services/scroll.service.ts");



let AppComponent = class AppComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
    }
    onScrollEvent($event) {
        this.scrollService.setScroll($event.target.scrollTop);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], AppComponent.prototype, "onScrollEvent", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_lending_lending_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lending/lending.component */ "./src/app/components/lending/lending.component.ts");
/* harmony import */ var _components_goal_goal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/goal/goal.component */ "./src/app/components/goal/goal.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_donations_box_donations_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/donations-box/donations-box.component */ "./src/app/components/donations-box/donations-box.component.ts");
/* harmony import */ var _components_donations_item_donations_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/donations-item/donations-item.component */ "./src/app/components/donations-item/donations-item.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_coments_coments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/coments/coments.component */ "./src/app/components/coments/coments.component.ts");
/* harmony import */ var _components_write_coment_write_coment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/write-coment/write-coment.component */ "./src/app/components/write-coment/write-coment.component.ts");
/* harmony import */ var _components_coment_item_coment_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/coment-item/coment-item.component */ "./src/app/components/coment-item/coment-item.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_lending_lending_component__WEBPACK_IMPORTED_MODULE_6__["LendingComponent"],
            _components_goal_goal_component__WEBPACK_IMPORTED_MODULE_7__["GoalComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _components_donations_box_donations_box_component__WEBPACK_IMPORTED_MODULE_10__["DonationsBoxComponent"],
            _components_donations_item_donations_item_component__WEBPACK_IMPORTED_MODULE_11__["DonationsItemComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _components_coments_coments_component__WEBPACK_IMPORTED_MODULE_13__["ComentsComponent"],
            _components_write_coment_write_coment_component__WEBPACK_IMPORTED_MODULE_14__["WriteComentComponent"],
            _components_coment_item_coment_item_component__WEBPACK_IMPORTED_MODULE_15__["ComentItemComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n   font-family:  Circular Book;\n   font-size: 12px;\n}\nh6{\n    font-family: Circular Std Medium;\n    font-size: 14px;\n}\nh5{\n    font-family: Circular Std Black;\n    font-size: 17px;\n}\n.logo{\n    width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csMkJBQTJCO0dBQzNCLGVBQWU7QUFDbEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgZm9udC1mYW1pbHk6ICBDaXJjdWxhciBCb29rO1xuICAgZm9udC1zaXplOiAxMnB4O1xufVxuaDZ7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIFN0ZCBNZWRpdW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaDV7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIFN0ZCBCbGFjaztcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4ubG9nb3tcbiAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/coment-item/coment-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/coment-item/coment-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userPicture{\n    width: 37px;\n    height: 37px;\n}\np{\n    font-family: Circular Std Black;\n    font-size: 14px;\n}\np span{\n    font-family: Circular Book;\n    color: #9A9A9A;\n    font-size: 11px;\n}\n.text{\n    font-family: Circular Book;\n}\n.comentImg{\n    width: 90px;\n    height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21lbnQtaXRlbS9jb21lbnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbWVudC1pdGVtL2NvbWVudC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlclBpY3R1cmV7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xufVxucHtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgU3RkIEJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbnAgc3BhbntcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBjb2xvcjogIzlBOUE5QTtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG4udGV4dHtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbn1cbi5jb21lbnRJbWd7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/coment-item/coment-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/coment-item/coment-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentItemComponent", function() { return ComentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComentItemComponent = class ComentItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComentItemComponent.prototype, "item", void 0);
ComentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coment-item',
        template: __webpack_require__(/*! raw-loader!./coment-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coment-item/coment-item.component.html"),
        styles: [__webpack_require__(/*! ./coment-item.component.css */ "./src/app/components/coment-item/coment-item.component.css")]
    })
], ComentItemComponent);



/***/ }),

/***/ "./src/app/components/coments/coments.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/coments/coments.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\n    font-family: Circular Std Black;\n}\nh5{\n    font-family: Circular Std Black;\n    color: #F11B5D;\n    font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21lbnRzL2NvbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21lbnRzL2NvbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg2e1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBTdGQgQmxhY2s7XG59XG5oNXtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgU3RkIEJsYWNrO1xuICAgIGNvbG9yOiAjRjExQjVEO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/coments/coments.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/coments/coments.component.ts ***!
  \*********************************************************/
/*! exports provided: ComentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentsComponent", function() { return ComentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComentsComponent = class ComentsComponent {
    constructor() {
        this.comentsArray = [
            {
                name: 'Adam Smith',
                date: 'Oct 29 16:47',
                text: 'Very good job!',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/adam.png'
            },
            {
                name: 'James Stewart',
                date: 'Oct 29 16:47',
                text: null,
                ComentImg: '../../../assets/images/coments/com.png',
                userPicture: '../../..//assets/images/coments/James.png'
            },
            {
                name: 'Andrew Ralphen-Sow',
                date: 'Oct 29 16:47',
                text: 'Lets get together!!!',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/Andreq.png'
            },
            {
                name: 'Elisabeth Jefferson',
                date: 'Oct 29 16:47',
                text: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/Elisabeth.png'
            },
            {
                name: 'Adam Smith',
                date: 'Oct 29 16:47',
                text: 'Very good job!',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/adam.png'
            },
            {
                name: 'James Stewart',
                date: 'Oct 29 16:47',
                text: 'I am glad that some foundation is trying to make our city more beautiful',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/JamesS.png'
            },
            {
                name: 'Andrew Ralphen-Sow',
                date: 'Oct 29 16:47',
                text: 'Lets get together!!!!',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/AndrewR.png'
            },
            {
                name: 'Anna Jefferson',
                date: 'Oct 29 16:47',
                text: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
                ComentImg: null,
                userPicture: '../../../assets/images/coments/Anna.png'
            },
        ];
    }
    ngOnInit() {
    }
};
ComentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coments',
        template: __webpack_require__(/*! raw-loader!./coments.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coments/coments.component.html"),
        styles: [__webpack_require__(/*! ./coments.component.css */ "./src/app/components/coments/coments.component.css")]
    })
], ComentsComponent);



/***/ }),

/***/ "./src/app/components/donations-box/donations-box.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/donations-box/donations-box.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section{\n    width: 100%;\n    display: inline-block;\n    padding: 25px 20px 10px 20px;\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n.section h4{\n    font-family: Circular Std Black;\n    font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbnMtYm94L2RvbmF0aW9ucy1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBRzVCLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvbmF0aW9ucy1ib3gvZG9uYXRpb25zLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDI1cHggMjBweCAxMHB4IDIwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuLnNlY3Rpb24gaDR7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIFN0ZCBCbGFjaztcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/donations-box/donations-box.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/donations-box/donations-box.component.ts ***!
  \*********************************************************************/
/*! exports provided: DonationsBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsBoxComponent", function() { return DonationsBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DonationsBoxComponent = class DonationsBoxComponent {
    constructor() {
        this.donors = [{
                name: 'Eleonora',
                surName: 'Saimon',
                quantity: 60,
                donateDate: '22 Oct 16:04',
                pictureUrl: '../../../assets/images/donors/donor1.png'
            },
            {
                name: 'Anna',
                surName: 'Smith',
                quantity: 40,
                donateDate: '22 Oct 15:07',
                pictureUrl: '../../../assets/images/donors/donor2.png'
            },
            {
                name: 'Roven',
                surName: 'Joseph Smith',
                quantity: 50,
                donateDate: '22 Oct 10:49',
                pictureUrl: '../../../assets/images/donors/donor3.png'
            },
            {
                name: 'Eleonora',
                surName: 'Saimon',
                quantity: 70,
                donateDate: '21 Oct 22:17',
                pictureUrl: '../../../assets/images/donors/donor4.png'
            },
            {
                name: 'Tontri',
                surName: 'Qutier',
                quantity: 80,
                donateDate: '21 Oct 15:09',
                pictureUrl: '../../../assets/images/donors/donor2.png'
            },
            {
                name: 'Gillian',
                surName: 'Silence',
                quantity: 150,
                donateDate: '21 Oct 10:08',
                pictureUrl: '../../../assets/images/donors/donor5.png'
            }
        ];
    }
    ngOnInit() {
    }
};
DonationsBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donations-box',
        template: __webpack_require__(/*! raw-loader!./donations-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/donations-box/donations-box.component.html"),
        styles: [__webpack_require__(/*! ./donations-box.component.css */ "./src/app/components/donations-box/donations-box.component.css")]
    })
], DonationsBoxComponent);



/***/ }),

/***/ "./src/app/components/donations-item/donations-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/donations-item/donations-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pictureUrl{\n    width: 30px;\n    height: 30px;\n}\nspan{\n    font-family:  Circular Book;\n    font-size: 11px;\n    color: #969696;\n    margin-top: 5px;\n}\n.donorName{\n    font-family:  Circular Book;\n    position: relative;\n    bottom: 8px;\n}\n.quantity{\n    font-family:  Circular Book;\n    position: absolute;\n    right: 0px;\n    top: 20px;\n    color: #F11B5D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbnMtaXRlbS9kb25hdGlvbnMtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9uYXRpb25zLWl0ZW0vZG9uYXRpb25zLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlVXJse1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbnNwYW57XG4gICAgZm9udC1mYW1pbHk6ICBDaXJjdWxhciBCb29rO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZG9ub3JOYW1le1xuICAgIGZvbnQtZmFtaWx5OiAgQ2lyY3VsYXIgQm9vaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA4cHg7XG59XG4ucXVhbnRpdHl7XG4gICAgZm9udC1mYW1pbHk6ICBDaXJjdWxhciBCb29rO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMjBweDtcbiAgICBjb2xvcjogI0YxMUI1RDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/donations-item/donations-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/donations-item/donations-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: DonationsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsItemComponent", function() { return DonationsItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DonationsItemComponent = class DonationsItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DonationsItemComponent.prototype, "donor", void 0);
DonationsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donations-item',
        template: __webpack_require__(/*! raw-loader!./donations-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/donations-item/donations-item.component.html"),
        styles: [__webpack_require__(/*! ./donations-item.component.css */ "./src/app/components/donations-item/donations-item.component.css")]
    })
], DonationsItemComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    width: 80%;\n    height: 200px;\n    grid-template-columns: 30% 20% 20% 30%;\n    display: grid;\n}\n.FooterTopLine{\n    color: #E7E7E7;\n    background-color: #E7E7E7;\n    height: 5px;\n    box-shadow: 0px -2px 5px 0px rgba(222,222,222,1);\n}\np, li{\n    font-family: Circular Book;\n    font-size: 13px;\n}\n.phoneNumber{\n    margin-left: 33px;\n}\nh6{\n    font-family: Circular Std Black;\n    font-size: 14px;\n}\n.logosBox img{\n    width: 13px;\n    height: 13px;\n    margin-right: 14px;\n}\n.hr{\n    color: #BFBFBF;\n    height: 3px;\n    background-color: #BFBFBF;\n}\ninput{\n    border: none;\n    outline: none;\n    font-family: Circular Book;\n    font-size: 13px;\n}\n.fa-long-arrow-right{\n    position: absolute;\n    right: 0;\n    color: #F33B73;\n}\n.bootomLine{\n    width: 80%;\n    position: relative;\n    bottom: 30px;\n}\n.bootomLine span{\n    font-family: Circular Book;\n    font-size: 13px;\n    color: #C0C0C0;\n}\n@media only screen and (min-width: 1600px) {\n    .wrapper, .bootomLine  {\n        width: 68% !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFHWCxnREFBZ0Q7QUFDcEQ7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsY0FBYztBQUNsQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAyMCUgMjAlIDMwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuLkZvb3RlclRvcExpbmV7XG4gICAgY29sb3I6ICNFN0U3RTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFNztcbiAgICBoZWlnaHQ6IDVweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtMnB4IDVweCAwcHggcmdiYSgyMjIsMjIyLDIyMiwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAtMnB4IDVweCAwcHggcmdiYSgyMjIsMjIyLDIyMiwxKTtcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCA1cHggMHB4IHJnYmEoMjIyLDIyMiwyMjIsMSk7XG59XG5wLCBsaXtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ucGhvbmVOdW1iZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcHg7XG59XG5oNntcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgU3RkIEJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5sb2dvc0JveCBpbWd7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbn1cbi5ocntcbiAgICBjb2xvcjogI0JGQkZCRjtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkZCRkJGO1xufVxuaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIEJvb2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZhLWxvbmctYXJyb3ctcmlnaHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjRjMzQjczO1xufVxuXG4uYm9vdG9tTGluZXtcbiAgICB3aWR0aDogODAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMwcHg7XG59XG4uYm9vdG9tTGluZSBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBCb29rO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI0MwQzBDMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgLndyYXBwZXIsIC5ib290b21MaW5lICB7XG4gICAgICAgIHdpZHRoOiA2OCUgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/goal/goal.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/goal/goal.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    width: 260px;\n    height: 300px;\n    background-color: white;\n    padding: 10px 20px;\n    padding-top: 10px;\n}\n.title{\n    color: #BCBCBC;\n    font-family: Circular Book;\n    font-size: 12px;\n}\n.goal{\n    font-family: Circular Std Black;\n}\n.goal span{\n    font-family: Circular Book;\n    font-size: 16px;\n}\n.reaised{\n    font-family: Circular Book;\n    font-size: 16px;\n}\n.smallText{\n    padding-top: 3px;\n    font-family: Circular Book;\n    line-height: 12px;\n    font-size: 10px;\n    color: #525A47;\n}\n.boldText{\n    font-family: Circular Std Black;\n}\n.inputBox{\n    border: 1px solid #D7D7D7;\n    width: 100%;\n}\n.inputBox input {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    border: none;\n    outline: none;\n    font-family: Circular Book;\n    font-size: 11px;\n    margin-left: 12px;\n}\n.line{\n    margin-left: 17px;\n    margin-top: 10px;\n    height: 15px;\n    border: 0.5px solid #D7D7D7;\n    background-color:  rgb(93, 95, 90);\n}\n.form-control{\n    font-family: Circular Book;\n    font-size: 11px;\n    border: none;\n    outline: none;\n    padding-right: 2px;\n    padding-left: 2px;\n    margin-top: 2px;\n}\n.donateBtn{\n    font-family: Circular Book;\n    font-size: 10px;\n    background-color: black;\n    color: white;\n    text-align: center;\n    width: 100%;\n    border: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    letter-spacing: 1px;\n    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);\n}\n.helpText{\n    font-family: Circular Book;\n    font-size: 11px;\n}\n.helpText span{\n    font-family: Circular Std Black;\n    font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2FsL2dvYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBR25CLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nb2FsL2dvYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi50aXRsZXtcbiAgICBjb2xvcjogI0JDQkNCQztcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZ29hbHtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgU3RkIEJsYWNrO1xufVxuLmdvYWwgc3BhbntcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ucmVhaXNlZHtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uc21hbGxUZXh0e1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIEJvb2s7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNTI1QTQ3O1xufVxuLmJvbGRUZXh0e1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBTdGQgQmxhY2s7XG59XG4uaW5wdXRCb3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3RDdENztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbnB1dEJveCBpbnB1dCB7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBCb29rO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5saW5le1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0Q3RDdENztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDkzLCA5NSwgOTApO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmRvbmF0ZUJ0bntcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuLmhlbHBUZXh0e1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBCb29rO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5oZWxwVGV4dCBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBTdGQgQmxhY2s7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/goal/goal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/goal/goal.component.ts ***!
  \***************************************************/
/*! exports provided: GoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalComponent", function() { return GoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoalComponent = class GoalComponent {
    constructor() { }
    ngOnInit() {
    }
};
GoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goal',
        template: __webpack_require__(/*! raw-loader!./goal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/goal/goal.component.html"),
        styles: [__webpack_require__(/*! ./goal.component.css */ "./src/app/components/goal/goal.component.css")]
    })
], GoalComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n    height: 51px;\n    background-color: rgb(255, 255, 255) !important;\n}\n.icons-box{\n    margin-right: 35px;\n    position: relative;\n    top: 7px;\n}\n.navbar-toggler{\n    outline: none;\n}\n.navbar-toggler-icon{\n    width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIGhlaWdodDogNTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbn1cbi5pY29ucy1ib3h7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDdweDtcbn1cbi5uYXZiYXItdG9nZ2xlcntcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLm5hdmJhci10b2dnbGVyLWljb257XG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/lending/lending.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/lending/lending.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    width: 100%;\n    height: 59.2vh;\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.5))), url('image__1.png');\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('image__1.png');\n    background-size: 100% auto;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.text-box{\n    position: absolute;\n    width: 100%;\n    top: 39vh;\n}\n.section{\n    width: 78%;\n    position: relative;\n}\n.section1{\n    width: 85%;\n    position: relative;\n    display: grid;\n    grid-template-columns: 60% 35%;\n    grid-column-gap: 5%;\n    z-index: 1 !important;\n}\n.text-box h2 {\n    font-family: Circular Std Black;\n    font-weight: 900\n}\n.text-box p{\n    color: white;\n    font-family: Circular Book;\n    font-size: 11px;\n}\n.saveProject i{\n    height: 25px;\n}\n.progress{\n    width: 100%;\n    height: 7px;\n}\n.progress-bar{\n    border-radius: 0 5px 5px 0;\n}\n.progresTextBox{\n    position: absolute;\n    left: 32vw;\n}\n.progresFirstText{\n    margin-right: 9vw;\n}\n.progresTextBox p{\n    font-family:  Circular Book;\n}\n.progresTextBox p span{\n    font-family: Circular Std Black;\n}\n.goalComponent{\n    position: absolute;\n    top: 9vh;\n    right: -50px; \n}\n.navBar{\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index:10;\n    background-color: #fff;\n}\n@media only screen and (max-width: 560px) {\n    .section1{\n        grid-template-columns: 100% !important;\n    }\n}\n@media only screen and (max-height: 840px) {\n    .text-box{\n        top: 35vh !important;\n    }\n    .goalComponent{\n        top: 5vh !important;\n    }\n}\n@media only screen and (max-width: 960px) {\n    .section1{\n        grid-template-columns: 80%;\n    }\n}\n@media only screen and (min-width: 1300px) {\n    .progresFirstText{\n        margin-right: 11.5vw;\n    }\n}\n@media only screen and (max-width: 1430px) {\n    .wrapper{\n        background-size: cover;\n    }\n}\n@media only screen and (min-width: 1600px) {\n    .section1{\n        width: 70% !important;\n        grid-template-columns: 60% 30%;\n    }\n    .progresFirstText{\n        margin-right: 13vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZW5kaW5nL2xlbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0lBQThHO0lBQTlHLHNGQUE4RztJQUM5RywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0I7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7UUFDSSxzQ0FBc0M7SUFDMUM7QUFDSjtBQUNBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZW5kaW5nL2xlbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTkuMnZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy8vaW1hZ2VzL2ltYWdlX18xLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnRleHQtYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDM5dmg7XG59XG4uc2VjdGlvbntcbiAgICB3aWR0aDogNzglO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uMXtcbiAgICB3aWR0aDogODUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDM1JTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDUlO1xuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbn1cbi50ZXh0LWJveCBoMiB7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIFN0ZCBCbGFjaztcbiAgICBmb250LXdlaWdodDogOTAwXG59XG4udGV4dC1ib3ggcHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIEJvb2s7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLnNhdmVQcm9qZWN0IGl7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuLnByb2dyZXNze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogN3B4O1xufVxuLnByb2dyZXNzLWJhcntcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbn1cbi5wcm9ncmVzVGV4dEJveHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzJ2dztcbn1cbi5wcm9ncmVzRmlyc3RUZXh0e1xuICAgIG1hcmdpbi1yaWdodDogOXZ3O1xufVxuXG4ucHJvZ3Jlc1RleHRCb3ggcHtcbiAgICBmb250LWZhbWlseTogIENpcmN1bGFyIEJvb2s7XG59XG4ucHJvZ3Jlc1RleHRCb3ggcCBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBTdGQgQmxhY2s7XG59XG4uZ29hbENvbXBvbmVudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5dmg7XG4gICAgcmlnaHQ6IC01MHB4OyBcbn1cblxuLm5hdkJhcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OjEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgLnNlY3Rpb24xe1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59IFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODQwcHgpIHtcbiAgICAudGV4dC1ib3h7XG4gICAgICAgIHRvcDogMzV2aCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZ29hbENvbXBvbmVudHtcbiAgICAgICAgdG9wOiA1dmggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLnNlY3Rpb24xe1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgLnByb2dyZXNGaXJzdFRleHR7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTEuNXZ3O1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gICAgLndyYXBwZXJ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICAuc2VjdGlvbjF7XG4gICAgICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgMzAlO1xuICAgIH1cbiAgICAucHJvZ3Jlc0ZpcnN0VGV4dHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3Z3O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/lending/lending.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/lending/lending.component.ts ***!
  \*********************************************************/
/*! exports provided: LendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendingComponent", function() { return LendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LendingComponent = class LendingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lending',
        template: __webpack_require__(/*! raw-loader!./lending.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/lending/lending.component.html"),
        styles: [__webpack_require__(/*! ./lending.component.css */ "./src/app/components/lending/lending.component.css")]
    })
], LendingComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    margin-left: 120px;\n    width: 100vw;\n    height: 60px;\n}\n.section{\n    width: 70% !important;\n    background-color: white !important;\n}\nul li {\n    font-family: Circular Std Medium;\n    margin-right: 50px;\n    margin-top: 20px;\n    font-size: 14px;\n}\nhr{\n    width: 100vw;\n    height: 5px;\n    color: #EDEDED;\n    background-color: #EDEDED;\n}\n.leftSide{\n    margin-top: 10px;\n    margin-right: 50px;\n}\n.leftSide p {\n    font-family: Circular Std Black;\n}\n.leftSide p span{\n   margin-top: 0;\n   font-family: Circular Book;\n   font-size: 10px;\n}\n.line{\n    margin-top: 10px;\n    height: 25px;\n    border: 0.5px solid #D7D7D7;\n    background-color:  rgb(93, 95, 90);\n}\n.donateBtn{\n    font-family: Circular Book;\n    font-size: 10px;\n    background-color: black;\n    color: white;\n    text-align: center;\n    width: 180px;\n    height: 30px;\n    border: none;\n    letter-spacing: 1px;\n    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);\n}\n.active{\n    height: 2px;\n    color: #F3457B;\n    background-color: #F3457B;\n    width: inherit;\n    margin-right: 5px;\n    position: relative;\n    right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtHQUNHLGFBQWE7R0FDYiwwQkFBMEI7R0FDMUIsZUFBZTtBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUduQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNjBweDtcbn1cbi5zZWN0aW9ue1xuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxudWwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBTdGQgTWVkaXVtO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmhye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBjb2xvcjogI0VERURFRDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xufVxuLmxlZnRTaWRle1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmxlZnRTaWRlIHAge1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBTdGQgQmxhY2s7XG59XG4ubGVmdFNpZGUgcCBzcGFue1xuICAgbWFyZ2luLXRvcDogMDtcbiAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhciBCb29rO1xuICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubGluZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNEN0Q3RDc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig5MywgOTUsIDkwKTtcbn1cbi5kb25hdGVCdG57XG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyIEJvb2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG4uYWN0aXZle1xuICAgIGhlaWdodDogMnB4O1xuICAgIGNvbG9yOiAjRjM0NTdCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzQ1N0I7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scroll.service */ "./src/app/services/scroll.service.ts");



let NavBarComponent = class NavBarComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
        this.activeRout = "about";
        this.scrollTop = 0;
        this.scrollService.onScroll$().subscribe(scrollTop => {
            this.scrollTop = scrollTop;
        });
    }
    ngOnInit() {
    }
    changActiveRout(raout) {
        this.activeRout = raout;
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/write-coment/write-coment.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/write-coment/write-coment.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n    width: 100%;\n    height: 37px;\n    font-family: Circular Book;\n    font-size: 15px;\n}\nimg{\n    width: 37px;\n}\nlabel{\n    position: relative;\n    left: 50px;\n    font-family: Circular Book;\n    color: #F11B5D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93cml0ZS1jb21lbnQvd3JpdGUtY29tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dyaXRlLWNvbWVudC93cml0ZS1jb21lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzdweDtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pbWd7XG4gICAgd2lkdGg6IDM3cHg7XG59XG5sYWJlbHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTBweDtcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXIgQm9vaztcbiAgICBjb2xvcjogI0YxMUI1RDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/write-coment/write-coment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/write-coment/write-coment.component.ts ***!
  \*******************************************************************/
/*! exports provided: WriteComentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteComentComponent", function() { return WriteComentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WriteComentComponent = class WriteComentComponent {
    constructor() { }
    ngOnInit() {
    }
};
WriteComentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write-coment',
        template: __webpack_require__(/*! raw-loader!./write-coment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/write-coment/write-coment.component.html"),
        styles: [__webpack_require__(/*! ./write-coment.component.css */ "./src/app/components/write-coment/write-coment.component.css")]
    })
], WriteComentComponent);



/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ScrollService = class ScrollService {
    constructor() {
        this.onScroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    onScroll$() {
        return this.onScroll.asObservable();
    }
    setScroll(value) {
        this.onScroll.next(value);
    }
};
ScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScrollService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/taron/Desktop/test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map