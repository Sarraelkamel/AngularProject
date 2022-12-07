import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductConsumerService {

  apiUrl:string = "http://localhost:3000/products"
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.apiUrl)
  }
  getProductById(id:number){
    return this.http.get<Product>(this.apiUrl+"/"+id)
  }
  addProduct(product : Product){
    return this.http.post(this.apiUrl,product)
  }
  updateProduct(product: Product){
    return this.http.put(this.apiUrl+"/"+product.id,product)
  }
  deleteProduct(id:string){
    return this.http.delete(this.apiUrl+"/"+id)
  }
  
  
  //observable y93d yestena lin ykml 5ater js asynchrone 
  // observeble y9sm ken error chy3ml ken success chy3ml 
  //w ken backend kml yb3th notification lel client
  //myb3th lresultat ken mt3ml inscription
}
