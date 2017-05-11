import {Component, OnInit} from "@angular/core";
import {ProductDataService} from "../../shared/services/product-data.service";
import {Product} from "../../shared/models/product";
import {CategoryDataService} from "../../shared/services/category-data.service";
import {Category} from "../../shared/models/category";

@Component({
    moduleId: module.id,
    selector: 'products',
    templateUrl: 'product.component.html',
    styleUrls: ['../../styles/list.component.css']
})
export class ProductsComponent implements OnInit{

    products: Product[];
    categorys: Category[];

    constructor(
        private productDataService: ProductDataService,
        private categoryDataService: CategoryDataService,
    ){

        this.products = [];
        this.categorys = [];
    }

    ngOnInit(){
       this.productDataService.getProduct()
           .subscribe(products => this.products = products);
       this.categoryDataService.getCategory()
           .subscribe(categorys => this.categorys = categorys);
    }

    create(container:any){
        this.productDataService.createProduct(container);
    }

    delete(product : Product){
        this.productDataService.deleteProduct(product);
    }

    update(product: Product){
        this.productDataService.updateProduct(product);
    }
}