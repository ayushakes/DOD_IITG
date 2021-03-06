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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faculty_faculty_component__ = __webpack_require__("./src/app/faculty/faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__research_research_component__ = __webpack_require__("./src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_posts_new_post_new_post_component__ = __webpack_require__("./src/app/home/posts/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_posts_new_post_can_deactivate_guard_service__ = __webpack_require__("./src/app/home/posts/new-post/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faculty_teacher_list_edit_teacher_list_edit_component__ = __webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__research_oproject_list_edit_oproject_list_edit_component__ = __webpack_require__("./src/app/research/oproject-list-edit/oproject-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__research_cproject_list_edit_cproject_list_edit_component__ = __webpack_require__("./src/app/research/cproject-list-edit/cproject-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_news_list_edit_news_list_edit_component__ = __webpack_require__("./src/app/home/news-list-edit/news-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_links_list_edit_links_list_edit_component__ = __webpack_require__("./src/app/home/links-list-edit/links-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__research_publications_list_edit_publications_list_edit_component__ = __webpack_require__("./src/app/research/publications-list-edit/publications-list-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'research', component: __WEBPACK_IMPORTED_MODULE_8__research_research_component__["a" /* ResearchComponent */] }, { path: 'oproject-list-edit', component: __WEBPACK_IMPORTED_MODULE_12__research_oproject_list_edit_oproject_list_edit_component__["a" /* OprojectListEditComponent */] }, { path: 'cproject-list-edit', component: __WEBPACK_IMPORTED_MODULE_13__research_cproject_list_edit_cproject_list_edit_component__["a" /* CprojectListEditComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }, { path: 'news-list-edit', component: __WEBPACK_IMPORTED_MODULE_14__home_news_list_edit_news_list_edit_component__["a" /* NewsListEditComponent */] }, { path: 'publications-list-edit', component: __WEBPACK_IMPORTED_MODULE_16__research_publications_list_edit_publications_list_edit_component__["a" /* PublicationsListEditComponent */] }, { path: 'links-list-edit', component: __WEBPACK_IMPORTED_MODULE_15__home_links_list_edit_links_list_edit_component__["a" /* LinksListEditComponent */] },
    { path: 'home/newPost', component: __WEBPACK_IMPORTED_MODULE_9__home_posts_new_post_new_post_component__["a" /* NewPostComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__home_posts_new_post_can_deactivate_guard_service__["a" /* CanDeactivateGuard */]] },
    { path: 'faculty', component: __WEBPACK_IMPORTED_MODULE_7__faculty_faculty_component__["a" /* FacultyComponent */] }, { path: 'teacher-edit', component: __WEBPACK_IMPORTED_MODULE_11__faculty_teacher_list_edit_teacher_list_edit_component__["a" /* TeacherListEditComponent */] },
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_4__work_work_component__["a" /* WorkComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-dark{\r\n    background-image: url('navBackground.126c4f2f3cbe0dd1c295.jpg');\r\n}\r\n.bg-info{\r\n    background-image: url('dark_circles.b3a14fc93230967fa089.png');\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\r\n<link rel=\"stylesheet\" href=\"../assets/css/style.css\">\r\n<div class=\"container-fluid\">\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"home\"><img height='40px' width=\"40px\" src=\"../assets/images/iit-brand.png\" ></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"research\">research</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          people\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink='students'>students</a>\r\n          <a class=\"dropdown-item\" routerLink='faculty'>faculty</a>\r\n       \r\n          <a class=\"dropdown-item\" href=\"#\">staff</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"contact\">contact</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right nav-pills\">\r\n      <li class=\"nav-item\"><a  class=\"nav-link\" routerLink=\"/signup\">signup</a></li>\r\n      <li class=\"nav-item\"><a  class=\"nav-link\" routerLink=\"/signin\">signin</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div style=\"position:relative; margin-top:68px;\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n<div class=\"jumbotron jumbotron-fluid rounded-top bg-info\" style=\"margin-bottom:0px;\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\" style=\"color:white;\">Department of Design IIT-guwahati </h1>\r\n    <p class=\"lead\" style=\"color:white;\">Things look better,work better and feel better when properly designed</p>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
    function AppComponent(http) {
        this.http = http;
        this.title = 'site-one';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"]({ apiKey: "AIzaSyDY_V6wOWaJ3efjLKrcG2fHTW6OpFQq9uU",
            authDomain: "site-one-bc07f.firebaseapp.com",
            databaseURL: "https://site-one-bc07f.firebaseio.com",
            projectId: "site-one-bc07f",
            storageBucket: "site-one-bc07f.appspot.com",
            messagingSenderId: "778108263344" });
        this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(function (data) {
            console.log('UserId: ' + data.userId);
            console.log('Id: ' + data.id);
            console.log('Title: ' + data.title);
        });
        this.http.post('http://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faculty_faculty_component__ = __webpack_require__("./src/app/faculty/faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__research_research_component__ = __webpack_require__("./src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_posts_posts_component__ = __webpack_require__("./src/app/home/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_posts_post_post_component__ = __webpack_require__("./src/app/home/posts/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__back_directive__ = __webpack_require__("./src/app/back.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_posts_new_post_new_post_component__ = __webpack_require__("./src/app/home/posts/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_post_service__ = __webpack_require__("./src/app/shared/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_posts_new_post_can_deactivate_guard_service__ = __webpack_require__("./src/app/home/posts/new-post/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__faculty_teacher_teacher_component__ = __webpack_require__("./src/app/faculty/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__faculty_teacher_list_teacher_list_component__ = __webpack_require__("./src/app/faculty/teacher-list/teacher-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__faculty_teacher_list_edit_teacher_list_edit_component__ = __webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__faculty_shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__research_oproject_oproject_component__ = __webpack_require__("./src/app/research/oproject/oproject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__research_cproject_cproject_component__ = __webpack_require__("./src/app/research/cproject/cproject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__research_oproject_list_oproject_list_component__ = __webpack_require__("./src/app/research/oproject-list/oproject-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__research_cproject_list_cproject_list_component__ = __webpack_require__("./src/app/research/cproject-list/cproject-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__research_oproject_list_edit_oproject_list_edit_component__ = __webpack_require__("./src/app/research/oproject-list-edit/oproject-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__research_cproject_list_edit_cproject_list_edit_component__ = __webpack_require__("./src/app/research/cproject-list-edit/cproject-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__research_shared_oproject_service__ = __webpack_require__("./src/app/research/shared/oproject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__research_shared_cproject_service__ = __webpack_require__("./src/app/research/shared/cproject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__home_news_news_component__ = __webpack_require__("./src/app/home/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__home_news_list_edit_news_list_edit_component__ = __webpack_require__("./src/app/home/news-list-edit/news-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__home_news_list_news_list_component__ = __webpack_require__("./src/app/home/news-list/news-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_shared_news_service__ = __webpack_require__("./src/app/home/shared/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__home_links_list_links_list_component__ = __webpack_require__("./src/app/home/links-list/links-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__home_links_list_edit_links_list_edit_component__ = __webpack_require__("./src/app/home/links-list-edit/links-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__home_links_links_component__ = __webpack_require__("./src/app/home/links/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__home_shared_links_service__ = __webpack_require__("./src/app/home/shared/links.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__research_publications_publications_component__ = __webpack_require__("./src/app/research/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__research_publications_list_publications_list_component__ = __webpack_require__("./src/app/research/publications-list/publications-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__research_publications_list_edit_publications_list_edit_component__ = __webpack_require__("./src/app/research/publications-list-edit/publications-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__research_shared_publications_service__ = __webpack_require__("./src/app/research/shared/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var firebaseConfig = {
    apiKey: "AIzaSyDY_V6wOWaJ3efjLKrcG2fHTW6OpFQq9uU",
    authDomain: "site-one-bc07f.firebaseapp.com",
    databaseURL: "https://site-one-bc07f.firebaseio.com",
    projectId: "site-one-bc07f",
    storageBucket: "site-one-bc07f.appspot.com",
    messagingSenderId: "778108263344"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_36__home_news_news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_37__home_news_list_edit_news_list_edit_component__["a" /* NewsListEditComponent */], __WEBPACK_IMPORTED_MODULE_38__home_news_list_news_list_component__["a" /* NewsListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */], __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_7__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_9__students_students_component__["a" /* StudentsComponent */], __WEBPACK_IMPORTED_MODULE_10__faculty_faculty_component__["a" /* FacultyComponent */], __WEBPACK_IMPORTED_MODULE_11__research_research_component__["a" /* ResearchComponent */], __WEBPACK_IMPORTED_MODULE_12__home_posts_posts_component__["a" /* PostsComponent */], __WEBPACK_IMPORTED_MODULE_13__home_posts_post_post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_14__back_directive__["a" /* BackDirective */], __WEBPACK_IMPORTED_MODULE_15__home_posts_new_post_new_post_component__["a" /* NewPostComponent */], __WEBPACK_IMPORTED_MODULE_21__faculty_teacher_teacher_component__["a" /* TeacherComponent */], __WEBPACK_IMPORTED_MODULE_22__faculty_teacher_list_teacher_list_component__["a" /* TeacherListComponent */], __WEBPACK_IMPORTED_MODULE_23__faculty_teacher_list_edit_teacher_list_edit_component__["a" /* TeacherListEditComponent */], __WEBPACK_IMPORTED_MODULE_25__research_oproject_oproject_component__["a" /* OprojectComponent */], __WEBPACK_IMPORTED_MODULE_26__research_cproject_cproject_component__["a" /* CprojectComponent */], __WEBPACK_IMPORTED_MODULE_27__research_oproject_list_oproject_list_component__["a" /* OprojectListComponent */], __WEBPACK_IMPORTED_MODULE_28__research_cproject_list_cproject_list_component__["a" /* CprojectListComponent */], __WEBPACK_IMPORTED_MODULE_29__research_oproject_list_edit_oproject_list_edit_component__["a" /* OprojectListEditComponent */], __WEBPACK_IMPORTED_MODULE_30__research_cproject_list_edit_cproject_list_edit_component__["a" /* CprojectListEditComponent */], __WEBPACK_IMPORTED_MODULE_40__home_links_list_links_list_component__["a" /* LinksListComponent */], __WEBPACK_IMPORTED_MODULE_41__home_links_list_edit_links_list_edit_component__["a" /* LinksListEditComponent */], __WEBPACK_IMPORTED_MODULE_42__home_links_links_component__["a" /* LinksComponent */], __WEBPACK_IMPORTED_MODULE_44__research_publications_publications_component__["a" /* PublicationsComponent */], __WEBPACK_IMPORTED_MODULE_45__research_publications_list_publications_list_component__["a" /* PublicationsListComponent */], __WEBPACK_IMPORTED_MODULE_46__research_publications_list_edit_publications_list_edit_component__["a" /* PublicationsListEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_33_angularfire2_storage__["b" /* AngularFireStorageModule */], __WEBPACK_IMPORTED_MODULE_34__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_35__core_core_module__["a" /* CoreModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_47__research_shared_publications_service__["a" /* PublicationsService */], __WEBPACK_IMPORTED_MODULE_43__home_shared_links_service__["a" /* LinksService */], __WEBPACK_IMPORTED_MODULE_16__shared_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_18__home_posts_new_post_can_deactivate_guard_service__["a" /* CanDeactivateGuard */], __WEBPACK_IMPORTED_MODULE_24__faculty_shared_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_31__research_shared_oproject_service__["a" /* OprojectService */], __WEBPACK_IMPORTED_MODULE_32__research_shared_cproject_service__["a" /* CprojectService */], __WEBPACK_IMPORTED_MODULE_39__home_shared_news_service__["a" /* NewsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/back.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackDirective; });
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

var BackDirective = /** @class */ (function () {
    function BackDirective(elref, renderer) {
        this.elref = elref;
        this.renderer = renderer;
    }
    BackDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elref.nativeElement, 'background-image', 'url(./assets/images/research-icon.png)');
    };
    BackDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appBack]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], BackDirective);
    return BackDirective;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".imgHead{\r\n    max-width:100%;  height:30vw;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  @media (min-width:700px) {\r\n    \r\n    .imgHead{\r\n         max-width:100%; height:auto; padding-top:20px;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  @media (max-width:700px) {\r\n  .imgHead{\r\n    max-width:100%; height:44vw; padding-top:50px;\r\n  }\r\n  }"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n     \n    \n     <div class=\"container-fluid\">\n<div class=\"row\">\n    <div class=\"col\">\n<div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=iit guwahati&t=&z=15&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.webdesign-muenchen-pb.de\"></a></div><style>.mapouter{overflow:hidden;height:500px;width:600px;}.gmap_canvas {background:none!important;height:500px;width:600px;}</style></div>\n    </div>\n    <div class=\"col\">\n\n\n<button mat-raised-button (click)=\"openBottomSheet()\">contact us </button>\n\n    </div>\n     </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestoreModule */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["b" /* AngularFireStorageModule */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuthModule */],
            ],
            exports: [],
            declarations: [],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<button (click)=\"onClickEdit()\" class=\"btn btn-light\" style=\"border:1px solid black;\"> go to edit section</button>\r\n\r\n\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\"  *ngFor=\"let teacher of teacherList\" ><div class=\"card sm-4\">\r\n      <img  src=\"{{teacher.image}}|async\" height=\"100px;\"  width=\"100px;\" >      \r\n      <div class=\"card-body\">\r\n        <h2 class=\"card-title\">{{teacher.name}}</h2>\r\n        <p class=\"card-text\">{{teacher.position}}</p>\r\n        <a href=\"#\" class=\"btn btn-light\" style=\"border:1px solid black;\">Read More &rarr;</a>\r\n      </div>\r\n      <div class=\"card-footer text-muted\">\r\n       {{teacher.department}}\r\n      \r\n      </div>\r\n    </div> </li>\r\n  </ul>\r\n"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacultyComponent = /** @class */ (function () {
    function FacultyComponent(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
    }
    FacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.teacherService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.teacherList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.teacherList.push(y);
            });
        });
    };
    FacultyComponent.prototype.onClickEdit = function () {
        this.router.navigate(['/teacher-edit']);
    };
    FacultyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faculty',
            template: __webpack_require__("./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__("./src/app/faculty/faculty.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FacultyComponent);
    return FacultyComponent;
}());



