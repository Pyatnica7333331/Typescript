import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getSum(): number {
        return this._items.reduce((accum: number, current: Buyable) => 
            accum + current.price, 0)
        
    }

    sumIncDiscount(discount: number): number {
        const fullSum = this.getSum();
        return fullSum * (100-discount)/100;
    }
        
    deleteCart(id : number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id)
    }       
}
