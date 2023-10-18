import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private registerUserUrl = 'http://localhost:8000/api/v2/user'
  private getProfile_URL = 'http://localhost:8000/api/v2/user/'

  constructor(private http: HttpClient) { }
  
  registerUser(data: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.registerUserUrl, data, httpHeaders);
  }

  getUser(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario': localStorage.getItem('id_user') || ''
      })
    };


    return this.http.get(this.getProfile_URL, httpOptions);
  }
}
