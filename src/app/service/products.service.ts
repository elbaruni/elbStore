import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  products: Product[] = [];
  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>('assets/data.json').subscribe((data) => {
      this.products = data;
    });
    return this.http.get<Product[]>('assets/data.json');
  }
  getProductById(id: number): Product {
    return this.products.filter((product) => product.id === id)[0];
  }
}
