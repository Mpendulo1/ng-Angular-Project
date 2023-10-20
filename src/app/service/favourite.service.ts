import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavouriteService {
    public product_sub = new BehaviorSubject<any[]>([]);
    public product_sub$ = this.product_sub.asObservable();

    private favourite_list: any = [];

    constructor() {
        this.fetchFavouriteProduct();
    }

    public save() {
        localStorage.setItem('favourite', JSON.stringify(this.favourite_list));
    }

    public addToFavourite(item: any) {
        this.favourite_list.push(item);
        this.save();
        this.product_sub.next(this.favourite_list);
    }

    public fetchFavouriteProduct() {
        const data = JSON.parse(localStorage.getItem('favourite') ?? '[]');
        const retrieved_data = data.map((product: any) => {
            return product;
        });
        this.favourite_list = retrieved_data;
        this.product_sub.next(this.favourite_list);
    }

    public removeFavourite(index: any) {
        this.favourite_list.length > index;
        this.favourite_list.splice(index, 1);
        this.product_sub.next(this.favourite_list);
        this.save();
    }
}
