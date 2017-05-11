import {Product} from "./product";

export class Category {
    id: string;
    products: Product[];

    constructor(public name: string){}
}
