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
var category_service_1 = require("./category.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var category_1 = require("../models/category");
var CategoryDataService = (function () {
    function CategoryDataService(categoryService) {
        this.categoryService = categoryService;
        this.categorys = [];
    }
    CategoryDataService.prototype.getCategory = function () {
        var _this = this;
        return this.categoryService.getCategoryFromServer()
            .map(function (res) {
            var categorys = [];
            for (var a in res) {
                var obj = res[a];
                var category = new category_1.Category(obj.name);
                category.id = obj.id;
                categorys.push(category);
            }
            _this.categorys = categorys;
            return _this.categorys;
        });
    };
    CategoryDataService.prototype.createCategory = function (name) {
        var _this = this;
        this.categoryService.createCategoryAtServer(name)
            .subscribe(function (res) {
            var newCategory = new category_1.Category(res.name);
            newCategory.id = res.id;
            _this.categorys.push(newCategory);
        });
    };
    CategoryDataService.prototype.deleteCategory = function (category) {
        var _this = this;
        this.categoryService.deleteCategoryAtServer(category)
            .subscribe(function (res) {
            var index = _this.categorys.indexOf(category);
            if (index > -1) {
                _this.categorys.splice(index, 1);
            }
        });
    };
    CategoryDataService.prototype.updateCategory = function (category) {
        var _this = this;
        this.categoryService.updateCategoryAtServer(category)
            .subscribe(function (upCategory) {
            for (var i = 0; i < _this.categorys.length; i++) {
                if (_this.categorys[i].id === upCategory.id) {
                    _this.categorys[i].name = upCategory.name;
                    break;
                }
            }
        });
    };
    CategoryDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], CategoryDataService);
    return CategoryDataService;
}());
exports.CategoryDataService = CategoryDataService;
//# sourceMappingURL=category-data.service.js.map