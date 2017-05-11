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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var category_service_1 = require("./shared/services/category.service");
require("hammerjs");
var product_service_1 = require("./shared/services/product.service");
var forms_1 = require("@angular/forms");
var md2_1 = require("md2");
var category_data_service_1 = require("./shared/services/category-data.service");
var product_data_service_1 = require("./shared/services/product-data.service");
var router_1 = require("./router");
var login_component_1 = require("./components/login/login.component");
var app_config_1 = require("./app.config");
var auth_guard_1 = require("./guard/auth.guard");
var authentication_service_1 = require("./shared/services/authentication.service");
var dashboard_componetn_1 = require("./components/dashboard/dashboard.componetn");
var category_component_1 = require("./components/category/category.component");
var category_item_component_1 = require("./components/category/category.item/category.item.component");
var category_list_component_1 = require("./components/category/category.list/category.list.component");
var category_form_component_1 = require("./components/category/category.form/category.form.component");
var product_component_1 = require("./components/product/product.component");
var product_item_component_1 = require("./components/product/product.item/product.item.component");
var product_list_component_1 = require("./components/product/product.list/product.list.component");
var product_form_component_1 = require("./components/product/product.form/product.form.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                md2_1.Md2Module.forRoot(),
                router_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                category_component_1.CategorysComponent,
                category_item_component_1.CategoryItemComponent,
                category_list_component_1.CategoryListComponent,
                category_form_component_1.CategoryFormComponent,
                product_component_1.ProductsComponent,
                product_item_component_1.ProductItemComponent,
                product_list_component_1.ProductListComponent,
                product_form_component_1.ProductFormComponent,
                dashboard_componetn_1.DashboardComponent
            ],
            providers: [
                app_config_1.AppConfig,
                auth_guard_1.AuthGuard,
                authentication_service_1.AuthenticationService,
                category_service_1.CategoryService,
                category_data_service_1.CategoryDataService,
                product_service_1.ProductService,
                product_data_service_1.ProductDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map