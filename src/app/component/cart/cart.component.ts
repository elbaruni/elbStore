import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CartProduct } from 'src/app/models/cartProduct';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = [];
  totalPrice: number = 0;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  removeFromCart(cartProduct: CartProduct): void {
    this.cartService.removeProductFromCart(cartProduct);
    this.cart = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  updateCartItem(cartProduct: CartProduct, $event: any): void {
    const _quantity: number = cartProduct.quantity - $event;
    this.cartService.addToCart(cartProduct, _quantity);
    this.cart = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  checkoutSuccess(): void {
    this.cartService.clearCart();
    this.router.navigateByUrl(`success/${this.fullName}/${this.totalPrice}`);
  }
}
