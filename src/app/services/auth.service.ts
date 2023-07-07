import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://localhost:8000/oauth/token";
  private logoutUrl = "http://localhost:8000/v1/logout";

  constructor(private http: HttpClient) { }

  sendLogin(credentials: any){
    const body = {
      grant_type: "password",
      client_id: "2",
      client_secret: "3j1iDCgDls0kUCFXMNamw1GyEf7o2mVmg6iAsF9D",
      username: credentials.email,
      password: credentials.password
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(this.loginUrl, body, httpOptions)
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