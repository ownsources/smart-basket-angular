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
var category_1 = require("../../../shared/models/category");
var CategoryItemComponent = (function () {
    function CategoryItemComponent() {
        this.delete = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.editMode = false;
    }
    CategoryItemComponent.prototype.onUpdate = function () {
        this.update.emit(this.category);
    };
    CategoryItemComponent.prototype.onDelete = function () {
        this.delete.emit(this.category);
    };
    CategoryItemComponent.prototype.onSelect = function () {
        this.select.emit(this.category);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', category_1.Category)
    ], CategoryItemComponent.prototype, "category", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CategoryItemComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CategoryItemComponent.prototype, "update", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CategoryItemComponent.prototype, "select", void 0);
    CategoryItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'category-item',
            templateUrl: 'category.item.component.html',
            styleUrls: ['../../../styles/item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryItemComponent);
    return CategoryItemComponent;
}());
exports.CategoryItemComponent = CategoryItemComponent;
//# sourceMappingURL=category.item.component.js.map