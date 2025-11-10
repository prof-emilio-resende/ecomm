import { CatalogService } from "../../services/catalog.service";
import { Product } from "../../models/product";

describe('Catalog Service', () => {
    describe('list()', () => {
        describe('when catalog is empty', () => {
            it('should return an empty array', async () => {
                // Arrange
                const expectedCatalog: Array<Product> = [];
                const catalogService = new CatalogService();

                // Act
                const catalog = catalogService.list();

                // Assert
                expect(catalog).toEqual(expectedCatalog);
                expect(catalog).toHaveLength(0);
            });
        });

        describe('when catalog has products', () => {
            it('should return an array of products', () => {
                // Arrange
                const expectedP1 = new Product('Product 1', 10.0);
                const expectedP2 = new Product('Product 2', 20.0);
                
                const expectedCatalog = [expectedP1, expectedP2];

                // Act
                const catalogService = new CatalogService();
                catalogService.add(expectedP1);
                catalogService.add(expectedP2);
                const catalog = catalogService.list();

                // Assert
                expect(catalog).toEqual(expectedCatalog);
                expect(catalog).toHaveLength(2);
            });
        });
    });
});
