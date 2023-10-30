import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavoriteService {
    public product_sub = new BehaviorSubject<any[]>([]);
    public product_sub$ = this.product_sub.asObservable();

    private favorite_list: any = [];

    constructor() {
        this.fetchFavoriteProduct();
    }

    public save() {
        localStorage.setItem('favourite', JSON.stringify(this.favorite_list));
    }

    public fetchFavoriteProduct() {
        const data = JSON.parse(localStorage.getItem('favourite') ?? '[]');
        const retrieved_data = data.map((product: any) => {
            return product;
        });
        this.favorite_list = retrieved_data;
        this.product_sub.next(this.favorite_list);
    }

    public removeFavorite(index: any) {
        this.favorite_list.length > index;
        this.favorite_list.splice(index, 1);
        this.product_sub.next(this.favorite_list);
        this.save();
    }

    public reactToProduct(product: any) {
        const value = this.favorite_list.find((item: any) => {
            return item.id === product.id;
        });
        if (value) {
            this.favorite_list.splice(product);
            this.save();
            this.product_sub.next(this.favorite_list);
        } else {
            this.favorite_list.push(product);
            this.product_sub.next(this.favorite_list);
            this.save();
        }
    }
}
