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
var product_data_service_1 = require("../../shared/services/product-data.service");
var category_data_service_1 = require("../../shared/services/category-data.service");
var ProductsComponent = (function () {
    function ProductsComponent(productDataService, categoryDataService) {
        this.productDataService = productDataService;
        this.categoryDataService = categoryDataService;
        this.products = [];
        this.categorys = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productDataService.getProduct()
            .subscribe(function (products) { return _this.products = products; });
        this.categoryDataService.getCategory()
            .subscribe(function (categorys) { return _this.categorys = categorys; });
    };
    ProductsComponent.prototype.create = function (container) {
        this.productDataService.createProduct(container);
    };
    ProductsComponent.prototype.delete = function (product) {
        this.productDataService.deleteProduct(product);
    };
    ProductsComponent.prototype.update = function (product) {
        this.productDataService.updateProduct(product);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'product.component.html',
            styleUrls: ['../../styles/list.component.css']
        }), 
        __metadata('design:paramtypes', [product_data_service_1.ProductDataService, category_data_service_1.CategoryDataService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=product.component.js.map