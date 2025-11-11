import { Product, ProductWithCategory } from "../../models/product";
import { TaxService, BrazilianTaxService } from "../../services/tax.service";

describe('Tax Service', () => {
  test('should calculate tax based in a product price', () => {
    // Arrange
    const taxService: TaxService = new MyTaxService();

    // Act
    const tax = taxService.calculate(new Product('Sample Product', 100));

    // Assert
    expect(tax).toBe(15);
  });
});

describe('Brazilian Tax Service', () => {
    test('should calculate tax as 30% of product price when category is regular', () => {
        // Arrange
        const taxService: TaxService = new BrazilianTaxService();
    
        // Act
        const tax = taxService.calculate(new ProductWithCategory('Sample Product', 100, 'regular'));

        // Assert
        expect(tax).toBe(30);
    });
    
    test('should calculate tax as 40% of product price when category is premium', () => {
        // Arrange
        const taxService: TaxService = new BrazilianTaxService();
        
        // Act
        const tax = taxService.calculate(new ProductWithCategory('Sample Product', 100, 'premium'));

        // Assert
        expect(tax).toBe(40);
    });
});

class MyTaxService implements TaxService {
  calculate(product: Product): number {
    return product.price * 0.15;
  }
}
