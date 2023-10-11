import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    public getProduct(): Observable<any> {
        return this.http.get<any>('https://fakestoreapi.com/products').pipe(
            map((data) => {
                return data;
            })
        );
    }
    public getSingleProduct(id: any) {
        return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
    }
}
