import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { RegisterCategoryDTO } from "../models/Category.model";

@Injectable()
export class CategoryService{

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
createCategory() : Observable<RegisterCategoryDTO> {
  return this.http.get<RegisterCategoryDTO>('https://localhost:44397/api/Category/create', {headers:this.setHeaders()});
}

//GET BY ID
getCategory(id: string) : Observable<RegisterCategoryDTO> {
  return this.http.get<RegisterCategoryDTO>('https://localhost:44397/byId' + id, {headers:this.setHeaders()});
}

//GET ALL
getAllCategories() : Observable<RegisterCategoryDTO[]> {
  return this.http.get<RegisterCategoryDTO[]>('https://localhost:44397/allCategories', {headers:this.setHeaders()});
}

//UPDATE
updateCategory(id: string) : Observable<RegisterCategoryDTO[]> {
  return this.http.get<RegisterCategoryDTO[]>('https://localhost:44397/api/Category/update' + id, {headers:this.setHeaders()});
}

//DELETE
deleteCategory(id: string) : Observable<RegisterCategoryDTO[]> {
  return this.http.get<RegisterCategoryDTO[]>('https://localhost:44397/api/Category/update' + id, {headers:this.setHeaders()});
}

}
