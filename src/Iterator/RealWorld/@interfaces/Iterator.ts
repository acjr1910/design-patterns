export interface IIterator<T> {
    current(): T;
    next(): void;
    hasNext(): boolean;
}
