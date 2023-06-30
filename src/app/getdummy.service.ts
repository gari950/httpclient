import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Userdata} from "./userdata";


@Injectable({
  providedIn: 'root'
})
export class GetdummyService {
  url:string = "https://reqres.in/api/users/2";
  url2:string = "http://localhost:8090/api/0.1/getdummyuser";
  constructor(private httpClient: HttpClient) { }

getData(){
  return this.httpClient.get<Userdata>(this.url);
}
getUserdata(){
    return this.httpClient.get<Userdata>(this.url2);
}

}
