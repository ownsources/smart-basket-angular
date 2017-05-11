import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {CategoryService} from "./shared/services/category.service";

import "hammerjs";
import {ProductService} from "./shared/services/product.service";
import {FormsModule} from "@angular/forms";
import {Md2Module} from "md2";
import {CategoryDataService} from "./shared/services/category-data.service";
import {ProductDataService} from "./shared/services/product-data.service";
import {routing} from "./router";
import {LoginComponent} from "./components/login/login.component";
import {AppConfig} from "./app.config";
import {AuthGuard} from "./guard/auth.guard";
import {AuthenticationService} from "./shared/services/authentication.service";
import {User} from "./shared/models/user";
import {DashboardComponent} from "./components/dashboard/dashboard.componetn";
import {CategorysComponent} from "./components/category/category.component";
import {CategoryItemComponent} from "./components/category/category.item/category.item.component";
import {CategoryListComponent} from "./components/category/category.list/category.list.component";
import {CategoryFormComponent} from "./components/category/category.form/category.form.component";
import {ProductsComponent} from "./components/product/product.component";
import {ProductItemComponent} from "./components/product/product.item/product.item.component";
import {ProductListComponent} from "./components/product/product.list/product.list.component";
import {ProductFormComponent} from "./components/product/product.form/product.form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Md2Module.forRoot(),
        routing,
    ],
    declarations: [
        AppComponent,

        LoginComponent,

        CategorysComponent,
        CategoryItemComponent,
        CategoryListComponent,
        CategoryFormComponent,

        ProductsComponent,
        ProductItemComponent,
        ProductListComponent,
        ProductFormComponent,

        DashboardComponent
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AuthenticationService,

        CategoryService,
        CategoryDataService,

        ProductService,
        ProductDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}