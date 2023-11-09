import { Component, Input } from '@angular/core';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';

@Component({
  selector: 'app-post-user-card',
  templateUrl: './post-user-card.component.html',
  styleUrls: ['./post-user-card.component.css']
})
export class PostUserCardComponent {
  @Input() like!: any

  imageUrl = ''

  ngOnInit(){
    console.log(this.like)
    this.imageUrl = IMAGES_URL.user + this.like.user[0].user_info.foto_perfil
  }
}
