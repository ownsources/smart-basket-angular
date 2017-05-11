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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var category_1 = require("../models/category");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:1337/category';
        this.options = new http_1.RequestOptions(new http_1.Headers({ 'Content-Type': 'application/json' }));
    }
    CategoryService.prototype.getCategoryFromServer = function () {
        return this.http
            .get(this.apiUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.createCategoryAtServer = function (name) {
        var category = new category_1.Category(name);
        return this.http.post(this.apiUrl, category, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.deleteCategoryAtServer = function (category) {
        var url = this.apiUrl + "/" + category.id;
        return this.http.delete(url, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.updateCategoryAtServer = function (category) {
        var url = this.apiUrl + "/" + category.id;
        return this.http.put(url, category, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.handleError = function (error) {
        console.log('Ошибка: ', error);
        return Observable_1.Observable.throw(error.message | error);
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map