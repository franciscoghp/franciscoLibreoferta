(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");











function AppComponent_app_footer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
        } }, decls: 3, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_footer_2_Template, 1, 0, "app-footer", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removeFooter());
        } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { navbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/movie/movie.component */ "./src/app/pages/movie/movie.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/pages/favorites/favorites.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["WavesModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["InputsModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["ButtonsModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["MDBBootstrapModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
        _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_15__["MovieComponent"],
        _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__["FavoritesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["MDBRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                    _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_15__["MovieComponent"],
                    _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_16__["FavoritesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["WavesModule"].forRoot(),
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["InputsModule"].forRoot(),
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["ButtonsModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["MDBBootstrapModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/movie/movie.component */ "./src/app/pages/movie/movie.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/pages/favorites/favorites.component.ts");










var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'serie/:id', component: _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"] },
    { path: 'movie/:id', component: _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"] },
    { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'favorites', component: _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                        useHash: false
                    })
                ],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function (a0, a1) { return [a0, a1]; };
function CarouselComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var movie_r15 = ctx.$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, "/" + ctx_r14.selector, movie_r15.id))("src", ctx_r14.baseImagePath + movie_r15.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c1 = function (a0, a1) { return { "movie": a0, "serie": a1 }; };
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.baseImagePath = "https://image.tmdb.org/t/p/original";
    }
    CarouselComponent.prototype.ngOnInit = function () { };
    CarouselComponent.prototype.moveRight = function () {
        this.fila = document.querySelector('.' + this.selector);
        this.fila.scrollLeft += this.fila.offsetWidth;
    };
    CarouselComponent.prototype.moveLeft = function () {
        this.fila = document.querySelector('.' + this.selector);
        this.fila.scrollLeft -= this.fila.offsetWidth;
    };
    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { movies: "movies", selector: "selector" }, decls: 11, vars: 6, consts: [[1, "container"], [1, "row", "p-relative"], ["role", "button", "id", "flecha-izquierda", 1, "flecha-izquierda", 3, "click"], [1, "fas", "fa-angle-left"], [1, "peliculas-recomendadas", "contenedor", 3, "ngClass", "id"], [1, "contenedor-principal"], [1, "contenedor-carousel"], [1, "carousel"], ["class", "pelicula", 4, "ngFor", "ngForOf"], ["role", "button", "id", "flecha-derecha", 1, "flecha-derecha", 3, "click"], [1, "fas", "fa-angle-right"], [1, "pelicula"], [1, "img-carousel", 3, "routerLink", "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() { return ctx.moveLeft(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselComponent_div_8_Template, 2, 5, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_9_listener() { return ctx.moveRight(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx.selector == "movie", ctx.selector == "serie"))("id", ctx.selector);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".p-relative[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.img-carousel[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  height: auto;\r\n}\r\n\r\n.pelicula[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n\tcursor: pointer\r\n}\r\n\r\n\r\n\r\n.contenedor-titulo-controles[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: end;\r\n}\r\n\r\n.contenedor-titulo-controles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tfont-size: 30px;\r\n}\r\n\r\n.contenedor-titulo-controles[_ngcontent-%COMP%]   .indicadores[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tbackground: #fff;\r\n\theight: 3px;\r\n\twidth: 10px;\r\n\tcursor: pointer;\r\n\tborder: none;\r\n\tmargin-right: 2px;\r\n}\r\n\r\n.contenedor-titulo-controles[_ngcontent-%COMP%]   .indicadores[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .contenedor-titulo-controles[_ngcontent-%COMP%]   .indicadores[_ngcontent-%COMP%]   button.activo[_ngcontent-%COMP%] {\r\n\tbackground: red;\r\n}\r\n\r\n\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-principal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n\r\n.flecha-izquierda[_ngcontent-%COMP%], .flecha-derecha[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tborder: none;\r\n\tbackground: rgba(0,0,0,0.3);\r\n\tfont-size: 40px;\r\n\theight: 100px;\r\n\ttop: calc(50% - 50px);\r\n\tline-height: 40px;\r\n\twidth: 50px;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tz-index: 500;\r\n\ttransition: .2s ease all;\r\n}\r\n\r\n.flecha-derecha[_ngcontent-%COMP%] {\r\n  right: 0;\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-principal[_ngcontent-%COMP%]   .flecha-izquierda[_ngcontent-%COMP%]:hover, .peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-principal[_ngcontent-%COMP%]   .flecha-derecha[_ngcontent-%COMP%]:hover {\r\n\tbackground: rgba(0,0,0, .9);\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-principal[_ngcontent-%COMP%]   .flecha-izquierda[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-principal[_ngcontent-%COMP%]   .flecha-derecha[_ngcontent-%COMP%] {\r\n\tright: 0;\r\n}\r\n\r\n\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-carousel[_ngcontent-%COMP%] {\r\n\tpadding: 20px 0;\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .pelicula[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  margin: 0 5px 0 5px;\r\n\ttransition: .3s ease all;\r\n\tbox-shadow: 5px 5px 10px rgba(0,0,0, .3);\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .pelicula[_ngcontent-%COMP%]:hover {\r\n\ttransform: scale(1.1);\r\n\ttransform-origin: center;\r\n}\r\n\r\n.peliculas-recomendadas[_ngcontent-%COMP%]   .contenedor-carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .pelicula[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 250px;\r\n\tvertical-align: top;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUEscUVBQXFFOztBQUNyRTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxlQUFlO0FBQ2hCOztBQUVBLHNFQUFzRTs7QUFDdEU7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWiwyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsZUFBZTtDQUNmLFlBQVk7Q0FDWix3QkFBd0I7QUFDekI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7O0NBRUMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsUUFBUTtBQUNUOztBQUtBLGdEQUFnRDs7QUFDaEQ7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEIsd0JBQXdCO0NBQ3hCLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZy1jYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnBlbGljdWxhIGltZzpob3ZlciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi8qIC0tLS0gLS0tLS0gLS0tLS0gQ29udGVuZWRvciBUaXR1bG8geSBDb250cm9sZXMgLS0tLS0gLS0tLS0gLS0tLS0gKi9cclxuLmNvbnRlbmVkb3ItdGl0dWxvLWNvbnRyb2xlcyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGl0dWxvLWNvbnRyb2xlcyBoMyB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvci10aXR1bG8tY29udHJvbGVzIC5pbmRpY2Fkb3JlcyBidXR0b24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0aGVpZ2h0OiAzcHg7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGl0dWxvLWNvbnRyb2xlcyAuaW5kaWNhZG9yZXMgYnV0dG9uOmhvdmVyLFxyXG4uY29udGVuZWRvci10aXR1bG8tY29udHJvbGVzIC5pbmRpY2Fkb3JlcyBidXR0b24uYWN0aXZvIHtcclxuXHRiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbi8qIC0tLS0gLS0tLS0gLS0tLS0gQ29udGVuZWRvciBQcmluY2lwYWwgeSBGbGVjaGFzIC0tLS0tIC0tLS0tIC0tLS0tICovXHJcbi5wZWxpY3VsYXMtcmVjb21lbmRhZGFzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4ucGVsaWN1bGFzLXJlY29tZW5kYWRhcyAuY29udGVuZWRvci1wcmluY2lwYWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mbGVjaGEtaXpxdWllcmRhLFxyXG4uZmxlY2hhLWRlcmVjaGEge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHR3aWR0aDogNTBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogNTAwO1xyXG5cdHRyYW5zaXRpb246IC4ycyBlYXNlIGFsbDtcclxufVxyXG5cclxuLmZsZWNoYS1kZXJlY2hhIHtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnBlbGljdWxhcy1yZWNvbWVuZGFkYXMgLmNvbnRlbmVkb3ItcHJpbmNpcGFsIC5mbGVjaGEtaXpxdWllcmRhOmhvdmVyLFxyXG4ucGVsaWN1bGFzLXJlY29tZW5kYWRhcyAuY29udGVuZWRvci1wcmluY2lwYWwgLmZsZWNoYS1kZXJlY2hhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAuOSk7XHJcbn1cclxuXHJcbi5wZWxpY3VsYXMtcmVjb21lbmRhZGFzIC5jb250ZW5lZG9yLXByaW5jaXBhbCAuZmxlY2hhLWl6cXVpZXJkYSB7XHJcblx0bGVmdDogMDtcclxufVxyXG5cclxuLnBlbGljdWxhcy1yZWNvbWVuZGFkYXMgLmNvbnRlbmVkb3ItcHJpbmNpcGFsIC5mbGVjaGEtZGVyZWNoYSB7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIC0tLS0gLS0tLS0gLS0tLS0gQ2Fyb3VzZWwgLS0tLS0gLS0tLS0gLS0tLS0gKi9cclxuLnBlbGljdWxhcy1yZWNvbWVuZGFkYXMgLmNvbnRlbmVkb3ItY2Fyb3VzZWwge1xyXG5cdHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLnBlbGljdWxhcy1yZWNvbWVuZGFkYXMgLmNvbnRlbmVkb3ItY2Fyb3VzZWwgLmNhcm91c2VsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ucGVsaWN1bGFzLXJlY29tZW5kYWRhcyAuY29udGVuZWRvci1jYXJvdXNlbCAuY2Fyb3VzZWwgLnBlbGljdWxhIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAwIDVweCAwIDVweDtcclxuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwwLDAsIC4zKTtcclxufVxyXG5cclxuLnBlbGljdWxhcy1yZWNvbWVuZGFkYXMgLmNvbnRlbmVkb3ItY2Fyb3VzZWwgLmNhcm91c2VsIC5wZWxpY3VsYTpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG5cclxuLnBlbGljdWxhcy1yZWNvbWVuZGFkYXMgLmNvbnRlbmVkb3ItY2Fyb3VzZWwgLmNhcm91c2VsIC5wZWxpY3VsYSBpbWcge1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbiJdfQ== */"] });
    return CarouselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, { movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");









var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ]] });
    return ComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]], exports: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
                ],
                declarations: [
                    _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]
                ],
                entryComponents: [],
                exports: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/favorites/favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/favorites/favorites.component.ts ***!
  \********************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");







