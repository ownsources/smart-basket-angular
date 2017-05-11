import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "../../../shared/models/product";


@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product.list.component.html',
    styleUrls: ['../../../styles/list.component.css']
})
export class ProductListComponent{

    @Input() products: Product[];
    @Output() delete: EventEmitter<Product> = new EventEmitter();
    @Output() update: EventEmitter<Product> = new EventEmitter();


    onDelete(product : Product){
        this.delete.emit(product);
    }

    onUpdate(product : Product){
        this.update.emit(product);
    }
}