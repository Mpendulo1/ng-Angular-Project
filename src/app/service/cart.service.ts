import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    public cart_item_list: any = [];
    public product_list = new BehaviorSubject<any[]>([]);

    constructor() {
        this.fetchCartIItems();
    }

    private save() {
        localStorage.setItem('cart_list', JSON.stringify(this.cart_item_list));
    }

    public fetchCartIItems() {
        let item_list = [];
        item_list = JSON.parse(localStorage.getItem('cart_list') ?? '[]');
        item_list = item_list.map((item: any) => {
            return item;
        });
        this.cart_item_list = item_list;
        this.product_list.next(this.cart_item_list);
    }

    public getProducts() {
        return this.product_list.asObservable();
    }

    public singleProduct(id:any) {
        this.getProducts().pipe().subscribe(data => {
            console.log(data);

        })

    }

    public AddToCart(product: any) {
        const item_in_cat = this.cart_item_list.find(
            (item: any) => item.id === product.id
        );
        if (item_in_cat && product.quantity < 10) {
            product.quantity += 1;
        } else {
            this.cart_item_list.push(product);
            this.save();
        }

        this.product_list.next(this.cart_item_list);
        this.getTotalPrice();
    }

    public getTotalPrice() {
        let grand_total = 0;
        this.cart_item_list.reduce((count: any, item: any) => {
            return (grand_total = count + item.quantity * item.price);
        }, 0);
        return grand_total;
    }

    public removeCartItem(index: number) {
        this.cart_item_list.length > index;
        this.cart_item_list.splice(index, 1);
        this.product_list.next(this.cart_item_list);
        this.save();
    }

    public clearCartItems() {
        this.cart_item_list = [];
        this.product_list.next(this.cart_item_list);
    }

    public incrementQauntity(product: any) {
        this.cart_item_list.find((item: any) => {
            if (item.id === product.id) {
                product.quantity + 1;
            }
        });
        this.product_list.next(this.cart_item_list);
    }

    public decrementQauntity(product: any) {
        this.cart_item_list.find((item: any) => {
            if (item.id === product.id) {
                let prod_qty = product.quantity - 1;
                console.log(prod_qty);
            }
        });
        this.product_list.next(this.cart_item_list);
    }
}
