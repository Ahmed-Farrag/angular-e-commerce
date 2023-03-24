import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private service: CartService) {

  }
  carts: any[] = []
  ngOnInit(): void {
    this.getAllCart()
  }
  getAllCart() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res
    })
  }




}
