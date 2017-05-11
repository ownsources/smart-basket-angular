import {Category} from "./category";
export class Product {
    id: string;

    constructor(public name: string,
                public category:Category){}
}