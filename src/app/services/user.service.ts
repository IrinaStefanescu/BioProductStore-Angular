import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { RegisterCategoryDTO } from "../models/Category.model";
import { RegisterUserDTO } from "../models/User.model";

@Injectable()
export class UserService{

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
createUser() : Observable<RegisterUserDTO> {
  return this.http.get<RegisterUserDTO>('https://localhost:44397/api/User/create', {headers:this.setHeaders()});
}

//GET BY ID
getUser(id: string) : Observable<RegisterUserDTO> {
  return this.http.get<RegisterUserDTO>('https://localhost:44397/byId' + id, {headers:this.setHeaders()});
}

//GET ALL
getAllUsers() : Observable<RegisterUserDTO[]> {
  return this.http.get<RegisterUserDTO[]>('https://localhost:44397/allUsers', {headers:this.setHeaders()});
}

//UPDATE
updateUser(id: string) : Observable<RegisterUserDTO[]> {
  return this.http.get<RegisterUserDTO[]>('https://localhost:44397/api/User/update' + id, {headers:this.setHeaders()});
}

//DELETE
deleteUser(id: string) : Observable<RegisterUserDTO[]> {
  return this.http.get<RegisterUserDTO[]>('https://localhost:44397/api/User/update' + id, {headers:this.setHeaders()});
}

}
