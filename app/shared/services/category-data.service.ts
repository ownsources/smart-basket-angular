import {Injectable} from "@angular/core";
import {CategoryService} from "./category.service";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {Category} from "../models/category";

@Injectable()
export class CategoryDataService {

    categorys: Category[];

    constructor(
        private categoryService: CategoryService
    ){
        this.categorys = [];
    }

    getCategory():Observable<Category[]>{

        return this.categoryService.getCategoryFromServer()
            .map(res => {
                let categorys: Category[] = [];
                for(let a in res){
                    let obj:any = res[a];
                    let category = new Category(obj.name);
                    category.id = obj.id;
                    categorys.push(category);
                }
                this.categorys = categorys;

                return this.categorys;
            });
    }

    createCategory(name: string){

        this.categoryService.createCategoryAtServer(name)
            .subscribe(res => {

                let newCategory = new Category(res.name);
                newCategory.id= res.id;
                this.categorys.push(newCategory);
            });
    }

    deleteCategory(category: Category){

        this.categoryService.deleteCategoryAtServer(category)
            .subscribe(res => {

                let index = this.categorys.indexOf(category);

                if(index > -1){
                    this.categorys.splice(index, 1);
                }
            });
    }

    updateCategory(category: Category){

        this.categoryService.updateCategoryAtServer(category)
            .subscribe(upCategory => {
                for(let i=0; i< this.categorys.length; i++){

                    if(this.categorys[i].id === upCategory.id){

                        this.categorys[i].name = upCategory.name;
                        break;
                    }
                }
            });
    }
}