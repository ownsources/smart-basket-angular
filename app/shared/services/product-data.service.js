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
var product_service_1 = require("./product.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var product_1 = require("../models/product");
var ProductDataService = (function () {
    function ProductDataService(productService) {
        this.productService = productService;
        this.productsStorage = [];
    }
    ProductDataService.prototype.filterProduct = function (category) {
        console.log(this.products);
        this.products = this.productsStorage.filter(function (product) { return product.category == category; });
    };
    ProductDataService.prototype.getProduct = function () {
        var _this = this;
        return this.productService.getProductFromServer()
            .map(function (res) {
            var products = [];
            for (var a in res) {
                var obj = res[a];
                var product = new product_1.Product(obj.name, obj.category);
                product.id = obj.id;
                products.push(product);
            }
            _this.productsStorage = products;
            _this.products = products;
            return products;
        });
    };
    ProductDataService.prototype.createProduct = function (container) {
        var _this = this;
        var name = container.name;
        var category = container.category;
        this.productService.createProductAtServer(name, category).subscribe(function (res) {
            var newProduct = new product_1.Product(res.name, res.category);
            newProduct.id = res.id;
            _this.products.push(newProduct);
        });
    };
    ProductDataService.prototype.deleteProduct = function (product) {
        var _this = this;
        this.productService.deleteProductAtServer(product).subscribe(function (res) {
            var index = _this.products.indexOf(product);
            if (index > -1) {
                _this.products.splice(index, 1);
            }
        });
    };
    ProductDataService.prototype.updateProduct = function (product) {
        var _this = this;
        this.productService.updateProductAtServer(product).subscribe(function (upProduct) {
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].id === upProduct.id) {
                    _this.products[i].name = upProduct.name;
                    break;
                }
            }
        });
    };
    ProductDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductDataService);
    return ProductDataService;
}());
exports.ProductDataService = ProductDataService;
//# sourceMappingURL=product-data.service.js.map