import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable()
export class ProductService {

    private apiUrl = 'http://localhost:1337/product';
    private options = new RequestOptions(new Headers({ 'Content-Type': 'application/json'}));

    constructor(private http: Http){}

    getProductFromServer(): Observable<Product[]>{

        return this.http
            .get(this.apiUrl)
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }

    createProductAtServer(name: string, category: Category){
        let product = new Product(name,category);

        return this.http.post(this.apiUrl, product, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    deleteProductAtServer(product: Product){
        let url = `${this.apiUrl}/${product.id}`;

        return this.http.delete(url, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    updateProductAtServer(product : Product) {
        let url = `${this.apiUrl}/${product.id}`;

        return this.http.put(url, product, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.log('Ошибка: ', error);
        return Observable.throw(error.message | error);
    }
}