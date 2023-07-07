import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private userId = localStorage.getItem('id_user') || 1
  private listarPost = `http://localhost:8001/api/v1/post/${this.userId}`
  private crearPost = `http://localhost:8001/api/v1/post`

  constructor(private http: HttpClient) { }
  
  listarPosts(){
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get<any>(this.listarPost, httpHeaders);
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
