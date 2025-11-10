import { Product } from "../models/product";

export class CatalogService {
    private catalog: Array<Product> = [];

    constructor() {}

    add(product: Product): void {
        this.catalog.push(product);
    }

    list(): Array<Product> {
        return this.catalog;
    }
}