import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/product';
import { ProductConsumerService } from '../services/product-consumer.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product !: Product
  email ! : string
  editProduct = new FormGroup({
    id: new FormControl('') ,
    title :new FormControl(''), 
    quantity :new FormControl(''), 
    price: new FormControl(''), 
    like: new FormControl(''), 
    picture: new FormControl('') 
  })
  constructor(private productconsumer : ProductConsumerService) { }

  ngOnInit(): void {
  }

  Update(product : Product ){
    this.productconsumer.updateProduct(product).subscribe({
      next : ()=>console.log("modified"),
      error : (error)=>console.log(error),
      complete : ()=>console.log("finished")
    })
  }
}
