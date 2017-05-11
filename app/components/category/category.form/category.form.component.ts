import {Component, EventEmitter, Injectable, Output} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'category-form',
    templateUrl: 'category.form.component.html',
    styleUrls: ['../../../styles/form.component.css']
})
@Injectable()
export class CategoryFormComponent{
    name: string = '';

    @Output() create: EventEmitter<string> = new EventEmitter();

    onSubmit(){
        this.create.emit(this.name);
    }
}