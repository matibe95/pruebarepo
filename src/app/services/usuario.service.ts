import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private modifyUserUrl = 'http://localhost:8000/api/v2/user'
  private registerUserUrl = 'http://localhost:8000/api/v2/user'
  private getProfile_URL = 'http://localhost:8000/api/v2/user/'
  private idUsuario = localStorage.getItem('id_user')!

  constructor(private http: HttpClient) { }
  
  registerUser(data: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.registerUserUrl, data, httpHeaders);
  }

  modifyUser(data:any){
    const fd = new FormData()
    
    fd.append('_method', 'PUT');
    Object.keys(data).forEach((key)=>{
      if (data[key] !== undefined && data[key] !== null && data[key] !== ''){
        fd.append(key, data[key])
      }
    })

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario': this.idUsuario
      })
    };
    return this.http.post<any>(this.modifyUserUrl, fd, httpOptions);
  }

  getUser(idUser: any){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario': idUser
      })
    };


    return this.http.get(this.getProfile_URL, httpOptions);
  }
}
