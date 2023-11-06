import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private userId = localStorage.getItem('id_user')!
  private listarPost = `http://localhost:8001/api/v2/post/${this.userId}`
  private listarFeed = `http://localhost:8001/api/v2/post`
  private crearPost = `http://localhost:8001/api/v2/post`
  private likePost = `http://localhost:8001/api/v2/post/like/`
  private reportPost = `http://localhost:8001/api/v2/post/report/`

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
        'id_usuario' : this.userId,
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
  
  DeleteLike(body: any){    
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
  
    return this.http.delete<any>(this.likePost + body, httpHeaders)
    .pipe(
      catchError(this.handleError)
    )
  }
  

  ReportPost(body: any){    
    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"),
        'id_usuario' : this.userId
      })
    };
  
    return this.http.post<any>(this.reportPost + body, body, httpHeaders)
    .pipe(
      catchError(this.handleError)
    )
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
    .pipe(
      catchError(this.handleError)
    )
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    return throwError(()=> error);
  };

  createPost(body: any){
    
    const fd = new FormData()

    Object.keys(body).forEach((key)=>{
      if (body[key] !== undefined && body[key] !== null && body[key] !== ''){
        fd.append(key, body[key])
      }
    })

    const httpHeaders = {
      headers: new HttpHeaders({ 
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken"), 
        'id_usuario' : this.userId
      })
      
    };

    return this.http.post<any>(this.crearPost, fd, httpHeaders)
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    console.log(error)
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 401: {
            return `Ya le diste like: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
  }
}