/***/ }),

/***/ "./src/app/faculty/shared/teacher.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Teacher; });
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());



/***/ }),

/***/ "./src/app/faculty/shared/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_model__ = __webpack_require__("./src/app/faculty/shared/teacher.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherService = /** @class */ (function () {
    function TeacherService(firebase) {
        this.firebase = firebase;
        this.selectedTeacher = new __WEBPACK_IMPORTED_MODULE_1__teacher_model__["a" /* Teacher */]();
    }
    TeacherService.prototype.getData = function () {
        this.teacherList = this.firebase.list('teacher');
        return this.teacherList;
    };
    TeacherService.prototype.insertTeacher = function (teacher) {
        this.teacherList.push({
            name: teacher.name,
            position: teacher.position,
            department: teacher.department,
            image: teacher.image
        });
    };
    TeacherService.prototype.updateTeacher = function (teacher) {
        this.teacherList.update(teacher.$key, { name: teacher.name,
            position: teacher.position,
            department: teacher.department,
            image: teacher.image
        });
    };
    TeacherService.prototype.deleteTeacher = function (key) { this.teacherList.remove(key); };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/app/faculty/teacher-list-edit/teacher-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/teacher-list-edit/teacher-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickBack()\" class=\"btn btn-light\" style=\"border:1px solid black;\">go back to faculty section</button>\n<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">teacher list edit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-teacher></app-teacher>\n  </div>\n  <div class=\"col-md-5\">\n    <app-teacher-list></app-teacher-list>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/faculty/teacher-list-edit/teacher-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherListEditComponent = /** @class */ (function () {
    function TeacherListEditComponent(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
    }
    TeacherListEditComponent.prototype.ngOnInit = function () {
    };
    TeacherListEditComponent.prototype.onClickBack = function () {
        this.router.navigate(['/faculty']);
    };
    TeacherListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher-list-edit',
            template: __webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TeacherListEditComponent);
    return TeacherListEditComponent;
}());



/***/ }),

/***/ "./src/app/faculty/teacher-list/teacher-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/faculty/teacher-list/teacher-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let teacher of teacherList\" (click)=\"onItemClick(teacher)\">{{teacher.name}}-{{teacher.department}}\n     <img src=\"{{teacher.image}} | async\" height=\"100px;\" width=\"100px;\">\n  </li>\n</ul>\n\n\n"

/***/ }),

/***/ "./src/app/faculty/teacher-list/teacher-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherListComponent = /** @class */ (function () {
    function TeacherListComponent(teacherService, storage) {
        this.teacherService = teacherService;
        this.storage = storage;
    }
    TeacherListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.teacherService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.teacherList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.teacherList.push(y);
            });
        });
    };
    TeacherListComponent.prototype.onItemClick = function (teacher) {
        this.teacherService.selectedTeacher = Object.assign({}, teacher);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    TeacherListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher-list',
            template: __webpack_require__("./src/app/faculty/teacher-list/teacher-list.component.html"),
            styles: [__webpack_require__("./src/app/faculty/teacher-list/teacher-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], TeacherListComponent);
    return TeacherListComponent;
}());



/***/ }),

