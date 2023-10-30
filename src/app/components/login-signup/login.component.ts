import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../service/favourite.service';

@Component({
    selector: 'app-login',
    templateUrl: './login-signup.component.html',
    styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
    public favourite_items: any;

    constructor(private favouriteS: FavoriteService) {}

    ngOnInit(): void {
        this.favouriteS.product_sub$.subscribe((data) => {
            this.favourite_items = data;
        });
    }

    public dislikeItem(index: any) {
        this.favouriteS.removeFavorite(index);
    }
}
