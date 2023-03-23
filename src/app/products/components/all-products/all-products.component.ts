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
  constructor(private service: ProductsService) {

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategory()
  }
  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
    }, error => {
      console.log(error.message);
    })
  }
  getCategory() {
    this.service.getAllCategory().subscribe((res: any) => {
      this.category = res
    }, error => {
      console.log(error.message);
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsCat(value);

  }
  getProductsCat(key: string) {
    this.service.getProductsByCategory(key).subscribe((res: any) => {
      this.products = res
    })
  }
}