var _c0 = function (a1) { return ["/movie", a1]; };
function FavoritesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_div_5_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var resultado_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.remove(resultado_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var resultado_r7 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, resultado_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.baseImagePath + resultado_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, resultado_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resultado_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Release Date ", resultado_r7.release_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", resultado_r7.vote_average, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resultado_r7.overview, " ");
} }
var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteService) {
        this.favoriteService = favoriteService;
        this.baseImagePath = "https://image.tmdb.org/t/p/original";
    }
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent.prototype.remove = function (id) {
        this.favoriteService.favorites = this.favoriteService.favorites.filter(function (removed) { return removed.id != id; });
        //Envio hacia localStorage de la peliocula que fue añadida a la lista de Favoritos
        localStorage.setItem('myList', JSON.stringify(this.favoriteService.favorites));
        return this.favoriteService.favorites = this.favoriteService.favorites.filter(function (removed) { return removed.id != id; });
    };
    FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"])); };
    FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 6, vars: 1, consts: [[1, "section", "section-dark", "text-center"], [1, "container"], [1, "title"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "card-profile", "card-plain"], [1, "card-avatar"], [3, "routerLink"], ["alt", "...", 3, "src"], [1, "card-block"], [1, "author"], [1, "card-title"], [1, "card-category"], [1, "card-description", "text-center"], ["type", "button", "placement", "bottom", "ngbTooltip", "Remove from my List", 1, "btn", "btn-danger", "btn-just-icon", 3, "click"], [1, "fa", "fa-remove"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Favorite's List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavoritesComponent_div_5_Template, 18, 11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favoriteService.favorites);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyJ9 */"] });
    return FavoritesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.css']
            }]
    }], function () { return [{ type: app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");








var _c0 = function (a1) { return ["/movie", a1]; };
function HomeComponent_30_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 18);
} if (rf & 2) {
    var movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, movie_r1.id))("src", ctx_r2.baseImagePath + movie_r1.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_30_ng_template_0_Template, 4, 5, "ng-template", 16);
} }
var _c1 = function (a0) { return { "background-image": a0 }; };
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.baseImagePath = "https://image.tmdb.org/t/p/original";
        this.http.get('/trending/movie/week')
            .subscribe(function (data) {
            console.log(data);
            var peliculasOrdenadas = data.results;
            // Este procedimeinto es para obtener el arreglo de peliculas ordenadas
            // según su popularidad de mayor a menor
            peliculasOrdenadas.sort(function (a, b) {
                return b.popularity - a.popularity;
            });
            // Este procedimiento es para reducir el arreglo a 10 items
            peliculasOrdenadas = peliculasOrdenadas.slice(0, 10);
            // Arreglo de 10 de peliculas populares 
            _this.movies = peliculasOrdenadas;
            console.log(_this.movies);
            // Voto Promedio de la pelicula mas popular para el Home  
            _this.voteAverage = peliculasOrdenadas[0].vote_average;
            // Titulo de la pelicula mas popular para el Home  
            _this.title = peliculasOrdenadas[0].original_title;
            // Imagen de la pelicula mas popular para el Home
            _this.image = peliculasOrdenadas[0].backdrop_path;
            console.log(_this.image);
            // Id de la pelicula mas popular para el Home
            _this.id = peliculasOrdenadas[0].id;
            console.log(_this.id);
        });
        this.http.get('/tv/popular')
            .subscribe(function (data) {
            console.log(data);
            var seriesOrdenadas = data.results;
            // Este procedimeinto es para obtener el arreglo de series ordenadas
            // según su popularidad de mayor a menor
            seriesOrdenadas.sort(function (a, b) {
                return b.popularity - a.popularity;
            });
            // Este procedimiento es para reducir el arreglo a 10 items
            seriesOrdenadas = seriesOrdenadas.slice(0, 10);
            // Arreglo de 10 de series populares 
            _this.series = seriesOrdenadas;
            console.log(_this.series);
            // Voto Promedio de la serie mas popular para el Home  
            _this.voteAverage = seriesOrdenadas[0].vote_average;
        });
        // Consulta Http para obetener las 4 peliculas mas acalamdas
        this.http.get('/movie/top_rated')
            .subscribe(function (data) {
            console.log(data);
            var peliculasAclamadas = data.results;
            // Este procedimeinto es para obtener el arreglo de peliculas Aclamadas
            // según su popularidad de mayor a menor
            peliculasAclamadas.sort(function (a, b) {
                return b.vote_average - a.vote_average;
            });
            // Este procedimiento es para reducir el arreglo a 4 items
            peliculasAclamadas = peliculasAclamadas.slice(0, 4);
            // Arreglo de 10 de peliculas populares 
            _this.movies4 = peliculasAclamadas;
            console.log(_this.movies4);
            // Voto Promedio de la pelicula mas popular para el Home  
            _this.voteAverage = peliculasAclamadas[0].vote_average;
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 31, vars: 14, consts: [[1, "wrapper"], [1, "page-header", "section-dark", 3, "routerLink", "ngStyle"], [1, "content-center"], [1, "container"], [1, "title-brand"], [1, "presentation-title"], [1, "presentation-subtitle"], ["type", "success", 3, "value"], [1, "main"], ["id", "carousel", 1, "section"], [1, "tim-title"], [3, "movies", "selector"], [1, "row"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "card", "page-carousel"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "carousel-caption"], ["alt", "movie.title", 3, "routerLink", "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Most Popular of the Week");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-progressbar", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Most Popular Movies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-carousel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Most Popular Series");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-carousel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Most Acclaimed Movies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_30_Template, 1, 0, undefined, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.id))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, "url(" + ctx.baseImagePath + ctx.image + ")"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.voteAverage * 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.voteAverage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.movies)("selector", "movie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.series)("selector", "serie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies4);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbar"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: [".francisco[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;    \r\n    overflow: visible;\r\n    white-space:nowrap;\r\n}\r\n\r\n.francisco[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.sizeImage[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW5jaXNjbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7ICAgIFxyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbn1cclxuXHJcbi5mcmFuY2lzY28gLnNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNpemVJbWFnZXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufSJdfQ== */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/movie/movie.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/movie/movie.component.ts ***!
  \************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");










var _c0 = function (a0) { return { "background-image": a0 }; };
var _c1 = function () { return ["/home"]; };
var MovieComponent = /** @class */ (function () {
    function MovieComponent(route, http, favoriteService) {
        this.route = route;
        this.http = http;
        this.favoriteService = favoriteService;
        this.baseImagePath = "https://image.tmdb.org/t/p/original";
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.type = window.location.pathname;
        this.type = this.type.slice(1, 6);
        console.log(this.type);
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type === 'movie') {
            this.http.getSelectedById('/movie/', this.id)
                .subscribe(function (data) {
                console.log(data);
                _this.image = data.backdrop_path;
                _this.title = data.title;
                _this.description = data.overview;
                _this.poster = data.poster_path;
                _this.tagline = data.tagline;
                _this.genre = data.genres[0].name;
                _this.vote_average = data.vote_average;
            });
        }
        else {
            this.http.getSelectedById('/tv/', this.id)
                .subscribe(function (data) {
                console.log(data);
                _this.image = data.backdrop_path;
                _this.title = data.name;
                _this.description = data.overview;
                _this.poster = data.poster_path;
                _this.tagline = data.tagline;
                _this.genre = data.genres[0].name;
                _this.vote_average = data.vote_average;
            });
        }
    };
    MovieComponent.prototype.favorite = function () {
        this.favoriteService.setFavorite(this.id, this.type);
    };
    MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"])); };
    MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 24, vars: 11, consts: [["data-parallax", "true", 1, "page-header", 3, "ngStyle"], [1, "filter"], [1, "container"], [1, "row"], [1, "francisco", "col-4", "my-5"], [1, "slide"], ["alt", "", 1, "img-thumbnail", "img-responsive", 3, "src"], [1, "motto", "text-center", "col-8", "my-5"], ["type", "button", 1, "btn", "btn-outline-neutral", "btn-round"], ["type", "button", "placement", "bottom", "ngbTooltip", "Add to my Favorite's List", 1, "btn", "btn-danger", "btn-just-icon", 3, "click"], [1, "fa", "fa-heart"], ["type", "button", 1, "btn", "btn-outline-neutral", "btn-round", 3, "routerLink"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieComponent_Template_button_click_20_listener() { return ctx.favorite(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Return Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "url(" + ctx.baseImagePath + ctx.image + ")"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.baseImagePath + ctx.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tagline);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.vote_average, "/10 ranked");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.genre);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".francisco[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    height: auto;  \r\n    overflow: visible;\r\n    white-space:nowrap;\r\n}\r\n\r\n.francisco[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.sizeImage[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmFuY2lzY28ge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxufVxyXG5cclxuLmZyYW5jaXNjbyAuc2xpZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2l6ZUltYWdle1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59Il19 */"] });
    return MovieComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie',
                templateUrl: './movie.component.html',
                styleUrls: ['./movie.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var _c0 = function (a1) { return ["/movie", a1]; };
function SearchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var resultado_r5 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, resultado_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.baseImagePath + resultado_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, resultado_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resultado_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Release Date ", resultado_r5.release_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", resultado_r5.vote_average, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resultado_r5.overview, " ");
} }
var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpService) {
        this.httpService = httpService;
        this.baseImagePath = "https://image.tmdb.org/t/p/original";
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 6, vars: 2, consts: [[1, "section", "section-dark", "text-center"], [1, "container"], [1, "title"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "card-profile", "card-plain"], [1, "card-avatar"], [3, "routerLink"], ["alt", "...", 3, "src"], [1, "card-block"], [1, "author"], [1, "card-title"], [1, "card-category"], [1, "card-description", "text-center"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_5_Template, 16, 11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Results from the Searching \"", ctx.httpService.search, "\"");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.httpService.searchResult);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });
    return SearchComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




