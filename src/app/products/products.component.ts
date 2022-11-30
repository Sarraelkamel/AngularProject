import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[]=[];
  nbp ! :number
  constructor(private _productService : ProductService , private _calcul : CalculService) { }

  ngOnInit(): void {
   this.products = this._productService.productsList;
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
