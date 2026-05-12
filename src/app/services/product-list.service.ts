import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductList} from '../models/product-list.model'
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }
    getProducts() {
    return this.http.get<ProductList[]>(this.url);
  }

}
