import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  selectedProduct: any[] = [];
  totalPrice: number = 0;
  discountedPrice: number = 0;
  subscription$: Subscription = new Subscription();
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getCartProductDetails();
  }
  getCartProductDetails() {
    this.subscription$.add(
      this.productService.getCartProductDetails().subscribe({
        next: (res) => {
          this.selectedProduct = JSON.parse(res?.Data);
          console.log(this.selectedProduct);
          this.calculatePrices();
        },
        error: (err) => console.error('Error fetching cart details:', err),
      })
    );
  }
  calculatePrices() {
    this.totalPrice = 0;
    this.discountedPrice = 0;
    if (this.selectedProduct?.length > 0) {
      this.selectedProduct.forEach((product) => {
        this.totalPrice += (+product?.MRP * product?.QTY);
        this.discountedPrice += (+product.RATE * product?.QTY);
      });
    }
  }
  updateCartDetails() {
    this.getCartProductDetails();
  }
  clearCart() {
    this.subscription$.add(
      this.productService.clearCart().subscribe({
        next: () => {
          this.selectedProduct = [];
          this.calculatePrices();
        },
        error: (err) => console.error('Error clearing cart:', err),
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
