import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private userId = localStorage.getItem('id_user')!

  private ABANDONAR_COMUNIDAD = 'http://localhost:8003/api/v1/community/leave/'
  private LISTAR_UNA_COMUNIDAD = 'http://localhost:8003/api/v1/community/'
  private UNIRSE_COMUNIDAD = 'http://localhost:8003/api/v1/community/join/'
  private LISTAR_COMUNIDADES = 'http://localhost:8003/api/v1/community/all'
  private LISTAR_MIS_COMUNIDADES = 'http://localhost:8003/api/v1/community/belong'
  private LISTAR_COMUNIDADES_OWNER = 'http://localhost:8003/api/v1/community/own'
  private CREAR_COMUNIDAD = 'http://localhost:8003/api/v1/community/'
  private BUSCAR_COMUNIDAD = 'http://localhost:8003/api/v1/community/search/'

  constructor(private http: HttpClient) { }

  

   ListarComunidadesOwn(idDelUsuario: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : idDelUsuario
      })
    };
    
    return this.http.get<any>(this.LISTAR_COMUNIDADES_OWNER, httpHeaders);
  }

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

   BuscarComunidad(nombre: string){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.get<any>(this.BUSCAR_COMUNIDAD + nombre, httpHeaders);
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
  
  CrearComunidad(data: any){

    const fd = new FormData()
    
    Object.keys(data).forEach((key)=>{
      if (data[key] !== undefined && data[key] !== null && data[key] !== ''){
        fd.append(key, data[key])
      }
    })

    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.post<any>(this.CREAR_COMUNIDAD, fd, httpHeaders);
  }

  SalirDeComunidad(idComunidad: number | string){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.delete<any>(this.ABANDONAR_COMUNIDAD + idComunidad, httpHeaders);
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
