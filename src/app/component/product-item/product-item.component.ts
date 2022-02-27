import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/products';
import { CartService } from '../../service/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from '../model/model.component';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  quantity: string = '1';
  @Input() product: Product = {
    id: 1,
    name: '',
    description: '',
    url: '',
    price: 0,
  };
  constructor(
    private cartService: CartService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}
  addToCart(): void {
    this.cartService.addToCart(this.product, Number(this.quantity));
    this.open();
  }
  open() {
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.title = 'Alert';
    modalRef.componentInstance.message = `${
      Number(this.quantity) > 1
        ? this.quantity + ' items'
        : this.quantity + ' item'
    }   of product ${this.product.name} added to the cart `;
  }
}
