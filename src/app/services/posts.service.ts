import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private userId = localStorage.getItem('id_user') || 0
  private listarPost = `http://localhost:8001/api/v2/post/${this.userId}`
  private listarFeed = `http://localhost:8001/api/v2/post`
  private crearPost = `http://localhost:8001/api/v2/post`
  private likePost = `http://localhost:8001/api/v2/post/like/`

  constructor(private http: HttpClient) { }
  
  ListarUnPost(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };

    return this.http.get<any>(this.listarPost, httpHeaders);
  }
  
  ListarPostsUsuario(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.get<any>(this.listarFeed, httpHeaders);
  }

  ListarFeed(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
    
    return this.http.get<any>(this.listarFeed, httpHeaders);
  }
  
  LikePost(body: any){    
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
  
    return this.http.post<any>(this.likePost + body, body, httpHeaders)
  }

  createPost(body: any){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.post<any>(this.crearPost, body, httpHeaders)
  }
}
