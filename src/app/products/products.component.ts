import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/product';
import { CalculService } from '../services/calcul.service';
import { ProductConsumerService } from '../services/product-consumer.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[]=[];
  nbp ! :number
  constructor(private _productService : ProductService , private _calcul : CalculService, private productconsumer : ProductConsumerService) { }

  ngOnInit(): void {
   //this.products = this._productService.productsList;
   this.productconsumer.getProducts().subscribe({
    next : (data)=>this.products=data,//code 200 ok ou 204
    error : (error)=>console.log(error),// code 500 ou 404
    complete:()=>console.log("finished")//fel les cas lkol texecuti
   }) //insc observable
  }

  Delete(id : string){
    this.productconsumer.deleteProduct(id).subscribe({
      next : ()=>console.log("deleted"),
      error : (error)=>console.log(error),
      complete : ()=>console.log("finished")
    })
    window.location.reload()
  }

  
  
  Buy(id : string){
   // this.products.map((product)=>{
     // if(product.id.match(id)){
       // product.quantity --;
      //}
    //})
    this.products.map((product)=>product.id.match(id)&&product.quantity --)
  }

  Like(id : string){
    this.products.map((product)=>product.id.match(id)&&product.like++)
  }

  Calculer(){

    this.nbp = this._calcul.getNumberOf(this.products , "quantity", 0)
  }

}
