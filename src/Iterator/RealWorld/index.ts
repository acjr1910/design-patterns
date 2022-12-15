import Product from './Product';
import ProductCollection from './ProductCollection';

const collection = new ProductCollection();
collection.add(new Product(1, 'a'));
collection.add(new Product(2, 'b'));
collection.add(new Product(3, 'c'));

const iterator = collection.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.current().toString());
    iterator.next();
}
