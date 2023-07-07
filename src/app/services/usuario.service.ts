import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private registerUserUrl = 'http://localhost:8000/api/v1/oauth/register'
  private getUserUrl = 'http://localhost:8000/api/v1/user/'


  constructor(private http: HttpClient) { }
  
  registerUser(data: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.registerUserUrl, data, httpHeaders);
  }

  getUser(userId: any){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    const getUserUrl = this.getUserUrl + userId  

    return this.http.get(getUserUrl, httpOptions);
  }
}
