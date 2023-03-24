import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []
  total: any = 0
  constructor() {

  }
  ngOnInit(): void {
    this.getCartProducts()
  }
  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  minsAmount(index: number) {
    this.cartProducts[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  getCartTotal() {
    this.total = 0
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price = this.cartProducts[x].quantity
    }
  }



}
