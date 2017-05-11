import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {Category} from "../models/category";

@Injectable()
export class CategoryService {

    private apiUrl = 'http://localhost:1337/category';
    private options = new RequestOptions(new Headers({ 'Content-Type': 'application/json'}));

    constructor(private http: Http) {}

    getCategoryFromServer(): Observable<Category[]> {

        return this.http
            .get(this.apiUrl)
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }

    createCategoryAtServer(name: string){
        let category = new Category(name);

        return this.http.post(this.apiUrl, category, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    deleteCategoryAtServer(category: Category) {
        let url = `${this.apiUrl}/${category.id}`;

        return this.http.delete(url, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    updateCategoryAtServer(category : Category) {
        let url = `${this.apiUrl}/${category.id}`;

        return this.http.put(url, category, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.log('Ошибка: ', error);
        return Observable.throw(error.message | error);
    }
}