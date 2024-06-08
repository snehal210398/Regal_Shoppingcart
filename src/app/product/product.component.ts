import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: any;
  addedProduct:any = {};

  constructor(private productService: ProductsService) {}

  ngOnInit() {}
  addProduct(product: any) {
    const formData: FormData = new FormData();
    formData.append('ECODE', "101");
    formData.append('PROD_ID', product.PROD_ID);
    formData.append('APIKEY', "AKJBBFSD5588R41SDF");
    if(this.addedProduct[product.PROD_ID]){
      this.addedProduct[product.PROD_ID] = this.addedProduct[product.PROD_ID] + 1;
      formData.append('QTY', this.addedProduct[product.PROD_ID]);
    }else{
      this.addedProduct[product.PROD_ID] = 1;
      formData.append('QTY', this.addedProduct[product.PROD_ID]);
    }
    
    this.productService.addToCart(formData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