/***/ "./src/app/faculty/teacher/teacher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<form (ngSubmit)=\"onSubmit(teacherForm)\" #teacherForm=\"ngForm\">\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"teacherService.selectedTeacher.$key\">\n  <div class=\"form-group\">\n  <label>name</label>\n  <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.name\" placeholder=\"full name\">\n</div>\n\n<div class=\"form-group\">\n  <label>position</label>\n  <input type=\"text\" class=\"form-control\" name=\"position\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.position\" placeholder=\"position\">\n</div>\n\n<div class=\"form-group\">\n  <label>department</label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-building\"></i></span>\n      \n    </div>\n    <input type=\"text\" class=\"form-control\" name=\"department\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.department\" placeholder=\"department\">\n  </div>\n  \n</div>\n\n<div class=\"form-group\">\n  <label>image</label>\n  <input type=\"hidden\" class=\"form-control\" name=\"image\" #name=\"ngModel\"  [(ngModel)]=\"teacherService.selectedTeacher.image\" placeholder=\"give the name of the teacher here without space\">\n</div>\n<div class=\"form-group\">\n  <label>upload Image</label>\n  \n  <input type=\"file\"  class=\"form-control\" name=\"imageUpload\" (change)=\"uploadFile($event)\" #name=\"ngModel\"  [(ngModel)]=\"teacherService.selectedTeacher.imageUpload\" >\n  <div>upload percentage: {{ uploadPercent | async }}</div>\n  <progress max=\"100\" [value]=\"(uploadPercent | async)\"></progress>\n  <div class=\"result\" *ngIf=\"downloadURL | async; let uploadSrc\">\n    <a [href]=\"uploadSrc\">You just uploaded this file!</a>\n    </div>\n  <p>uploaded image:</p>  <img [src]=\"uploadedImage | async\" />\n  </div>\n \n  \n\n\n<div class=\"form-group\">\n<button type=\"submit\" class=\"btn btn-light\" style=\"border:1px solid black;\" [disabled]=\"!teacherForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"onDelete(teacherForm)\" *ngIf=\"teacherService.selectedTeacher.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\n\n</div>\n</form>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/faculty/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(teacherService, storage, snackBar) {
        this.teacherService = teacherService;
        this.storage = storage;
        this.snackBar = snackBar;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
        this.temp = this.storage;
    }
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent.prototype.ngOnChanges = function () {
    };
    TeacherComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.teacherService.insertTeacher(form.value);
            this.resetForm();
            this.inserted = true;
            this.openSnackBar("record inserted", "");
        }
        else {
            this.teacherService.updateTeacher(form.value);
            this.updated = true;
            this.openSnackBar("record updated", "");
        }
    };
    TeacherComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.teacherService.selectedTeacher = {
            $key: null,
            name: '',
            position: '',
            department: '',
            image: null,
            imageUpload: null
        };
    };
    TeacherComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.teacherService.deleteTeacher(form.value.$key);
            this.resetForm(form);
            this.openSnackBar("record", " deleted!");
        }
    };
    TeacherComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'facultyImages/' + this.teacherService.selectedTeacher.name;
        this.task = this.storage.upload(filePath, file);
        this.openSnackBar("image started uploading!", "");
        this.downloadURL = this.task.downloadURL();
        this.uploadedImage = this.downloadURL;
        this.uploadPercent = this.task.percentageChanges();
        this.task.downloadURL().subscribe(function (url) { _this.teacherService.selectedTeacher.image = url; });
        //this.teacherService.selectedTeacher.image
    };
    TeacherComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    TeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher',
            template: __webpack_require__("./src/app/faculty/teacher/teacher.component.html"),
            styles: [__webpack_require__("./src/app/faculty/teacher/teacher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatSnackBar */]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".BigHeading{\r\n\r\n    font-size:2.75Vmax;\r\n}\r\n.media{\r\n        width:70%; \r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\n\n  <div class=\"container-fluid rounded\">\n    \n   <div class=\"row\"> \n      <div class=\"col\"> <figure class=\"rounded\">\n          <img src=\"../assets/images/2.jpg\" alt=\"image not Loaded\"/>\n          <figcaption>\n            <div>\n              <h2 style=\"font-size:3vw; color:rgb(74, 215, 236); \" >WE <span style=\"font-size:3vw\">Rock!!!</span></h2>\n              <p style=\"font-size:2vw;\" class=\"text-info\">IIT-G : Where we design our dreams</p>\n            </div>\n            \n          </figcaption>\t\t\t\n        </figure>\n      </div> \n    \n    <div class=\"col\"> <h1 class=\"display-4 BigHeading\">Department of Design</h1> \n    <p class=\"lead\">Where you design your dreams</p> <p>\n      \n    </p> \n    \n  <!--news -->\n\n  \n\n\n    <mat-tab-group>\n      <mat-tab label=\"Tab 1\"><button (click)=\"onClickEdit()\" class=\"btn btn-light\" style=\"border:1px solid black;\"> go to edit section</button>\n\n\n        <div class=\"media border border-info rounded\" *ngFor=\"let news of newsList\">\n          <img class=\"mr-3\" src=\"../assets/images/radio.png\" alt=\"image not loaded yet\">\n          <div class=\"media-body\">\n            <h5 class=\"mt-0\">{{news.title}}</h5>\n            {{news.content}}\n          </div>\n        </div></mat-tab>\n      <mat-tab label=\"Tab 2\"><button (click)=\"onClickEdit2()\" class=\"btn btn-light\" style=\"border:1px solid black;\"> go to edit section</button>\n\n\n        <div class=\"media border border-primary rounded\" *ngFor=\"let links of linksList\">\n          <img class=\"mr-3\" src=\"../assets/images/icons8-link-50.png\" alt=\"image not loaded yet\">\n          <div class=\"media-body\">\n            <h5 class=\"mt-0\">{{links.name}}</h5>\n            <a href=\"{{links.url}}\">{{links.name}}</a>\n          </div>\n        </div></mat-tab>\n    </mat-tab-group>\n    \n   \n\n\n\n    </div> </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/home/shared/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_links_service__ = __webpack_require__("./src/app/home/shared/links.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, newsService, linksService) {
        this.router = router;
        this.newsService = newsService;
        this.linksService = linksService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var y = this.newsService.getData();
        y.snapshotChanges().subscribe(function (item) {
            _this.newsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.newsList.push(y);
            });
        });
        var x = this.linksService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.linksList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.linksList.push(x);
            });
        });
    };
    HomeComponent.prototype.onClickEdit = function () {
        this.router.navigate(['/news-list-edit']);
    };
    HomeComponent.prototype.onClickEdit2 = function () {
        this.router.navigate(['/links-list-edit']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_3__shared_links_service__["a" /* LinksService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/links-list-edit/links-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/links-list-edit/links-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickBack()\" class=\"btn btn-light\" style=\"border:1px solid black;\">go back to home </button>\n<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">links list edit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-links></app-links>\n  </div>\n  <div class=\"col-md-5\">\n    <app-links-list></app-links-list>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/home/links-list-edit/links-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_links_service__ = __webpack_require__("./src/app/home/shared/links.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinksListEditComponent = /** @class */ (function () {
    function LinksListEditComponent(linksService, router) {
        this.linksService = linksService;
        this.router = router;
    }
    LinksListEditComponent.prototype.ngOnInit = function () {
    };
    LinksListEditComponent.prototype.onClickBack = function () {
        this.router.navigate(['/home']);
    };
    LinksListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-links-list-edit',
            template: __webpack_require__("./src/app/home/links-list-edit/links-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/home/links-list-edit/links-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_links_service__["a" /* LinksService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LinksListEditComponent);
    return LinksListEditComponent;
}());



/***/ }),

/***/ "./src/app/home/links-list/links-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/links-list/links-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let links of linksList\" (click)=\"onItemClick(links)\">{{links.name}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/home/links-list/links-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_links_service__ = __webpack_require__("./src/app/home/shared/links.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinksListComponent = /** @class */ (function () {
    function LinksListComponent(linksService) {
        this.linksService = linksService;
    }
    LinksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.linksService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.linksList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.linksList.push(y);
            });
        });
    };
    LinksListComponent.prototype.onItemClick = function (links) {
        this.linksService.selectedLinks = Object.assign({}, links);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    LinksListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-links-list',
            template: __webpack_require__("./src/app/home/links-list/links-list.component.html"),
            styles: [__webpack_require__("./src/app/home/links-list/links-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_links_service__["a" /* LinksService */]])
    ], LinksListComponent);
    return LinksListComponent;
}());



