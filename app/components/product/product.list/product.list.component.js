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
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.delete = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
    }
    ProductListComponent.prototype.onDelete = function (product) {
        this.delete.emit(product);
    };
    ProductListComponent.prototype.onUpdate = function (product) {
        this.update.emit(product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductListComponent.prototype, "products", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductListComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductListComponent.prototype, "update", void 0);
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-list',
            templateUrl: 'product.list.component.html',
            styleUrls: ['../../../styles/list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product.list.component.js.map