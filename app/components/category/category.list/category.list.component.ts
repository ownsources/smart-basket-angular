import {Component, EventEmitter, Injectable, Input, Output} from "@angular/core";
import {Category} from "../../../shared/models/category";


@Component({
    moduleId: module.id,
    selector: 'category-list',
    templateUrl: 'category.list.component.html',
    styleUrls: ['../../../styles/list.component.css']
})
@Injectable()
export class CategoryListComponent {

    @Input() categorys: Category[];
    @Output() delete: EventEmitter<Category> = new EventEmitter();
    @Output() update: EventEmitter<Category> = new EventEmitter();
    @Output() select: EventEmitter<Category> = new EventEmitter();

    onDelete(category: Category){
        this.delete.emit(category);
    }

    onUpdate(category: Category){
        this.update.emit(category);
    }

    onSelect(category: Category){
        this.select.emit(category);
    }
}