/***/ }),

/***/ "./src/app/home/links/links.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p *ngIf=\"inserted\" style=\"color:greenyellow;\">item inserted</p>\n<p *ngIf=\"updated\" style=\"color:greenyellow;\">item updated</p>\n<p *ngIf=\"deleted\" style=\"color:red;\">item deleted</p>\n<form (ngSubmit)=\"onSubmit(linksForm)\" #linksForm=\"ngForm\">\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"linksService.selectedLinks.$key\">\n  <div class=\"form-group\">\n  <label>name</label>\n  <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" required [(ngModel)]=\"linksService.selectedLinks.name\" placeholder=\"name\">\n</div>\n<div class=\"form-group\">\n  \n<label>url</label>\n  <input type=\"text\" class=\"form-control\" name=\"url\" #name=\"ngModel\" required [(ngModel)]=\"linksService.selectedLinks.url\" placeholder=\"url\">\n</div>\n\n\n<div class=\"form-group\">\n<button type=\"submit\" class=\"btn btn-light\" style=\"border:1px solid black;\" [disabled]=\"!linksForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"onDelete(linksForm)\" *ngIf=\"linksService.selectedLinks.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\n\n</div>\n</form>"

/***/ }),

/***/ "./src/app/home/links/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_links_service__ = __webpack_require__("./src/app/home/shared/links.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinksComponent = /** @class */ (function () {
    function LinksComponent(linksService) {
        this.linksService = linksService;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.linksService.insertLinks(form.value);
            this.resetForm();
            this.inserted = true;
        }
        else {
            this.linksService.updateLinks(form.value);
            this.updated = true;
        }
    };
    LinksComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.linksService.selectedLinks = {
            $key: null,
            name: '',
            url: '',
        };
    };
    LinksComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.linksService.deleteLinks(form.value.$key);
            this.resetForm(form);
        }
    };
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-links',
            template: __webpack_require__("./src/app/home/links/links.component.html"),
            styles: [__webpack_require__("./src/app/home/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_links_service__["a" /* LinksService */]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/home/news-list-edit/news-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/news-list-edit/news-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickBack()\" class=\"btn btn-light\" style=\"border:1px solid black;\">go back to home </button>\n<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">News list eddit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-news></app-news>\n  </div>\n  <div class=\"col-md-5\">\n    <app-news-list></app-news-list>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/home/news-list-edit/news-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_news_service__ = __webpack_require__("./src/app/home/shared/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsListEditComponent = /** @class */ (function () {
    function NewsListEditComponent(newsService, router) {
        this.newsService = newsService;
        this.router = router;
    }
    NewsListEditComponent.prototype.ngOnInit = function () {
    };
    NewsListEditComponent.prototype.onClickBack = function () {
        this.router.navigate(['/home']);
    };
    NewsListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-list-edit',
            template: __webpack_require__("./src/app/home/news-list-edit/news-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/home/news-list-edit/news-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NewsListEditComponent);
    return NewsListEditComponent;
}());



/***/ }),

/***/ "./src/app/home/news-list/news-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/news-list/news-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let news of newsList\" (click)=\"onItemClick(news)\">{{news.title}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/home/news-list/news-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/home/shared/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(newsService) {
        this.newsService = newsService;
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.newsService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.newsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.newsList.push(y);
            });
        });
    };
    NewsListComponent.prototype.onItemClick = function (news) {
        this.newsService.selectedNews = Object.assign({}, news);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-list',
            template: __webpack_require__("./src/app/home/news-list/news-list.component.html"),
            styles: [__webpack_require__("./src/app/home/news-list/news-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */]])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/home/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<p *ngIf=\"inserted\" style=\"color:greenyellow;\">item inserted</p>\r\n<p *ngIf=\"updated\" style=\"color:greenyellow;\">item updated</p>\r\n<p *ngIf=\"deleted\" style=\"color:red;\">item deleted</p>\r\n<form (ngSubmit)=\"onSubmit(newsForm)\" #newsForm=\"ngForm\">\r\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"newsService.selectedNews.$key\">\r\n  <div class=\"form-group\">\r\n  <label>Title</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"title\" #name=\"ngModel\" required [(ngModel)]=\"newsService.selectedNews.title\" placeholder=\"Title\">\r\n</div>\r\n<div class=\"form-group\">\r\n  \r\n<label>content</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"content\" #name=\"ngModel\" required [(ngModel)]=\"newsService.selectedNews.content\" placeholder=\"content\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>image</label>\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-female\"></i></span>\r\n      \r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" name=\"image\" #name=\"ngModel\" required [(ngModel)]=\"newsService.selectedNews.image\" placeholder=\"co-investigator\">\r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>published on</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"date\" #name=\"ngModel\" required [(ngModel)]=\"newsService.selectedNews.date\" placeholder=\"date published on\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n<button type=\"submit\" class=\"btn btn-light\" style=\"border:1px solid black;\" [disabled]=\"!newsForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\r\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"onDelete(newsForm)\" *ngIf=\"newsService.selectedNews.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\r\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\r\n\r\n</div>\r\n</form>"

/***/ }),

/***/ "./src/app/home/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/home/shared/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.newsService.insertNews(form.value);
            this.resetForm();
            this.inserted = true;
        }
        else {
            this.newsService.updateNews(form.value);
            this.updated = true;
        }
    };
    NewsComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.newsService.selectedNews = {
            $key: null,
            title: '',
            content: '',
            image: '',
            date: ''
        };
    };
    NewsComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.newsService.deleteNews(form.value.$key);
            this.resetForm(form);
        }
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/home/news/news.component.html"),
            styles: [__webpack_require__("./src/app/home/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/home/posts/new-post/can-deactivate-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/home/posts/new-post/new-post.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n    border:2px solid red;\r\n}"

/***/ }),

/***/ "./src/app/home/posts/new-post/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <form  (ngSubmit)=\"onAddPost(f)\" #f=\"ngForm\">\n \n<label>Image Url</label><p *ngIf=\"!imageUrl.valid&&imageUrl.touched\">field can't be empty</p>\n  \n<input #imageUrl=\"ngModel\" required class=\"form-control\" ngModel name=\"imageUrl\" id=\"imageUrl\" type=\"text\" placeholder=\"type image url here\"   >\n  <label>title</label><p *ngIf=\"!title.valid&&title.touched\">field can't be empty</p>\n  <input #title=\"ngModel\" required class=\"form-control\" ngModel name=\"title\" id=\"title\" type=\"text\" placeholder=\"type title here\"  >\n  <label>text</label><p *ngIf=\"!text.valid&&text.touched\">field can't be empty</p>\n  <input #text=\"ngModel\" required class=\"form-control\" ngModel name=\"text\" id=\"text\" type=\"text\" placeholder=\"type body here\"  >\n  <label>footerText</label><p *ngIf=\"!footerText.valid&&footerText.touched\">field can't be empty</p>\n  <input #footerText=\"ngModel\" required class=\"form-control\" ngModel name=\"footerText\" id=\"footerText\" type=\"text\" placeholder=\"type footer text here\"  >\n  <button   class=\"btn btn-success\" (click)=\"onConfirm()\" [disabled]=\"confirmed\">{{confirmButtonText}}</button>\n<button  type=\"submit\"  class=\"btn btn-primary\">add the post</button>\n<button   class=\"btn btn-danger\" routerLink=\"/home\">go back to home page</button>\n<p *ngIf=\"postAdded\" style=\"color:limegreen;\">post added!</p>\n\n</form>\n"

/***/ }),