var FavoritesService = /** @class */ (function () {
    function FavoritesService(http) {
        this.http = http;
        //Si la variable favorites consigue un valor del LocalStorage
        //obtendra dicho valor, sino consigue empezara como arreglo vacio
        this.favorites = JSON.parse(localStorage.getItem('myList'))
            ? JSON.parse(localStorage.getItem('myList'))
            : [];
    }
    //Este metodo es para enviar la ID de la pelicula a la cual
    //quiere enviarse a la lista de favoritos
    FavoritesService.prototype.setFavorite = function (id, type) {
        var _this = this;
        if (type === 'movie') {
            this.http.getSelectedById('/movie/', id)
                .subscribe(function (data) {
                _this.newFavorite = data;
                console.log(_this.newFavorite);
                _this.favorites.push(_this.newFavorite);
                localStorage.setItem('myList', JSON.stringify(_this.favorites));
            });
        }
        else {
            this.http.getSelectedById('/tv/', id)
                .subscribe(function (data) {
                _this.newFavorite = data;
                console.log(_this.newFavorite);
                _this.favorites.push(_this.newFavorite);
                localStorage.setItem('myList', JSON.stringify(_this.favorites));
            });
        }
    };
    FavoritesService.ɵfac = function FavoritesService_Factory(t) { return new (t || FavoritesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
    FavoritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavoritesService, factory: FavoritesService.ɵfac, providedIn: 'root' });
    return FavoritesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.urlAPI = 'https://api.themoviedb.org/3';
        this.apiKey = '897dc96fc5d5f516f5c688bceda50567';
        this.token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTdkYzk2ZmM1ZDVmNTE2ZjVjNjg4YmNlZGE1MDU2NyIsInN1YiI6IjVmNzFmMTJlZDM4YjU4MDAzNmUzOWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgpFAUaZHYRxlqoatTIXhW2Jl02wsOim50lsXQY6oQM';
    }
    // Metodo Get Trending Movies
    HttpService.prototype.get = function (url) {
        return this.http.get(this.urlAPI + url + ("?api_key=" + this.apiKey));
    };
    // Metodo Get para buscar Movies o Series mediante la ID
    HttpService.prototype.getSelectedById = function (url, id) {
        return this.http.get(this.urlAPI + url + id + ("?api_key=" + this.apiKey));
    };
    // Metodo Get Search Movies para buscar Movies o Series mediante un query
    HttpService.prototype.lookingFor = function (query) {
        return this.http.get(this.urlAPI + '/search/movie' + ("?api_key=" + this.apiKey + "&query=" + query));
    };
    // Metodo para recibir la busquedad desde un componente cualquiera y llevarlo al la pagina de busquedas
    HttpService.prototype.setSearching = function (search) {
        this.search = search;
    };
    // Metodo Get recibe la busquedad y la realiza para enviar los datos a Search page
    HttpService.prototype.getSearching = function () {
        var _this = this;
        return this.lookingFor(this.search)
            .subscribe(function (data) {
            console.log(data);
            _this.searchResult = data.results;
        });
    };
    HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
    return HttpService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "footer-nav"], [1, "credits", "ml-auto"], [1, "copyright"], [1, "fa", "fa-heart", "heart"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nav", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " by Francisco Herrera ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 1, ctx.test, "yyyy"), ", made with ");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm5/angular-bootstrap-md.js");












