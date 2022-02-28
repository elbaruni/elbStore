import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CartProduct } from 'src/app/models/cartProduct';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from '../model/model.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  removeFromCart(cartProduct: CartProduct): void {
    this.cartService.removeProductFromCart(cartProduct);
    this.cart = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.title = 'Alert';
    modalRef.componentInstance.message = `${cartProduct.name} removed from the cart `;
  }
  updateCartItem(cartProduct: CartProduct, $event: any): void {
    const _quantity: number = cartProduct.quantity - $event;
    this.cartService.addToCart(cartProduct, _quantity);
    this.cart = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  checkoutSuccess(fullName: string): void {
    this.cartService.clearCart();
    this.router.navigateByUrl(`success/${fullName}/${this.totalPrice}`);
  }
}