/***/ "./src/app/home/posts/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_model__ = __webpack_require__("./src/app/home/posts/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_post_service__ = __webpack_require__("./src/app/shared/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
        this.confirmed = false;
        this.confirmButtonText = "confirm data";
        this.postAdded = false;
    }
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.canDeactivate = function () {
        if (this.PostForm.touched || this.PostForm.dirty) {
            return confirm('you are in the mid of entering post data.do you wish to leave?');
        }
        else {
            return true;
        }
    };
    NewPostComponent.prototype.onConfirm = function () {
        if (this.PostForm.valid) {
            this.confirmed = true;
            this.confirmButtonText = "data confirmed";
        }
        else {
            return alert('Post is incomplete or invalid.');
        }
    };
    NewPostComponent.prototype.onAddPost = function () {
        if (this.confirmed) {
            console.log("form has been submitted");
            console.log(this.PostForm);
            this.post = new __WEBPACK_IMPORTED_MODULE_2__post_model__["a" /* Post */](this.PostForm.value.imageUrl, this.PostForm.value.title, this.PostForm.value.text, this.PostForm.value.footerText);
            this.postService.addPost(this.post).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            console.log("the data entered in the newly created post by you is as follows ");
            console.log(this.post);
            console.log('post has been added succcessfully');
            this.postAdded = true;
            this.PostForm.reset();
        }
        else {
            return alert(' please confirm the data first');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], NewPostComponent.prototype, "PostForm", void 0);
    NewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-post',
            template: __webpack_require__("./src/app/home/posts/new-post/new-post.component.html"),
            styles: [__webpack_require__("./src/app/home/posts/new-post/new-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/home/posts/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(imageUrl, title, text, footerText) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.text = text;
        this.footerText = footerText;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/home/posts/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/posts/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card sm-4\">\n  <img class=\"card-img-top\" src=\"{{post.imageUrl}}\" style=\"height:100px; width:100px;  \" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title\">{{post.title}}</h2>\n    <p class=\"card-text\">{{post.text}}</p>\n    <a href=\"#\" class=\"btn btn-primary\">Read More &rarr;</a>\n  </div>\n  <div class=\"card-footer text-muted\">\n   {{post.footerText}}\n    <a href=\"#\">Start Bootstrap</a>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/home/posts/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_model__ = __webpack_require__("./src/app/home/posts/post.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__post_model__["a" /* Post */])
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/home/posts/post/post.component.html"),
            styles: [__webpack_require__("./src/app/home/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/home/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n    border:2px solid red;\r\n}"

/***/ }),

/***/ "./src/app/home/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-danger\" routerLink=\"/home/newPost\">new post</button>\n\n\n<!-- html5 validations  (which are by default disabled by angular can be enabled by using ngNativeValidate on the form-control we want to have on) -->\n\n<ul>\n    \n  <app-post *ngFor=\"let post of posts\" [post]=post></app-post>\n\n</ul>"

/***/ }),

/***/ "./src/app/home/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_post_service__ = __webpack_require__("./src/app/shared/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(router, postService) {
        this.router = router;
        this.postService = postService;
        this.posts = this.postService.posts;
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], PostsComponent.prototype, "PostForm", void 0);
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/home/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/home/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_post_service__["a" /* PostService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/home/shared/link.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = /** @class */ (function () {
    function Link() {
    }
    return Link;
}());



/***/ }),

/***/ "./src/app/home/shared/links.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_model__ = __webpack_require__("./src/app/home/shared/link.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinksService = /** @class */ (function () {
    function LinksService(firebase) {
        this.firebase = firebase;
        this.selectedLinks = new __WEBPACK_IMPORTED_MODULE_1__link_model__["a" /* Link */]();
    }
    LinksService.prototype.getData = function () {
        this.linksList = this.firebase.list('home/links');
        return this.linksList;
    };
    LinksService.prototype.insertLinks = function (links) {
        this.linksList.push({
            name: links.name,
            url: links.url,
        });
    };
    LinksService.prototype.updateLinks = function (links) {
        this.linksList.update(links.$key, { name: links.name,
            url: links.url
        });
    };
    LinksService.prototype.deleteLinks = function (key) { this.linksList.remove(key); };
    LinksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LinksService);
    return LinksService;
}());



/***/ }),

/***/ "./src/app/home/shared/news.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = /** @class */ (function () {
    function News() {
    }
    return News;
}());



/***/ }),

/***/ "./src/app/home/shared/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_model__ = __webpack_require__("./src/app/home/shared/news.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = /** @class */ (function () {
    function NewsService(firebase) {
        this.firebase = firebase;
        this.selectedNews = new __WEBPACK_IMPORTED_MODULE_1__news_model__["a" /* News */]();
    }
    NewsService.prototype.getData = function () {
        this.newsList = this.firebase.list('home/news');
        return this.newsList;
    };
    NewsService.prototype.insertNews = function (news) {
        this.newsList.push({
            title: news.title,
            content: news.content,
            image: news.image,
            date: news.date
        });
    };
    NewsService.prototype.updateNews = function (news) {
        this.newsList.update(news.$key, { title: news.title,
            content: news.content,
            image: news.image,
            date: news.date
        });
    };
    NewsService.prototype.deleteNews = function (key) { this.newsList.remove(key); };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_snack_bar__["b" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__["a" /* MatTabsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_snack_bar__["b" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__["a" /* MatTabsModule */]],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
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

var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/people/people.component.html"),
            styles: [__webpack_require__("./src/app/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/research/cproject-list-edit/cproject-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/cproject-list-edit/cproject-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickBack()\" class=\"btn btn-light\" style=\"border:1px solid black;\">go back to research </button>\n<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">completed projects list edit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-cproject></app-cproject>\n  </div>\n  <div class=\"col-md-5\">\n    <app-cproject-list></app-cproject-list>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/research/cproject-list-edit/cproject-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CprojectListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_cproject_service__ = __webpack_require__("./src/app/research/shared/cproject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CprojectListEditComponent = /** @class */ (function () {
    function CprojectListEditComponent(cprojectService, router) {
        this.cprojectService = cprojectService;
        this.router = router;
    }
    CprojectListEditComponent.prototype.ngOnInit = function () {
    };
    CprojectListEditComponent.prototype.onClickBack = function () {
        this.router.navigate(['/research']);
    };
    CprojectListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cproject-list-edit',
            template: __webpack_require__("./src/app/research/cproject-list-edit/cproject-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/research/cproject-list-edit/cproject-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_cproject_service__["a" /* CprojectService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CprojectListEditComponent);
    return CprojectListEditComponent;
}());



/***/ }),

/***/ "./src/app/research/cproject-list/cproject-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/research/cproject-list/cproject-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let cproject of cprojectList\" (click)=\"onItemClick(cproject)\">{{cproject.title}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/research/cproject-list/cproject-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CprojectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_cproject_service__ = __webpack_require__("./src/app/research/shared/cproject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CprojectListComponent = /** @class */ (function () {
    function CprojectListComponent(cprojectService) {
        this.cprojectService = cprojectService;
    }
    CprojectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.cprojectService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.cprojectList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.cprojectList.push(y);
            });
        });
    };
    CprojectListComponent.prototype.onItemClick = function (cproject) {
        this.cprojectService.selectedCproject = Object.assign({}, cproject);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    CprojectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cproject-list',
            template: __webpack_require__("./src/app/research/cproject-list/cproject-list.component.html"),
            styles: [__webpack_require__("./src/app/research/cproject-list/cproject-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_cproject_service__["a" /* CprojectService */]])
    ], CprojectListComponent);
    return CprojectListComponent;
}());



/***/ }),

/***/ "./src/app/research/cproject/cproject.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/cproject/cproject.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p *ngIf=\"inserted\" style=\"color:greenyellow;\">item inserted</p>\n<p *ngIf=\"updated\" style=\"color:greenyellow;\">item updated</p>\n<p *ngIf=\"deleted\" style=\"color:red;\">item deleted</p>\n<form (ngSubmit)=\"onSubmit(cprojectForm)\" #cprojectForm=\"ngForm\">\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"cprojectService.selectedCproject.$key\">\n  <div class=\"form-group\">\n  <label>Title</label>\n  <input type=\"text\" class=\"form-control\" name=\"title\" #name=\"ngModel\" required [(ngModel)]=\"cprojectService.selectedCproject.title\" placeholder=\"Title\">\n</div>\n<div class=\"form-group\">\n  \n<label>principle Investigator</label>\n  <input type=\"text\" class=\"form-control\" name=\"principleInvestigator\" #name=\"ngModel\" required [(ngModel)]=\"cprojectService.selectedCproject.principleInvestigator\" placeholder=\"principle Investigator\">\n</div>\n\n<div class=\"form-group\">\n  <label>co-Investigator</label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-female\"></i></span>\n      \n    </div>\n    <input type=\"text\" class=\"form-control\" name=\"coInvestigator\" #name=\"ngModel\" required [(ngModel)]=\"cprojectService.selectedCproject.coInvestigator\" placeholder=\"co-investigator\">\n  </div>\n  \n</div>\n\n<div class=\"form-group\">\n  <label>Sponsoring Agency</label>\n  <input type=\"text\" class=\"form-control\" name=\"sponsoringAgency\" #name=\"ngModel\" required [(ngModel)]=\"cprojectService.selectedCproject.sponsoringAgency\" placeholder=\"sponsoring agency\">\n</div>\n\n<div class=\"form-group\">\n<button type=\"submit\" class=\"btn btn-light\" style=\"border:1px solid black;\" [disabled]=\"!cprojectForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"onDelete(cprojectForm)\" *ngIf=\"cprojectService.selectedCproject.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\n\n</div>\n</form>"

