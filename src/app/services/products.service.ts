import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as http from "http";
import {environment} from "../../environments/environment";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private host : string = environment.host;

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.host + "/products");
  }

  getSelectedProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.host + "/products?selected=true");
  }

  getAvailableProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.host + "/products?available=true");
  }

  searchProducts(keyword : string) : Observable<Product[]>{
    return this.http.get<Product[]>(this.host + "/products?name_like=" + keyword);
  }

  selectOneProduct(product : Product) : Observable<Product>{
    product.selected =! product.selected;
    return this.http.put<Product>(this.host + "/products/" + product.id , product );
  }

  deleteOneProduct(product : Product) : Observable<void>{
    return this.http.delete<void>(this.host + "/products/" + product.id);
  }

  saveOneProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>(this.host + "/products", product);
  }

  updateProduct(product : Product) : Observable<Product>{
    return this.http.put<Product>(this.host + "/products/"+ product.id , product);
  }

  getOneProduct(id : number) : Observable<Product>{
    return this.http.get<Product>(this.host + "/products/" + id);
  }

}
