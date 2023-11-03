import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private userId = localStorage.getItem('id_user')!

  private LISTAR_COMUNIDADES = 'http://localhost:8003/api/v1/community/belong'
  constructor(private http: HttpClient) { }

   ListarMisComunidades(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.get<any>(this.LISTAR_COMUNIDADES, httpHeaders);
  }
}
