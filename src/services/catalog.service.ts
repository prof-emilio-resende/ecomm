import { Product } from "../models/product";
import { ProductRepository } from "../repositories/product.repo";

export class CatalogService {
    private repo: ProductRepository;

    constructor(repo: ProductRepository) {
        this.repo = repo ?? new ProductRepository();
    }

    add(product: Product): void {
        this.repo.populate([...this.repo.all(), product]);
    }

    list(): Array<Product> {
        return this.repo.all();
    }
}