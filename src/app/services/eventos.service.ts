import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private userId = localStorage.getItem('id_user')
  private listarUrl = `http://localhost:8001/api/v1/post/${this.userId}`
  private crearUrl = `http://localhost:8001/api/v1/post`
  constructor(private http: HttpClient) { }

  listarEventos(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get<any>(this.listarUrl, httpHeaders);
  }
  createEvent(body: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.post<any>(this.crearUrl, body, httpHeaders)
  }
}

// const reglas = [
//   {
//     'reglas_nombre': 'Rule 1',
//     'reglas_descripcion': 'This is the description of Rule 1'
//   },
//   {
//     'reglas_nombre': 'Rule 1',
//     'reglas_descripcion': 'This is the description of Rule 1'
//   }
// ]