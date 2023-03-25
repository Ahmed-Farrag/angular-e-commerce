import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(`${environment.baseApi}products`)
  }
  getAllCategory() {
    return this.http.get(`${environment.baseApi}products/categories`)
  }
  getProductsByCategory(key: string) {
    return this.http.get(`${environment.baseApi}products/category/${key}`)
  }

  getProductById(id: any) {
    return this.http.get(`${environment.baseApi}products/${id}`)
  }
}
