import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnDestroy {

  @Input() product:any;
  @Output() emitAction: EventEmitter<any> = new EventEmitter();
  subscription$: Subscription = new Subscription();

  constructor(private productService: ProductsService){}
  ngOnInit(): void {}

  removeProduct(){
    this.subscription$.add(
    this.productService.removeProduct(this.product).subscribe({
      next: (res)=>{
        this.emitAction.emit();
      },
      error: (err)=>{
        console.log(err);
      }
    })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
