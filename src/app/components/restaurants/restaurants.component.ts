import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart.service';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit, OnDestroy {
    private product_sub!: Subscription;

    public product_list: any;
    public item_count!: number;

    constructor(
        private productService: ProductService,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        this.productService.getProduct().subscribe((data) => {
            this.product_list = data;
            this.product_list.forEach((element: any) => {
                Object.assign(element, { quantity: 1, total: element.price });
            });
        });
    }

    ngOnDestroy(): void {}

    public addToCart(product: any) {
        this.cartService.AddToCart(product);
    }

    public incrementQuantity(product: any) {
        if (product.quantity < 10) {
            product.quantity += 1;
        }
    }

    public decrementQuantity(product: any) {
        if (product.quantity > 0) {
            product.quantity += -1;
        }
    }
}
