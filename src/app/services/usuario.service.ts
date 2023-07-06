import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // private userUrl = 'https://jsonplaceholder.typicode.com/posts'
  private registerUserUrl = 'http://localhost:8000/api/v1/oauth/register'

  private loginUserUrl = 'http://localhost:8000/oauth/token'

  constructor(private http: HttpClient) { }
  
  // addData(data: any){
  //   return this.http.post<any>(this.userUrl, data)
  // }

  registerUser(data: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.registerUserUrl, data, httpHeaders);
  }

  loginUser(bodyData: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(this.loginUserUrl, bodyData, httpHeaders);
  }

  verifyUser(){

  }

  // getUser(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 
  //       'Content-Type': 'application/json',
  //       'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
  //     })
  //   };

  //   return this.http.get(this.userUrl, httpOptions);
  // }
  
}
