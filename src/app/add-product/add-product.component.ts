import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product !: Product
  email ! : string
  constructor(private _productService : ProductService, private router: Router) { }

  ngOnInit(): void {

    this.product = new Product()
  }

  ajouter(){
    this._productService.addproduct(this.product)
    this.router.navigateByUrl('/products')
    console.log(this.product)
  }

}
