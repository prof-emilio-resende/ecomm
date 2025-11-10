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
    });
});
