import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET } from '../constants/clientCredentials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://localhost:8000/oauth/token";
  private logoutUrl = "http://localhost:8000/api/v1/logout";
  private verificarUserUrl = "http://localhost:8000/api/v1/oauth/verificar";

  constructor(private http: HttpClient) { }

  sendLogin(credentials: any){
    const body = {
      grant_type: "password",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      username: credentials.email,
      password: credentials.password
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(this.loginUrl, body, httpOptions)
  }

  verificarUsuario(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get(this.verificarUserUrl, httpOptions);
  }

  sendLogout(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get(this.logoutUrl, httpOptions);
  }
  
}