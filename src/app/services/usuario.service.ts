import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {  }
  
  http = inject(HttpClient)
  userUrl = 'https://jsonplaceholder.typicode.com/posts'

  // addUser(user: User): Observable<User>{
  //   return this.http.post<User>(this.userUrl, user)
  // }

  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  addData(data: any): Observable<any>{
    return this.http.post<any>(this.userUrl, data)
  }

  getUser(): Observable<any>{
    return this.http.get<any>(this.userUrl)
  }
}
