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
var product_1 = require("../../../shared/models/product");
var ProductItemComponent = (function () {
    function ProductItemComponent() {
        this.delete = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
        this.oldProduct = this.product;
        this.editMode = false;
        this.oldProduct = this.product;
    }
    ProductItemComponent.prototype.onUpdate = function () {
        this.update.emit(this.product);
    };
    ProductItemComponent.prototype.onDelete = function () {
        this.delete.emit(this.product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductItemComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductItemComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductItemComponent.prototype, "update", void 0);
    ProductItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-item',
            templateUrl: 'product.item.component.html',
            styleUrls: ['../../../styles/item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductItemComponent);
    return ProductItemComponent;
}());
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=product.item.component.js.map