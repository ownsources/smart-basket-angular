import {Component, Injectable, OnInit} from "@angular/core";
import {Category} from "../../shared/models/category";
import {CategoryDataService} from "../../shared/services/category-data.service";
import {ProductDataService} from "../../shared/services/product-data.service";


@Component({
    moduleId: module.id,
    selector: 'categorys',
    templateUrl: 'category.component.html',
    styleUrls: ['../../styles/list.component.css']
})
@Injectable()
export class CategorysComponent implements OnInit{

    categorys: Category[];

    constructor(
        private categoryDataService: CategoryDataService,
        private productDataService: ProductDataService
        //private performanceDataService: PerformanceDataService,
        //private toast: Md2Toast
    ){
        this.categorys = [];
    }

    ngOnInit(){
        this.categoryDataService.getCategory()
            .subscribe(categorys => this.categorys = categorys);
    }

    create(name: string){
        this.categoryDataService.createCategory(name);
    }

    delete(category : Category){
        this.categoryDataService.deleteCategory(category);
    }

    update(category: Category){
        this.categoryDataService.updateCategory(category);
    }

    select(category:Category){
        this.productDataService.filterProduct(category);
    }
}