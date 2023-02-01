import { CreateProductInput } from "./product.schema";

export interface ProductInterface{
    name: string;
    price: number;
}

export class Product {
    constructor(
        props: CreateProductInput
    ){}
}