/***/ }),

/***/ "./src/app/research/cproject/cproject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CprojectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_cproject_service__ = __webpack_require__("./src/app/research/shared/cproject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CprojectComponent = /** @class */ (function () {
    function CprojectComponent(cprojectService) {
        this.cprojectService = cprojectService;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
    }
    CprojectComponent.prototype.ngOnInit = function () {
    };
    CprojectComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.cprojectService.insertCproject(form.value);
            this.resetForm();
            this.inserted = true;
        }
        else {
            this.cprojectService.updateCproject(form.value);
            this.updated = true;
        }
    };
    CprojectComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.cprojectService.selectedCproject = {
            $key: null,
            title: '',
            principleInvestigator: '',
            coInvestigator: '',
            sponsoringAgency: ''
        };
    };
    CprojectComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.cprojectService.deleteCproject(form.value.$key);
            this.resetForm(form);
        }
    };
    CprojectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cproject',
            template: __webpack_require__("./src/app/research/cproject/cproject.component.html"),
            styles: [__webpack_require__("./src/app/research/cproject/cproject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_cproject_service__["a" /* CprojectService */]])
    ], CprojectComponent);
    return CprojectComponent;
}());



/***/ }),

/***/ "./src/app/research/oproject-list-edit/oproject-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/oproject-list-edit/oproject-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickBack()\" class=\"btn btn-light\" style=\"border:1px solid black;\">go back to research </button>\n<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">ongoing projects list edit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-oproject></app-oproject>\n  </div>\n  <div class=\"col-md-5\">\n    <app-oproject-list></app-oproject-list>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/research/oproject-list-edit/oproject-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OprojectListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_oproject_service__ = __webpack_require__("./src/app/research/shared/oproject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OprojectListEditComponent = /** @class */ (function () {
    function OprojectListEditComponent(oprojectService, router) {
        this.oprojectService = oprojectService;
        this.router = router;
    }
    OprojectListEditComponent.prototype.ngOnInit = function () {
    };
    OprojectListEditComponent.prototype.onClickBack = function () {
        this.router.navigate(['/research']);
    };
    OprojectListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-oproject-list-edit',
            template: __webpack_require__("./src/app/research/oproject-list-edit/oproject-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/research/oproject-list-edit/oproject-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_oproject_service__["a" /* OprojectService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], OprojectListEditComponent);
    return OprojectListEditComponent;
}());



/***/ }),

/***/ "./src/app/research/oproject-list/oproject-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/research/oproject-list/oproject-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let oproject of oprojectList\" (click)=\"onItemClick(oproject)\">{{oproject.title}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/research/oproject-list/oproject-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OprojectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_oproject_service__ = __webpack_require__("./src/app/research/shared/oproject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OprojectListComponent = /** @class */ (function () {
    function OprojectListComponent(oprojectService) {
        this.oprojectService = oprojectService;
    }
    OprojectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.oprojectService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.oprojectList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.oprojectList.push(y);
            });
        });
    };
    OprojectListComponent.prototype.onItemClick = function (oproject) {
        this.oprojectService.selectedOproject = Object.assign({}, oproject);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    OprojectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-oproject-list',
            template: __webpack_require__("./src/app/research/oproject-list/oproject-list.component.html"),
            styles: [__webpack_require__("./src/app/research/oproject-list/oproject-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_oproject_service__["a" /* OprojectService */]])
    ], OprojectListComponent);
    return OprojectListComponent;
}());



/***/ }),

/***/ "./src/app/research/oproject/oproject.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/oproject/oproject.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p *ngIf=\"inserted\" style=\"color:greenyellow;\">item inserted</p>\n<p *ngIf=\"updated\" style=\"color:greenyellow;\">item updated</p>\n<p *ngIf=\"deleted\" style=\"color:red;\">item deleted</p>\n<form (ngSubmit)=\"onSubmit(oprojectForm)\" #oprojectForm=\"ngForm\">\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"oprojectService.selectedOproject.$key\">\n  <div class=\"form-group\">\n  <label>Title</label>\n  <input type=\"text\" class=\"form-control\" name=\"title\" #name=\"ngModel\" required [(ngModel)]=\"oprojectService.selectedOproject.title\" placeholder=\"Title\">\n</div>\n<div class=\"form-group\">\n  \n<label>principle Investigator</label>\n  <input type=\"text\" class=\"form-control\" name=\"principleInvestigator\" #name=\"ngModel\" required [(ngModel)]=\"oprojectService.selectedOproject.principleInvestigator\" placeholder=\"principle Investigator\">\n</div>\n\n<div class=\"form-group\">\n  <label>co-Investigator</label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-female\"></i></span>\n      \n    </div>\n    <input type=\"text\" class=\"form-control\" name=\"coInvestigator\" #name=\"ngModel\" required [(ngModel)]=\"oprojectService.selectedOproject.coInvestigator\" placeholder=\"co-investigator\">\n  </div>\n  \n</div>\n\n<div class=\"form-group\">\n  <label>Sponsoring Agency</label>\n  <input type=\"text\" class=\"form-control\" name=\"sponsoringAgency\" #name=\"ngModel\" required [(ngModel)]=\"oprojectService.selectedOproject.sponsoringAgency\" placeholder=\"sponsoring agency\">\n</div>\n\n<div class=\"form-group\">\n<button type=\"submit\" class=\"btn btn-light\" style=\"border:1px solid black;\" [disabled]=\"!oprojectForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"onDelete(oprojectForm)\" *ngIf=\"oprojectService.selectedOproject.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\n\n</div>\n</form>"

/***/ }),

/***/ "./src/app/research/oproject/oproject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OprojectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_oproject_service__ = __webpack_require__("./src/app/research/shared/oproject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OprojectComponent = /** @class */ (function () {
    function OprojectComponent(oprojectService) {
        this.oprojectService = oprojectService;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
    }
    OprojectComponent.prototype.ngOnInit = function () {
    };
    OprojectComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.oprojectService.insertOproject(form.value);
            this.resetForm();
            this.inserted = true;
        }
        else {
            this.oprojectService.updateOproject(form.value);
            this.updated = true;
        }
    };
    OprojectComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.oprojectService.selectedOproject = {
            $key: null,
            title: '',
            principleInvestigator: '',
            coInvestigator: '',
            sponsoringAgency: ''
        };
    };
    OprojectComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.oprojectService.deleteOproject(form.value.$key);
            this.resetForm(form);
        }
    };
    OprojectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-oproject',
            template: __webpack_require__("./src/app/research/oproject/oproject.component.html"),
            styles: [__webpack_require__("./src/app/research/oproject/oproject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_oproject_service__["a" /* OprojectService */]])
    ], OprojectComponent);
    return OprojectComponent;
}());



/***/ }),

/***/ "./src/app/research/publications-list-edit/publications-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/publications-list-edit/publications-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"onClickBack()\" class=\"btn btn-light\" style=\"border:1px solid black;\">go back to research </button>\n<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">publications list edit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-publications></app-publications>\n  </div>\n  <div class=\"col-md-5\">\n    <app-publications-list></app-publications-list>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/research/publications-list-edit/publications-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_publications_service__ = __webpack_require__("./src/app/research/shared/publications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationsListEditComponent = /** @class */ (function () {
    function PublicationsListEditComponent(publicationsService, router) {
        this.publicationsService = publicationsService;
        this.router = router;
    }
    PublicationsListEditComponent.prototype.ngOnInit = function () {
    };
    PublicationsListEditComponent.prototype.onClickBack = function () {
        this.router.navigate(['/research']);
    };
    PublicationsListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publications-list-edit',
            template: __webpack_require__("./src/app/research/publications-list-edit/publications-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/research/publications-list-edit/publications-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_publications_service__["a" /* PublicationsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PublicationsListEditComponent);
    return PublicationsListEditComponent;
}());



/***/ }),

