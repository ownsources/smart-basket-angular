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
var CategoryFormComponent = (function () {
    function CategoryFormComponent() {
        this.name = '';
        this.create = new core_1.EventEmitter();
    }
    CategoryFormComponent.prototype.onSubmit = function () {
        this.create.emit(this.name);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CategoryFormComponent.prototype, "create", void 0);
    CategoryFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'category-form',
            templateUrl: 'category.form.component.html',
            styleUrls: ['../../../styles/form.component.css']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());
exports.CategoryFormComponent = CategoryFormComponent;
//# sourceMappingURL=category.form.component.js.map