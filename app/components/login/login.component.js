"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../shared/services/authentication.service");
var user_1 = require("../../shared/models/user");
var md2_1 = require("md2");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, toast) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toast = toast;
        this.model = new user_1.User();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) { return _this.router.navigate(['/artists']); }, function (error) { return _this.toast.toast('Неверные данные'); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, md2_1.Md2Toast])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map