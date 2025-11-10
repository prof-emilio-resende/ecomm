import { Product } from '../../models/product';

describe('Product Model', () => {
  it('should create a product with name and price', () => {
    // Arrange
    const name = "Produto Teste";
    const price = 100.00;
    
    // Act
    const product = new Product(name, price);

    // Assert
    expect(product.name).toBe(name);
    expect(product.price).toBe(price);
  });
});