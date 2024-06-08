import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent {
  products: product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = JSON.parse(data.Data);
      console.log(this.products);
      
    });
  }
}