/***/ "./src/app/research/publications-list/publications-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/research/publications-list/publications-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let publications of publicationsList\" (click)=\"onItemClick(publications)\">{{publications.title}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/research/publications-list/publications-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_publications_service__ = __webpack_require__("./src/app/research/shared/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationsListComponent = /** @class */ (function () {
    function PublicationsListComponent(publicationsService) {
        this.publicationsService = publicationsService;
    }
    PublicationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.publicationsService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.publicationsList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.publicationsList.push(y);
            });
        });
    };
    PublicationsListComponent.prototype.onItemClick = function (publications) {
        this.publicationsService.selectedpublications = Object.assign({}, publications);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    PublicationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publications-list',
            template: __webpack_require__("./src/app/research/publications-list/publications-list.component.html"),
            styles: [__webpack_require__("./src/app/research/publications-list/publications-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_publications_service__["a" /* PublicationsService */]])
    ], PublicationsListComponent);
    return PublicationsListComponent;
}());



/***/ }),

/***/ "./src/app/research/publications/publications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/research/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p *ngIf=\"inserted\" style=\"color:greenyellow;\">item inserted</p>\n<p *ngIf=\"updated\" style=\"color:greenyellow;\">item updated</p>\n<p *ngIf=\"deleted\" style=\"color:red;\">item deleted</p>\n<form (ngSubmit)=\"onSubmit(publicationsForm)\" #publicationsForm=\"ngForm\">\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"publicationsService.selectedpublications.$key\">\n<div class=\"form-group\">\n  <label>title</label>\n  <input type=\"text\" class=\"form-control\" name=\"title\" #name=\"ngModel\" required [(ngModel)]=\"publicationsService.selectedpublications.title\" placeholder=\"title\">\n</div>  \n<div class=\"form-group\">\n  <label>content</label>\n  <input type=\"textarea\" class=\"form-control\" name=\"content\" #name=\"ngModel\" required [(ngModel)]=\"publicationsService.selectedpublications.content\" placeholder=\"content\">\n</div>\n<div class=\"form-group\">\n  \n<label>year</label>\n  <input type=\"number\" class=\"form-control\" name=\"year\" #name=\"ngModel\" required [(ngModel)]=\"publicationsService.selectedpublications.year\" placeholder=\"year\">\n</div>\n\n\n<div class=\"form-group\">\n<button type=\"submit\" class=\"btn btn-light\" style=\"border:1px solid black;\" [disabled]=\"!publicationsForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"onDelete(publicationsForm)\" *ngIf=\"publicationsService.selectedpublications.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\n<button type=\"button\" class=\"btn btn-light\" style=\"border:1px solid black;\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\n\n</div>\n</form>"

/***/ }),

/***/ "./src/app/research/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_publications_service__ = __webpack_require__("./src/app/research/shared/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent(publicationsService) {
        this.publicationsService = publicationsService;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    PublicationsComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.publicationsService.insertPublications(form.value);
            this.resetForm();
            this.inserted = true;
        }
        else {
            this.publicationsService.updatePublications(form.value);
            this.updated = true;
        }
    };
    PublicationsComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.publicationsService.selectedpublications = {
            $key: null,
            title: '',
            content: '',
            year: null,
        };
    };
    PublicationsComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.publicationsService.deletePublications(form.value.$key);
            this.resetForm(form);
        }
    };
    PublicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publications',
            template: __webpack_require__("./src/app/research/publications/publications.component.html"),
            styles: [__webpack_require__("./src/app/research/publications/publications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_publications_service__["a" /* PublicationsService */]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/research/research.component.css":
/***/ (function(module, exports) {

module.exports = ".card-body{\r\n    background-color:lightgray;\r\n}"

/***/ }),

/***/ "./src/app/research/research.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n   \n  <h1  style=\"position:relative; z-index:1; margin-bottom:-10px; color:darksalmon; font-size:3em;  \">we love our work  </h1>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"../assets/images/typography.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../assets/images/diwali.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../assets/images/exhibition1.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"row justify-content-center\">\n            <p class=\"lead\">The research program in Design at DoD –IITG aims at training researchers in Design not only to consolidate what is known in design but also to build a design knowledge base through original inquiry, experimentation and investigation.\n                DoD is open to new and emerging areas in Design that fall in the triadic cusp of Science, Engineering and the Arts.Research and sponsored projects are the integral part of the department where faculties conduct research experimentation and projects in several areas such as product design, industrial design, transportation design, sustainability, ergonomics, usability engineering, interaction design, graphic design, film and video and many more.\n                \n                Possibilities to pursue research in collaboration with other Engineering and Social Sciences departments in IITG also exist. Interested scholars are invited to get in touch through email with the Faculty at DoD-IITG to explore possibilities.</p>\n            <div class=\"container text-left\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-sm-4\">\n                  <div class=\"card \">\n                    <img  style=\"height:300px; width:250px;\" src=\"../assets/images/research-icon.png\" alt=\"\" class=\"card-img-top\">\n                    <div class=\"card-block\">\n                      <h3 class=\"card-title text-center\"> <a class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                          Ongoing Research Projects\n                        </a></h3>\n                        <div class=\"collapse\" id=\"collapseExample\">\n                            <div class=\"card card-body\">\n                              \n                              <button (click)=\"onClickEdit()\" class=\"btn btn-light\" style=\"border:1px solid black;\"> go to edit section</button>\n\n\n                              <ul class=\"list-group\">\n                                  <li class=\"list-group-item\"  *ngFor=\"let oproject of oprojectList\" ><div class=\"card sm-4\">\n                                    <div  style=\"height:50px; width:100px;\" ><i style=\"height:50px; width:25px;\" class=\"fa fa-rocket\"></i></div>\n                                    <div class=\"card-body\">\n                                      <h2 class=\"card-title\">{{oproject.title}}</h2>\n                                      <p class=\"card-text\">Principle Investigator: {{oproject.principleInvestigator}}</p>\n                                      <p class=\"card-text\">Co Investigator:{{oproject.coInvestigator}}</p>\n                                      \n                                    </div>\n                                    <div class=\"card-footer text-muted\">\n                                    <p>Sponsoring Agency: {{oproject.sponsoringAgency}}</p>\n                                    \n                                    </div>\n                                  </div> </li>\n                                </ul>\n                              \n\n                            </div>\n                          </div>\n                      <p class=\"card-text\"></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"card\">\n                    <img style=\"height:300px; width:250px;\" src=\"../assets/images/research-icon.png\" alt=\"\" class=\"card-img-top\">\n                    <div class=\"card-block\">\n                      <h3 class=\"card-title text-center\"><a class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\">\n                          Completed Research Projects\n                        </a></h3><div class=\"collapse\" id=\"collapseExample2\">\n                            <div class=\"card card-body\">\n                                \n                              <button (click)=\"onClickEdit2()\" class=\"btn btn-light\" style=\"border:1px solid black;\"> go to edit section</button>\n\n\n                              <ul class=\"list-group\">\n                                  <li class=\"list-group-item\"  *ngFor=\"let cproject of cprojectList\" ><div class=\"card sm-4\">\n                                    <div  style=\"height:50px; width:100px;\" ><i style=\"height:50px; width:25px;\" class=\"fa fa-rocket\"></i></div>\n                                    <div class=\"card-body\">\n                                      <h2 class=\"card-title\">{{cproject.title}}</h2>\n                                      <p class=\"card-text\">Principle Investigator: {{cproject.principleInvestigator}}</p>\n                                      <p class=\"card-text\">Co Investigator:{{cproject.coInvestigator}}</p>\n                                      \n                                    </div>\n                                    <div class=\"card-footer text-muted\">\n                                    <p>Sponsoring Agency: {{cproject.sponsoringAgency}}</p>\n                                    \n                                    </div>\n                                  </div> </li>\n                                </ul>\n                            </div>\n                          </div>\n                      <p class=\"card-text\"></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"card\">\n                    <img style=\"height:300px; width:250px;\" src=\"../assets/images/research-icon.png\" alt=\"\" class=\"card-img-top\">\n                    <div class=\"card-block\">\n                      <h3 class=\"card-title text-center\"><a class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample3\">\n                        Publications \n                      </a></h3><div class=\"collapse\" id=\"collapseExample3\">\n                          <div class=\"card card-body\">\n                                \n                              <button (click)=\"onClickEdit3()\" class=\"btn btn-light\" style=\"border:1px solid black;\"> go to edit section</button>\n\n\n                              <ul class=\"list-group\">\n                                  <li class=\"list-group-item\"  *ngFor=\"let publications of publicationsList\" ><div class=\"card sm-4\">\n                                    <div  style=\"height:50px; width:100px;\" ><i style=\"height:50px; width:25px;\" class=\"fa fa-rocket\"></i></div>\n                                    <div class=\"card-body\">\n                                      <h2 class=\"card-title\">{{publications.title}}</h2>\n                                      <p class=\"card-text\">{{publications.content}}</p>\n                                      \n                                      \n                                    </div>\n                                    <div class=\"card-footer text-muted\">\n                                    <p>published in year:{{publications.year}}</p>\n                                    \n                                    </div>\n                                  </div> </li>\n                                </ul>\n                            </div>\n                      <p class=\"card-text\"></p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n       </div>\n      </div>\n      <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container\">\n          <h1 class=\"display-4\">Always looking forward to make world better designed</h1>\n          <p class=\"lead\">we worship our commitments </p>\n        </div>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/research/research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_oproject_service__ = __webpack_require__("./src/app/research/shared/oproject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_cproject_service__ = __webpack_require__("./src/app/research/shared/cproject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_publications_service__ = __webpack_require__("./src/app/research/shared/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResearchComponent = /** @class */ (function () {
    function ResearchComponent(oprojectService, publicationsService, router, cprojectService) {
        this.oprojectService = oprojectService;
        this.publicationsService = publicationsService;
        this.router = router;
        this.cprojectService = cprojectService;
    }
    ResearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.oprojectService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.oprojectList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.oprojectList.push(y);
            });
        });
        var y = this.cprojectService.getData();
        y.snapshotChanges().subscribe(function (item) {
            _this.cprojectList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.cprojectList.push(y);
            });
        });
        var z = this.publicationsService.getData();
        z.snapshotChanges().subscribe(function (item) {
            _this.publicationsList = [];
            item.forEach(function (element) {
                var z = element.payload.toJSON();
                z["$key"] = element.key;
                _this.publicationsList.push(z);
            });
        });
    };
    ResearchComponent.prototype.onClickEdit = function () {
        this.router.navigate(['/oproject-list-edit']);
    };
    ResearchComponent.prototype.onClickEdit2 = function () {
        this.router.navigate(['/cproject-list-edit']);
    };
    ResearchComponent.prototype.onClickEdit3 = function () {
        this.router.navigate(['/publications-list-edit']);
    };
    ResearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-research',
            template: __webpack_require__("./src/app/research/research.component.html"),
            styles: [__webpack_require__("./src/app/research/research.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_oproject_service__["a" /* OprojectService */], __WEBPACK_IMPORTED_MODULE_4__shared_publications_service__["a" /* PublicationsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_cproject_service__["a" /* CprojectService */]])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/app/research/shared/cproject.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cproject; });
var Cproject = /** @class */ (function () {
    function Cproject() {
    }
    return Cproject;
}());



/***/ }),

