webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'conversations', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav mr-auto\" *appShowAuthed=\"true\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\n              <a class=\"nav-link\" routerLink=\"conversations\">\n                  <i class=\"fas fa-square\"></i> Conversations\n              </a>\n          </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          <a class=\"nav-link\" routerLink=\"members\">\n            <i class=\"fas fa-users\"></i> Members\n          </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\" *appShowAuthed=\"true\">\n        <li class=\"nav-item\">\n            <a href=\"\" class=\"nav-link\" [routerLink]=\"['/members/profile', currentUser.id]\">\n              <i class=\"fas fa-user\"></i> {{ currentUser.email }}\n            </a>\n          </li>   \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" (click)=\"logout($event)\">\n              <i class=\"fas fa-sign-out-alt\"></i> Logout\n            </a>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer bg-light\">\n  <div class=\"container text-center\">\n    <span class=\"text-muted\">&copy; <a href=\"http://gemvietnam.com\">GEMVIETNAM</a></span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_message_service__ = __webpack_require__("./src/app/shared/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(messageService, authService, router) {
        this.messageService = messageService;
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.populate();
        this.authService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
        window.setInterval(function () {
            _this.messageService.sendMessage('UPDATE_ALL_WIDGET');
        }, __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].auto_refresh_after);
    };
    AppComponent.prototype.broadcastDoRefresh = function ($event) {
        $event.preventDefault();
        this.messageService.sendMessage('UPDATE_ALL_WIDGET');
    };
    AppComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.authService.logout();
        this.router.navigateByUrl('/members/login');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__member_member_module__ = __webpack_require__("./src/app/member/member.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__member_user_service__ = __webpack_require__("./src/app/member/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__conversations_conversations_module__ = __webpack_require__("./src/app/conversations/conversations.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__member_member_module__["a" /* MemberModule */],
                __WEBPACK_IMPORTED_MODULE_11__conversations_conversations_module__["a" /* ConversationsModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* AuthInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["e" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* AuthInterceptorService */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["c" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["d" /* JwtService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_9__member_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/conversations/conversation-list/conversation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  conversation-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/conversations/conversation-list/conversation-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/conversations/conversation-list/conversation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConversationListComponent = /** @class */ (function () {
    function ConversationListComponent() {
    }
    ConversationListComponent.prototype.ngOnInit = function () {
    };
    ConversationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversation-list',
            template: __webpack_require__("./src/app/conversations/conversation-list/conversation-list.component.html"),
            styles: [__webpack_require__("./src/app/conversations/conversation-list/conversation-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConversationListComponent);
    return ConversationListComponent;
}());



/***/ }),

/***/ "./src/app/conversations/conversations-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation_list_conversation_list_component__ = __webpack_require__("./src/app/conversations/conversation-list/conversation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'conversations',
        component: __WEBPACK_IMPORTED_MODULE_2__conversation_list_conversation_list_component__["a" /* ConversationListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
];
var ConversationsRoutingModule = /** @class */ (function () {
    function ConversationsRoutingModule() {
    }
    ConversationsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ConversationsRoutingModule);
    return ConversationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/conversations/conversations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversations_routing_module__ = __webpack_require__("./src/app/conversations/conversations-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_list_conversation_list_component__ = __webpack_require__("./src/app/conversations/conversation-list/conversation-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConversationsModule = /** @class */ (function () {
    function ConversationsModule() {
    }
    ConversationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__conversations_routing_module__["a" /* ConversationsRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__conversation_list_conversation_list_component__["a" /* ConversationListComponent */]]
        })
    ], ConversationsModule);
    return ConversationsModule;
}());



/***/ }),

/***/ "./src/app/member/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Member Login</strong>\n        </div>\n        <div class=\"card-body\">\n          <form novalidate (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label>Email address</label>\n                <input type=\"email\" class=\"form-control\" name=\"email\" ngModel required>    \n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" ngModel required>\n              </div>  \n              <button type=\"submit\" class=\"btn btn-primary\">\n                <i class=\"fas fa-sign-in-alt\"></i> Login\n              </button>\n            </form>            \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/member/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.authservice.login(this.form.value.email, this.form.value.password)
                .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
                console.log(err);
            });
            //this.form.reset();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/member/login/login.component.html"),
            styles: [__webpack_require__("./src/app/member/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/member/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  member-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/member-list/member-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberListComponent = /** @class */ (function () {
    function MemberListComponent() {
    }
    MemberListComponent.prototype.ngOnInit = function () {
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member-list',
            template: __webpack_require__("./src/app/member/member-list/member-list.component.html"),
            styles: [__webpack_require__("./src/app/member/member-list/member-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/member/member-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/member/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_list_member_list_component__ = __webpack_require__("./src/app/member/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'members',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__member_list_member_list_component__["a" /* MemberListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] }
        ]
    },
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ }),

/***/ "./src/app/member/member.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_routing_module__ = __webpack_require__("./src/app/member/member-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/member/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__member_list_member_list_component__ = __webpack_require__("./src/app/member/member-list/member-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__member_routing_module__["a" /* MemberRoutingModule */]
            ],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__member_list_member_list_component__["a" /* MemberListComponent */]],
            providers: []
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ }),

/***/ "./src/app/member/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
    }
    UserService.prototype.all = function () {
        return this.apiService.get('/members');
    };
    UserService.prototype.get = function (id) {
        return this.apiService.get('/members/' + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* map */])(function (data) { return data; }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        // return this.authService.isAuthenticated.subscribe(
        //   (authenticated) => {          
        //     if (!authenticated) {
        //       this.router.navigateByUrl('/members/login');
        //       return false;
        //     }
        //     return true;
        //   }
        // );
        var user = this.authService.isLoggedIn();
        if (!user) {
            this.router.navigateByUrl('/members/login');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jwt_service__ = __webpack_require__("./src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(jwtService) {
        this.jwtService = jwtService;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Bearer " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    AuthInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_jwt_service__["a" /* JwtService */]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jwt_service__ = __webpack_require__("./src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(jwtService, apiService) {
        this.jwtService = jwtService;
        this.apiService = apiService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* distinctUntilChanged */])());
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    AuthService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        var loggedInUser = this.jwtService.getUser();
        if (loggedInUser) {
            this.apiService.get("/members/" + loggedInUser.id)
                .subscribe(function (data) {
                var user = {
                    id: data.id,
                    email: data.email,
                    token: loggedInUser.token,
                    first_name: '',
                    last_name: '',
                    is_admin: true
                };
                _this.setSession(user);
            }, function (err) { return _this.logout(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.logout();
        }
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.apiService.post('/members/login', { email: email, password: password })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* map */])(function (data) {
            if (data.hasOwnProperty('error')) {
            }
            else {
                var user = {
                    id: data.id,
                    email: email,
                    token: data.accessToken,
                    first_name: '',
                    last_name: '',
                    is_admin: true
                };
                _this.setSession(user);
            }
            return data;
        }));
    };
    AuthService.prototype.setSession = function (user) {
        //const expiresAt = moment().add(user.expiresIn,'second');
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    };
    AuthService.prototype.logout = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
        //localStorage.removeItem("expires_at");
    };
    AuthService.prototype.isLoggedIn = function () {
        //return moment().isBefore(this.getExpiration());
        var token = this.jwtService.getToken();
        if (token !== '' && token !== null) {
            return true;
        }
        return false;
    };
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_jwt_service__["a" /* JwtService */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_interceptor_service__ = __webpack_require__("./src/app/shared/auth/auth-interceptor.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_interceptor_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_service__["a"]; });





/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__("./src/app/shared/auth/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });




/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("./src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/catchError.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JwtService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jwt_service__ = __webpack_require__("./src/app/shared/services/jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/shared/services/message.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__message_service__["a"]; });





/***/ }),

/***/ "./src/app/shared/services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getUser = function () {
        var user = localStorage.getItem('user');
        if (user !== 'undefined') {
            user = JSON.parse(user);
        }
        return user;
    };
    JwtService.prototype.getToken = function () {
        var user = this.getUser();
        if (user) {
            return user['token'];
        }
        return '';
    };
    JwtService.prototype.saveToken = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    JwtService.prototype.destroyToken = function () {
        localStorage.removeItem('user');
    };
    JwtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/shared/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MessageService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_routing_module__ = __webpack_require__("./src/app/shared/shared-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_authed_directive__ = __webpack_require__("./src/app/shared/show-authed.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_if_admin_directive__ = __webpack_require__("./src/app/shared/show-if-admin.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_routing_module__["a" /* SharedRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__show_authed_directive__["a" /* ShowAuthedDirective */],
                __WEBPACK_IMPORTED_MODULE_6__show_if_admin_directive__["a" /* ShowIfAdminDirective */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__show_authed_directive__["a" /* ShowAuthedDirective */],
                __WEBPACK_IMPORTED_MODULE_6__show_if_admin_directive__["a" /* ShowIfAdminDirective */]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/show-authed.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowAuthedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, authService, viewContainer) {
        this.templateRef = templateRef;
        this.authService = authService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[appShowAuthed]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */]])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());



/***/ }),

/***/ "./src/app/shared/show-if-admin.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowIfAdminDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowIfAdminDirective = /** @class */ (function () {
    function ShowIfAdminDirective(templateRef, authService, viewContainer) {
        this.templateRef = templateRef;
        this.authService = authService;
        this.viewContainer = viewContainer;
    }
    ShowIfAdminDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (currentUser) {
            if (currentUser) {
                if (currentUser.is_admin && _this.condition || !currentUser && !_this.condition) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                }
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowIfAdminDirective.prototype, "appShowIfAdmin", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowIfAdminDirective.prototype, "appShowIfAdmin", null);
    ShowIfAdminDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[appShowIfAdmin]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */]])
    ], ShowIfAdminDirective);
    return ShowIfAdminDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'https://d47c3aae-672d-496d-9686-d66e5eae9423.mock.pstmn.io',
    auto_refresh_after: 50 * 1000
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map