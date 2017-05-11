import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Category} from "../../../shared/models/category";

@Component({
    moduleId: module.id,
    selector: 'product-form',
    templateUrl: 'product.form.component.html',
    styleUrls: ['../../../styles/form.component.css']
})
export class ProductFormComponent{

    @Input() categorys: Category[];

    @Output() create: EventEmitter<any> = new EventEmitter();


    name: string = '';
    category: Category;

    onSubmit(){
        this.create.emit({
            name: this.name,
            category: this.category
         });
    }
}