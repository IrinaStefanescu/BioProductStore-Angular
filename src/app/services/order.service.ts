import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { RegisterCategoryDTO } from "../models/Category.model";
import { RegisterOrderDTO } from "../models/Order.model";

@Injectable()
export class OrderService{

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
createOrder() : Observable<RegisterOrderDTO> {
  return this.http.get<RegisterOrderDTO>('https://localhost:44397/api/Order/create', {headers:this.setHeaders()});
}

//GET BY ID
getOrder(id: string) : Observable<RegisterOrderDTO> {
  return this.http.get<RegisterOrderDTO>('https://localhost:44397/byId' + id, {headers:this.setHeaders()});
}

//GET ALL
getAllOrders() : Observable<RegisterOrderDTO[]> {
  return this.http.get<RegisterOrderDTO[]>('https://localhost:44397/allOrders', {headers:this.setHeaders()});
}

//UPDATE
updateOrder(id: string) : Observable<RegisterOrderDTO[]> {
  return this.http.get<RegisterOrderDTO[]>('https://localhost:44397/api/Order/update' + id, {headers:this.setHeaders()});
}

//DELETE
deleteOrder(id: string) : Observable<RegisterOrderDTO[]> {
  return this.http.get<RegisterOrderDTO[]>('https://localhost:44397/api/Order/update' + id, {headers:this.setHeaders()});
}

}
