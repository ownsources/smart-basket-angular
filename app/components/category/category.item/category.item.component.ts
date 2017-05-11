import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Category} from "../../../shared/models/category";


@Component({
    moduleId: module.id,
    selector: 'category-item',
    templateUrl: 'category.item.component.html',
    styleUrls: ['../../../styles/item.component.css']
})
export class CategoryItemComponent{

    @Input() category: Category;
    @Output() delete = new EventEmitter();
    @Output() update = new EventEmitter();
    @Output() select = new EventEmitter();

    editMode: boolean = false;

    onUpdate(){
        this.update.emit(this.category);
    }
    onDelete(){
        this.delete.emit(this.category);
    }
    onSelect(){

        this.select.emit(this.category);
    }
}