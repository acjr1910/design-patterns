import Product from "./Product";
import { IIterator } from "./@interfaces/Iterator";

class ArrayIterator implements IIterator<Product> {
  private index: number;

  private collection: ProductCollection;

  constructor(collection: ProductCollection) {
    this.index = 0;
    this.collection = collection;
  }

  hasNext() {
    return this.index < this.collection.getProducts().length;
  }

  current() {
    return this.collection.getProducts()[this.index];
  }

  next() {
    this.index++;
  }
}

export default class ProductCollection {
  private products: Product[] = [];

  public add(product: Product): void {
    this.products.push(product);
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public createIterator(): IIterator<Product> {
    return new ArrayIterator(this);
  }
}
