import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  title = "hi ahmed"
  products: any = []
  category: any = []
  loading: boolean = false
  cartProducts: any[] = []
  constructor(private service: ProductsService) {

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategory()
  }
  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.loading = false
    }, error => {
      this.loading = false
      console.log(error.message);
    })
  }
  getCategory() {
    this.loading = true
    this.service.getAllCategory().subscribe((res: any) => {
      this.category = res
      this.loading = false
    }, error => {
      this.loading = false
      console.log(error.message);
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsCat(value);
  }

  getProductsCat(key: string) {
    this.loading = true
    this.service.getProductsByCategory(key).subscribe((res: any) => {
      this.products = res
      this.loading = false
    })
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.id == event.id)
      if (exist) {
        alert("product is already in ur cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }


}
