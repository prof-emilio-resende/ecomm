import { Product, ProductWithCategory } from "../models/product";

export interface TaxService {
  calculate(product: Product): number;
}

export class BrazilianTaxService implements TaxService {
  calculate(product: ProductWithCategory): number {
    return product.price * (product.category === "regular" ? 0.30 : 0.40);
  }
}