function NavbarComponent_mdb_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mdb-icon", 8);
} }
function NavbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["/favorites"]; };
function NavbarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, formBuilder, route, router, httpService) {
        this.location = location;
        this.element = element;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.loading = false;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        // this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.searchForm = this.formBuilder.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        // const toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            // toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 2000);
        var search = this.searchForm.value.search;
        console.log(search);
        // Procedimiento para dirigirnos a la pagina de "Search"
        // y enviar el input que querenos y nos interesa
        this.httpService.setSearching(search);
        this.router.navigate(['/search']);
        this.httpService.getSearching();
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 8, vars: 4, consts: [["color-on-scroll", "500", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container", "col-12"], [1, "row", "col-12"], [1, "form-inline", "md-form", "form-sm", "col-12", 3, "formGroup", "ngSubmit"], ["formControlName", "search", "type", "text", "placeholder", "Search", "aria-label", "Search", "mdbInput", "", 1, "form-control", "form-control-sm", "mr-3", "w-75", "col-11"], ["fas", "", "icon", "search", "aria-hidden", "false", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-just-icon ml-4", "placement", "bottom", "ngbTooltip", "My Favorite's List", 3, "routerLink", 4, "ngIf"], ["fas", "", "icon", "search", "aria-hidden", "false"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["type", "button", "placement", "bottom", "ngbTooltip", "My Favorite's List", 1, "btn", "btn-danger", "btn-just-icon", "ml-4", 3, "routerLink"], [1, "fa", "fa-heart"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavbarComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_mdb_icon_5_Template, 1, 0, "mdb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_div_6_Template, 4, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_button_7_Template, 2, 2, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading == false);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbInput"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".active-pink-2[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus:not([readonly]) {\n  border-bottom: 1px solid #f48fb1;\n  box-shadow: 0 1px 0 0 #f48fb1;\n}\n\n.active-pink[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f48fb1;\n  box-shadow: 0 1px 0 0 #f48fb1;\n}\n\n.active-purple-2[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus:not([readonly]) {\n  border-bottom: 1px solid #ce93d8;\n  box-shadow: 0 1px 0 0 #ce93d8;\n}\n\n.active-purple[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ce93d8;\n  box-shadow: 0 1px 0 0 #ce93d8;\n}\n\n.active-cyan-2[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus:not([readonly]) {\n  border-bottom: 1px solid #4dd0e1;\n  box-shadow: 0 1px 0 0 #4dd0e1;\n}\n\n.active-cyan[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-bottom: 1px solid #4dd0e1;\n  box-shadow: 0 1px 0 0 #4dd0e1;\n}\n\n.active-cyan[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .active-cyan-2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #4dd0e1;\n}\n\n.active-purple[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .active-purple-2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #ce93d8;\n}\n\n.active-pink[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .active-pink-2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #f48fb1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9DOlxcVXNlcnNcXEhFUlJFUkFcXERlc2t0b3BcXFBydWViYSBMSUJSRU9GRVJUQVxccHJ1ZWJhIExJQlJFT0ZFUlRBL3NyY1xcYXBwXFxzaGFyZWRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDQTs7QURFQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDQTs7QURFQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDQTs7QURFQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDQTs7QURFQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDQTs7QURFQTs7RUFFQSxjQUFBO0FDQ0E7O0FERUE7O0VBRUEsY0FBQTtBQ0NBOztBREVBOztFQUVBLGNBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1waW5rLTIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDhmYjE7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2Y0OGZiMTtcclxuICAgIH1cclxuICAgIFxyXG4uYWN0aXZlLXBpbmsgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ4ZmIxO1xyXG5ib3gtc2hhZG93OiAwIDFweCAwIDAgI2Y0OGZiMTtcclxufVxyXG5cclxuLmFjdGl2ZS1wdXJwbGUtMiBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2U5M2Q4O1xyXG5ib3gtc2hhZG93OiAwIDFweCAwIDAgI2NlOTNkODtcclxufVxyXG5cclxuLmFjdGl2ZS1wdXJwbGUgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2U5M2Q4O1xyXG5ib3gtc2hhZG93OiAwIDFweCAwIDAgI2NlOTNkODtcclxufVxyXG5cclxuLmFjdGl2ZS1jeWFuLTIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkZDBlMTtcclxuYm94LXNoYWRvdzogMCAxcHggMCAwICM0ZGQwZTE7XHJcbn1cclxuXHJcbi5hY3RpdmUtY3lhbiBpbnB1dFt0eXBlPXRleHRdIHtcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZGQwZTE7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDAgMCAjNGRkMGUxO1xyXG59XHJcblxyXG4uYWN0aXZlLWN5YW4gLmZhLFxyXG4uYWN0aXZlLWN5YW4tMiAuZmEge1xyXG5jb2xvcjogIzRkZDBlMTtcclxufVxyXG5cclxuLmFjdGl2ZS1wdXJwbGUgLmZhLFxyXG4uYWN0aXZlLXB1cnBsZS0yIC5mYSB7XHJcbmNvbG9yOiAjY2U5M2Q4O1xyXG59XHJcblxyXG4uYWN0aXZlLXBpbmsgLmZhLFxyXG4uYWN0aXZlLXBpbmstMiAuZmEge1xyXG5jb2xvcjogI2Y0OGZiMTtcclxufSIsIi5hY3RpdmUtcGluay0yIGlucHV0W3R5cGU9dGV4dF06Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDhmYjE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZjQ4ZmIxO1xufVxuXG4uYWN0aXZlLXBpbmsgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ4ZmIxO1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2Y0OGZiMTtcbn1cblxuLmFjdGl2ZS1wdXJwbGUtMiBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2U5M2Q4O1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2NlOTNkODtcbn1cblxuLmFjdGl2ZS1wdXJwbGUgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2U5M2Q4O1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2NlOTNkODtcbn1cblxuLmFjdGl2ZS1jeWFuLTIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRkZDBlMTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICM0ZGQwZTE7XG59XG5cbi5hY3RpdmUtY3lhbiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZGQwZTE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjNGRkMGUxO1xufVxuXG4uYWN0aXZlLWN5YW4gLmZhLFxuLmFjdGl2ZS1jeWFuLTIgLmZhIHtcbiAgY29sb3I6ICM0ZGQwZTE7XG59XG5cbi5hY3RpdmUtcHVycGxlIC5mYSxcbi5hY3RpdmUtcHVycGxlLTIgLmZhIHtcbiAgY29sb3I6ICNjZTkzZDg7XG59XG5cbi5hY3RpdmUtcGluayAuZmEsXG4uYWN0aXZlLXBpbmstMiAuZmEge1xuICBjb2xvcjogI2Y0OGZiMTtcbn0iXX0= */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HERRERA\Desktop\Prueba LIBREOFERTA\prueba LIBREOFERTA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map