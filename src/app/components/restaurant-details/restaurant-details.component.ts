import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductService } from '../../service/product.service';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-restaurant-details',
    templateUrl: './restaurant-details.component.html',
    styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
    public id: any;
    public product_details: any;
    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private route: ActivatedRoute,
        private authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.id = params.get('id');
        });
        this.productService.getSingleProduct(this.id).subscribe((data) => {
            this.product_details = data;
            console.log(data);
        });
    }

    public loogedIn(): string | null {
        return this.authService.loggedIn();
    }
    public addToCart(product: any) {
        this.cartService.AddToCart(product);
    }
}
