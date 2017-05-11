import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "../../../shared/models/product";


@Component({
    moduleId: module.id,
    selector: 'product-item',
    templateUrl: 'product.item.component.html',
    styleUrls: ['../../../styles/item.component.css']
})
export class ProductItemComponent{

    @Input() product: Product;
    @Output() delete = new EventEmitter();
    @Output() update = new EventEmitter();

    oldProduct: Product = this.product;
    editMode: boolean = false;

    constructor(){
        this.oldProduct= this.product;
    }

    onUpdate(){
        this.update.emit(this.product)
    }

    onDelete(){
        this.delete.emit(this.product);
    }
}