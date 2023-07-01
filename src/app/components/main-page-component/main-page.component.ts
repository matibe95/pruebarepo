import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  postsList: Post[] = [
    {
      id: 1,
      profileFrom: 'el_caehom',
      content: "",
      description: 'hoy fue un dia de mierda la verdad glu glu golden boy in the aii...',
      likesCount: 22.6,
      commentsCount: 22.6,
      location: 'Singapur, El alfa.',
      createdAt: '1 hora'
    },
    {
      id: 1,
      profileFrom: 'el_caehom',
      content: "",
      description: 'hoy fue un dia de mierda la verdad glu glu golden boy in the aii...',
      location: 'Singapur, El alfa.',
      createdAt: '1 hora'
    },
    {
      id: 1,
      profileFrom: 'el_caehom',
      content: "",
      description: 'hoy fue un dia de mierda la verdad glu glu golden boy in the aii...',
      likesCount: 22.6,
      commentsCount: 22.6,
      location: 'Singapur, El alfa.',
      createdAt: '1 hora'
    },
    {
      id: 1,
      profileFrom: 'el_caehom',
      content: "",
      description: 'hoy fue un dia de mierda la verdad glu glu golden boy in the aii...',
      likesCount: 22.6,
      commentsCount: 22.6,
      location: 'Singapur, El alfa.',
      createdAt: '1 hora'
    },
  ]
}
