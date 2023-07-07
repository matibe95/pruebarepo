import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // private userId = localStorage.getItem('userId')
  private userId = 1
  private listarPost = `http://localhost:8001/api/v1/post/${this.userId}`

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
}
