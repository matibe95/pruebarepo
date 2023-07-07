import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private userUrl = 'https://jsonplaceholder.typicode.com/posts'
  // private apiUrl = "http://localhost:8001/api/v1/empanada";

  constructor(private http: HttpClient) { }
  
  addData(data: any){
    return this.http.post<any>(this.userUrl, data)
  }

  getUser(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get(this.userUrl, httpOptions);
  }
  
}
