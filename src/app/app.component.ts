import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { ProductService } from './service/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'DuplicateTemplate';
    public total_items = 0;
    constructor(
        private cartService: CartService,
        private productService: ProductService
    ) {}
    ngOnInit(): void {
        this.cartService.getProducts().subscribe((data) => {
            this.total_items = data.length;
        });
    }
}
