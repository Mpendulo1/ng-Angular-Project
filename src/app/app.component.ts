import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { ProductService } from './service/product.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

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
        private authService: AuthService,
        private router: Router
    ) {}
    public ngOnInit(): void {
        this.cartService.getProducts().subscribe((data) => {
            this.total_items = data.length;
        });

        this.loogedIn();
    }

    public logout() {
        this.authService.logout();
        // this.router.navigate(['/login']);
    }

    public loogedIn(): string | null {
        return this.authService.loggedIn();
    }
}
