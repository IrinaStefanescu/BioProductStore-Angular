import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { ContactModel } from "../models/Contact.model";

@Injectable()
export class ApiService{

constructor(private http : HttpClient){}

private setHeaders(): HttpHeaders {
  const headersConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  return new HttpHeaders(headersConfig);
}

baseUrl = 'https://localhost:44397';

sendForm(form : ContactModel) : Observable<any>{
  return this.http.post(this.baseUrl + 'admin/sendAdminContactEmail', {headers: this.setHeaders});
}

}
