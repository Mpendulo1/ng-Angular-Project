import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from '../../service/cart.service';
import { AuthService } from '../../service/auth.service';
import { ProductService } from '../../service/product.service';
import { FavoriteService } from '../../service/favourite.service';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit, OnDestroy {
    private product_sub!: Subscription;

    public isActive: boolean = false;
    public product_list: any;
    public item_count!: number;

    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private authService: AuthService,
        private favoriteS: FavoriteService
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

    public loggedIn(): string | null {
        return this.authService.loggedIn();
    }

    public favorite(product: any) {
        this.favoriteS.reactToProduct(product);
        this.isActive = !this.isActive;
        let active = this.product_list.map((item: any) => {
            return item.id === product.id;
        });

        console.log(active);
    }
}
