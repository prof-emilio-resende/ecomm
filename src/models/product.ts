export class Product {
    constructor(public name: string, public price: number) {
    }
}

export class ProductWithCategory extends Product {
    constructor(name: string, price: number, public category: "regular" | "premium") {
        super(name, price);
    }
}