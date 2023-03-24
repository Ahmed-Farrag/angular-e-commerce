import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class ProductsModule { }
