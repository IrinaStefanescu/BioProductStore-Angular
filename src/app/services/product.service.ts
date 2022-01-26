import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { RegisterCategoryDTO } from "../models/Category.model";
import { RegisterProductDTO } from "../models/Product.model";

@Injectable()
export class ProductService{

constructor(private http : HttpClient){}

private setHeaders(): HttpHeaders {
  const headersConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  return new HttpHeaders(headersConfig);
}

baseUrl = 'https://localhost:44397';


//CREATE
createProduct() : Observable<RegisterProductDTO> {
  return this.http.get<RegisterProductDTO>('https://localhost:44397/api/Product/create', {headers:this.setHeaders()});
}

//GET BY ID
getProduct(id: string) : Observable<RegisterProductDTO> {
  return this.http.get<RegisterProductDTO>('https://localhost:44397/byId' + id, {headers:this.setHeaders()});
}

//GET ALL
getAllProducts() : Observable<RegisterProductDTO[]> {
  return this.http.get<RegisterProductDTO[]>('https://localhost:44397/allProducts', {headers:this.setHeaders()});
}

//UPDATE
updateProduct(id: string) : Observable<RegisterProductDTO[]> {
  return this.http.get<RegisterProductDTO[]>('https://localhost:44397/api/Product/update' + id, {headers:this.setHeaders()});
}

//DELETE
deleteProduct(id: string) : Observable<RegisterProductDTO[]> {
  return this.http.get<RegisterProductDTO[]>('https://localhost:44397/api/Product/update' + id, {headers:this.setHeaders()});
}

}
