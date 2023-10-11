import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
    private product_subs: Subscription;

    public products: any = [];
    public grand_total: number = 0;

    constructor(private cartService: CartService) {
        this.product_subs = this.cartService.getProducts().subscribe((data) => {
            this.products = data;
            this.grand_total = this.cartService.getTotalPrice();
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.product_subs.unsubscribe();
    }

    public removeItem(index: number) {
        this.cartService.removeCartItem(index);
    }

    public clearCart() {
        this.cartService.clearCartItems();
    }

    public incrementQuantity(product: any) {
        this.cartService.incrementQauntity(product);
        console.log(product);
    }

    public decrementQauntity(product: any) {
        this.cartService.decrementQauntity(product);
    }
}

 

