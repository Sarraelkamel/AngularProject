import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Product } from '../Core/product';
import { ProductConsumerService } from '../services/product-consumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product !: Product
  email ! : string
  constructor(private _productService : ProductService, private router: Router ,private consumerproduct : ProductConsumerService) { }

  ngOnInit(): void {

    this.product = new Product()
  }

  
  ajouter(){
    //this._productService.addproduct(this.product)
    this.consumerproduct.addProduct(this.product).subscribe({
      next : ()=>this.router.navigateByUrl('/products'),
      error : (error)=>console.log(error),
      complete : ()=>console.log("finished")
    })
    
    console.log(this.product)
  }

  

}
