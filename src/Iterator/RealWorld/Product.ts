
export default class Product {
    private id: number;

    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return `Product id=${this.id}, name=${this.name}`;
    }
}
