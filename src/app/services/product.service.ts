import { Injectable } from '@angular/core';
import { Product } from '../Core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList : Product[]= [
      
    {id: '1', title: 'T-shirt 1', price: 18, quantity: 0, like: 0, picture : 'https://img.freepik.com/psd-gratuit/devant-t-shirt-noir-isole_125540-1167.jpg?w=2000'},
    {id: '2', title: 'T-shirt 2', price: 21, quantity: 10, like: 0, picture : 'https://static.bershka.net/4/photos2/2022/I/0/2/p/2698/987/800/2698987800_2_4_3.jpg?t=1661153423543'},
    {id: '3', title: 'T-shirt 3', price: 16, quantity: 8, like: 0, picture : 'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg'},
  ]
  constructor() { }


  addproduct(product : Product){

    this.productsList.push(product)
  }
}
