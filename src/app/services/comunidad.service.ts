import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private userId = localStorage.getItem('id_user')!

  private LISTAR_UNA_COMUNIDAD = 'http://localhost:8003/api/v1/community/'
  private UNIRSE_COMUNIDAD = 'http://localhost:8003/api/v1/community/join/'
  private LISTAR_COMUNIDADES = 'http://localhost:8003/api/v1/community/all'
  private LISTAR_MIS_COMUNIDADES = 'http://localhost:8003/api/v1/community/belong'
  constructor(private http: HttpClient) { }

   ListarMisComunidades(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.get<any>(this.LISTAR_MIS_COMUNIDADES, httpHeaders);
  }

  UnirseAComunidad(idComunidad: number | string){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.post<any>(this.UNIRSE_COMUNIDAD + idComunidad, '', httpHeaders);
  }

  ListarComunidad(idComunidad: number | string){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.get<any>(this.LISTAR_UNA_COMUNIDAD + idComunidad, httpHeaders);
  }

  ListarTodasLasComunidades(){
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
