import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { CartProduct } from '../models/cartProduct';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartProduct[] = [];
  browserStorage = window.localStorage;

  constructor(private http: HttpClient) {
    const getCart = this.browserStorage.getItem('cart');
    this.cart = getCart ? JSON.parse(getCart) : [];
  }

  addToCart(product: Product, quantity: number): void {
    let cartProduct: CartProduct | undefined = this.cart.find(
      (p) => p.id == product.id
    );
    if (cartProduct) {
      cartProduct.quantity += quantity;
    } else {
      const newCartItem: CartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        url: product.url,
        description: product.description,
        quantity: quantity,
      };
      this.cart.push(newCartItem);
    }

    this.browserStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getCartProducts(): CartProduct[] | [] {
    //const getProducts = this.browserStorage.getItem('cart');
    return this.cart;
  }
  removeProductFromCart(item: CartProduct): void {
    this.cart = this.cart.filter((product) => {
      return product.id !== item.id;
    });

    this.browserStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getTotalCount(): number {
    let totalPriceInCart: number = 0;
    const cartProducts = this.cart;
    for (let index = 0; index < cartProducts.length; index++) {
      const cartProduct: CartProduct = cartProducts[index];
      totalPriceInCart += cartProduct.quantity;
    }
    return totalPriceInCart;
  }
  getTotalPrice(): number {
    let totalCountInCart: number = 0;
    const cartProducts = this.cart;
    for (let index = 0; index < cartProducts.length; index++) {
      const cartProduct: CartProduct = cartProducts[index];
      totalCountInCart += cartProduct.quantity * cartProduct.price;
    }
    return Number(totalCountInCart.toFixed(2));
  }
  clearCart(): void {
    this.browserStorage.clear();
    this.cart = [];
  }
}
