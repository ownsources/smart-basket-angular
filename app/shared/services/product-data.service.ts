import {Injectable} from "@angular/core";
import {ProductService} from "./product.service";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable()
export class ProductDataService {

    products: Product[];
    productsStorage: Product[];

    constructor(private productService: ProductService){
        this.productsStorage = [];
    }


    filterProduct(category: Category){
        console.log(this.products);
        this.products = this.productsStorage.filter(product => product.category == category);
    }

    getProduct(): Observable<Product[]>{

        return this.productService.getProductFromServer()
            .map(res => {
                let products: Product[] = [];
                for (let a in res) {
                    let obj: any = res[a];
                    let product = new Product(obj.name, obj.category);
                    product.id = obj.id;
                    products.push(product);
                }
                this.productsStorage = products;
                this.products =  products;

                return products;
            });

    }

    createProduct(container: any){
        let name:string = container.name;
        let category:Category = container.category;

        this.productService.createProductAtServer(name, category).subscribe(res => {
            let newProduct = new Product(res.name, res.category);
            newProduct.id= res.id;
            this.products.push(newProduct);
        });
    }

    deleteProduct(product: Product){

        this.productService.deleteProductAtServer(product).subscribe(res => {

            let index = this.products.indexOf(product);

            if(index > -1){
                this.products.splice(index, 1);
            }
        });
    }

    updateProduct(product: Product){

        this.productService.updateProductAtServer(product).subscribe(upProduct => {
            for(let i=0; i< this.products.length; i++){

                if(this.products[i].id === upProduct.id){

                    this.products[i].name = upProduct.name;
                    break;
                }
            }
        });
    }
}