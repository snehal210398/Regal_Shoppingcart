import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('http://shopping.regalbazar.com/Api/Api/getProductList?PROD_ID=0&CAT_ID=0&SUB_CAT_ID=0&FROM=0&TO=1000&APIKEY=AKJBBFSD5588R41SDF');
  }

  removeProduct(removedproduct: any) {
    const formData: FormData = new FormData();
    formData.append('ECODE', "101");
    formData.append('PROD_ID', removedproduct?.PROD_ID);
    formData.append('APIKEY', "AKJBBFSD5588R41SDF");
    return this.http.post(`http://shopping.regalbazar.com/statistics/deleteFromCart`, formData);
  }

  addToCart(req: any){
    return this.http.post("http://shopping.regalbazar.com/statistics/addToCart", req);
  }

  clearCart(): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('ECODE', "101");
    formData.append('APIKEY', "AKJBBFSD5588R41SDF");
    return this.http.post(`http://shopping.regalbazar.com/statistics/clearCart`, formData);
  }

  getCartProductDetails(): Observable<any> {
    return this.http.get("http://shopping.regalbazar.com/Api/Api/getCartProductList?ECODE=101&APIKEY=AKJBBFSD5588R41SDF");
  }
}