/***/ "./src/app/research/shared/cproject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CprojectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cproject_model__ = __webpack_require__("./src/app/research/shared/cproject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CprojectService = /** @class */ (function () {
    function CprojectService(firebase) {
        this.firebase = firebase;
        this.selectedCproject = new __WEBPACK_IMPORTED_MODULE_1__cproject_model__["a" /* Cproject */]();
    }
    CprojectService.prototype.getData = function () {
        this.cprojectList = this.firebase.list('projects/cproject');
        return this.cprojectList;
    };
    CprojectService.prototype.insertCproject = function (cproject) {
        this.cprojectList.push({
            title: cproject.title,
            principleInvestigator: cproject.principleInvestigator,
            coInvestigator: cproject.coInvestigator,
            sponsoringAgency: cproject.sponsoringAgency
        });
    };
    CprojectService.prototype.updateCproject = function (cproject) {
        this.cprojectList.update(cproject.$key, { title: cproject.title,
            principleInvestigator: cproject.principleInvestigator,
            coInvestigator: cproject.coInvestigator,
            sponsoringAgency: cproject.sponsoringAgency
        });
    };
    CprojectService.prototype.deleteCproject = function (key) { this.cprojectList.remove(key); };
    CprojectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CprojectService);
    return CprojectService;
}());



/***/ }),

/***/ "./src/app/research/shared/oproject.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Oproject; });
var Oproject = /** @class */ (function () {
    function Oproject() {
    }
    return Oproject;
}());



/***/ }),

/***/ "./src/app/research/shared/oproject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OprojectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oproject_model__ = __webpack_require__("./src/app/research/shared/oproject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OprojectService = /** @class */ (function () {
    function OprojectService(firebase) {
        this.firebase = firebase;
        this.selectedOproject = new __WEBPACK_IMPORTED_MODULE_1__oproject_model__["a" /* Oproject */]();
    }
    OprojectService.prototype.getData = function () {
        this.oprojectList = this.firebase.list('projects/oproject');
        return this.oprojectList;
    };
    OprojectService.prototype.insertOproject = function (oproject) {
        this.oprojectList.push({
            title: oproject.title,
            principleInvestigator: oproject.principleInvestigator,
            coInvestigator: oproject.coInvestigator,
            sponsoringAgency: oproject.sponsoringAgency
        });
    };
    OprojectService.prototype.updateOproject = function (oproject) {
        this.oprojectList.update(oproject.$key, { title: oproject.title,
            principleInvestigator: oproject.principleInvestigator,
            coInvestigator: oproject.coInvestigator,
            sponsoringAgency: oproject.sponsoringAgency
        });
    };
    OprojectService.prototype.deleteOproject = function (key) { this.oprojectList.remove(key); };
    OprojectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], OprojectService);
    return OprojectService;
}());



/***/ }),

/***/ "./src/app/research/shared/publications.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Publications; });
var Publications = /** @class */ (function () {
    function Publications() {
    }
    return Publications;
}());



/***/ }),

/***/ "./src/app/research/shared/publications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publications_model__ = __webpack_require__("./src/app/research/shared/publications.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationsService = /** @class */ (function () {
    function PublicationsService(firebase) {
        this.firebase = firebase;
        this.selectedpublications = new __WEBPACK_IMPORTED_MODULE_1__publications_model__["a" /* Publications */]();
    }
    PublicationsService.prototype.getData = function () {
        this.publicationsList = this.firebase.list('home/publications');
        return this.publicationsList;
    };
    PublicationsService.prototype.insertPublications = function (publications) {
        this.publicationsList.push({ title: publications.title,
            content: publications.content,
            year: publications.year,
        });
    };
    PublicationsService.prototype.updatePublications = function (publications) {
        this.publicationsList.update(publications.$key, { title: publications.title, content: publications.content,
            year: publications.year
        });
    };
    PublicationsService.prototype.deletePublications = function (key) { this.publicationsList.remove(key); };
    PublicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PublicationsService);
    return PublicationsService;
}());



/***/ }),

/***/ "./src/app/shared/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_posts_post_model__ = __webpack_require__("./src/app/home/posts/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.posts = [new __WEBPACK_IMPORTED_MODULE_0__home_posts_post_model__["a" /* Post */]('https://5.imimg.com/data5/HQ/WW/MY-20499589/sitting-ganesh-ji-statue-500x500.jpg', 'Jay Shri Ganesh ', 'Shri ganeshaye namah', 'Posted by Ayush sharma ')];
    }
    PostService.prototype.getPosts = function () {
        return this.http.get('https://site-one-bc07f.firebaseio.com/.json');
    };
    PostService.prototype.ngOnInit = function () {
        var _this = this;
        this.getPosts().subscribe(function (response) { var data = response.json(); _this.posts = data; }, function (error) { return console.log(error); });
    };
    PostService.prototype.addPost = function (post) {
        this.posts.push(post);
        return this.http.put('https://site-one-bc07f.firebaseio.com/.json', this.posts);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-xs-12\">\n<div class=\"grid\">\n  <figure class=\"effect-lily\">\n    <img src=\"../assets/images/students2018.png\" alt=\"image not loaded\"/>\n    <figcaption>\n      <div>\n        <h2>batch <span>2018</span></h2>\n        \n      </div>\n     \n    </figcaption>\t\t\t\n  </figure>\n  <figure class=\"effect-lily\">\n    <img src=\"../assets/images/students2019.png\" alt=\"image not loaded\"/>\n    <figcaption>\n      <div>\n        <h2>batch<span>2019</span></h2>\n        \n      </div>\n    \n    </figcaption>\t\t\t\n  </figure>\n</div>\n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
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

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-students',
            template: __webpack_require__("./src/app/students/students.component.html"),
            styles: [__webpack_require__("./src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
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

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/work/work.component.html"),
            styles: [__webpack_require__("./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
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
    firebaseConfig: {
        apiKey: "AIzaSyDY_V6wOWaJ3efjLKrcG2fHTW6OpFQq9uU",
        authDomain: "site-one-bc07f.firebaseapp.com",
        databaseURL: "https://site-one-bc07f.firebaseio.com",
        projectId: "site-one-bc07f",
        storageBucket: "site-one-bc07f.appspot.com",
        messagingSenderId: "778108263344"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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