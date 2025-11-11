import { CatalogService } from "../../services/catalog.service";
import { Product } from "../../models/product";
import { ProductRepository } from "../../repositories/product.repo";

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

    describe('add()', () => {
        it('should add a product to the catalog', () => {
            // Arrange
            const product = new Product('New Product', 15.0);
            const catalogService = new CatalogService();

            // Act
            catalogService.add(product);
            const catalog = catalogService.list();

            // Assert
            expect(catalog).toContain(product);
            expect(catalog).toHaveLength(1);
        });
    });

    describe('memory management', () => {
        it('should not manage state, instead rely on the repository', () => {
            // Arrange
            const product = new Product('New Product', 15.0);
            const productRepository = new ProductRepository();
            const catalogService = new CatalogService(productRepository);

            // Act
            catalogService.add(product);
            const catalog = catalogService.list();

            // Assert
            expect(catalog).toContain(product);
            expect(catalog).toHaveLength(1);
            expect(productRepository.all()).toBe(catalog);
        });
    });
});
