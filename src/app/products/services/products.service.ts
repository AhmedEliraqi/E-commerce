import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private htpp:HttpClient) { }
  
  getAllProducts() {
    return this.htpp.get(environment.baseApi + 'products')
  }

  getAllCategories() {
    return this.htpp.get(environment.baseApi + 'products/categories')
  }

  getProductsByCategory(keyword:string) {
    return this.htpp.get(environment.baseApi + 'products/category/' +keyword)
  }

  getProductById(id:any) {
    return this.htpp.get(environment.baseApi + 'products/'+id)
  }
}
