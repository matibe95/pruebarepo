import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private userId = localStorage.getItem('id_user')!
  private listarUrl = `http://localhost:8001/api/v1/event/${this.userId}`
  private crearUrl = `http://localhost:8002/api/v1/event`

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

  createEvent(data: any){

    const fd = new FormData()
    
    Object.keys(data).forEach((key)=>{
      if (data[key] !== undefined && data[key] !== null && data[key] !== ''){
        fd.append(key, data[key])
      }
    })

    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario': this.userId,
      })
    };

    return this.http.post<any>(this.crearUrl, fd, httpHeaders)
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