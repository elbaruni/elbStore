import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { CartService } from '../../service/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from '../model/model.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  quantity: string = '1';
  product: Product = {
    id: 1,
    name: '',
    description: '',
    url: '',
    price: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private modalService: NgbModal
  ) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.productsService.getProducts().subscribe((data) => {
        this.product = data.filter((product) => product.id === this.id)[0];
      });
    });
  }
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
